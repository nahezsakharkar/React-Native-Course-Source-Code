import { useEffect } from "react";
import Screen from "./app/components/Screen";
import * as ImagePicker from "expo-image-picker";

export default function App() {
  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if (!granted) {
      alert("You need to enable permission to access the library");
    }
  };

  useEffect(() => {
    requestPermission();
  }, []);

  return <Screen></Screen>;
}

// const orientation = () => {
//   const { height, width, scale, fontScale } = useWindowDimensions();
//   return {
//     portrait: height >= width,
//     landscape: width >= height,
//   };
// };
