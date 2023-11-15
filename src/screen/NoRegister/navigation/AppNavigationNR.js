import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { styles } from '../../../../styles';
import { Icon } from '@rneui/base';
import { HomeScreenNR } from '../HomeScreenNR/HomeScreenNR';
import { LoginStack } from './LoginStack';
import { screensNR } from '../ScreenNameNR';



export function AppNavigationNR() {

  const Tab = createBottomTabNavigator();

  return (

   <> 

    <Tab.Navigator sceneContainerStyle={styles.containerDark} screenOptions={({ route }) => ({
    tabBarStyle: styles.barNavigation,
    headerShown: false, 
    tabBarActiveTintColor: 'rgb(56, 182, 255)',
    tabBarInactiveTintColor: 'rgb(255, 255, 255)',  
    tabBarIcon: ({ color, size }) => screenOptions(route, color, size),

    })}> 
     
      <Tab.Screen name = 'Inicio' component={ HomeScreenNR }  />

      <Tab.Screen name={screensNR.noRegister.tab} component={ LoginStack }  />   

    </Tab.Navigator>
  </>

  )
}


function screenOptions(route, color, size){
  let iconName;

  if(route.name === 'Inicio'){
      iconName='home';
  }

  if(route.name === screensNR.noRegister.tab){
      iconName = 'account-circle';
  }

  return (

      <Icon type='material-community' 
      name={iconName} 
      color={color} 
      size={size} />
      
  );
}