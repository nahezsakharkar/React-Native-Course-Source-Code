import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";
import * as Location from "expo-location";

import {
  AppForm,
  AppFormField,
  AppFormPicker,
  SubmitButton,
} from "../components/forms";
import Screen from "../components/Screen";
import CategoryPickerItem from "../components/CategoryPickerItem";
import AppFormImagePicker from "../components/forms/AppFormImagePicker";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().label("Category"),
  images: Yup.array().min(1, "Please select atleast one Image"),
});

const categories = [
  { label: "Furniture", value: 1, backgroundColor: "red", icon: "apps" },
  { label: "Clothing", value: 2, backgroundColor: "green", icon: "email" },
  { label: "Camera", value: 3, backgroundColor: "blue", icon: "lock" },
];

function ListingEditScreen() {
  const [location, setLocation] = useState();

  const getLocation = async () => {
    const { granted } = await Location.requestForegroundPermissionsAsync();
    if (!granted) return;
    const {
      coords: { latitude, longitude },
    } = await Location.getLastKnownPositionAsync();
    setLocation({ latitude, longitude });
  };

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
          images: [],
        }}
        onSubmit={(values) => console.log(location)}
        validationSchema={validationSchema}
      >
        <AppFormImagePicker name="images" />
        <AppFormField maxLength={255} placeholder="Title" name="title" />
        <AppFormField
          keyboardType="numeric"
          maxLength={8}
          placeholder="Price"
          name="price"
          width={120}
        />
        <AppFormPicker
          items={categories}
          numberOfColumns={3}
          placeholder="Category"
          PickerItemComponent={CategoryPickerItem}
          name="category"
          width="50%"
        />
        <AppFormField
          maxLength={255}
          numberOfLines={3}
          multiline
          placeholder="Description"
          name="description"
        />
        <SubmitButton title="Post" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: { padding: 10 },
});

export default ListingEditScreen;
