# React Native Firebase Authentication App

This project is a simple login/sign-up and messaging app built with React Native and Firebase Authentication.

## App Demo

![Nothing App Demo](https://github.com/dxtaner/Mobile-/raw/master/ReactNative/NothingApp/NothngApp.gif)

## Features

- Login/Signup with Firebase Authentication
- Messaging screen after login
- Session state detection (auth state observer)
- Logout functionality
- Modern UI experience
- In-app notifications with `react-native-flash-message`

## Installation

1.  **Clone the project:**

        git clone https://github.com/your-username/your-project-name.git
        cd your-project-name

2.  **Install dependencies:**

        npm install
        # or
        yarn install

3.  **Firebase Setup:**
    - Create a Firebase project from [Firebase Console](https://console.firebase.google.com)
    - Add `google-services.json` for Android under `android/app`
    - Add `GoogleService-Info.plist` for iOS under `ios/Runner`
4.  **Install Firebase modules:**

        npm install @react-native-firebase/app @react-native-firebase/auth
        npx pod-install

5.  **Run the app:**

        npx react-native run-android
        # or
        npx react-native run-ios

## Dependencies

- [React Navigation](https://reactnavigation.org/)
- [@react-native-firebase/auth](https://rnfirebase.io/auth/usage)
- [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons)
- [react-native-flash-message](https://github.com/luckyseven/react-native-flash-message)

## Project Structure

    .
    ├── pages
    │   ├── auth
    │   │   ├── Login.js
    │   │   └── Sign.js
    │   └── Messages.js
    ├── App.js

## Screenshots

You can add app screenshots here.

## Contributing

Pull requests are welcome! Feel free to fork the repo, make changes, and submit a PR.

---

**Taner Özer**  
📧 [tanerozer16@gmail.com](mailto:tanerozer16@gmail.com)  
🌐 [GitHub - dxtaner](https://github.com/dxtaner)
