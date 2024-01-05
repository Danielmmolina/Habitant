import { StyleSheet } from "react-native";

export const StylesListMyPublication = StyleSheet.create({
    containerText:{
      borderBottomWidth: 2,
      height: 100,
      alignItems: "center",
      justifyContent: "center"
    },
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginVertical: 10,
      marginHorizontal: 20,
      padding: 10,
      backgroundColor: 'white', // Cambia el color de fondo según tus preferencias
      borderRadius: 10,
      elevation: 3, // Esto da una sombra en Android, puedes ajustarlo según tus preferencias
    },
    image: {
      width: 80,
      height: 80,
      borderRadius: 8,
    },
    containerInfo: {
      marginLeft: 10,
    },
    textTitlePublication: {
      fontSize: 16,
      fontWeight: 'bold',
    },
  });
  