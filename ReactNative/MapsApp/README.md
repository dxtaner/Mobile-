
React Native Map Users App
==========================

This is a React Native application that displays random users on a map using `react-native-maps`. Users can tap on a marker to see detailed information in a modal card.

* * *

Features
--------

*   Fetches random users from [Random User API](https://randomuser.me)
*   Displays users as markers on a MapView
*   Clicking a marker shows user details in a modal card
*   Custom loading indicator while fetching data
*   Reusable `useFetch` hook for API requests

* * *

Technologies
------------

*   React Native
*   React Hooks (`useState`, `useRef`, `useEffect`)
*   react-native-maps
*   Axios for HTTP requests
*   Modal for displaying user info

* * *

Setup
-----
    
1.  Install dependencies:
    
        npm install
        # or
        yarn install
    
2.  Run the application:
    
        npx react-native run-android
        # or
        npx react-native run-ios
    

* * *

Components
----------

*   **App.js**: Main component with MapView, markers, and InfoCard modal
*   **useFetch.js**: Custom hook to fetch API data with loading and error states
*   **Loading.js**: Full-screen loading indicator
*   **InfoCard.js**: Modal card showing user information (name, email, phone, location, picture)
*   **UserMarker.js**: Custom marker component for each user

* * *

Usage
-----

1.  Launch the app and wait for users to load.
2.  Tap a user marker on the map.
3.  The modal InfoCard will appear with the user's details.
4.  Close the modal by pressing the "Close" button.

* * *

File Structure
--------------

    
    /App.js                   # Main app component with MapView
    /hooks/useFetch.js        # Custom hook for API fetching
    /components/Loading.js    # Loading indicator component
    /components/InfoCard/InfoCard.js   # User info modal component
    /components/marker/UserMarker.js   # User marker component
      

* * *

Styling
-------

*   Clean and responsive UI
*   Markers display user thumbnail images
*   InfoCard modal with rounded images and styled buttons
*   Loading overlay with semi-transparent background

* * *

API
---

Using [Random User API](https://randomuser.me) to fetch 20 random users with location, picture, and contact info.
