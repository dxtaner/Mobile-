
React Native To-Do List App Testing
===========================

A simple React Native To-Do List application. Users can add items to the list, and empty items are prevented. The app is also tested using `@testing-library/react-native`.

* * *

Features
--------

*   Add items to the list
*   Prevent adding empty items
*   User-friendly interface
*   Unit tests for verification

* * *

Technologies
------------

*   React Native
*   React Hooks (`useState`)
*   Testing with `@testing-library/react-native`
*   Simple styling with StyleSheet

* * *


Usage
-----

*   Type an item in the input field.
*   Press the "Add" button to add the item to the list.
*   If the input is empty, the item will not be added.

* * *

File Structure
--------------

    
    /App.js             # Main application file
    /src/components/
        /Button/        # Custom Button component
    /__tests__/
        App.test.js     # Application tests
      

* * *

Tests
-----

The app is tested using `@testing-library/react-native`. Tests include:

*   Rendering input, button, and FlatList components
*   Adding items to the list
*   Preventing empty items from being added

Run tests using:

    npm test
    # or
    yarn test

* * *

Button Component
----------------

*   Custom `Button` component
*   Accepts `title` and `onClick` props
*   Triggers `onClick` when pressed
*   Uses `testID="add-button"` for testing

* * *

Styling
-------

*   Simple and clean UI
*   Colorful and user-friendly button and input fields
