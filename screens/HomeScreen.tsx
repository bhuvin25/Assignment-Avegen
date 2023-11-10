import React from 'react';
import { View, Button } from 'react-native';

const HomeScreen = ({ navigation }: any) => {
  return (
    <View style={{ marginHorizontal: 10, marginVertical: 20}}>
      <Button
        title="Win"
        onPress={() => navigation.navigate('Score', { action: 'Win' })}
      />
      <Button
        title="Lose"
        onPress={() => navigation.navigate('Score', { action: 'Lose' })}
      />
    </View>
  );
};

export default HomeScreen;
