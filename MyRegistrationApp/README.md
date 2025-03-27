React Native Navigation Example
===============================

This project demonstrates a basic React Native application using React Navigation v6 with `createNativeStackNavigator`. It features three simple screens: Welcome, Member Sign, and Member Result.

Project Structure
-----------------

    .
    ├── App.js
    └── pages
        ├── MemberResult.js
        ├── MemberSign.js
        └── Welcome.js
  

*   `App.js`: The main application file that sets up the navigation.
*   `pages/`: Contains the individual screen components.
    *   `Welcome.js`: A welcome screen.
    *   `MemberSign.js`: A screen for member sign-up.
    *   `MemberResult.js`: A screen to display member sign-up results.

Technologies Used
-----------------

*   React Native
*   React Navigation v6 (`@react-navigation/native`, `@react-navigation/native-stack`)

Setup
-----

1.  **Clone the repository:**
    
            `git clone https://github.com/dxtaner/Mobile-/tree/master/MyRegistrationApp         cd MyRegistrationApp`
            
          
    
2.  **Install dependencies:**
    
            `npm install           # or           yarn install`
            
          
    
3.  **Install React Navigation dependencies:**
    
            `npm install @react-navigation/native @react-navigation/native-stack react-native-screens react-native-safe-area-context           #or           yarn add @react-navigation/native @react-navigation/native-stack react-native-screens react-native-safe-area-context`
            
          
    
4.  **Install pods for iOS (if applicable):**
    
            `npx pod-install ios`
            
          
    

Running the Application
-----------------------

### For Android:

    `npx react-native run-android`
    
  

### For iOS:

    `npx react-native run-ios`
    
  

Usage
-----

The application navigates between three screens:

*   **Welcome Screen:** The initial screen.
*   **Member Sign Screen:** Allows users to input member information.
*   **Member Result Screen:** Displays the entered member information.

Notes
-----

*   This is a basic example for demonstration purposes.
*   You can customize the screens and add more features as needed.
*   Ensure you have the necessary development environment set up for React Native development.
*   The `screenOptions={{ headerShown: false }}` property in `Stack.Navigator` hides the header for all screens.
