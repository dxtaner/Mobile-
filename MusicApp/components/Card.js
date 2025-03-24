import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const Card = ({ musicData }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: musicData.imageUrl }} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{musicData.title}</Text>
        <Text style={styles.artist}>{musicData.artist}</Text>
        <Text style={styles.album}>{musicData.album} • {musicData.year}</Text>
      </View>
      {musicData.isSoldOut && (
        <View style={styles.soldOutContainer}>
          <Text style={styles.soldOutText}>Exhausted</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1e1e1e",
    borderRadius: 12,
    marginHorizontal: 20,
    marginBottom: 12,
    padding: 12,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 8,
  },
  infoContainer: {
    flex: 1,
    marginLeft: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  artist: {
    fontSize: 16,
    color: "#bbb",
  },
  album: {
    fontSize: 14,
    color: "#888",
  },
  soldOutContainer: {
    backgroundColor: "#ff3b3b",
    borderRadius: 8,
    paddingVertical: 4,
    paddingHorizontal: 10,
  },
  soldOutText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
  },
});

export default Card;
