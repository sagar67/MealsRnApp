import { StyleSheet, View, Text } from "react-native";

function MealDetails({ duration, complexity, affordability,style, textStyle }) {
  return (
    <View style={[styles.details,style]}>
      <Text style={[styles.detail,textStyle]}>{duration}m</Text>
      <Text style={[styles.detail,textStyle]}>{complexity.toUpperCase()}</Text>
      <Text style={[styles.detail,textStyle]}>{affordability.toUpperCase()}</Text>
    </View>
  );
}

export default MealDetails;

const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    padding: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  detail: {
    marginHorizontal: 8,
    fontStyle: "italic",
    marginBottom: 4,
  },
});
