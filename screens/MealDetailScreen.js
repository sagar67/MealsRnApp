import { useLayoutEffect } from "react";
import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import MealDetails from "../components/MealDetails";
import { MEALS } from "../data/dummy-data";

function MealDetailScreen({ route, navigation }) {
  const mealId = route.params.mealId;

  function pressHandler() {
    console.log("Presses");
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <Button title="Tpa Heree" onPress={pressHandler} />;
      },
      
    });
  }, [navigation, pressHandler]);

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  console.log(
    "*** MealDetailScreen selectedMeal imageUrl ",
    selectedMeal.imageUrl
  );
  return (
    <ScrollView style={styles.rootContainer}>
      <View style={styles.upperContainer}>
        <Image
          source={{ uri: selectedMeal.imageUrl }}
          style={styles.imageContainer}
        />
        <Text style={styles.title}>{selectedMeal.title}</Text>
        <MealDetails
          duration={selectedMeal.duration}
          complexity={selectedMeal.complexity}
          affordability={selectedMeal.affordability}
          textStyle={styles.textStyle}
        />
      </View>
      {selectedMeal.ingredients.map((ingredient) => (
        <View style={styles.ingredientsContainer}>
          <Text style={styles.ingredients} key={ingredient}>
            {ingredient}
          </Text>
        </View>
      ))}
      <View style={styles.stepsContainer}>
        {selectedMeal.steps.map((step) => (
          <Text style={styles.steps} key={step}>
            {step}
          </Text>
        ))}
      </View>
    </ScrollView>
  );
}

export default MealDetailScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 20,
  },
  imageContainer: {
    width: "100%",
    height: 300,
  },
  upperContainer: {
    borderBottomWidth: 3,
    borderBottomColor: "black",
    marginHorizontal: 30,
    marginVertical: 10,
  },
  ingredientsContainer: {
    borderRadius: 8,
    borderColor: "black",
    borderWidth: 3,
    marginHorizontal: 10,
    marginVertical:5,
    padding: 5,
    backgroundColor:'#ccc'
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
  },
  stepsContainer:{
    borderRadius:6,
    borderWidth:2,
    borderColor:'black',
    margin:10,
    padding:5,
    backgroundColor:'#E6D462'
  }
});
