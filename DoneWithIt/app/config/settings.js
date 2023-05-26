import Constants from "expo-constants";

const settings = {
  dev: {
    apiUrl: "http://192.168.31.84:19080/api",
  },
  staging: {
    apiUrl: "http://192.168.31.84:19080/api",
  },
  prod: {
    apiUrl: "http://192.168.31.84:19080/api",
  },
};

const getCurrentSettings = () => {
  if (__DEV__) return settings.dev;
  if (Constants.manifest.releaseChannel === "staging") return settings.staging;
  return settings.prod;
};

export default getCurrentSettings();
