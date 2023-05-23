import React from "react";
import MapView from "react-native-maps";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
} from "react-native";
import {
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
export default function SaveScreen() {
  return (
    <View style={styles.container}>
      <View
        style={{
          width: "100%",
          //   height: "20%",
          backgroundColor: "white",
          alignItems: "flex-start",
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 0.5,
          shadowRadius: 3.84,

          elevation: 10,
        }}
      >
        <View style={{ marginTop: 50, marginLeft: 20, flexDirection: "row" }}>
          <Ionicons name="arrow-back" size={30} color="black" />

          <TextInput
            placeholder="Surabaya City,Java Timur"
            style={{
              paddingLeft: 20,
              marginLeft: 20,
              width: 250,
              height: 40,
              backgroundColor: "#ccc",
              borderRadius: 20,
              color: "black",
            }}
          ></TextInput>
          <MaterialCommunityIcons
            style={{ marginLeft: 20 }}
            name="tune-variant"
            size={30}
            color="black"
          />
        </View>

        <View style={{ flexDirection: "row", marginLeft: 15 }}>
          <View
            style={{
              flexDirection: "row",
              padding: 2,
              width: 120,
              height: 40,
              backgroundColor: "white",
              borderRadius: 20,
              marginTop: 20,
              //justifyContent: "center",
              alignItems: "center",
              borderWidth: 1,
              borderColor: "#121212",
            }}
          >
            <TouchableOpacity>
              <FontAwesome
                style={{ marginLeft: 25, marginBottom: 10 }}
                name="sort-down"
                size={24}
                color="black"
              />
            </TouchableOpacity>
            <Text style={{ margin: 4, fontWeight: "bold" }}>Sort</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              padding: 2,
              width: 120,
              height: 40,
              backgroundColor: "white",
              borderRadius: 20,
              marginTop: 20,
              //justifyContent: "center",
              alignItems: "center",
              margin: 8,
              borderWidth: 1,
              borderColor: "#121212",
            }}
          >
            <TouchableOpacity>
              <FontAwesome
                style={{ marginLeft: 25, marginBottom: 10 }}
                name="sort-down"
                size={24}
                color="black"
              />
            </TouchableOpacity>
            <Text style={{ margin: 4, fontWeight: "bold" }}>Price</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              padding: 2,
              width: 120,
              height: 40,
              backgroundColor: "white",
              borderRadius: 20,
              marginTop: 20,
              //justifyContent: "center",
              alignItems: "center",
              margin: 8,
              borderWidth: 1,
              borderColor: "#121212",
            }}
          >
            <TouchableOpacity>
              <FontAwesome
                style={{ marginLeft: 18, marginBottom: 10 }}
                name="sort-down"
                size={24}
                color="black"
              />
            </TouchableOpacity>
            <Text style={{ margin: 4, fontWeight: "bold" }}>Range Area</Text>
          </View>
        </View>
      </View>
      <MapView style={styles.map} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "",
  },
  map: {
    width: "100%",
    height: "90%",
  },
});
