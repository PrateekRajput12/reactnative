import { StyleSheet, Text, View } from "react-native";

type Props = {
    name: string;
    city: string;
    skill: string;
};

export default function ProfileCard({ name, city, skill }: Props) {
    return (
        <View style={styles.card}>
            <Text style={styles.name}>{name}</Text>
            <Text>📍 {city}</Text>
            <Text>💻 {skill}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        padding: 20,
        borderRadius: 10,
        backgroundColor: "#f1f1f1",
        marginBottom: 15,
        width: "90%",
    },
    name: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 5,
    },
});