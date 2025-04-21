# React Native Shopping App with Redux

This project demonstrates a React Native application with navigation and Redux state management. The app features authentication flow and keyboard-aware views.

## Screenshots

![Shopping App Demo](https://github.com/dxtaner/Mobile-/raw/master/ReactNative/MyShoppingApp/MyShoppingApp.gif)

## Project Structure

### `Router.js`

The main navigation router that handles the app's navigation flow based on authentication state.

#### Features:

- Uses `@react-navigation/native` for navigation
- Integrates with Redux to check authentication state
- Displays either:
  - `Landing` component during authentication loading
  - `StackNavigator` with user session after loading

#### Dependencies:

- `react-redux` for state management
- `@react-navigation/native` for navigation

### `App.js`

The root component of the application that sets up the Redux store and provides global UI components.

#### Features:

- Wraps the app with Redux `Provider`
- Implements `SafeAreaView` for proper device display
- Includes `StatusBar` configuration
- Uses `KeyboardAvoidingView` to handle keyboard appearance (especially on iOS)

#### Dependencies:

- `react-redux` for state management
- React Native core components (`SafeAreaView`, `StatusBar`, `KeyboardAvoidingView`)

## Setup Instructions

1.  Install dependencies:

        npm install @react-navigation/native react-redux @react-navigation/stack

2.  For React Navigation, install required native dependencies:

        npm install react-native-screens react-native-safe-area-context

3.  For iOS, install pods:

        cd ios && pod install && cd ..

## Redux Integration

The app expects the Redux store to have:

- `user` state for user session information
- `isAuthLoading` state to track authentication loading state

## Platform Specific Behavior

The `KeyboardAvoidingView` automatically adjusts:

- On iOS: uses 'padding' behavior
- On Android: uses default behavior (no extra padding)

## Status Bar

Configured with:

- Dark content (for light backgrounds)
- White background color

## Running the App

Start the development server:

    npm start

Then run on your platform:

    npm run android
    # or
    npm run ios
