import { StyleSheet, Image, Text } from "react-native";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import filterCoffee from "@/assets/images/filterCoffee.png";

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
      headerImage={
        <Image
          source={filterCoffee}
          style={styles.headerImage}
          resizeMode="cover"
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <Text style={styles.text}>
          Let's learn about Filter Coffee,{" "}
          <Text style={styles.kannadaText}>ಏನಂತಿರಾ?</Text>
        </Text>
      </ThemedView>
      <ThemedText type="subtitle">What is Filter Coffee?</ThemedText>
      <ThemedText type="default">
        Filter coffee is a traditional South Indian beverage that stands out for
        its rich aroma, bold flavor, and frothy texture. It is prepared by
        brewing finely ground coffee in a metal filter, which produces a strong
        decoction. This decoction is then mixed with hot milk and sugar,
        resulting in a creamy, flavorful drink. Often served in a unique steel
        tumbler and dabarah (a small bowl used to mix and cool the coffee),
        filter coffee is a sensory experience cherished by millions.
      </ThemedText>
      <ThemedText type="subtitle">Where Did It Originate?</ThemedText>
      <ThemedText type="default">
        The roots of filter coffee trace back to the 17th century, when Baba
        Budan, a Sufi saint, smuggled seven coffee beans from Yemen into India.
        These beans were planted in Chikmagalur, Karnataka, marking the
        beginning of coffee cultivation in the country. Over time, coffee became
        integral to South Indian households, where it was brewed using a
        traditional filter and enjoyed as an everyday ritual.
      </ThemedText>
      <ThemedText type="subtitle">
        What’s the Story Behind Filter Coffee?
      </ThemedText>
      <ThemedText type="default">
        Filter coffee is more than a beverage—it’s a tradition woven into the
        cultural fabric of South India. Families gather in the mornings to savor
        freshly brewed coffee, a symbol of hospitality and togetherness. In
        Karnataka and Tamil Nadu, the preparation and serving of filter coffee
        reflect pride and precision. The brewing process itself is an art. The
        ground coffee is carefully tamped into the filter, hot water is poured
        over, and the decoction is allowed to drip slowly, preserving its strong
        and aromatic essence. Once brewed, the coffee is mixed with milk and
        sugar in the dabarah, a ritual that enhances its signature frothiness.
        For many, filter coffee is a reminder of childhood mornings, bustling
        coffee houses, and leisurely conversations. Its popularity has
        transcended regional boundaries, becoming an iconic representation of
        India’s rich culinary and cultural heritage.
      </ThemedText>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    width: "100%",
    height: 310,
    alignSelf: "center",
    overflow: "hidden",
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
});
