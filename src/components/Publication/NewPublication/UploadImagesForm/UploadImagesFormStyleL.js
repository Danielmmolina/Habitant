import { StyleSheet } from "react-native";

export const StylesUploadImages = StyleSheet.create({

    containerTextImage:{
        marginTop: '5%',
        alignItems: "center", 
    },

    textImage:{
        color: 'rgb(255, 255, 255)',
        fontSize: 16,
    },

    subtextImage:{
        color: 'rgba(255, 255, 255, 0.54)',
        fontSize: 10,
    },

    containerImage:{
        flexDirection: 'row',
        marginHorizontal: 20,
        marginRight: 10,
        marginTop: '5%'
    },

    Icon:{
        justifyContent: "center",
        backgroundColor: 'rgb(0, 0, 0)',
        width: 100,
        height: 100,
        borderRadius: 10,
    },

    error:{
        marginHorizontal: 20,
        marginTop: 10,
        color: 'rgb(255, 0, 0)',
        fontSize: 12,
        paddingLeft: 6,
    },

    image:{
        width: 100,
        height: 100,
        marginLeft: 10,
    }

});