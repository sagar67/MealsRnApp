import { useLayoutEffect } from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import MealsItem from "../components/MealsItem";
import { CATEGORIES, MEALS } from "../data/dummy-data";

function MealsOverviewScreen({ route, navigation }) {
  const catId = route.params.categoryId;

  useLayoutEffect(() => {
    const mealsTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;

    navigation.setOptions({
      title: mealsTitle,
    });
  }, [catId, navigation]);

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  function displayedMealsItem(itemData) {
    const item = itemData.item;
    const mealData = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
    };
    return <MealsItem {...mealData} />;
  }

  return (
    <View style={styles.mealsContainer}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={displayedMealsItem}
      />
    </View>
  );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  mealsContainer: {
    flex: 1,
    padding: 20,
  },
});
