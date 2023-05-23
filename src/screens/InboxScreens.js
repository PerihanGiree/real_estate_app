import { StyleSheet, Text, View } from "react-native";
import React from "react";

const InboxScreens = () => {
  return (
    <View>
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 24,
          marginTop: 60,
          marginLeft: 40,
        }}
      >
        Gelen Kutusu
      </Text>
      <View
        style={{
          width: "96%",
          borderBottomColor: "#E9E9E9",
          borderBottomWidth: 1,
          flexDirection: "row",
          marginLeft: 40,
          marginTop: 20,
        }}
      >
        <Text style={{ marginRight: 10 }}>Mesajlar</Text>
        <Text>Bildirimler</Text>
      </View>
      <Text style={{ fontWeight: "bold", marginLeft: 40, marginTop: 20 }}>
        Okunmamış Mesajınız Yok
      </Text>
    </View>
  );
};

export default InboxScreens;

const styles = StyleSheet.create({});
