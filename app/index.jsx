import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
// import southIndia from "@/assets/images/southIndia.jpeg";
import rainyCoffeeShop from "@/assets/images/rainyCoffeeShop.png";
import React, { useState } from "react";

const App = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ImageBackground source={rainyCoffeeShop} style={styles.image}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>
            Coffee{" "}
            <View style={styles.kannadaContainer}>
              <Text style={styles.headerKannadaText}>ಕುಡಿಯೋಣ್ವಾ</Text>
              <View style={styles.tooltipContainer}>
                <TouchableOpacity
                  onPress={() => setShowTooltip(!showTooltip)}
                  style={styles.translateButton}
                >
                  <Text style={styles.translateButtonText}>ℹ️</Text>
                </TouchableOpacity>
                {showTooltip && (
                  <View style={styles.tooltip}>
                    <View style={styles.tooltipArrow} />
                    <Text style={styles.tooltipText}>Let's drink</Text>
                  </View>
                )}
              </View>
            </View>
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
  kannadaContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  tooltipContainer: {
    position: "relative",
  },
  translateButton: {
    marginLeft: 5,
    marginTop: 20,
  },
  translateButtonText: {
    fontSize: 20,
  },
  tooltip: {
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    padding: 8,
    borderRadius: 6,
    width: 100,
    top: 50,
    right: -20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 3,
    elevation: 3,
  },
  tooltipArrow: {
    position: "absolute",
    top: -5,
    right: 25,
    width: 0,
    height: 0,
    borderLeftWidth: 5,
    borderRightWidth: 5,
    borderBottomWidth: 5,
    borderStyle: "solid",
    backgroundColor: "transparent",
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "rgba(255, 255, 255, 0.9)",
    transform: [{ rotate: "180deg" }],
  },
  tooltipText: {
    color: "green",
    fontSize: 14,
    textAlign: "center",
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
