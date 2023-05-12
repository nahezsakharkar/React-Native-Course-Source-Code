import ListItem from "../components/ListItem";
import Screen from "../components/Screen";

function AccountScreen(props) {
  return (
    <Screen>
      <ListItem
        title="John Doe"
        subTitle="johndoe@email.com"
        image={require("../assets/profile.jpg")}
      ></ListItem>
    </Screen>
  );
}

export default AccountScreen;
