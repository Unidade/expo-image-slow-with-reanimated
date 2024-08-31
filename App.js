import { useState } from "react"
import { Button, StyleSheet, Switch, Text, View } from "react-native"
import { GestureHandlerRootView } from "react-native-gesture-handler"
import { Card } from "./card"
import { CardWithExpo } from "./card-with-expo"

const CARDS = [
  { source: require("./assets/colors/1.png") },
  { source: require("./assets/colors/2.png") },
  { source: require("./assets/colors/3.png") },
  { source: require("./assets/colors/4.png") },
  { source: require("./assets/colors/5.png") },
  { source: require("./assets/colors/15.png") },
  { source: require("./assets/colors/16.png") },
  { source: require("./assets/colors/17.png") },
]

export default function App() {
  const [showExpoImage, setShowExpoImage] = useState(true)
  const [startAnimation, setStartAnimation] = useState(false)
  const [imageNumber, setImageNumber] = useState(1)

  const cards = CARDS.slice(0, imageNumber)
  const usingRN = !showExpoImage
  const decreaseBtnDisabled = imageNumber <= 1
  const increaseBtnDisabled = imageNumber >= CARDS.length

  const handleDecrease = () => {
    if (imageNumber > 1) {
      setImageNumber((prev) => prev - 1)
    }
  }
  const handleIncrease = () => {
    if (imageNumber < CARDS.length) {
      setImageNumber((prev) => prev + 1)
    }
  }

  const handlePress = () => {
    setStartAnimation(!startAnimation)
  }

  return (
    <GestureHandlerRootView style={styles.container}>
      <View
        style={{
          position: "absolute",
          top: 50,
          left: 10,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "baseline",
          gap: 20,
        }}
      >
        <View>
          <View
            style={{
              flexDirection: "row",
              gap: 10,
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text>Using Expo-Image</Text>
            <Switch
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={showExpoImage ? "#f5dd4b" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={setShowExpoImage}
              value={showExpoImage}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              gap: 10,
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text>Using RN Image</Text>
            <Switch
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={usingRN ? "#f5dd4b" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              value={usingRN}
              onValueChange={setShowExpoImage}
            />
          </View>
          <View>
            <Text style={{ fontWeight: 700 }}>
              Number of Images {cards.length}
            </Text>
            <View
              style={{
                justifyContent: "flex-end",
                alignItems: "flex-end",
                flexDirection: "row",
              }}
            >
              <Button
                disabled={decreaseBtnDisabled}
                title="➖"
                onPress={handleDecrease}
              />
              <Button
                disabled={increaseBtnDisabled}
                title="➕"
                onPress={handleIncrease}
              />
            </View>
          </View>
        </View>

        <Button
          title={startAnimation ? "Pause animation" : "Start animation"}
          color={startAnimation ? "red" : "blue"}
          onPress={handlePress}
        />
      </View>
      <View>
        {showExpoImage
          ? cards.map((card, index) => (
              <CardWithExpo
                runAnimation={startAnimation}
                key={index}
                index={index}
                source={card.source}
              />
            ))
          : cards.map((card, index) => (
              <Card
                runAnimation={startAnimation}
                key={index}
                index={index}
                source={card.source}
              />
            ))}
      </View>
    </GestureHandlerRootView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
})
