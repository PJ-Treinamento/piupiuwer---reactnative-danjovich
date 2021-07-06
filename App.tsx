import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

import { Lato_400Regular_Italic, Lato_400Regular, Lato_700Bold } from '@expo-google-fonts/lato';
import { YesevaOne_400Regular } from '@expo-google-fonts/yeseva-one';
import AppStack from './src/routes/AppStack';

export default function App() {
  let [fontsLoaded] = useFonts({
    Lato_400Regular_Italic, 
    Lato_400Regular, 
    Lato_700Bold,
    YesevaOne_400Regular
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <>
        <AppStack />
        <StatusBar style="light" />
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
