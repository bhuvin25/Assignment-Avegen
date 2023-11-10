import React from 'react';
import { View, Button, Text } from 'react-native';
import { useSelector } from 'react-redux';

const HomeScreen = ({ navigation }: any) => {
  const points = useSelector((state: any) => state.points);

  return (
    <View style={{ marginHorizontal: 10, marginVertical: 20 }}>
      <Text>Points: {points}</Text>
      <View style={{ marginVertical: 6 }}>
        <Button
          title="Win"
          onPress={() => navigation.navigate('Score', { action: 'Win' })}
        />
      </View>
      <View style={{ marginVertical: 6 }}>
        <Button
          title="Lose"
          onPress={() => navigation.navigate('Score', { action: 'Lose' })}
        />
      </View>
    </View>
  );
};

export default HomeScreen;
