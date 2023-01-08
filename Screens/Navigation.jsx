import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FullPost from "../components/FullPost";
import HomeScreen from "./Home";
import { NavigationContainer } from "@react-navigation/native";
const Stack = createNativeStackNavigator();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="home"
          component={HomeScreen}
          options={{ title: "Home Page" }}
        />
        <Stack.Screen
          name="fullpost"
          component={FullPost}
          options={{ title: "Post Page" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
