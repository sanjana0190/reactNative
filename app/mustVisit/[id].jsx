import { useLocalSearchParams } from "expo-router";
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  ActivityIndicator,
} from "react-native";
import { ThemedView } from "@/components/ThemedView";
import MapView, { Marker } from "react-native-maps";
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
          <Text style={styles.title}>{placeDetails.display_name}</Text>
          <Text style={styles.subtitle}>
            Latitude: {placeDetails.lat}, Longitude: {placeDetails.lon}
          </Text>
          <Text style={styles.description}>
            Type: {placeDetails.type || "N/A"}
          </Text>
          <Text style={styles.description}>
            Importance: {placeDetails.importance?.toFixed(2) || "N/A"}
          </Text>
          <MapView
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
          </MapView>
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
  },
  text: {
    fontSize: 18,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
    fontSize: 16,
    textAlign: "center",
    color: "red",
    marginTop: 20,
  },
  map: {
    height: 300,
    marginTop: 20,
    borderRadius: 10,
  },
});
