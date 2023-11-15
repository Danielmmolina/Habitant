import { StyleSheet } from "react-native";

export const stylesLoginScreen = StyleSheet.create({

    containerLogo:{
        flexDirection: 'row',
        marginRight: "auto",
        width: '100%',
    },

    logoImg: {
        width: 390,
        height: 295,    
        marginLeft: '-10%',  
        marginBottom: '5%',       
    },

    logoText: {
        color: 'rgb(56, 182, 255)',
        fontSize: 50,
         marginLeft: '45%', 
         marginTop: '40%',
        position: "absolute",
        marginBottom: '5%',
    },

    text: {
        color: 'rgb(255,255,255)',
        fontSize: 18,
        textAlign: "center",
        marginTop: '-10%',
    },

    containerBtn:{
        marginTop: '20%',
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

    textBtn: {
        color: 'rgb(255, 255, 255)',
        fontSize: 14,
        
    }





});