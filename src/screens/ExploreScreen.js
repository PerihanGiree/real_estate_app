import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ScrollView,
} from "react-native";
import React from "react";
import {
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome,
} from "@expo/vector-icons";
import houses from "../consts/houses";
const ExploreScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
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

      <ScrollView>
        {/**Liste */}
        {houses.map((item) => {
          return (
            <View
              key={item.id}
              style={{
                width: "90%",
                height: 150,
                marginTop: 30,
                margin: 20,
                alignItems: "flex-end",
                flexDirection: "row",
              }}
            >
              <View
                style={{
                  width: "50%",
                  height: "100%",
                  justifyContent: "flex-start",
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
                <Image
                  source={item.image}
                  resizeMode="cover"
                  style={{ height: 150, width: 200, borderRadius: 15 }}
                />
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <TouchableOpacity
                    style={{
                      width: 100,
                      height: 30,
                      flexDirection: "row",
                      backgroundColor: "black",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: 20,
                    }}
                  >
                    <Text style={{ color: "white" }}>Map</Text>
                    <Ionicons
                      name="map"
                      size={20}
                      color="white"
                      style={{ margin: 2 }}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <View
                style={{
                  width: "50%",
                  height: "100%",
                  //   backgroundColor: "black",
                  justifyContent: "flex-end",
                  marginLeft: 20,
                }}
              >
                <Text
                  style={{ fontWeight: "bold", marginTop: 10, fontSize: 16 }}
                >
                  {item.title}
                </Text>
                <View style={{ flexDirection: "row" }}>
                  <Ionicons
                    style={{}}
                    name="md-pricetag"
                    size={20}
                    color="black"
                  />
                  <Text style={{ color: "red" }}>{item.price}</Text>
                </View>
                <Text>{item.details}</Text>
                <View style={{ flexDirection: "row" }}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("Profil")}
                  >
                    <Ionicons name="location" size={20} color="black" />
                  </TouchableOpacity>
                  <Text style={{ color: "green" }}>{item.location}</Text>
                </View>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ExploreScreen;

const styles = StyleSheet.create({});
