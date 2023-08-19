import React, { useState } from 'react';
import {StyleSheet, View, Text, Button } from 'react-native';
import InputField from '../Input/';
import ResultMedia from '../Result/';

export default function FormMedia(){
  const [input1, setInput1] = useState(null);
  const [input2, setInput2] = useState(null);
  const [messageMedia, setMessageMedia] = useState('');
  const [media, setMedia] = useState(null);


  function Calculate(){

    if (input1 == null || input2 == null) {
      setMessageMedia('Por favor entre com ambos os valores!');
      setMedia('')
      return;
    }

    const num1 = parseFloat(input1);
    const num2 = parseFloat(input2);

    if (isNaN(num1) || isNaN(num2)) {
      setMessageMedia('Por favor entre com valores numéricos!');
      setMedia('')
      return;
    }

    const calculatedResult =(num1 + num2) / 2;
    setMessageMedia('Média:')
    setMedia(calculatedResult.toString());

  };

  return (
    <View style={styles.container}>
        <View style={styles.inpts} >
            <Text>Valor 1:</Text>
            <InputField
                placeholder="Ex: 10"
                value={input1}
                onChangeText={setInput1}
            />
            <Text>Valor 2:</Text>
            <InputField
                placeholder="Ex: 20"
                value={input2}
                onChangeText={setInput2}
            />
            <ResultMedia messageResultMedia={messageMedia} resultMedia={media}/>
        </View>
        <View style={styles.btn}>
            <Button title="Calcular" onPress={() => Calculate()}/>
        </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    alignItems:'center'
  },
  inpts:{
    width:300, alignItems:'center'
  },
  btn:{
    width:120
  }
});


