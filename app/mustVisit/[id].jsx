import { useLocalSearchParams } from "expo-router";
import { View, ScrollView, StyleSheet, Text } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import { useState, useEffect } from "react";

export default function PlaceDetails() {
  const { id } = useLocalSearchParams();
  const [placeDetails, setPlaceDetails] = useState(null);

  useEffect(() => {
    const fetchPlaceDetails = async () => {
      try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(id)}`
        );
        const data = await response.json();
        if (data.length > 0) {
          setPlaceDetails(data[0]);
        }
      } catch (e) {
        console.error(e);
      }
    };
    fetchPlaceDetails();
  }, [id]);

  return (
    <ThemedView style={styles.container}>
      {placeDetails ? (
        <ScrollView>
          <Text style={styles.title}>{placeDetails.display_name}</Text>
          <Text style={styles.subTitle}>
            Latitude: {placeDetails.lat}, Longitude: {placeDetails.lat}
          </Text>
          <Text style={styles.description}>
            Type: {placeDetails.type || "N/A"}
          </Text>
          <Text style={styles.description}>
            Importance: {placeDetails.importance?.toFixed(2) || "N/A"}
          </Text>
        </ScrollView>
      ) : (
        <Text style={styles.loadingText}>Loading details ...</Text>
      )}
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
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "gray",
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    marginBottom: 5,
  },
  loadingText: {
    fontSize: 18,
    textAlign: "center",
  },
});
