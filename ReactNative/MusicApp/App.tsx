import React, { useState } from "react";
import { SafeAreaView, StyleSheet, TextInput, FlatList, Text, View } from "react-native";
import musicData from "./musicData.json";
import Card from "./components/Card.js";

const App = () => {
  const [searchText, setSearchText] = useState("");
  const [filteredData, setFilteredData] = useState(musicData);

  function handleSearch(text) {
    setSearchText(text);
    const newFilteredData = musicData.filter(item =>
      item.title.toUpperCase().includes(text.toUpperCase())
    );
    setFilteredData(newFilteredData);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          value={searchText}
          onChangeText={handleSearch}
          placeholder="🔍 Search Music..."
          placeholderTextColor="#bbb"
          style={styles.search}
        />
      </View>

      {filteredData.length === 0 ? (
        <Text style={styles.noResult}>Nothing</Text>
      ) : (
        <FlatList
          data={filteredData}
          renderItem={({ item }) => <Card musicData={item} />}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.listContainer}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    paddingTop: 20,
  },
  searchContainer: {
    marginHorizontal: 20,
    marginBottom: 10,
    backgroundColor: "#1e1e1e",
    borderRadius: 12,
    paddingVertical: 8,
    paddingHorizontal: 15,
  },
  search: {
    color: "#fff",
    fontSize: 16,
  },
  noResult: {
    textAlign: "center",
    color: "#bbb",
    fontSize: 18,
    marginTop: 20,
  },
  listContainer: {
    paddingBottom: 10,
  },
});

export default App;
