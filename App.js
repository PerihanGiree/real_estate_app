import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigation from "./src/Navigation/TabNavigation";
import HomeScreen from "./src/screens/HomeScreen";
import InboxScreens from "./src/screens/InboxScreens";
import ExploreScreen from "./src/screens/ExploreScreen";
import SaveScreen from "./src/screens/SaveScreen";
import ProfileScreen from "./src/screens/ProfileScreen";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Tab" component={TabNavigation} />
        <Stack.Screen name="Anasayfa" component={HomeScreen} />
        <Stack.Screen name="Gelen Kutusu" component={InboxScreens} />
        <Stack.Screen name="Arama" component={ExploreScreen} />
        <Stack.Screen name="Harita" component={SaveScreen} />
        <Stack.Screen name="Profil" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
