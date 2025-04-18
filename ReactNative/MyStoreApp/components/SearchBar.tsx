import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

type SearchBarProps = {
  searchText: string;
  setSearchText: (text: string) => void;
};

const SearchBar = ({ searchText, setSearchText }: SearchBarProps) => {
  return (
    <TextInput
      style={styles.searchInput}
      placeholder="Search Products"
      value={searchText}
      onChangeText={setSearchText}
    />
  );
};

const styles = StyleSheet.create({
  searchInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 10,
    marginBottom: 15,
  },
});

export default SearchBar;
