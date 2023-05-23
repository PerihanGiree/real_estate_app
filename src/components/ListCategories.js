import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const ListCategories = () => {
  const categoryList = ["All", "Hause", "Apartement"];

  const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(0);
  return (
    <View style={style.categoryListContainer}>
      {categoryList.map((category, index) => (
        <TouchableOpacity
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

export default ListCategories;

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
    marginTop: 40,
    paddingHorizontal: 40,
  },
});
