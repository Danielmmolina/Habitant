import { View, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { stylesProfileScreen } from './ProfileScreenStylesL'
import { styles } from '../../../../styles'
import { Image, Text, Avatar } from '@rneui/base'
import { useFonts, Lobster_400Regular } from "@expo-google-fonts/lobster";
import { Montserrat_400Regular, Montserrat_500Medium, Montserrat_700Bold } from '@expo-google-fonts/montserrat'
import { getAuth, signOut, updateProfile } from 'firebase/auth'
import { doc, onSnapshot} from 'firebase/firestore'
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { db } from '../../../utils/firebase'
import { FontAwesome5, Entypo, FontAwesome, MaterialCommunityIcons  } from '@expo/vector-icons'
import * as ImagePicker from 'expo-image-picker'

export function ProfileScreen() {

  const { uid, photoURL, email} = getAuth().currentUser;
  const [infoUser, setInfoUser] = useState('');
  const [avatar, setAvatar] = useState(photoURL)

  useEffect(() => {
    setInfoUser('');
    onSnapshot(doc(db, 'infoUsers', uid), (doc) => {
      setInfoUser(doc.data());
    });
  }, [uid]);

  const [fontsLoaded] = useFonts({
    Lobster_400Regular,
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_700Bold
});

if (!fontsLoaded) {
    return null;
}

const changeAvatar = async() => {
  const result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.All,
    allowsEditing: true,
    aspect: [4, 3],
  });
  
  if(!result.canceled) uploadImage(result.assets[0].uri)
};

const uploadImage = async (uri) =>{
  const response = await fetch(uri);
  const blob = await response.blob();

  const storage = getStorage();
  const storageRef = ref(storage, `avatar/${uid}`);

  uploadBytes(storageRef, blob).then((snapshot) => {
    updatePhotoUrl(snapshot.metadata.fullPath);
  });
  
};

const updatePhotoUrl = async (imagePath) => {
  const storage = getStorage();
  const imageRef = ref(storage, imagePath);

  const imageUrl = await getDownloadURL(imageRef);

  const auth = getAuth();
  updateProfile(auth.currentUser, { photoURL: imageUrl});

  setAvatar(imageUrl);



}

const logout = async () => {
  const auth = getAuth();
  await signOut(auth);
}


  return (
    
    <>

        <View style={styles.containerLogo}> 
          <Image source={require('../../../../assets/LogoHabitant.png')} style={styles.logoImg} />
          <Text style={{ ...styles.logoText, fontFamily: 'Lobster_400Regular'}}> Habitant </Text>     
        </View>

      <ScrollView> 
        <Text style={{ ...stylesProfileScreen.textTitle, fontFamily: 'Montserrat_700Bold'}}> Mi perfil</Text>

        <View style={stylesProfileScreen.containerAvatar}> 

          <Avatar 
            size= {150}
            rounded
            icon={{ type: 'material', name: 'person'}}
            containerStyle={stylesProfileScreen.avatar}
            source={{ uri: avatar }}
            
          >
            <Avatar.Accessory size={40} onPress={changeAvatar} />
          </Avatar>
      
        </View>


        <View> 
          <Text style={{ ...stylesProfileScreen.textNombre, fontFamily: 'Montserrat_700Bold'}}>{infoUser.nombres} {infoUser.apellidos}</Text>
          <Text style={{...stylesProfileScreen.textRol, fontFamily: 'Montserrat_500Medium' }}> {infoUser.rol} </Text>
        </View>


      <View style={stylesProfileScreen.containerAllInfo}> 
        <View style={stylesProfileScreen.containerInfoUser}>
          <FontAwesome5 name="university" size={24} color='rgb(255, 255, 255)' />
          <Text style={{...stylesProfileScreen.textInfo, fontFamily: 'Montserrat_400Regular'}}> Universidad del Bío-Bío </Text>
        </View> 
          
        <View style={stylesProfileScreen.containerInfoUser}>  
        <Entypo name="mail" size={24} color="rgb(255, 255, 255)" />
          <Text style={{...stylesProfileScreen.textInfo, fontFamily: 'Montserrat_400Regular'}}> {email} </Text>
        </View>

        <View style={stylesProfileScreen.containerInfoUser}>
          <FontAwesome name="phone" size={24} color="rgb(255, 255, 255)" />
          <Text style={{...stylesProfileScreen.textInfo, fontFamily: 'Montserrat_400Regular'}}> +56 {infoUser.telefono} </Text>
        </View>


        <TouchableOpacity style={stylesProfileScreen.containerLogout} onPress={logout}> 

          <Text style={{ ...stylesProfileScreen.textLogout, fontFamily: 'Montserrat_400Regular'}}> Cerrar sesión </Text>
          <MaterialCommunityIcons name="logout" size={30} color="rgb(255, 255, 255)" />

        </TouchableOpacity>
          




      </View>

      </ScrollView>
    </>

   
  )
}