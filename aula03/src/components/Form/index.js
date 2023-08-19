import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import InputField from '../InputField';
import ResultMedia from '../Result';

export default function  Form(){
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [media, setMedia] = useState('');
  const [msg, setMessage] = useState('');

  function Calcular() {

    if (!input1 || !input2) {
        setMedia('');
        setMessage('Por favor digite ambos os valores');
        return;
    }

    const num1 = parseFloat(input1);
    const num2 = parseFloat(input2);

    if (isNaN(num1) || isNaN(num2)) {
        setMedia('');
        setMessage('Por favor somente valores numericos');
        return;
    }

    const calculatedAverage = (num1 + num2) / 2;
    setMessage('Média:');
    setMedia(calculatedAverage.toString());
  };

  return (
     <View style={styles.container}>
        <View style={styles.inputs}>
            <Text>Entre 1º valor:</Text>
            <InputField
                placeholder="Ex:10"
                value={input1}
                onChangeText={setInput1}
            />
            <Text>Entre 2º valor:</Text>
            <InputField
                placeholder="Ex:20"
                value={input2}
                onChangeText={setInput2}
            />
            <ResultMedia result={media} message={msg} />
        </View>
        <View style={styles.btn}>
            <Button title ='Calcular' onPress={() => Calcular()} />
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  inputs: {
    alignItems: 'center',
    marginTop: 10,
    textAlign: 'center',
    width:300,
  },
  btn:{
     width:120,
  }
});

