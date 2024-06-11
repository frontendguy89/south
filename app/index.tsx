import { ImageBackground, View, Text, ScrollView } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import Logo from "@/components/Logo/Logo";

export default function Index() {
  return (
    <ThemedView
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      <ImageBackground
        source={require("../assets/images/microphone.jpg")}
        resizeMode="cover"
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
          opacity: 0.8,
        }}
      >
        <Logo />
        <ScrollView style={{ flex: 1 }}>
          <Text
            style={{
              color: "white",
              flex: 1,
              textAlign: "center",
              fontSize: 28,
              fontWeight: "bold",
              textTransform: "uppercase",
              marginBottom: 32,
            }}
          >
            Welcome to South Coast Radio
          </Text>
          <Text
            style={{
              textAlign: "center",
              textTransform: "uppercase",
              color: "white",
              fontSize: 24,
              fontWeight: "bold",
            }}
          >
            Schedule
          </Text>
        </ScrollView>
      </ImageBackground>
    </ThemedView>
  );
}
