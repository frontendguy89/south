import { Pressable, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function RatingButton() {
  return (
    <View>
      <Pressable>
        <Ionicons name="star" size={32} color="white" />
      </Pressable>
    </View>
  );
}
