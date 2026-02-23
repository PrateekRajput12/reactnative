import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  const [count, setCount] = useState(0)
  const [show, setShow] = useState(true)
  return (
    <View style={styles.container}>
      {show && <Text>Welcome Prateek</Text>}
      <Text style={styles.title}>Counter App</Text>
      <Text style={styles.count}>{count}</Text>
      <Button title="Increase" onPress={() => setCount(count + 1)}></Button>
      <View style={{ height: 10 }}></View>
      <Button title="Descrease" onPress={() => setCount(count - 1)}></Button>
      <Button title={show ? "Hide Text" : "Show Text"} onPress={() => setShow(!show)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  count: {
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 20,
  },
});