import { Pressable, View } from "react-native";
import { Ionicons} from "@expo/vector-icons";

export default function ShareSocialButton() {
  return (
    <View>
      <Pressable>
        <Ionicons name="share-social" size={32} color="white" />
      </Pressable>
    </View>
  );
}
