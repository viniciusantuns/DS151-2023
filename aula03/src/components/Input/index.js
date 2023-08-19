import React from 'react';
import {StyleSheet, TextInput} from "react-native";


export default function InputField(props){
    return (
        <TextInput
          placeholder={props.placeholder}
          value={props.value}
          onChangeText={props.onChangeText}
          keyboardType="numeric"
          style={styles.txt}
        />
  );
}



const styles = StyleSheet.create({
  txt: {
    marginBottom: 10, width: 200, borderColor: 'black', borderWidth: 1, padding: 5
  },

});
