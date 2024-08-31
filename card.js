import { useEffect } from "react"
import { Dimensions, Image, StyleSheet, View } from "react-native"
import Animated, {
  cancelAnimation,
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withSequence,
  withTiming,
} from "react-native-reanimated"

const { width } = Dimensions.get("window")
const duration = 1200

export function Card({ source, index, runAnimation }) {
  const offsetX = useSharedValue(0)

  const startAnimation = () => {
    offsetX.value = withDelay(
      index * 300,
      withRepeat(
        withSequence(
          withTiming(-width / 2, { duration, easing: Easing.cubic }),
          withTiming(0, { duration, easing: Easing.cubic }),
          withTiming(width / 2, { duration, easing: Easing.cubic })
        ),
        -1,
        true
      )
    )
  }

  useEffect(() => {
    if (runAnimation) {
      startAnimation()
    } else {
      cancelAnimation(offsetX)
    }
  }, [runAnimation])

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ translateX: offsetX.value }],
  }))

  return (
    <Animated.View style={[styles.card, animatedStyles]}>
      <Image source={source} style={styles.image} />
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  card: {
    width: 120,
    height: 120,
    borderWidth: 1,
    borderColor: "black",
    ...StyleSheet.absoluteFillObject,
  },
  image: {
    width: 120,
    height: 120,
  },
})
