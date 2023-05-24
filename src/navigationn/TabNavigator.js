import { View, Text } from "react-native";
import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import SaveScreen from "../screens/SaveScreen";
import ProfileScreen from "../screens/ProfileScreen";
import InboxScreens from "../screens/InboxScreens";
import ExploreScreen from "../screens/ExploreScreen";
import HomeScreen from "../screens/HomeScreen";

const Tab = createBottomTabNavigator();
export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Anasayfa") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Harita") {
            iconName = focused ? "ios-map" : "ios-map-outline";
          } else if (route.name === "GelenKutusu") {
            iconName = focused ? "chatbox" : "chatbox-outline";
          } else if (route.name === "Profil") {
            iconName = focused ? "md-person" : "md-person-outline";
          } else if (route.name === "Arama") {
            iconName = focused
              ? "md-search-circle-sharp"
              : "md-search-circle-outline";
          }
          // You can return any component that you like here!
          return <Ionicons name={iconName} size={30} color={"black"} />;
        },
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "gray",
        headerShown: false,
      })}
    >
      <Tab.Screen name="GelenKutusu" component={InboxScreens} />
      <Tab.Screen name="Anasayfa" component={HomeScreen} />
      <Tab.Screen name="Arama" component={ExploreScreen} />
      <Tab.Screen name="Harita" component={SaveScreen} />
      <Tab.Screen name="Profil" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
