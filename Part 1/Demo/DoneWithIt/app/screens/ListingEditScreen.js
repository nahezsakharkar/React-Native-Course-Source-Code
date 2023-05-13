import { StyleSheet } from "react-native";
import * as Yup from "yup";

import {
  AppForm,
  AppFormField,
  AppFormPicker,
  SubmitButton,
} from "../components/forms";
import Screen from "../components/Screen";
import CategoryPickerItem from "../components/CategoryPickerItem";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
});

const categories = [
  { label: "Furniture", value: 1, backgroundColor: "red", icon: "apps" },
  { label: "Clothing", value: 2, backgroundColor: "green", icon: "email" },
  { label: "Camera", value: 3, backgroundColor: "blue", icon: "lock" },
];

function ListingEditScreen(props) {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
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
