import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { styles } from '../../../../styles';
import { stylesNewPublicationScreen } from './NewPublicationStylesL';

export function NewPublicationScreen() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [rules, setRules] = useState([
    { label: 'Regla 1', active: false },
    { label: 'Regla 2', active: false },
    // Agrega más reglas según sea necesario
  ]);
  const [propertyFeatures, setPropertyFeatures] = useState([
    { label: 'Característica 1', active: false },
    { label: 'Característica 2', active: false },
    // Agrega más características según sea necesario
  ]);
  const [rooms, setRooms] = useState([
    { name: '', description: '', value: '', photos: [] },
  ]);

  const toggleStatus = (index, type) => {
    if (type === 'rules') {
      const updatedRules = [...rules];
      updatedRules[index].active = !updatedRules[index].active;
      setRules(updatedRules);
    } else if (type === 'propertyFeatures') {
      const updatedPropertyFeatures = [...propertyFeatures];
      updatedPropertyFeatures[index].active = !updatedPropertyFeatures[index].active;
      setPropertyFeatures(updatedPropertyFeatures);
    }
  };

  const addRoom = () => {
    if (rooms.length < 10) {
      setRooms([...rooms, { name: '', description: '', value: '', photos: [] }]);
    }
  };

  const savePublication = () => {
    // Aquí deberías implementar la lógica para guardar la publicación en la base de datos
    // Utiliza el estado actual (title, description, location, rules, propertyFeatures, rooms)
  };

  return (
    <ScrollView>
      <View style={styles.containerLogo}>
        {/* ... Tu código para el logo */}
      </View>

      <Text style={{ ...stylesNewPublicationScreen.textTitle }}>Nueva publicación</Text>

      {/* Formulario */}
      <View style={{ padding: 20 }}>
        {/* Titulo */}
        <Text>Título de la Publicación</Text>
        <TextInput
          style={styles.input}
          value={title}
          onChangeText={(text) => setTitle(text)}
        />

        {/* Descripcion */}
        <Text>Descripción</Text>
        <TextInput
          style={styles.input}
          value={description}
          onChangeText={(text) => setDescription(text)}
          multiline
        />

        {/* Ubicacion */}
        <Text>Ubicación</Text>
        <TextInput
          style={styles.input}
          value={location}
          onChangeText={(text) => setLocation(text)}
        />

        {/* Reglas */}
        <Text>OPRIMA LAS REGLAS:</Text>
        {rules.map((rule, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => toggleStatus(index, 'rules')}
            style={{
              padding: 10,
              borderWidth: 1,
              borderColor: rule.active ? '#38B6FF' : '#c2e5f9',
              marginBottom: 10,
            }}
          >
            <Text>{rule.label}</Text>
          </TouchableOpacity>
        ))}

        {/* Características de propiedad */}
        <Text>OPRIMA LAS CARACTERÍSTICAS DE LA PROPIEDAD:</Text>
        {propertyFeatures.map((feature, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => toggleStatus(index, 'propertyFeatures')}
            style={{
              padding: 10,
              borderWidth: 1,
              borderColor: feature.active ? '#38B6FF' : '#c2e5f9',
              marginBottom: 10,
            }}
          >
            <Text>{feature.label}</Text>
          </TouchableOpacity>
        ))}

        {/* Habitaciones */}
        <Text>Habitaciones</Text>
        {rooms.map((room, roomIndex) => (
          <View key={roomIndex} style={{ marginBottom: 20 }}>
            {/* ... Tus campos para la habitación, como nombre, descripción, valor y fotos */}
          </View>
        ))}

        {/* Agregar otra habitacion y guardar publicacion */}
        <TouchableOpacity onPress={addRoom}>
          <Text>Agregar Otra Habitación</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={savePublication}>
          <Text>Guardar Publicación</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
