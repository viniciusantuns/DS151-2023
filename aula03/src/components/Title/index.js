import React from "react";
import {StyleSheet, View, Text} from "react-native";

export default function Title(){
 return(
     <View style={styles.container}>
        <Text style={styles.txt}>Calcular média entre dois números</Text>
     </View>
 );
}


const styles = StyleSheet.create({
  container: {
    marginBottom: 20
  },
  txt:{
    fontSize: 18,
    fontWeight: 'bold',
  }
});
