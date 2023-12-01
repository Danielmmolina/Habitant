import { StyleSheet } from "react-native";

export const stylesLoginScreenNR = StyleSheet.create({

    headerContainer: {
        marginTop: '10%',
        marginLeft: '5%',
    },

    textWelcome:{
        fontSize: 40,
        color: 'rgb(255,255,255)'
    },

    textWelcome2:{
        fontSize: 20,
        color: 'rgb(255,255,255)',
    },

    input:{
        borderColor: 'rgb(56, 182, 255)',
    },

    ContainerInput1:{
        width: '80%',
        marginLeft: '5%',
        marginTop: '20%',
    },

    ContainerInput2:{
        width: '80%',
        marginLeft: '5%',
        marginTop: '10%',
    },

    containerBtn:{
        marginTop: '10%',
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
        fontSize: 20,
    },

    text1:{
        color: 'rgb(255, 255, 255)',
        fontSize: 16,
        textAlign: 'center',
        marginTop: '5%',
    },

    containerDivision: {
        flexDirection: 'row', 
        marginTop: '5%', 
        justifyContent: 'center'
    },

    division1:{
        width: 170,
        borderColor: 'rgb(0, 0, 0)',
        borderBottomWidth: 2,
        marginTop: 15,
        marginRight: 15,
    },

    division2:{
        width: 170,
        borderColor: 'rgb(0, 0, 0)',
        borderBottomWidth: 2,
        marginTop: 15,
        marginLeft: 15,
    },

    textDivision:{
        fontSize: 20,
        color: 'rgb(0, 0, 0)', 
        position: 'absolute'
    },

    containerLoginGoogle:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        width: 250,
        height: 40,
        backgroundColor: 'rgb(56, 182, 255)',
        marginTop: '10%',  
        borderRadius: 40,       
        shadowOpacity: 1,
        elevation: 4,
        shadowRadius: 4,
        shadowOffset: {
        width: 0,
        height: 4
        },
        shadowColor: 'rgba(0, 0, 0, 0.25)',    
    },

    loginGoogle:{
        color: 'rgb(255, 255, 255)',
        fontSize: 15,
    },

    imgGoogle:{
        width: 25,
        height: 25,
    },

    containerTextLogin:{
        
        justifyContent: "flex-end",
        marginLeft: '5%',
        marginTop: '5%',
    },

    text4:{
        fontSize: 15,
        color: 'rgb(255, 255, 255)',
        marginBottom: 10,
    },

    








})