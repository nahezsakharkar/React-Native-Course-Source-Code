import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
  useWindowDimensions,
} from "react-native";

export default function App() {
  const orientation = () => {
    const { height, width, scale, fontScale } = useWindowDimensions();
    return {
      portrait: height >= width,
      landscape: width >= height,
    };
  };

  // const { landscape } = orientation();

  return (
    <SafeAreaView style={[styles.container, containerStyle]}>
      <View
        style={{
          backgroundColor: "dodgerblue",
          flex: 1,
          flexDirection: "",
        }}
      >
        <View
          style={{ backgroundColor: "blue", width: 100, height: 100 }}
        ></View>
        <View
          style={{ backgroundColor: "gold", width: 100, height: 100 }}
        ></View>
        <View
          style={{ backgroundColor: "tomato", width: 100, height: 100 }}
        ></View>
      </View>
      <ExpoStatusBar style="auto" />
    </SafeAreaView>
  );
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
