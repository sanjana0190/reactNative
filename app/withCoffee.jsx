import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  Appearance,
  Platform,
  SafeAreaView,
  FlatList,
  Image,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import nightCoffeeShop from "@/assets/images/nightCoffeeShop.png";
import { Colors } from "@/constants/Colors";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedView } from "@/components/ThemedView";
import { snacksWithCoffee } from "@/constants/snacksWithCoffee";
const withCoffee = () => {
  const colorScheme = Appearance.getColorScheme();
  const theme = colorScheme === "dark" ? Colors.dark : Colors.light;
  const styles = createStyles(theme, colorScheme);
  const Container = Platform.OS == "web" ? ScrollView : SafeAreaView;
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
      headerImage={
        <Image source={nightCoffeeShop} style={styles.headerImage} />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <Text style={styles.text}>
          Coffee <Text style={styles.kannadaText}>ಜೊತೆಗೆ ಒಂದು</Text>{" "}
          <Text style={styles.text}>Bite?</Text>
        </Text>
      </ThemedView>
      <Container>
        <FlatList
          data={snacksWithCoffee}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.contentContainer}
          numColumns={2}
          renderItem={({ item }) => (
            <View style={styles.grid}>
              <Image
                source={item.image}
                style={styles.snackImage}
                resizeMode="cover"
              />
              <Text style={styles.snackTitle}>{item.title}</Text>
              <Text style={styles.snackDescription}>{item.description}</Text>
            </View>
          )}
        ></FlatList>
      </Container>
    </ParallaxScrollView>
  );
};

function createStyles(theme, colorScheme) {
  return StyleSheet.create({
    contentContainer: {
      paddingTop: 10,
      paddingBottom: 20,
      paddingHorizontal: 12,
      backgroundColor: theme.background,
    },
    headerImage: {
      width: "100%",
      height: 310,
      alignSelf: "center",
      resizeMode: "cover",
      backgroundColor: "#FFFFFF",
    },

    titleContainer: {
      flexDirection: "row",
      gap: 8,
    },
    grid: {
      flex: 1,
      margin: 8,
      borderRadius: 12,
      overflow: "hidden",
      backgroundColor: colorScheme === "dark" ? "#444" : "#fff",
      padding: 10,
      alignItems: "center",
    },
    snackImage: {
      width: "100%",
      height: 150,
      borderRadius: 12,
    },
    snackTitle: {
      fontSize: 18,
      paddingBottom: 5,
      fontFamily: "ATSChikkamagaluru",
    },
    snackDescription: {
      fontSize: 14,
      textAlign: "center",
      marginTop: 5,
    },
    text: {
      fontSize: 30,
      lineHeight: 32,
      fontWeight: "regular",
      color: "green",
      fontFamily: "ATSChikkamagaluru",
    },
    kannadaText: {
      fontSize: 30,
      lineHeight: 32,
      fontWeight: "regular",
      fontFamily: "ATSChikkamagaluruColor",
    },
  });
}
export default withCoffee;
