import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ImageBackground,
} from "react-native";
import React from "react";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import ListCategories from "../components/ListCategories";
import BedList from "../components/BedList";

const HomeScreen = () => {
  return (
    <View>
      <ImageBackground
        resizeMode="cover"
        style={{ height: "80%", width: "100%" }}
        source={require("../assets/house1.jpg")}
      >
        <View
          style={{
            width: 350,
            height: 70,
            backgroundColor: "#F5FFFA",
            borderRadius: 50,
            margin: 30,
            marginTop: 250,
            opacity: 0.8,
          }}
        >
          <View style={{ flex: 1, flexDirection: "row" }}>
            <TouchableOpacity
              style={{
                justifyContent: "center",
                aliginItems: "center",
                width: 150,
                height: 50,
                backgroundColor: "black",
                marginLeft: 15,
                marginTop: 10,
                borderRadius: 50,
              }}
            >
              <Text style={{ color: "white", marginLeft: 50 }}>Buy</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                justifyContent: "center",
                aliginItems: "center",
                width: 150,
                height: 50,
                backgroundColor: "black",
                marginLeft: 15,
                marginTop: 10,
                borderRadius: 50,
              }}
            >
              <Text style={{ color: "white", marginLeft: 50 }}>Rent</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            width: 350,
            height: 350,
            backgroundColor: "#F5FFFA",
            margin: 30,
            //  opacity: 0.75,
            borderRadius: 20,
          }}
        >
          <ListCategories />
          <View style={{ flexDirection: "row", marginLeft: 35, marginTop: 20 }}>
            <Ionicons name="location-outline" size={28} color="black" />
            <TextInput
              style={{
                borderBottomWidth: 2,
                borderBottomColor: "black",
                width: 250,
              }}
            ></TextInput>
          </View>
          <View style={{ flexDirection: "row", marginLeft: 35, marginTop: 20 }}>
            <Ionicons
              style={{ marginTop: 10 }}
              name="bed"
              size={28}
              color="black"
            />
            <BedList />
          </View>
          <View style={{ flexDirection: "row", marginLeft: 35, marginTop: 20 }}>
            <FontAwesome5
              style={{ marginTop: 10 }}
              name="bath"
              size={24}
              color="black"
            />
            <BedList />
          </View>
          <TouchableOpacity
            style={{
              width: 300,
              height: 40,
              backgroundColor: "black",
              margin: 30,
              //  opacity: 0.75,
              borderRadius: 20,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "white" }}>Find Housing</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
