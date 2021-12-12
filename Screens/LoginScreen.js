import React from 'react';
import { View, Text, Button } from 'react-native';
import useAuth from '../Hooks/useAuth';

const LoginScreen = () => {
  const { signInWithGoogle } = useAuth();

  return (
    <View>
      <Text>This is the Login Screen</Text>
      <Button title='Sign in with Google' onPress={signInWithGoogle} />
    </View>
  );
};

export default LoginScreen;
