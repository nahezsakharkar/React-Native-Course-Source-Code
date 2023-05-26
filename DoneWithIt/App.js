import { useEffect, useState } from "react";
import AuthContext from "./app/auth/context";
import OfflineNotice from "./app/components/OfflineNotice";
import { NavigationContainer } from "@react-navigation/native";
import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
import AuthNavigator from "./app/navigation/AuthNavigator";
import authStorage from "./app/auth/storage";
import * as SplashScreen from "expo-splash-screen";
import { navigationRef } from "./app/navigation/routeNavigation";
import logger from "./app/utility/logger";

logger.start();

export default function App() {
  logger.log(new Error("Error in App"));

  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false);

  const restoreUser = async () => {
    const user = await authStorage.getUser();
    if (user) setUser(user);
  };

  const prepare = async () => {
    try {
      await SplashScreen.preventAutoHideAsync();
      await restoreUser();
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
      <NavigationContainer ref={navigationRef} theme={navigationTheme}>
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
