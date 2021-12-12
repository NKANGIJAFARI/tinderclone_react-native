import React, { createContext, useContext } from 'react';
import * as Google from 'expo-google-app-auth';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const config = {
    iosClientId:
      '794965708466-nhvk92tjus7n8v2ns5ufl7oou6tpgab8.apps.googleusercontent.com',
    androidClientId:
      '794965708466-0bs9hrcgr4vll3uole3dekhtlprv96bv.apps.googleusercontent.com',
    scope: ['profile', 'email'],
    Permissions: ['public_profile', 'email', 'gender', 'location'],
  };

  const signInWithGoogle = async () => {
    Google.logInAsync(config).then(async (loginResult) => {
      if (loginResult.type === 'success') {
        //Login ...
      }
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
