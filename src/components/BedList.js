import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const BedList = () => {
  const categoryList = ["1", "2", "3", "4", "5"];

  const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(0);
  return (
    <View style={style.categoryListContainer}>
      {categoryList.map((category, index) => (
        <TouchableOpacity
          style={{
            width: 30,
            height: 30,
            borderRadius: 100,
            backgroundColor: "white",
            justifyContent: "center",
            alignItems: "center",
            borderWidth: 2,
            borderColor: "black",
            margin: 5,
          }}
          key={index}
          onPress={() => setSelectedCategoryIndex(index)}
        >
          <Text
            style={[
              style.categoryListText,
              index == selectedCategoryIndex && style.activeCategoryListText,
            ]}
          >
            {category}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default BedList;

const style = StyleSheet.create({
  categoryListText: {
    fontSize: 16,
    fontWeight: "bold",
    paddingBottom: 5,
    color: "gray",
  },
  activeCategoryListText: {
    color: "black",
    borderBottomWidth: 1,
    paddingBottom: 5,
  },
  categoryListContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
    paddingHorizontal: 10,
  },
});
