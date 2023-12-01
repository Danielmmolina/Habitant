import { StyleSheet } from "react-native";

export const stylesNewAccount = StyleSheet.create({

    containerHeader:{
        width: '100%',
        height: 80,
        marginLeft: 36,
        marginTop: '10%'
    },

    text1:{
        fontSize: 40,
        color: 'rgb(255, 255, 255)',
    },

    text2:{
        fontSize: 20,
        color: 'rgb(255, 255, 255)',
    },

    text3:{
        fontSize: 19,
        color: 'rgb(255, 255, 255)',
        textAlign: 'center',
        marginTop: '20%',
    },

    containerButtons:{
        marginTop: '10%',

    },

    containerBtn:{
        justifyContent: "center",
        alignItems: "center",
        marginTop: '10%',
    },


    btn:{
        borderRadius: 20,
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
        fontSize: 20,
        color: 'rgb(255, 255, 255)',
    },

    containerTextLogin:{
        flex: 1,
        justifyContent: "flex-end",
        marginLeft: '5%',
    },

    text4:{
        fontSize: 15,
        color: 'rgb(255, 255, 255)',
        marginBottom: 10,
    },






});