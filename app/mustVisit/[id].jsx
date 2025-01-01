import { useLocalSearchParams } from "expo-router";
import { View, StyleSheet, Text } from "react-native";
import { ThemedView } from "@/components/ThemedView";

export default function PlaceDetails() {
  const { id } = useLocalSearchParams();

  return (
    <ThemedView style={styles.container}>
      <Text style={styles.text}>Details for place {id}</Text>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  text: {
    fontSize: 18,
  },
});
