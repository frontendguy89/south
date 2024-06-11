import { View, Text } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import Logo from "@/components/Logo/Logo";

export default function Home() {
  return (
    <ThemedView
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      <Logo />
      <View style={{ flex: 1, gap:16 }}>
        <ThemedText type="title">Welcome to South Coast Radio</ThemedText>
        <ThemedText type="subtitle" style={{textAlign: "center", textTransform:"uppercase"}}>Schedule</ThemedText>
      </View>
    </ThemedView>
  );
}
