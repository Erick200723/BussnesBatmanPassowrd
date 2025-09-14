import React, { useState } from 'react';
import { View, Image, TextInput, Text, TouchableOpacity } from 'react-native';
import styles from './AppStyles';

export default function App() {
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [formSent, setFormSent] = useState(false);

  return (
    <View style={styles.container}>
      {!formSent && (
        <>
          <Image source={require('../assets/batman.png')} style={styles.image} />
          {!showForm && (
            <TouchableOpacity style={styles.button} onPress={() => setShowForm(true)}>
              <Text style={styles.buttonText}>ATIVAR BAT SINAL</Text>
            </TouchableOpacity>
          )}
          {showForm && (
            <View style={styles.form}>
              <Text style={styles.label}>Nome:</Text>
              <TextInput
                style={styles.input}
                placeholder="Digite seu nome"
                value={name}
                onChangeText={setName}
              />
              <Text style={styles.label}>Mensagem:</Text>
              <TextInput
                style={styles.input}
                placeholder="Digite uma mensagem"
                value={message}
                onChangeText={setMessage}
              />
              <TouchableOpacity style={styles.button} onPress={() => setFormSent(true)}>
                <Text style={styles.buttonText}>Enviar</Text>
              </TouchableOpacity>
            </View>
          )}
        </>
      )}
      {formSent && (
        <Image source={require('../assets/batLogo.png')} style={styles.image} />
      )}
    </View>
  );
}