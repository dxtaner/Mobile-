
🌤️ React Native Weather App
============================

This is a sleek and modern React Native mobile application that displays real-time weather information based on your current location or a city name. It uses the OpenWeatherMap API and device location services.

🚀 Features
-----------

*   🌍 Get weather info based on current location
*   🔍 Search by city name
*   📅 Turkish localized and formatted date (using date-fns with `tr` locale)
*   📡 Live weather data from OpenWeatherMap API
*   🔄 Pull to refresh functionality
*   🎨 Glassmorphism-style user interface
*   📱 Platform-specific location permission handling (Android/iOS)

🧪 Tech Stack
-------------

*   React Native
*   OpenWeatherMap API
*   `react-native-geolocation-service`
*   `date-fns` (for Turkish date formatting)
*   `react-native-config` (API key management)
*   Custom `useFetch` hook
*   Reusable `WeatherInfoCard` component
*   Responsive and adaptive styling

🔧 Setup
--------

### 1\. Clone the repository:

    git clone https://github.com/dxtaner/Mobile-/tree/master/WeatherApp
    cd WeatherApp

### 2\. Install dependencies:

    npm install

### 3\. Create a `.env` file in the root directory:

    API_URL=https://api.openweathermap.org/data/2.5/weather?
    API_KEY=YOUR_API_KEY_HERE

> 🔑 You can get a free API key from [OpenWeatherMap](https://openweathermap.org/api).

### 4\. For Android location permissions:

Add this to `android/app/src/main/AndroidManifest.xml`:

    <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />

📷 Screenshots
--------------


🛠 Commands
-----------

    # Run on Android
    npx react-native run-android
    
    # Run on iOS (requires macOS)
    npx react-native run-ios

📁 Project Structure
--------------------

    .
    ├── components/
    │   └── WeatherInfoCard.js
    ├── hooks/
    │   └── useFetch.js
    ├── assets/
    │   └── skyback.jpg
    ├── App.js
    └── ...
    

📌 Notes
--------

*   If location permission is not granted, the app logs an error.
*   City-based data is used when searched, location-based data returns after refresh.

📄 License
----------

MIT License

* * *

💡 Developed by [Taner Özer](mailto:tanerozer16@gmail.com)
