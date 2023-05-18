import { Text, Button } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Screen from "./app/components/Screen";

function Tweets({ navigation }) {
  return (
    <Screen>
      <Text>Tweets</Text>
      <Button
        title="View Tweet"
        onPress={() => navigation.navigate("TweetDetails", { id: 1 })}
      />
    </Screen>
  );
}

function TweetDetails({ route }) {
  return (
    <Screen>
      <Text>Tweet Details {route.params.id}</Text>
    </Screen>
  );
}

const Stack = createNativeStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "dodgerblue" },
        headerTintColor: "white",
        // headerShown: false,
      }}
    >
      <Stack.Screen name="Tweets" component={Tweets} />
      <Stack.Screen
        name="TweetDetails"
        component={TweetDetails}
        options={{
          headerStyle: { backgroundColor: "tomato" },
          headerTintColor: "white",
          // headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}

// const orientation = () => {
//   const { height, width, scale, fontScale } = useWindowDimensions();
//   return {
//     portrait: height >= width,
//     landscape: width >= height,
//   };
// };
