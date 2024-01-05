import React from 'react';
import { View, FlatList, TouchableOpacity } from 'react-native';
import { StylesListMyPublication } from './ListMyPublicationStyles';
import { Montserrat_400Regular, Montserrat_700Bold, useFonts } from '@expo-google-fonts/montserrat';
import { Text, Image } from '@rneui/base';

export function ListMyPublication(props) {
const { publications } = props;

const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_700Bold,
});

if (!fontsLoaded) {
    return null;
}

const goToPublication = (publication) => {
    console.log('Ir a la publicación');
    console.log(publication.title);
};

return (
    <>
    <FlatList
        data={publications}
        renderItem={(doc) => {
        const publication = doc.item.data();

        return (
            <TouchableOpacity style={StylesListMyPublication.container} onPress={() => goToPublication(publication)}>
            <View style={StylesListMyPublication.containerInfo}>
                <Image source={{ uri: publication.images[0] }} style={StylesListMyPublication.image} />

                <View>
                <Text style={{ ...StylesListMyPublication.textTitlePublication, fontFamily: 'Montserrat_700Bold' }}>
                    {publication.title.toUpperCase()}
                </Text>
                </View>
            </View>
            </TouchableOpacity>
        );
        }}
    />
    </>
);
}
