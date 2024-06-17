import {
  ImageBackground,
  View,
  Text,
  ScrollView,
  Pressable,
  Alert,
  Modal,
} from "react-native";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import Logo from "@/components/Logo/Logo";
import PlayerControls from "@/components/AudioPlayer/PlayerControls";
import Progress from "@/components/AudioPlayer/Progress";
import { Button } from "react-native-paper";
import { useState } from "react";
import RatingView from "@/components/RatingView/RatingView";

const DUMMY_DATA = [
  {
    title: "PREVIOUS CONTENT",
  },
];

const AD_DATA = [{}];

export default function Index() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <ThemedView
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={{flex:1, justifyContent:"center", alignItems:"center", backgroundColor:'white'}}>
          <View>
            <Pressable
              style={{
                position: "absolute",
                top: 16,
                right: 16,
                backgroundColor: "black",
                opacity: 0.8,
              }}
              textColor="white"
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={{padding:8, color:"white"}}>Close</Text>
            </Pressable>
            <RatingView />
          </View>
        </View>
      </Modal>
      <ImageBackground
        source={require("../assets/images/microphone.jpg")}
        resizeMode="cover"
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
          opacity: 0.9,
        }}
      >
        <Text
          style={{
            color: "white",
            flex: 1,
            textAlign: "center",
            fontSize: 36,
            fontWeight: "bold",
            textTransform: "uppercase",
            marginTop: 16,
          }}
        >
          Welcome to South Coast Radio
        </Text>
        <Logo style={{ flex: 1, marginBottom: 16 }} />
        <ScrollView style={{ flex: 1, marginVertical: 32 }}>
          <ImageBackground
            source={require("../assets/images/news.jpg")}
            style={{ flex: 1 }}
          >
            <View
              style={{
                flex: 1,
                height: 200,
                width: "100%",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Button
                style={{
                  position: "absolute",
                  top: 16,
                  right: 16,
                  backgroundColor: "black",
                  opacity: 0.8,
                }}
                textColor="white"
              >
                More {">"}
              </Button>
              <Text
                style={{
                  fontSize: 36,
                  padding: 16,
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                Previous Content
              </Text>
            </View>
          </ImageBackground>
          <Text
            style={{
              textAlign: "center",
              textTransform: "uppercase",
              color: "white",
              fontSize: 24,
              fontWeight: "bold",
              marginVertical: 32,
            }}
          >
            Our Advertisers
          </Text>
        </ScrollView>
        <View
         style={{
          flex: 1,
          gap: 8,
          backgroundColor: "orange",
          padding: 16,
          borderRadius: 16,
          maxWidth: "90%",
          maxHeight: 256,
          alignItems: "center",
          justifyContent: "center",
        }}

        >
          <Progress />
          <PlayerControls />
        </View>
      </ImageBackground>
    </ThemedView>
  );
}
