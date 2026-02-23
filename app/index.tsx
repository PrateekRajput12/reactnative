import Login from "@/components/Login";
import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function HomeScreen() {
  const [name, setName] = useState("");

  return (
    <View style={styles.container}>
      <Login />

      <Text style={styles.title}>Enter Your Name</Text>

      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={(text) => setName(text)}
      />

      <Text style={styles.output}>Hello {name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
  },
  input: {
    width: "90%",
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  output: {
    fontSize: 18,
    marginTop: 10,
  },
});