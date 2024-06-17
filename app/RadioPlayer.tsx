import PlayerControls from "@/components/AudioPlayer/PlayerControls";
import Logo from "@/components/Logo/Logo";
import { QueueInitialTracksService } from "@/services/QueueInitialTracksService";
import { SetupService } from "@/services/SetupService";
import { useEffect, useState } from "react";
import {
  Button,
  ImageBackground,
  Modal,
  Pressable,
  Text,
  View,
} from "react-native";
import TrackPlayer, { useActiveTrack } from "react-native-track-player";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { TrackInfo } from "@/components/AudioPlayer/TrackInfo";
import Progress from "@/components/AudioPlayer/Progress";
import { Audio } from "expo-av";
import RatingView from "@/components/RatingView/RatingView";

export default function RadioPlayer() {
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
        source={require("../assets/images/microphone2.jpg")}
        resizeMode="cover"
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          opacity: 0.8,
        }}
      >
        <Logo
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            alignSelf: "center",
          }}
        />
        <ThemedText
          type="subtitle"
          style={{
            textAlign: "center",
            color: "white",
            fontSize: 24,
            marginBottom: 64,
          }}
        >
          Now Playing:
        </ThemedText>
        <ThemedText
          type="subtitle"
          style={{
            textAlign: "center",
            color: "white",
            fontSize: 24,
            marginBottom: 64,
          }}
        >
          Bruno Mars - Uptown Funk
        </ThemedText>
        <View
          style={{
            flex: 1,
            gap: 8,
            backgroundColor: "orange",
            padding: 16,
            borderRadius: 16,
            maxWidth: "90%",
            maxHeight: "50%",
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
