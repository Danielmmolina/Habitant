import { StyleSheet } from "react-native";

export const stylesHeader = StyleSheet.create({
    containerLogo:{
        flexDirection: 'row',
        marginRight: "auto",
        borderBottomWidth: 2,
        width: '100%',
    },

    logoImg: {
        width: 200,
        height: 70,    
        marginLeft: -50,  
        marginBottom: '5%',       
    },

    logoText: {
        color: 'rgb(56, 182, 255)',
        fontSize: 30,
        marginTop: '7%',
        marginLeft: '15%',
        width: 126,
        position: "absolute",
        marginBottom: '5%',
    },
})