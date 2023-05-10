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
  Alert,
  Platform,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={[styles.container, containerStyle]}>
      <Text>Hello World!</Text>
      <Button
        title="Click Me"
        onPress={() =>
          Alert.prompt("Title", "Message", (text) => console.log(text))
        }
      />
      {/* <Button
        title="Click Me"
        onPress={() =>
          Alert.alert("Title", "Message", [
            { text: "Yes", onPress: () => console.log("Yes Clicked.") },
            { text: "No", onPress: () => console.log("No Clicked.") },
          ])
        }
      /> */}
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

const containerStyle = { backgroundColor: "orange" };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
