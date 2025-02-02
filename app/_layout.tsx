import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { Appearance, StyleSheet} from 'react-native';
import { Colors } from '@/constants/Colors';
import { Tabs } from 'expo-router';
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

  const styles = StyleSheet.create({
    tabContainer: {
      position: 'absolute',
      bottom: 0,
      width: '100%',
      height: 70,
      elevation: 5,
      flexDirection: 'row',
      justifyContent: 'space-around',
      paddingHorizontal: 20,
      alignItems: 'center',
    },
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
      <Tabs 
        screenOptions={{
          headerStyle: {backgroundColor: theme.headerBackground}, 
          headerTintColor: theme.text, 
          headerShadowVisible: false, 
          headerShown: false ,
          tabBarActiveTintColor: theme.text , 
          tabBarStyle: {...styles.tabContainer},
          tabBarIcon: () => null, 
          tabBarShowLabel: true,
        }}
      >
        <Tabs.Screen name="about" options={{ title: "About" ,tabBarLabel: "About"}} />
        <Tabs.Screen name="recipe" options={{ title: "Recipe", tabBarLabel: "Recipe" }} />
        <Tabs.Screen name="index" options={{ title: "Home", tabBarLabel: "Home"}} />
        <Tabs.Screen name="mustVisit" options={{ title: "Must Visit", tabBarLabel: "Must Visit" }} />
        <Tabs.Screen name="withCoffee" options={{ title: "With Coffee",tabBarLabel: "With Coffee" }} />
        <Tabs.Screen name="mustVisitPlace/[id]" />
        <Tabs.Screen name="+not-found" options={{ href: null }} />
      </Tabs>
  );
}