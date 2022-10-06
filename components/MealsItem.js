import { useNavigation } from "@react-navigation/native";
import {
  Text,
  View,
  Pressable,
  StyleSheet,
  Image,
  Platform,
} from "react-native";
import MealDetails from "./MealDetails";

function MealsItem({
  id,
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
}) {
  console.log("*** MealsItem imageUrl", imageUrl);

  const navigation = useNavigation();

  function onPressHandler() {
    navigation.navigate("Meal Detail", {
      mealId: id,
    });
  }

  return (
    <View style={styles.rootContainer}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
        onPress={onPressHandler}
      >
        <View>
          <Image source={{ uri: imageUrl }} style={styles.imageContainer} />
          <Text style={styles.title}>{title}</Text>
        </View>
        <MealDetails
          duration={duration}
          complexity={complexity}
          affordability={affordability}
        />
      </Pressable>
    </View>
  );
}

export default MealsItem;

const styles = StyleSheet.create({
  rootContainer: {
    margin: 6,
    borderRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    backgroundColor: "white",
    elevation: 8,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
  },
  imageContainer: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
  },

  buttonPressed: {
    opacity: Platform.OS === "ios" ? 0.25 : 1,
  },
});
