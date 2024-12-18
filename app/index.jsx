import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ImageBackground,
} from "react-native";
// import southIndia from "@/assets/images/southIndia.jpeg";
import rainyCoffeeShop from "@/assets/images/rainyCoffeeShop.png";
import React from "react";

const App = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ImageBackground source={rainyCoffeeShop} style={styles.image}>
        <View style={styles.headerContainer}>
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
  headerContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    width: "100%",
    alignItems: "center",
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
