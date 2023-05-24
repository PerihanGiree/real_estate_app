import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import InboxScreens from "../screens/InboxScreens";
import ExploreScreen from "../screens/ExploreScreen";
import SaveScreen from "../screens/SaveScreen";
import ProfileScreen from "../screens/ProfileScreen";
import TabNavigator from "./TabNavigator";

const Stack = createNativeStackNavigator();
export default function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Navigator name="Tab" component={TabNavigator} />
      <Stack.Screen name="Anasayfa" component={HomeScreen} />
      <Stack.Screen name="GelenKutusu" component={InboxScreens} />
      <Stack.Screen name="Arama" component={ExploreScreen} />
      <Stack.Screen name="Harita" component={SaveScreen} />
      <Stack.Screen name="Profil" component={ProfileScreen} />
    </Stack.Navigator>
  );
}
