import React, { createContext, useContext } from 'react';
import * as Google from 'expo-google-app-auth';
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithCredential,
  signOut,
} from '@firebase/auth';
import { auth } from '../firebase';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const config = {
    iosClientId:
      '322905100326-kj8ooho6rf5q0kejbsjlut7e0hlq3v16.apps.googleusercontent.com',
    androidClientId:
      '322905100326-e5i84ij96g8l6q6hkdp76gbpujrgh2e6.apps.googleusercontent.com',

    scope: ['profile', 'email'],
    Permissions: ['public_profile', 'email', 'gender', 'location'],
  };

  const signInWithGoogle = async () => {
    await Google.logInAsync(config).then(async (logInResult) => {
      if (logInResult.type === 'success') {
        const { idToken, accessToken } = logInResult;
        const credential = GoogleAuthProvider.credential(idToken, accessToken);

        await signInWithCredential(auth, credential);
      }

      return Promise.reject();
    });
  };

  return (
    <AuthContext.Provider value={{ user: null, signInWithGoogle }}>
      {children}
    </AuthContext.Provider>
  );
};

export default function useAuth() {
  return useContext(AuthContext);
}
