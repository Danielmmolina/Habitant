import { StyleSheet } from "react-native";



export const stylesProfileScreen = StyleSheet.create({

    textTitle:{
        fontSize: 40,
        textAlign: 'center',
        marginTop: '10%',
        color: 'rgb(255, 255, 255)',
    },

    containerAvatar:{
        marginTop: '5%',
        alignItems: "center",
    },

    avatar: {
        backgroundColor: 'rgb(56, 182, 255)',
    },

    textNombre: {
        marginTop: '5%',
        color: 'rgb(255, 255, 255)',
        fontSize: 20,
        textAlign: "center",
    },

    textRol:{
        color: 'rgb(255, 255, 255)',
        fontSize: 18,
        textAlign: "center",
    },

    containerAllInfo:{
        marginTop: '5%',
    },

    containerInfoUser:{
        flexDirection: "row",
        marginTop: '5%',
        marginLeft: '5%',
        alignItems: "center",

    },

    textInfo:{
        color: 'rgb(255, 255, 255)',
        fontSize: 16,
        
    },

    containerLogout:{
        flexDirection: "row",
        marginTop: '5%',
        alignItems: "center",
        justifyContent: "center",
        marginBottom: '10%',
        
    },

    textLogout:{
        color: 'rgb(255, 255, 255)',
        fontSize: 24,
       
    }



});