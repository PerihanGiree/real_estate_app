import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  SafeAreaView,
} from "react-native";
import React from "react";
import {
  Ionicons,
  MaterialIcons,
  MaterialCommunityIcons,
  Foundation,
} from "@expo/vector-icons";
const ProfileScreen = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        flexDirection: "column",
        marginLeft: 20,
        marginTop: 60,
      }}
    >
      <Text style={{ fontWeight: "bold", fontSize: 24, marginLeft: 30 }}>
        Profil
      </Text>
      <ScrollView style={{ width: "100%", marginTop: 20 }}>
        <View
          style={{
            width: "96%",
            height: 100,
            // backgroundColor: "red",
            borderBottomColor: "#E9E9E9",
            borderBottomWidth: 1,
          }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
              marginLeft: 20,
              // justifyContent: "center",
            }}
          >
            <Ionicons name="person-circle-outline" size={60} color="gray" />
            <View
              style={{
                flex: 1,
                flexDirection: "column",
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  color: "black",
                  marginTop: 10,
                  marginLeft: 10,
                }}
              >
                Perihan
              </Text>
              <Text style={{ color: "gray", marginLeft: 10 }}>
                Profili göster
              </Text>
            </View>
            <Ionicons
              name="md-arrow-forward"
              size={24}
              color="black"
              style={{ marginRight: 30, marginTop: 10 }}
            />
          </View>
        </View>
        <View
          style={{
            width: 350,
            marginLeft: 10,
            marginTop: 20,
            height: 200,
            //  backgroundColor: "red",
            borderRadius: 10,
            borderWidth: 1,
            borderColor: "gray",
          }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
              padding: 4,
            }}
          >
            <View>
              <Text
                style={{
                  flexDirection: "row",
                  fontWeight: "bold",
                  marginTop: 50,
                  marginLeft: 10,
                  fontSize: 18,
                }}
              >
                Yerinizi Bize Taşıyın !!
              </Text>
              <Text style={{ marginLeft: 10 }}>Kolayca şatış </Text>
              <Text style={{ marginLeft: 10 }}>kiralama yapabilirsiniz</Text>
            </View>
            <View>
              <Image
                style={{
                  width: 120,
                  height: 120,
                  marginRight: 20,
                  marginTop: 20,
                  borderRadius: 10,
                }}
                resizeMode="cover"
                source={require("../assets/house3.jpg")}
              />
            </View>
          </View>
        </View>
        <Text
          style={{
            marginTop: 20,
            marginLeft: 20,
            fontWeight: "bold",
            fontSize: 20,
          }}
        >
          Ayarlar
        </Text>
        <View style={styles.profileElementContainer}>
          <View style={styles.profileContAlt}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Ionicons
                name="md-person-circle-outline"
                size={30}
                color="black"
                style={{ padding: 2 }}
              />
              <Text style={styles.text}>Kişisel Bilgiler</Text>
            </View>
            <Ionicons
              name="md-arrow-forward"
              size={24}
              color="black"
              style={{ marginRight: 30, marginTop: 10 }}
            />
          </View>
        </View>

        <View style={styles.profileElementContainer}>
          <View style={styles.profileContAlt}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <MaterialIcons
                name="security"
                size={24}
                color="black"
                style={{ padding: 2 }}
              />
              <Text style={styles.text}>Giriş Yapma ve Güvenlik</Text>
            </View>
            <Ionicons
              name="md-arrow-forward"
              size={24}
              color="black"
              style={{ marginRight: 30, marginTop: 10 }}
            />
          </View>
        </View>

        <View style={styles.profileElementContainer}>
          <View style={styles.profileContAlt}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <MaterialIcons
                name="payments"
                size={24}
                color="black"
                style={{ padding: 2 }}
              />
              <Text style={styles.text}>Yaptığınız ve Aldığınız Ödemeler</Text>
            </View>
            <Ionicons
              name="md-arrow-forward"
              size={24}
              color="black"
              style={{ marginRight: 30, marginTop: 10 }}
            />
          </View>
        </View>

        <View style={styles.profileElementContainer}>
          <View style={styles.profileContAlt}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <MaterialCommunityIcons
                name="access-point"
                size={24}
                color="black"
                style={{ padding: 2 }}
              />
              <Text style={styles.text}>Erişilebilirlik</Text>
            </View>
            <Ionicons
              name="md-arrow-forward"
              size={24}
              color="black"
              style={{ marginRight: 30, marginTop: 10 }}
            />
          </View>
        </View>

        <View style={styles.profileElementContainer}>
          <View style={styles.profileContAlt}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Foundation
                name="page-multiple"
                size={24}
                color="black"
                style={{ padding: 2 }}
              />
              <Text style={styles.text}>Vergiler</Text>
            </View>
            <Ionicons
              name="md-arrow-forward"
              size={24}
              color="black"
              style={{ marginRight: 30, marginTop: 10 }}
            />
          </View>
        </View>

        <View style={styles.profileElementContainer}>
          <View style={styles.profileContAlt}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <MaterialIcons
                name="translate"
                size={24}
                color="black"
                style={{ padding: 2 }}
              />
              <Text style={styles.text}>Çeviri</Text>
            </View>
            <Ionicons
              name="md-arrow-forward"
              size={24}
              color="black"
              style={{ marginRight: 30, marginTop: 10 }}
            />
          </View>
        </View>

        <View style={styles.profileElementContainer}>
          <View style={styles.profileContAlt}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Ionicons
                name="notifications-outline"
                size={24}
                color="black"
                style={{ padding: 2 }}
              />
              <Text style={styles.text}>Bildirimler</Text>
            </View>
            <Ionicons
              name="md-arrow-forward"
              size={24}
              color="black"
              style={{ marginRight: 30, marginTop: 10 }}
            />
          </View>
        </View>

        <View style={styles.profileElementContainer}>
          <View style={styles.profileContAlt}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <MaterialIcons name="lock-outline" size={24} color="black" />
              <Text style={styles.text}>Gizlilik ve Paylaşım</Text>
            </View>
            <Ionicons
              name="md-arrow-forward"
              size={24}
              color="black"
              style={{ marginRight: 30, marginTop: 10 }}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  profileElementContainer: {
    width: "96%",
    height: 50,
    flexDirection: "column",
    borderBottomColor: "#E9E9E9",
    borderBottomWidth: 1,
  },
  profileContAlt: {
    flexDirection: "row",
    marginLeft: 20,
    alignItems: "center",
    justifyContent: "space-between",
  },
  text: {
    fontSize: 15,
    letterSpacing: 1,
    marginLeft: 10,
  },
});
