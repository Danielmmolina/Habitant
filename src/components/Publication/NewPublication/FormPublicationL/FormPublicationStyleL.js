import { StyleSheet } from "react-native";

export const StylesFormPublication = StyleSheet.create({

    containerInput:{
        marginTop: '5%',
    },

    textImage:{
        color: 'rgb(255, 255, 255)',
        fontSize: 16,
    },

    subtextImage:{
        color: 'rgba(255, 255, 255, 0.54)',
        fontSize: 10,
    },

    containerTextImage:{
        marginTop: '5%',
        alignItems: "center", 
    },

    input:{
        borderColor: 'rgb(0, 0, 0)',
        borderWidth: 1,
    },

    formLabel: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 8,
        color: 'white',
    },
    

    rulesContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginBottom: 16,
    },

    ruleButton: {
        backgroundColor: '#C2E5F9',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        width: '48%', // Ajustar según veamos necesario
        marginBottom: 8,
    },

    ruleButtonSelected: {
        backgroundColor: '#38B6FF',
    },

    ruleButtonText: {
        color: '#AEAEAE',
        fontSize: 16,
    },

    ruleButtonSelected: {
        backgroundColor: '#38B6FF',
    },

    ruleButtonTextSelected: {
        color: 'white',
    },

    characteristicsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginBottom: 16,
    },

    characteristicButton: {
        backgroundColor: '#C2E5F9',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        width: '48%', // Ajustar según veamos necesario
        marginBottom: 8,
    },

    characteristicButtonSelected: {
        backgroundColor: '#38B6FF',
    },

    characteristicButtonText: {
        color: '#AEAEAE',
        fontSize: 16,
    },

    characteristicButtonTextSelected: {
        color: 'white',
    },
    characteristicsRoomsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginBottom: 16,
    },
});