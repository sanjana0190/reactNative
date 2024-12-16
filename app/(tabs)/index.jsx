import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ImageBackground,
} from "react-native";
import southIndia from "@/assets/images/southIndia.jpeg";
import React from "react";

const App = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ImageBackground source={southIndia} style={styles.image}>
        <View style={styles.container}>
          <Text style={styles.headerText}>
            Coffee <Text style={styles.headerKannadaText}>ಕುಡಿಯೋಣ್ವಾ</Text>
          </Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    flexDirection: "column",
  },
  headerText: {
    fontFamily: "ATSChikkamagaluru",
    color: "green",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: 20,
  },
  headerKannadaText: {
    fontFamily: "ATSChikkamagaluruColor",
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: 20,
  },
  image: {
    height: "100%",
    width: "100%",
    flex: 1,
    resizeMode: "cover",
    padding: 0,
  },
});

export default App;
