import { StyleSheet } from "react-native";

export const stylesForm = StyleSheet.create({

    Header:{
        color: 'rgb(255, 255, 255)',
        fontSize: 24,
        marginLeft: 34,
        marginTop: '15%',
    },

    containerInput:{
        marginTop: '10%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    input:{
        borderColor: 'rgb(56, 182, 255)',
    },

    ContainerInput1:{
       width: '90%',
    },

    containerBtn:{
        marginTop: '5%',
        justifyContent: "center",
        alignItems: "center",
    },

    btn:{
        borderRadius: 40,
        height: 60,
        width: 250,
        backgroundColor: 'rgb(56, 182, 255)',

        shadowColor: 'rgba(0, 0, 0, 0.25)',
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowOpacity: 1,
        shadowRadius: 4,
        elevation: 4,
    },

    textBtn:{
        color: 'rgb(255, 255, 255)',
        fontSize: 20,
    }









});