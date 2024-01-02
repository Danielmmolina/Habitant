import { View, ScrollView, Alert} from 'react-native'
import React, { useState } from 'react'
import { StylesUploadImages } from './UploadImagesFormStyleL';
import { useFonts, Montserrat_800ExtraBold  } from '@expo-google-fonts/montserrat'
import { Icon, Avatar, Text } from '@rneui/base';
import * as ImagePicker from 'expo-image-picker'
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { v4 as uuid } from 'uuid'
import { LoadingModal } from '../../../Shared/LoadingModal/LoadingModal';
import { map, filter } from 'lodash'


export function UploadImagesRoom(props) {
  const { formik } = props;

  const [showUploadImage, setShowUploadImage] = useState(false);

  const [fontsLoaded] = useFonts({
    Montserrat_800ExtraBold,
  });

  if (!fontsLoaded) {
    return null;
  }

  const openGallery = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) uploadImage(result.assets[0].uri);
  };

  const uploadImage = async (uri) => {
    const response = await fetch(uri);
    const blob = await response.blob();

    const storage = getStorage();
    const storageRef = ref(storage, `publication/${uuid()}`);

    uploadBytes(storageRef, blob).then((snapshot) => {
      updatePhotosRoom(snapshot.metadata.fullPath);
    });
  };

  const updatePhotosRoom = async (imagePath) => {
    setShowUploadImage(true);

    const storage = getStorage();
    const imageRef = ref(storage, imagePath);
    const imageUrl = await getDownloadURL(imageRef);

    formik.setFieldValue("roomImages", [
      ...formik.values.roomImages,
      imageUrl,
    ]);

    setShowUploadImage(false);
  };

  const removeImage = (img) => {
    Alert.alert(
      "Eliminar imagen",
      "¿Estás seguro de eliminar la imagen?",
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Eliminar",
          onPress: () => {
            const result = filter(
              formik.values.roomImages,
              (image) => image !== img
            );
            formik.setFieldValue("roomImages", result);
          },
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <>
      <View style={StylesUploadImages.containerTextImage}>
        <Text
          style={{
            ...StylesUploadImages.textImage,
            fontFamily: "Montserrat_800ExtraBold",
          }}
        >
          Añadir fotos de la habitación
        </Text>
        <Text
          style={{
            ...StylesUploadImages.subtextImage,
            fontFamily: "Montserrat_800ExtrBold",
          }}
        >
          Ejemplo: Una imagen que muestre la mayoría de la habitación.
        </Text>
      </View>

      <ScrollView
        style={StylesUploadImages.containerImage}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        <Icon
          type="material-community"
          name="camera-plus"
          color="rgb(56, 182, 255)"
          containerStyle={StylesUploadImages.Icon}
          onPress={openGallery}
        />

        {map(formik.values.roomImages, (image) => (
          <Avatar
            key={image}
            source={{ uri: image }}
            containerStyle={StylesUploadImages.image}
            onPress={() => removeImage(image)}
          />
        ))}

        <LoadingModal show={showUploadImage} text="Subiendo imagen." />
      </ScrollView>

      <Text style={StylesUploadImages.error}>
        {formik.errors.roomImages}
      </Text>
    </>
  );
}