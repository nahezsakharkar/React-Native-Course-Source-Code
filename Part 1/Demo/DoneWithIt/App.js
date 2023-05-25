import { useEffect, useState, useCallback } from "react";
import AuthContext from "./app/auth/context";
import OfflineNotice from "./app/components/OfflineNotice";
import { NavigationContainer } from "@react-navigation/native";
import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
import AuthNavigator from "./app/navigation/AuthNavigator";
import authStorage from "./app/auth/storage";
import jwtDecode from "jwt-decode";
import * as SplashScreen from "expo-splash-screen";

export default function App() {
  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false);

  const restoreToken = async () => {
    const token = await authStorage.getToken();
    if (!token) return;
    setUser(jwtDecode(token));
  };

  const prepare = async () => {
    try {
      await SplashScreen.preventAutoHideAsync();
      await restoreToken();
    } catch (e) {
      console.warn(e);
    } finally {
      setIsReady(true);
      await SplashScreen.hideAsync();
    }
  };

  useEffect(() => {
    prepare();
  }, []);

  if (!isReady) {
    return null;
  }

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <OfflineNotice />
      <NavigationContainer theme={navigationTheme}>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

// const orientation = () => {
//   const { height, width, scale, fontScale } = useWindowDimensions();
//   return {
//     portrait: height >= width,
//     landscape: width >= height,
//   };
// };
