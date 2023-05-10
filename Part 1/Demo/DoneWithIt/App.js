import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight,
  TouchableNativeFeedback,
  Button,
  Alert,
  Platform,
  StatusBar,
  Dimensions,
  useWindowDimensions,
} from "react-native";

export default function App() {
  // console.log("Screen : ", Dimensions.get("screen"));
  // console.log("Window : ", Dimensions.get("window"));

  const orientation = () => {
    const { height, width, scale, fontScale } = useWindowDimensions();
    return {
      portrait: height >= width,
      landscape: width >= height,
    };
  };

  const { landscape } = orientation();

  return (
    <SafeAreaView style={[styles.container, containerStyle]}>
      <View
        style={{
          backgroundColor: "dodgerblue",
          width: "100%",
          height: landscape ? "100%" : "30%",
        }}
      ></View>
      <ExpoStatusBar style="auto" />
    </SafeAreaView>
  );
}

{
  /* <Text>Hello World!</Text> */
}
{
  /* <Button
  title="Click Me"
  onPress={() =>
    Alert.prompt("Title", "Message", (text) => console.log(text))
  }
/> */
}
{
  /* <Button
  title="Click Me"
  onPress={() =>
    Alert.alert("Title", "Message", [
      { text: "Yes", onPress: () => console.log("Yes Clicked.") },
      { text: "No", onPress: () => console.log("No Clicked.") },
    ])
  }
/> */
}
{
  /* <TouchableNativeFeedback onPress={() => console.log("Image Touched!")}>
  <View
    style={{ width: 300, height: 700, backgroundColor: "blue" }}
  ></View>
</TouchableNativeFeedback> */
}
{
  /* <Image
    source={{
      width: 200,
      height: 300,
      uri: "https://picsum.photos/200/300",
    }}
  /> */
}

const containerStyle = { backgroundColor: "orange" };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    // alignItems: "center",
    // justifyContent: "center",
  },
});
