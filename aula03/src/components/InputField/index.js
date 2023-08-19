import React from 'react';
import { TextInput } from 'react-native';

export default function InputField(props){
  return (
    <TextInput
      placeholder={props.placeholder}
      value={props.value}
      onChangeText={props.onChangeText}
      keyboardType="numeric"
      style={{ marginBottom: 10, width: 200, borderColor: 'black', borderWidth: 1, padding: 5 }}
    />
  );
};
