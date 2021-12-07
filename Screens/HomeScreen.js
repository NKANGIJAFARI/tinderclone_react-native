import React from 'react';
import { useNavigation } from '@react-navigation/core';
import { View, Text, Button } from 'react-native';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>i AM THE HOME SCREEN at the moment</Text>
      <Button
        title='Go to Details'
        onPress={() => {
          navigation.navigate('Chat');
        }}
      />
    </View>
  );
};

export default HomeScreen;
