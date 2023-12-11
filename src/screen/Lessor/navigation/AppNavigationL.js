import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreenL } from '../HomeScreenL/HomeScreenL';
import { NewPublicationScreen } from '../NewPublicationScreenL/NewPublicationScreenL';
import { InterestedScreen } from '../InterestedScreenL/InterestedScreenL';
import { ProfileScreen } from '../ProfileScreenL/ProfileScreenL';
import { styles } from '../../../../styles';
import { Icon } from '@rneui/base';

export function AppNavigationL() {

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
     
   

      <Tab.Screen name = 'Inicio' component={ HomeScreenL }  />
      <Tab.Screen name='Nueva publicación' component={ NewPublicationScreen } />
      <Tab.Screen name='Interesados' component={ InterestedScreen }  />
      <Tab.Screen name='Mi perfil' component={ ProfileScreen }  />   
    </Tab.Navigator>
  </>

  )
}

function screenOptions(route, color, size){
  let iconName;

  if(route.name === 'Inicio'){
      iconName='home';
  }

  if(route.name=== 'Añadir publicación'){
      iconName='magnify';
  }

  if(route.name === 'Interesados'){
      iconName = 'heart';
  }

  if(route.name === 'Mi perfil'){
      iconName = 'account-circle';
  }

  return (

      <Icon type='material-community' 
      name={iconName} 
      color={color} 
      size={size} />
      
  );
}