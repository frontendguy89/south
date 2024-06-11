import { View } from "react-native";
import PlayPauseButton from "./PlayPauseButton";
import VolumeButton from "./VolumeButton";
import { TrackInfo } from "./TrackInfo";
import RatingButton from "./RatingButton";

export default function PlayerControls() {
  return (
    <View style={{flex:1, flexDirection: "row", alignItems:"center", justifyContent:"center", alignSelf:"center", gap:64}}>
      <RatingButton />
      <PlayPauseButton />
      <VolumeButton />
    </View>
  );
}
