import { Text, View } from "react-native";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          // fontFamily: "Roboto",
          fontSize: 30,
          fontStyle: "italic",
          fontWeight: "600", // or bold, etc
          color: "tomato",
          textTransform: "capitalize",
          textAlign: "center",
          lineHeight: 30,
        }}
      >
        I Love React Native! This is my first react native app so i will try to
        add more text inside this and so on and on.
      </Text>
    </View>
  );
}

// import ViewImageScreen from "./app/screens/ViewImageScreen";
// import WelcomeScreen from "./app/screens/WelcomeScreen";
// const orientation = () => {
//   const { height, width, scale, fontScale } = useWindowDimensions();
//   return {
//     portrait: height >= width,
//     landscape: width >= height,
//   };
// };
