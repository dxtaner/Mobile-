# MealDB Recipe App

This is a React Native application that allows users to browse food categories, view meals in each category, and see detailed recipes.

## App Demo

![Recipe App Demo](https://github.com/dxtaner/Mobile-/raw/master/ReactNative/RecipeApp/RecipeApp.gif)
![Recipe App Demo](https://github.com/dxtaner/Mobile-/raw/master/ReactNative/RecipeApp/RecipeApp2.gif)

## Features

- Browse food categories
- View meals by category
- See detailed recipe information
- Smooth navigation between screens

## API Endpoints

The app uses the following endpoints from [TheMealDB](https://www.themealdb.com):

**API_CATEGORIES**: https://www.themealdb.com/api/json/v1/1/categories.php - Get all meal categories

**API_MEALS**: https://www.themealdb.com/api/json/v1/1/filter.php?c= - Get meals by category (append category name)

**API_DETAIL**: https://www.themealdb.com/api/json/v1/1/lookup.php?i= - Get meal details by ID (append meal ID)

## Navigation Structure

The app uses React Navigation with the following screens:

### 1\. CategoriesPage

Displays all food categories

**Title**: "🍽 Categories"

### 2\. MealsPage

Shows meals in a selected category

**Title**: "🥘 Meals"

### 3\. DetailPage

Displays detailed recipe information

**Title**: "📖 Recipe Details"

## Styling

The navigation header has the following styling:

- Background color: `#f8f9fa` (light gray)
- Title color: `#FF6347` (tomato)
- Title font size: 22
- Font weight: bold
- Title alignment: center
- Transition animation: slide from right

## Installation

1.  Clone the repository
2.  Install dependencies: `npm install`
3.  Run the app: `npm start` (or appropriate command for your platform)

## Dependencies

- React
- React Native
- @react-navigation/native
- @react-navigation/native-stack

## Screenshots

(You can add screenshots of your app here if available)

## License

(Mention your license here if applicable)
