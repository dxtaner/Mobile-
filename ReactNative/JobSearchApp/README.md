Jobs App with React Native
==========================

A mobile application that lists job opportunities and allows users to mark their favorites.

App Demo
--------
https://github.com/dxtaner/Mobile-//JobSearchApp
![News App Demo](https://github.com/dxtaner/Mobile-/tree/master/ReactNative/JobSearchApp/Jobs.gif)
![News App Demo](https://github.com/dxtaner/Mobile-/tree/master/ReactNative/JobSearchApp/Jobs2.gif)

Features
--------

*   Browse job listings
*   View detailed job information
*   Mark jobs as favorites
*   View favorite jobs in a separate tab

Technologies Used
-----------------

*   React Native
*   React Navigation (Stack and Bottom Tabs)
*   Redux for state management
*   TheMuse API for job data

Installation
------------

1.  Clone the repository
2.  Install dependencies:
    
        npm install
    
3.  Start the application:
    
        npm start
    

Project Structure
-----------------

*   `src/pages/`: Contains the main screens
    *   `JobsPage.js`: Displays job listings
    *   `Detail.js`: Shows detailed job information
    *   `Favorite.js`: Lists favorited jobs
*   `src/context/`: Redux setup
    *   `reducers.js`: Combines all reducers
    *   `store.js`: Initial Redux store state

Navigation
----------

The app uses a combination of stack and tab navigation:

*   Main tab navigator with two tabs:
    *   Jobs (💼 icon)
    *   Favorites (❤️ icon)
*   Stack navigator for job details

Styling
-------

The app uses a consistent dark theme with:

*   Dark blue navigation bars
*   Light colored text
*   Emoji icons for tabs

API Integration
---------------

The app connects to TheMuse API to fetch job data:

    API_JOBS_URL=https://www.themuse.com/api/public/jobs

State Management
----------------

Redux is used to manage:

*   Job listings
*   Favorite jobs
*   Application state

Screenshots
-----------

(You can add screenshots of your app here if available)

License
-------

MIT License
