# Description

This repository reproduces the issue of high FPS drops when using Expo-Image

## Issue

The main issue appears to be related to high-resolution images and the lack of proper downscaling on Android. For more details, refer to the [GitHub issue](https://github.com/expo/expo/issues/21491#issuecomment-1460050106).

## Affected Versions

The issue is present in the latest version of SDK 51.

## Current Workaround

To mitigate this issue, you can:

- Downscale your images.
- Use React Native Image or React-Native-Fast-Image

## Repository Contents

This repository contains both high-resolution images PNG and JPEG resized images to test usage and observe the FPS drops and Memory Spikes.

## Additional Information

For further information and updates, please check the [GitHub issue](https://github.com/expo/expo/issues/21491#issuecomment-1460050106).
[[expo-image] When many image is rendered RAM usage goes over 2000mb and app crashes
](https://github.com/expo/expo/issues/26781)
