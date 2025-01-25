//Its the main homepage/explore page
import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="font-bold text-lg my-10">Welcome !</Text>
      <Link href="/sign_in"> Sign In</Link>
      <Link href="/profile"> Profile</Link>
      <Link href="/cart"> Cart</Link>
      <Link href="/wishlist"> Wish List</Link>
    </View>
  );
}
