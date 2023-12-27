import { StyleSheet } from "react-native";

export const stylesNewPublicationScreen = StyleSheet.create({
  textTitle: {
    color: 'rgb(255, 255, 255)',
    fontSize: 20,
    textAlign: "center",
    marginTop: '10%',
  },
  formContainer: {
    backgroundColor: '#2E3035', // Cambiado el color a 2E3035
    padding: 20,
    margin: 10,
    borderRadius: 10,
  },
  formLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    color: 'white',
  },
  formSubLabel: {
    fontSize: 10,
    color: 'white', // Cambiado el color a blanco
    marginBottom: 16,
  },
  imageUploadButton: {
    backgroundColor: '#38B6FF',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 16,
  },
  imageUploadButtonText: {
    color: 'white',
    fontSize: 16,
  },
  textInputContainer: {
    marginBottom: 16,
  },
  textInput: {
    backgroundColor: '#454B53',
    borderRadius: 5,
    padding: 10,
    color: 'white',
    marginBottom: 12,
  },
  // Puedes añadir más estilos según sea necesario para otros campos del formulario
});
