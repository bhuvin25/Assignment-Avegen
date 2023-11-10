import React, { useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { winAction, loseAction } from '../redux/actions';


const ScoreScreen = ({ route, navigation } : any) => {
  const dispatch = useDispatch();
  const points = useSelector((state: any) => state.points);

  useEffect(() => {
    const { action } = route.params;

    if (action === 'Win') {
      dispatch(winAction());
    } else if (action === 'Lose') {
      dispatch(loseAction());
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
