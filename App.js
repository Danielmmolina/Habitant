import { Text, View, SafeAreaView } from 'react-native';
import { styles } from './styles';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { AppNavigationNR } from './src/screen/NoRegister/navigation/AppNavigationNR';
//import { LoginScreenNR } from './src/screen/NoRegister/LoginScreen/LoginScreenNR';
export default function App() {


  const myTheme = {
    ...DefaultTheme, 
    colors: {
      ...DefaultTheme.colors,
      background: 'rgb(46, 48, 53)'
    },
  };

  return (
    
    <SafeAreaView style={styles.containerDark}> 

      <NavigationContainer theme={myTheme} > 

        <AppNavigationNR />

       
      </NavigationContainer>

    </SafeAreaView>

  );
}

