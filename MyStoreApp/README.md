My Store App
============

A simple React Native app that showcases products with a search functionality. It allows users to search for products by name and view the filtered list in a responsive layout.

App Demo
--------

![News App Demo](https://github.com/dxtaner/Mobile-/blob/master/MyStoreApp/mystore.gif)

Features
--------

*   **Product Listing:** Displays a list of products with their images, names, and prices.
*   **Search Functionality:** A search bar to filter products based on the name.
*   **Responsive Layout:** Displays products in a grid layout with two columns.

Technologies Used
-----------------

*   **React Native:** Framework for building the mobile app.
*   **React:** For managing UI state.
*   **FlatList:** For efficient rendering of the product list.
*   **SafeAreaView:** To ensure the content is rendered within the safe area boundaries of the screen.

Installation
------------

Follow these steps to get the app running locally.

### 1\. Clone the repository

    git clone https://github.com/dxtaner/Mobile-/tree/master/MyStoreApp

### 2\. Navigate to the project folder

    cd MyStoreApp

### 3\. Install dependencies

    npm install

### 4\. Run the app

To run the app on your emulator or device, use the following command:

    npx react-native run-android  # For Android

    npx react-native run-ios      # For iOS (macOS only)

Components
----------

### 1\. ProductCard

This component displays individual product information such as the name, price, and image.

### 2\. SearchBar

A functional component that allows users to search products by name. It accepts two props:

*   **searchText:** The current search text.
*   **setSearchText:** The function to update the search text.


License
-------

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
