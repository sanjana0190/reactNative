import { useLocalSearchParams } from "expo-router";
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  ActivityIndicator,
} from "react-native";
import { ThemedView } from "@/components/ThemedView";
import { useState, useEffect } from "react";

export default function PlaceDetails() {
  const { id } = useLocalSearchParams();
  const [placeDetails, setPlaceDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlaceDetails = async () => {
      try {
        const query = `${id} Bangalore`;
        const response = await fetch(
          `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}`
        );
        const data = await response.json();
        if (data.length > 0) {
          setPlaceDetails(data[0]);
        }
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    fetchPlaceDetails();
  }, [id]);

  return (
    <ThemedView style={styles.container}>
      {loading ? (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color="#6200ee" />
          <Text style={styles.loadingText}>Loading details...</Text>
        </View>
      ) : placeDetails ? (
        <ScrollView>
          <View style={styles.header}>
            <Text style={styles.title}>{placeDetails.display_name}</Text>
            <Text style={styles.subtitle}>
              Latitude: {placeDetails.lat}, Longitude: {placeDetails.lon}
            </Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.infoLabel}>
              Type:{" "}
              <Text style={styles.infoValue}>{placeDetails.type || "N/A"}</Text>
            </Text>
            <Text style={styles.infoLabel}>
              Importance:{" "}
              <Text style={styles.infoValue}>
                {placeDetails.importance?.toFixed(2) || "N/A"}
              </Text>
            </Text>
          </View>
          {/* <MapView
            style={styles.map}
            initialRegion={{
              latitude: parseFloat(placeDetails.lat),
              longitude: parseFloat(placeDetails.lon),
              latitudeDelta: 0.01,
              longitudeDelta: 0.01,
            }}
          >
            <Marker
              coordinate={{
                latitude: parseFloat(placeDetails.lat),
                longitude: parseFloat(placeDetails.lon),
              }}
              title={placeDetails.display_name}
            />
          </MapView> */}
        </ScrollView>
      ) : (
        <Text style={styles.errorText}>
          No details found for "{id}" in Bangalore.
        </Text>
      )}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f9f9f9",
  },
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    fontSize: 16,
    color: "#6200ee",
    marginTop: 10,
    fontWeight: "500",
  },
  header: {
    marginBottom: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
  },
  infoContainer: {
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 5,
  },
  infoLabel: {
    fontSize: 16,
    fontWeight: "600",
    color: "#444",
    marginBottom: 5,
  },
  infoValue: {
    fontWeight: "400",
    color: "#555",
  },
  map: {
    height: 300,
    borderRadius: 10,
    overflow: "hidden",
    marginTop: 20,
  },
  errorText: {
    fontSize: 16,
    color: "red",
    textAlign: "center",
    marginTop: 20,
  },
});
