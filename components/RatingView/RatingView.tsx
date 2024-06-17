import React, { useCallback, useState } from 'react';
import { View, Text } from 'react-native';
import { Rating } from '@kolking/react-native-rating';

export default function RatingView() {
    const [rating, setRating] = useState(0);

    const handleChange = useCallback(
        (value: number) => setRating(Math.round((rating + value) * 5) / 10),
        [rating],
      );

    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent:"center"}}>
        <Rating size={40} rating={rating} onChange={handleChange} />
        <Text style={{fontSize:20, marginTop: 20}}>Rated {rating} out of 5</Text>
      </View>
    )
}