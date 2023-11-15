import { StyleSheet } from "react-native";


//Crear componentes generales para todas las páginas, por ejemplo, botones, letra, etc.



export const styles = StyleSheet.create({  
    
    containerDark: {
       backgroundColor: 'rgb(46, 48, 53)', 
       flex: 1,
    },

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

    barNavigation:{
        backgroundColor: 'rgb(46, 48, 53)', 
        borderTopWidth: 2,
        borderTopColor: 'rgb(0, 0, 0)',

    },

    iconBack: {
        color: 'rgb(56, 182, 255)',
        marginLeft: 20,
        marginTop: 20,

    },

 
});



