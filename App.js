import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailScreen from "./screens/MealDetailScreen";
export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <>
      <StatusBar style="light" backgroundColor="#000000" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Meals Category"
          screenOptions={{
            headerStyle: { backgroundColor: "#000000" },
            headerTintColor: "#fff",
            contentStyle: { backgroundColor: "#A8E34E" },
          }}
        >
          <Stack.Screen
            name="Meals Category"
            component={CategoriesScreen}
            options={{
              title: "All Categories",
            }}
          />
          <Stack.Screen
            name="Meals Overview"
            component={MealsOverviewScreen}
          />
          <Stack.Screen name="Meal Detail" component={MealDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});
