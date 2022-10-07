import { Pressable, View, Text, StyleSheet, Platform } from "react-native";

function CategoryGridTile({ title, color, onPress }) {
  return (
    <View style={[styles.gridItems, { backgroundColor: color }]}>
      <Pressable
        android_ripple={{ color: "#E0E0E0" }}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={onPress}
      >
        <View style={styles.itemContainer}>
          <Text style={styles.itemTitle}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItems: {
    flex: 1,
    marginHorizontal: 22,
    marginVertical: 15,
    height: 150,
    borderRadius: 16,
    backgroundColor: "white",
    elevation: 8,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  buttonPressed: {
    opacity: Platform.OS === "ios" ? 0.25 : 1,
  },
  button: {
    flex: 1,
  },
  itemContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
