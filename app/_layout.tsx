import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { Appearance } from 'react-native';
import { Colors } from '@/constants/Colors';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = Appearance.getColorScheme();
  const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;

  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ATSChikkamagaluruColor: require('../assets/fonts/ATSChikkamagaluru-ColorRegularCOLR.ttf'),
    ATSChikkamagaluru: require('../assets/fonts/ATSChikkamagaluru-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
      <Stack screenOptions={{headerStyle: {backgroundColor: theme.headerBackground}, headerTintColor: theme.text, headerShadowVisible: false, headerShown: false}}>
        <Stack.Screen name="index" options={{ title: "Home" }} />
        <Stack.Screen name="about" options={{ title: "About" }} />
        <Stack.Screen name="recipe" options={{ title: "Recipe" }} />
        <Stack.Screen name="mustVisit" options={{ title: "Must Visit" }} />
        <Stack.Screen name="mustVisitPlace/[id]" />
        <Stack.Screen name="+not-found" options={{headerShown: false}}/>
      </Stack>
  );
}
