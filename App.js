import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import  AppLoading  from 'expo-app-loading'
import * as SplashScreen from 'expo-splash-screen';
import { useFonts, Anton_400Regular } from '@expo-google-fonts/anton'

import Routes from './src/router';
SplashScreen.preventAutoHideAsync();
export default function App() {

  let [fontsLoaded] = useFonts({
    Anton_400Regular,
  });

  if(!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <>
      <StatusBar style="light" backgroundColor="#000" translucent={true}/>
      <Routes />
    </>
  );
}
