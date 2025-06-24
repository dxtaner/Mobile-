🔐 React Native Firebase Chat App
=================================

This project is a simple chat application built with React Native, Firebase Authentication, and React Navigation. Users can sign in, register, and join chat rooms to communicate with others.

🚀 Features
-----------

*   User sign-in and registration with Firebase Authentication
*   List of chat rooms
*   Chat room detail screen
*   Info messages using `react-native-flash-message`
*   Authentication state listener
*   Global state management with React Context API
*   Logout button on the chat screen (in the header)

🧩 Tech Stack
-------------

*   React Native
*   React Navigation (`@react-navigation/native`, `@react-navigation/native-stack`)
*   Firebase Authentication (`@react-native-firebase/auth`)
*   Flash Messages (`react-native-flash-message`)
*   Material Community Icons (`react-native-vector-icons/MaterialCommunityIcons`)
*   React Context API

📁 Project Structure
--------------------

📦 your-project/
 ┣ 📂 pages/
 ┃ ┣ 📂 auth/
 ┃ ┃ ┣ 📜 Login.js
 ┃ ┃ ┗ 📜 Sign.js
 ┃ ┣ 📜 ChatRooms.js
 ┃ ┗ 📂 ChatRoomDetail/
 ┃   ┗ 📜 ChatRoomDetail.js
 ┣ 📂 context/
 ┃ ┗ 📜 ChatRoomContext.js
 ┣ 📜 Router.js <-- (This file)
 ┗ 📜 App.js
  

📱 Navigation Flow
------------------

*   **AuthStack** (for unauthenticated users)
    *   `LoginPage`: Login screen
    *   `SignPage`: Registration screen
*   **MainStack** (for authenticated users)
    *   `Rooms`: Chat rooms list
    *   `ChatRoomDetail`: Selected room's detail screen

🔑 Authentication State
-----------------------

    
    useEffect(() => {
      const unsubscribe = auth().onAuthStateChanged(user => {
        setUserSession(!!user);
      });
      return unsubscribe;
    }, []);
      

This block listens for auth state changes and routes the user accordingly.

📸 Screenshots 
--------------------------
![ChatRooms Preview](Mobile-/ReactNative/ChattingApp/ChatRooms.gif)


🧪 Setup
--------

1.  Clone the project:
    
        git clone https://github.com/your-username/project-name.git
        cd project-name
    
2.  Install dependencies:
    
        npm install
    
3.  Configure your Firebase project and credentials.
4.  Run the app:
    
        
        npx react-native run-android
        # or
        npx react-native run-ios
              
    

✍ Contributing
--------------

Contributions are welcome! Feel free to submit a pull request or open an issue.

* * *

**Note:** This is a basic sample project for learning purposes. Real-world applications require additional security and advanced features.

* * *

🧑‍💻 Developer: [Taner Özer](https://github.com/dxtaner)  
📧 Contact: [tanerozer16@gmail.com](mailto:tanerozer16@gmail.com)
