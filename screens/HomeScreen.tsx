import React from 'react';
import { View, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Button
        title="Win"
        onPress={() => navigation.navigate('Result', { action: 'Win' })}
      />
      <Button
        title="Lose"
        onPress={() => navigation.navigate('Result', { action: 'Lose' })}
      />
    </View>
  );
};

export default HomeScreen;
