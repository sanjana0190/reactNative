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
        <Image
          source={nightCoffeeShop}
          style={styles.headerImage}
          resizeMode="center"
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <Text style={styles.text}>
          Coffee , <Text style={styles.kannadaText}>ಮಾಡೋಣ್ವಾ</Text>
        </Text>
      </ThemedView>
      <Container>
        <FlatList
          data={snacksWithCoffee}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.contentContainer}
          renderItem={({ item }) => (
            <View style={styles.row}>
              <View style={styles.snackRow}>
                <Text style={styles.snackTitle}>{item.title}</Text>
                <Text style={styles.snackDescription}>{item.description}</Text>
              </View>
            </View>
          )}
        ></FlatList>
      </Container>
    </ParallaxScrollView>
    //   <Text>withCoffee</Text>
    // </View>
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
      overflow: "hidden",
      resizeMode: "contain",
      backgroundColor: "#FFFFFF",
    },
    separator: {
      height: 1,
      backgroundColor: colorScheme === "dark" ? "papayawhip" : "#000",
      width: "50%",
      maxWidth: "100",
      marginHorizontal: "auto",
      marginBottom: 10,
    },
    titleContainer: {
      flexDirection: "row",
      gap: 8,
    },
    row: {
      flexDirection: "row",
      width: "100%",
      maxWidth: 600,
      height: "auto",
      marginBottom: 10,
      borderStyle: "solid",
      borderColor: colorScheme === "dark" ? "papayawhip" : "#000",
      borderWidth: 1,
      borderRadius: 20,
      overflow: "hidden",
      marginHorizontal: "auto",
      padding: 10,
    },
    snackTextRow: {
      width: "65%",
      paddingTop: 10,
      paddingLeft: 10,
      paddingRight: 5,
      flexGrow: 1,
    },
    snackTitle: {
      fontSize: 18,
      paddingBottom: 5,
      fontFamily: "ATSChikkamagaluru",
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
