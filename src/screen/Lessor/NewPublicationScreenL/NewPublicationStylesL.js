import { StyleSheet } from "react-native";

export const stylesNewPublicationScreen = StyleSheet.create({
  textTitle: {
    color: 'rgb(255, 255, 255)',
    fontSize: 20,
    textAlign: "center",
    marginTop: '10%',
  },
  formContainer: {
    backgroundColor: '#2E3035', 
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
    color: 'white', 
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
  reglasContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  reglaButton: {
    backgroundColor: '#C2E5F9',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    width: '48%', // Ajustar según veamos necesario
    marginBottom: 8,
  },
  reglaButtonSelected: {
    backgroundColor: '#38B6FF',
  },
  reglaButtonText: {
    color: '#AEAEAE',
    fontSize: 16,
  },
  reglaButtonSelected: {
    backgroundColor: '#38B6FF',
  },
  reglaButtonTextSelected: {
    color: 'white',
  },
  caracteristicasContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  caracteristicaButton: {
    backgroundColor: '#C2E5F9',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    width: '48%', // Ajustar según veamos necesario
    marginBottom: 8,
  },
  caracteristicaButtonSelected: {
    backgroundColor: '#38B6FF',
  },
  caracteristicaButtonText: {
    color: '#AEAEAE',
    fontSize: 16,
  },
  caracteristicaButtonTextSelected: {
    color: 'white',
  },
  habitacionContainer: {
    marginBottom: 16,
  },
  agregarHabitacionButton: {
    backgroundColor: '#38B6FF',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 16,
  },
  agregarHabitacionButtonText: {
    color: 'white',
    fontSize: 16,
  },
  // aqui agregas Mas estilos del form
});
