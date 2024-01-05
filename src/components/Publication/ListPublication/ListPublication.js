import { View, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { StylesListPublication } from './ListPublicationStyles'
import { Montserrat_400Regular, Montserrat_700Bold, useFonts  } from '@expo-google-fonts/montserrat'
import { Text, Image } from '@rneui/base'
import { useNavigation } from '@react-navigation/native'
import { screensS } from '../../../screen/Student/ScreenNameS'



export  function ListPublication(props) {
    const { publication } = props;
    
    const navigation = useNavigation();

    

    const [fontsLoaded] = useFonts({
    
        Montserrat_400Regular,
        Montserrat_700Bold,

    });
    
    if (!fontsLoaded) {
        return null;
    };

    const goToPublication = (publication) => {
        navigation.navigate(screensS.student.publication, { id: publication.id });
      
      };
      
      


  return (

  <>
    <View style={StylesListPublication.containerText}> 
        <Text style={{ ...StylesListPublication.textTitle, fontFamily: 'Montserrat_400Regular'}}> Publicaciones recomendadas </Text>
    </View>
    
    
    <FlatList 
        data = {publication}
        renderItem={(doc) => {
            const publication = doc.item.data();
            
            const trueCharacteristics = Object.keys(publication.characteristics).filter(
                (key) => publication.characteristics[key] === true
              );
           

            return (
                <TouchableOpacity style={StylesListPublication.container} onPress = {() => goToPublication(publication)} >

                    <View style={StylesListPublication.containerInfo}> 

                        <Image source={{ uri: publication.images[0]}} style={StylesListPublication.image}  />

                        <View style={StylesListPublication.containerInfoText}>
                            <Text style={{ ...StylesListPublication.textTitlePublication, fontFamily: 'Montserrat_700Bold'}}>{publication.title.toUpperCase()}</Text>
                            <Text style={{ ...StylesListPublication.textInfoPublication, fontFamily: 'Montserrat_400Regular'}}> {trueCharacteristics.join(', ')} </Text>
                            {/*<Text style={{ ...StylesListPublication.textInfoPublication, fontFamily: 'Montserrat_400Regular'}}>Calificacion</Text>*/}
                        
                        </View>

                    </View>


                </TouchableOpacity>
            )
        }}
    
    />
  
  
  
  
  </>
  )
}