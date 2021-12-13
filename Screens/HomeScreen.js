import React from 'react';
import { useNavigation } from '@react-navigation/core';
import { View, Text, Button } from 'react-native';
import useAuth from '../Hooks/useAuth';

const HomeScreen = () => {
  const navigation = useNavigation();
  const { logOut } = useAuth();

  return (
    <View>
      <Text>i AM THE HOME SCREEN at the moment</Text>
      <Button
        title='Go to Details'
        onPress={() => {
          navigation.navigate('Chat');
        }}
      />
      <Button title='Logout' onPress={logOut} />
    </View>
  );
};

export default HomeScreen;
