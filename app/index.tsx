import { StyleSheet, View } from "react-native";
import ProfileCard from "../components/ProfileCard";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ProfileCard
        name="Prateek Rajput"
        city="Mathura"
        skill="MERN Stack Developer"
      />

      <ProfileCard
        name="Rahul Sharma"
        city="Delhi"
        skill="Frontend Developer"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
});