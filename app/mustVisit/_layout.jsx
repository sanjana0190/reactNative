import { Stack } from "expo-router";
import { Appearance } from "react-native";
import { Colors } from "@/constants/Colors";

export default function MustVisitLayout() {
  const colorScheme = Appearance.getColorScheme();
  const theme = colorScheme === "dark" ? Colors.dark : Colors.light;

  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: theme.headerBackground },
        headerTintColor: theme.text,
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "Must Visit Places",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="[id]"
        options={{
          title: "Place Details",
          headerShown: false,
        }}
      />
    </Stack>
  );
}
