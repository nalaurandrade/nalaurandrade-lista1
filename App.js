import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [imcResult, setImcResult] = useState('');

  const calcularIMC = () => {
    if (peso && altura) {
      const alturaMetros = parseFloat(altura) / 100; 
      const imc = parseFloat(peso) / (alturaMetros * alturaMetros);

      let resultado = '';
      if (imc < 18.5) {
        resultado = 'Abaixo do peso';
      } else if (imc >= 18.5 && imc < 24.9) {
        resultado = 'Peso normal';
      } else if (imc >= 25 && imc < 29.9) {
        resultado = 'Sobrepeso';
      } else {
        resultado = 'Obesidade';
      }

      setImcResult(`Seu IMC é ${imc.toFixed(2)}. Resultado: ${resultado}`);
    } else {
      setImcResult('Por favor, insira peso e altura válidos.');
    }
  };

  return (
    <View style={styles.container}>
      <Text>Peso (kg):</Text>
      <TextInput
        placeholder='Digite seu peso'
        keyboardType='numeric'
        onChangeText={(pPeso) => setPeso(pPeso)}
        value={peso}
      />

      <Text>Altura (cm):</Text>
      <TextInput
        placeholder='Digite sua altura'
        keyboardType='numeric'
        onChangeText={(aAltura) => setAltura(aAltura)}
        value={altura}
      />

      <Button title="Calcular IMC" onPress={calcularIMC} />

      {imcResult !== '' && <Text>{imcResult}</Text>}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
});
