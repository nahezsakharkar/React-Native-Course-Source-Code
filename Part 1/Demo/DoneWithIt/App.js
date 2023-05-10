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
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          // alignContent: "center",
          // flexWrap: "wrap",
        }}
      >
        <View
          style={{
            backgroundColor: "blue",
            flexBasis: 100, // equivalent to height or width
            flexGrow: 1, // will grow to fit whole into the vacant space
            flexShrink: 1, // will shrink to adust other items
            width: 100,
            height: 100,
            alignSelf: "flex-end",
          }}
        ></View>
        <View
          style={{ backgroundColor: "gold", width: 300, height: 100 }}
        ></View>
        <View
          style={{ backgroundColor: "tomato", width: 100, height: 100 }}
        ></View>
        {/* <View
          style={{ backgroundColor: "gray", width: 100, height: 100 }}
        ></View>
        <View
          style={{ backgroundColor: "greenyellow", width: 100, height: 100 }}
        ></View>
        <View
          style={{ backgroundColor: "purple", width: 100, height: 100 }}
        ></View> */}
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
