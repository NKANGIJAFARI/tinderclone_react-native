import React, { createContext, useContext, useState, useEffect } from 'react';
import * as Google from 'expo-google-app-auth';
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithCredential,
  signOut,
} from '@firebase/auth';
import { auth } from '../firebase';
import { set } from 'react-native-reanimated';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loadingInitial, setLoadingInitial] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(
    () =>
      onAuthStateChanged(auth, (authUser) => {
        if (authUser) {
          console.log('user logged in');
          setUser(authUser);
        } else {
          setUser(null);
          console.log('user logged out');
        }

        setLoadingInitial(false);
      }),
    [],
  );

  const config = {
    iosClientId:
      '322905100326-kj8ooho6rf5q0kejbsjlut7e0hlq3v16.apps.googleusercontent.com',
    androidClientId:
      '322905100326-e5i84ij96g8l6q6hkdp76gbpujrgh2e6.apps.googleusercontent.com',

    scope: ['profile', 'email'],
    Permissions: ['public_profile', 'email', 'gender', 'location'],
  };

  const signInWithGoogle = async () => {
    setLoading(true);
    await Google.logInAsync(config)
      .then(async (logInResult) => {
        if (logInResult.type === 'success') {
          const { idToken, accessToken } = logInResult;
          const credential = GoogleAuthProvider.credential(
            idToken,
            accessToken,
          );

          await signInWithCredential(auth, credential);
        }

        return Promise.reject();
      })
      .catch((error) => setError(error))
      .finally(() => {
        setLoading(false);
      });
  };

  //The logout functionality, this is a function that is called when the user clicks the logout button
  const logOut = () => {
    console.log('logging out');
    signOut(auth)
      .then(() => {
        console.log('logged out');
      })
      .catch((error) => setError(error))
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <AuthContext.Provider
      value={{ user: user, signInWithGoogle, loading, error, logOut }}>
      {!loadingInitial && children}
    </AuthContext.Provider>
  );
};

export default function useAuth() {
  return useContext(AuthContext);
}
