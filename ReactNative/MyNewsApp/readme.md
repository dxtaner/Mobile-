# React Native News App

This is a simple and responsive news app built using React Native. The app displays the latest news articles along with a banner carousel showcasing some highlighted news. The news data is fetched from local JSON files.

## App Demo

![News App Demo](https://github.com/dxtaner/Mobile-/raw/master/ReactNative/MyNewsApp/newsapp.gif)

## Features

- **News List**: Displays a list of news articles using a `FlatList` component.
- **News Banners**: A horizontal scrollable list of banners with images, titles, and descriptions.
- **Responsive Design**: The app is designed to be responsive and looks great on both Android and iOS devices.
- **Smooth Scrolling**: The app uses `FlatList` for optimized performance with large data sets.

## Components

- **NewsCard**: A custom component that represents an individual news article.
- **News Banner**: A horizontally scrollable list of banners featuring highlighted news.

## Installation

To run this app locally, follow these steps:

### 1\. Clone the repository

    git clone <your-repository-url>

### 2\. Install dependencies

Make sure you have `node` and `npm` installed on your machine. In the project directory, run:

    npm install

### 3\. Run the app

Start the app on your simulator or device by running:

    npm run android   # For Android
    npm run ios       # For iOS

### 4\. JSON Data Files

The app uses two local JSON files for news data:

- `news_data.json`: Contains the list of news articles.
- `news_banner_data.json`: Contains the data for the banner images and titles.

You can modify these files to update the news content and banners.

## Directory Structure

    .
    ├── App.js                     # Main app component
    ├── components/                 # Folder containing the NewsCard component
    │   └── NewsCard.js             # A component to display an individual news item
    ├── news_data.json              # News articles data
    ├── news_banner_data.json       # Banner data
    └── package.json                # Project dependencies and scripts

## Dependencies

- `react-native`: The framework used for building the app.
- `react`: The core library used for UI rendering.
- `react-native-gesture-handler`: Handles gesture interactions.

## Contributing

Feel free to fork the repository and contribute by making a pull request. If you have any suggestions or improvements, please open an issue.

## License

This project is open-source and available under the MIT License.
