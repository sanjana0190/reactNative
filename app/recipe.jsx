import {
  View,
  Text,
  StyleSheet,
  Appearance,
  Platform,
  SafeAreaView,
  ScrollView,
  FlatList,
  Image,
} from "react-native";
import { Colors } from "@/constants/Colors";
import { RECIPE } from "@/constants/recipe";
import React from "react";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import filter from "@/assets/images/filter.png";
import { ThemedView } from "@/components/ThemedView";

const recipe = () => {
  const colorScheme = Appearance.getColorScheme();
  const theme = colorScheme === "dark" ? Colors.dark : Colors.light;
  const styles = createStyles(theme, colorScheme);
  const Container = Platform.OS === "web" ? ScrollView : SafeAreaView;
  const separatorComp = <View style={styles.separator} />;
  const headerComp = <Text>Top of List</Text>;
  const footerComp = <Text>End of List</Text>;
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
      headerImage={
        <Image source={filter} style={styles.headerImage} resizeMode="center" />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <Text style={styles.text}>
          Coffee, <Text style={styles.kannadaText}>ಮಾಡೋಣ್ವಾ?</Text>
        </Text>
      </ThemedView>
      <Container>
        <FlatList
          data={RECIPE}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.contentContainer}
          ItemSeparatorComponent={separatorComp}
          // ListHeaderComponent={headerComp}
          // ListFooterComponent={footerComp}
          // ListHeaderComponentStyle={styles.footer}
          renderItem={({ item }) => (
            <View style={styles.row}>
              <View style={styles.recipeTextRow}>
                <Text style={[styles.recipeTitle, styles.recipeTitleText]}>
                  {item.title}
                </Text>
                <Text style={styles.recipeDescriptionText}>
                  {item.description}
                </Text>
              </View>
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
    // footer: {
    //   marginHorizontal: "auto",
    // },
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
    recipeTextRow: {
      width: "65%",
      paddingTop: 10,
      paddingLeft: 10,
      paddingRight: 5,
      flexGrow: 1,
    },
    recipeTitle: {
      fontSize: 18,
      paddingBottom: 5,
      fontFamily: "ATSChikkamagaluru",
    },
    recipeTitleText: {
      color: "green",
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

export default recipe;
