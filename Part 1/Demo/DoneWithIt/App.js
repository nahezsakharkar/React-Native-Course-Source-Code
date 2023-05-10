import { StatusBar } from "expo-status-bar";
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
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello World!</Text>
      <Button
        color="orange"
        title="Click Me"
        onPress={() => console.log("Button Pressed !")}
      />
      {/* <TouchableNativeFeedback onPress={() => console.log("Image Touched!")}>
        <View
          style={{ width: 300, height: 700, backgroundColor: "blue" }}
        ></View>
      </TouchableNativeFeedback> */}
      {/* <Image
          source={{
            width: 200,
            height: 300,
            uri: "https://picsum.photos/200/300",
          }}
        /> */}
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
