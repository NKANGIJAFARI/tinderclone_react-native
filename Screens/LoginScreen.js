import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/core';
import { View, Text, Button, ImageBackground } from 'react-native';
import useAuth from '../Hooks/useAuth';
import tw from 'tailwind-rn';

const LoginScreen = () => {
  const { signInWithGoogle, loading } = useAuth();
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);

  return (
    <View>
      <ImageBackground
        resizeMode='cover'
        style={tw('flex-1')}
        source={{ url: 'https://tinder.com/static/tinder.png' }}>
        <Text>{loading ? 'Loading....' : 'This is the Login Screen'}</Text>
        <Button title='Sign in with Google' onPress={signInWithGoogle} />
      </ImageBackground>
    </View>
  );
};

export default LoginScreen;
