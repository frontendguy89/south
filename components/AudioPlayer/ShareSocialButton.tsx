import { Pressable, View } from "react-native";
import { Ionicons} from "@expo/vector-icons";

import Share from 'react-native-share';
import { useState } from "react";

export default function ShareSocialButton() {

  const [packageSearch, setPackageSearch] = useState<string>('');
  const [recipient, setRecipient] = useState<string>('');
  const [result, setResult] = useState<string>('');

  function getErrorString(error, defaultValue) {
    let e = defaultValue || 'Something went wrong. Please try again';
    if (typeof error === 'string') {
      e = error;
    } else if (error && error.message) {
      e = error.message;
    } else if (error && error.props) {
      e = error.props;
    }
    return e;
  }

  const shareUrlWithMessage = async () => {
    const shareOptions = {
      title: 'Share South Coast Radio',
      message: 'Check out South Coast Radio',
      url: 'https://google.com',
    };

    try {
      const ShareResponse = await Share.open(shareOptions);
      console.log('Result =>', ShareResponse);
      setResult(JSON.stringify(ShareResponse, null, 2));
    } catch (error) {
      console.log('Error =>', error);
      setResult('error: '.concat(getErrorString(error)));
    }
  };

  return (
    <View>
      <Pressable>
        <Ionicons name="share-social" size={32} color="white" onPress={shareUrlWithMessage} />
      </Pressable>
    </View>
  );
}
