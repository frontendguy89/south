import { View } from "react-native";
import PlayPauseButton from "./PlayPauseButton";
import ShareSocialButton from "./ShareSocialButton";
import { TrackInfo } from "./TrackInfo";
import RatingButton from "./RatingButton";
import { AVPlaybackStatus } from "expo-av";
import { useEffect, useState } from "react";
import { Sound } from "expo-av/build/Audio";

export default function PlayerControls() {
  return (
    <View
      style={{
        flex:1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap:64,
        paddingHorizontal: 64,
        alignSelf: "center"
      }}
    >
      <RatingButton />
      <PlayPauseButton />
      <ShareSocialButton />
    </View>
  );
}
