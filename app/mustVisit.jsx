import {
  View,
  Text,
  TextInput,
  Pressable,
  FlatList,
  StyleSheet,
  Appearance,
  Image,
} from "react-native";
import React from "react";
import { useState } from "react";
import { placesToVisit } from "@/constants/coffeePlacesToVisit";
import { Colors } from "@/constants/Colors";
import cafeMadras from "@/assets/images/cafeMadras.png";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedView } from "@/components/ThemedView";

const mustVisit = () => {
  const colorScheme = Appearance.getColorScheme();
  const theme = colorScheme === "dark" ? Colors.dark : Colors.light;
  const styles = createStyles(theme, colorScheme);
  const [toVisit, setToVisit] = useState(
    placesToVisit.sort((a, b) => b.id - a.id)
  );
  const [text, setText] = useState("");

  const addToVisit = () => {
    if (text.trim()) {
      const newId = toVisit.length > 0 ? toVisit[0] + 1 : 1;
      setToVisit([{ id: newId, title: text, visited: false }, ...toVisit]);
      setText("");
    }
  };

  const toggleVisit = (id) => {
    setToVisit(
      toVisit.map((visit) =>
        visit.id === id ? { ...visit, visited: !visit.visited } : visit
      )
    );
  };

  const renderItem = ({ item }) => {
    return (
      <View style={styles.row}>
        <View style={styles.placesTextRow}>
          <Text
            onPress={() => toggleVisit(item.id)}
            style={[styles.placeTitle, item.visited && styles.placeTitleText]}
          >
            {item.title}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
      headerImage={
        <Image
          source={cafeMadras}
          style={styles.headerImage}
          resizeMode="cover"
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <Text style={styles.text}>
          Coffee Spots <Text style={styles.kannadaText}>ಹುಡುಕೋಣ?</Text>
        </Text>
      </ThemedView>
      <View></View>
      <FlatList
        data={toVisit}
        renderItem={renderItem}
        keyExtractor={(visit) => visit.id}
        contentContainerStyle={{ flexGrow: 1 }}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Add a place"
          value={text}
          onChangeText={setText}
        />
        <Pressable style={styles.addButton} onPress={addToVisit}>
          <Text style={styles.addButtonText}>+</Text>
        </Pressable>
      </View>
    </ParallaxScrollView>
  );
};

function createStyles(theme, colorScheme) {
  return StyleSheet.create({
    headerImage: {
      width: "100%",
      height: 310,
      alignSelf: "center",
      overflow: "hidden",
      resizeMode: "contain",
      backgroundColor: "#FFFFFF",
    },
    titleContainer: {
      flexDirection: "row",
      gap: 8,
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
    placesTextRow: {
      width: "65%",
      paddingTop: 10,
      paddingLeft: 10,
      paddingRight: 5,
      flexGrow: 1,
    },
    placeTitleText: {
      color: "green",
    },
    placeTitle: {
      fontSize: 18,
      paddingBottom: 5,
      fontFamily: "ATSChikkamagaluru",
    },
    visitedPlaceTitle: {
      textDecorationLine: "line-through",
      color: "gray",
    },
    inputContainer: {
      flexDirection: "row",
      alignItems: "center",
      marginVertical: 10,
    },
    input: {
      flex: 1,
      height: 50,
      borderColor: theme.borderColor,
      borderWidth: 1,
      borderRadius: 10,
      paddingHorizontal: 15,
      fontSize: 16,
      backgroundColor: theme.inputBackground,
      color: theme.textColor,
    },
    addButton: {
      width: 50,
      height: 50,
      marginLeft: 10,
      backgroundColor: theme.buttonBackground,
      borderRadius: 25,
      justifyContent: "center",
      alignItems: "center",
    },
    addButtonText: {
      fontSize: 24,
      color: "green",
      fontWeight: "bold",
    },
  });
}
export default mustVisit;
