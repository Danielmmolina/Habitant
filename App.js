import { SafeAreaView, LogBox, StatusBar } from 'react-native';
import { styles } from './styles';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { initFirebase } from './src/utils/firebase.js';
import { AppNavigation } from './src/screen/AppNavigation/AppNavigation.js';
import Toast from 'react-native-toast-message';
import 'react-native-get-random-values';

LogBox.ignoreAllLogs();
export default function App() {


  const myTheme = {
    ...DefaultTheme, 
    colors: {
      ...DefaultTheme.colors,
      background: 'rgb(46, 48, 53)'
    },
  };

  return (

    <> 
      <StatusBar backgroundColor="transparent" translucent={true} />
        <SafeAreaView style={{...styles.containerDark, paddingTop: StatusBar.currentHeight}}> 
          <NavigationContainer theme={myTheme} > 
            <AppNavigation />
         </NavigationContainer>

         <Toast />
         
       </SafeAreaView>
    </>
  );
}

