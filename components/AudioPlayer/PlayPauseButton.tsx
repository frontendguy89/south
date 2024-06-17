import { MaterialIcons } from "@expo/vector-icons";
import { ActivityIndicator, Text, View, type TextProps } from "react-native";
import { Pressable } from "react-native";
import { Audio } from 'expo-av';
import { useThemeColor } from '@/hooks/useThemeColor';
import { useEffect, useRef, useState } from "react";

const audioSource = require('../../assets/resources/pure.m4a');

export default function PlayPauseButton() {
  const [sound, setSound] = useState();

  async function playSound() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(
      require('../../assets/resources/pure.m4a'));
    setSound(sound);

    console.log('Playing Sound');
    await sound.playAsync();
  }

  useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);
  
  return (
    <View>
      <Pressable>
        <MaterialIcons
          name="play-circle"
          size={64}
          color="black"
          raised
          onPress={playSound}
        />
      </Pressable>
    </View>
  );
}
