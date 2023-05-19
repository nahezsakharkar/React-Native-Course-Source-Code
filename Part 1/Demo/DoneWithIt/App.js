import { Text, Button } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Screen from "./app/components/Screen";
import AuthNavigator from "./app/navigation/AuthNavigator";

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

function Account() {
  return (
    <Screen>
      <Text>Account</Text>
    </Screen>
  );
}

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Feed" component={StackNavigator} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <AuthNavigator />
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
