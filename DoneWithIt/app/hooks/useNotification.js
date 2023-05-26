import { useEffect, useState } from "react";
import * as Device from "expo-device";
import * as Notifications from "expo-notifications";
import expoPushTokensApi from "../api/expoPushTokens";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

export default useNotifications = (notificationListner) => {
  const [expoPushToken, setExpoPushToken] = useState("");

  useEffect(() => {
    registerForPushNotifications();

    if (notificationListner)
      Notifications.addNotificationResponseReceivedListener(
        notificationListner
      );
  }, []);

  async function registerForPushNotifications() {
    if (Device.isDevice) {
      try {
        const { granted } = await Notifications.getPermissionsAsync();
        if (!granted) return;
        const token = (await Notifications.getExpoPushTokenAsync()).data;
        setExpoPushToken(token);
        expoPushTokensApi.register(token);
      } catch (error) {
        alert("Failed to get push token for push notification!");
      }
    } else {
      alert("Must use physical device for Push Notifications");
    }
  }

  return expoPushToken;
};
