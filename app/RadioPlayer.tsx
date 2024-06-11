import PlayerControls from "@/components/AudioPlayer/PlayerControls";
import Login from "@/components/Login/LoginForm";
import Logo from "@/components/Logo/Logo";
import { QueueInitialTracksService } from "@/services/QueueInitialTracksService";
import { SetupService } from "@/services/SetupService";
import { useEffect, useState } from "react";
import { ImageBackground, Text, View } from "react-native";
import TrackPlayer, { useActiveTrack } from "react-native-track-player";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { TrackInfo } from "@/components/AudioPlayer/TrackInfo";
import Progress from "@/components/AudioPlayer/Progress";

export default function RadioPlayer() {
  const track = useActiveTrack();
  const isPlayerReady = useSetupPlayer();

  return (
    <ThemedView
    style={{flex:1, alignItems:"center", justifyContent:"center"}}
    >
        <ImageBackground
        source={require("../assets/images/microphone2.jpg")}
        resizeMode="cover"
        style={{ flex: 1, justifyContent: "center", alignItems: "center", width: "100%", opacity:0.8 }}
      >
      <Logo style={{flex:1, alignItems: "center", justifyContent:"center", alignSelf:"center"}} />
      <View style={{flex:1, gap:8, backgroundColor:"orange", padding:16, borderRadius:16
      }}>
        <ThemedText type="subtitle" style={{textAlign: "center"}}>Now Playing:</ThemedText>
        <TrackInfo track={track} />
        <Progress />
        <PlayerControls />
      </View>
      </ImageBackground>
    </ThemedView>
  );
}
function useSetupPlayer() {
  const [playerReady, setPlayerReady] = useState<boolean>(false);

  useEffect(() => {
    let unmounted = false;
    (async () => {
      await SetupService();
      if (unmounted) return;
      setPlayerReady(true);
      const queue = await TrackPlayer.getQueue();
      if (unmounted) return;
      if (queue.length <= 0) {
        await QueueInitialTracksService();
      }
    })();
    return () => {
      unmounted = true;
    };
  }, []);
  return playerReady;
}
