import { View, ActivityIndicator } from 'react-native'
import React from 'react'
import { Overlay, Text } from '@rneui/base';
import { stylesLoadingModal } from './LoadingModalStyles'
import { useFonts, Montserrat_500Medium  } from '@expo-google-fonts/montserrat'


export  function LoadingModal(props) {
  const { show, text } = props;

  const [fontsLoaded] = useFonts({

    Montserrat_500Medium,
 
});

if (!fontsLoaded) {
    return null;
}

  return (
    <Overlay isVisible={show} overlayStyle={stylesLoadingModal.overlay} >
      <View style= {stylesLoadingModal.contenedor}> 
        <ActivityIndicator size='large' color= 'rgb(56, 182, 255)'/>
        <Text style={{...stylesLoadingModal.text, fontFamily: 'Montserrat_500Medium'}}> {text} </Text>
      </View> 
    </Overlay>



  );
}


LoadingModal.defaulProps= {
  show: true,
};