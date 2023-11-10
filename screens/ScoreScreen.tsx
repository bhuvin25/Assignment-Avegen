import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';


const ScoreScreen = ({ route, navigation } : any) => {
  const [points, setPoints] = useState(0);

  useEffect(() => {
    const { action } = route.params;
    if (action === 'Win') {
      setPoints((prevPoints) => prevPoints + 100);
    } else if (action === 'Lose') {
      setPoints((prevPoints) => prevPoints - 50);
    }
  }, [route.params]);

  return (
    <View>
      <Text>Points: {points}</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default ScoreScreen;
