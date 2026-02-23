import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const data = [
  { id: "1", name: "Prateek" },
  { id: "2", name: "Rahul" },
  { id: "3", name: "Amit" },
  { id: "4", name: "Neha" },
]
const properties = [
  { id: "1", title: "2 BHK Flat", price: "21 Lakh", location: "Govardhan" },
  { id: "2", title: "3 BHK Villa", price: "45 Lakh", location: "Vrindavan" },
  { id: "3", title: "Plot 100 Gaj", price: "12 Lakh", location: "Mathura" },
];
const index = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>User List</Text>

      <FlatList data={properties}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.name}>{item.title}</Text>
            <Text>💰 {item.price}</Text>
            <Text>📍 {item.location}</Text>
          </View>
        )} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: "center",
  },
  item: {
    fontSize: 18,
    padding: 10,
    borderBottomWidth: 1,
  },
  card: {
    backgroundColor: "#f5f5f5",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default index