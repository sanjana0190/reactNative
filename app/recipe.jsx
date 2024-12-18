import {
  View,
  Text,
  StyleSheet,
  Appearance,
  Platform,
  SafeAreaView,
  ScrollView,
  FlatList,
} from "react-native";
import { Colors } from "@/constants/Colors";
import { RECIPE } from "@/constants/recipe";
import React from "react";

const recipe = () => {
  const colorScheme = Appearance.getColorScheme();
  const theme = colorScheme === "dark" ? Colors.dark : Colors.light;
  const styles = createStyles(theme, colorScheme);
  const Container = Platform.OS === "web" ? ScrollView : SafeAreaView;
  return (
    <Container>
      <FlatList
        data={RECIPE}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <View>
              <Text>{item.title}</Text>
              <Text>{item.description}</Text>
            </View>
          </View>
        )}
      ></FlatList>
    </Container>
  );
};

function createStyles(theme, colorScheme) {
  return StyleSheet.create({});
}

export default recipe;
