import React from "react";
import {View, Text, StyleSheet} from "react-native";

export default function Title(){
 return(
     <View style={styles.title}>
        <Text style={styles.txt}>Calcular média de duas notas</Text>
     </View>
 );
}


const styles = StyleSheet.create({
  title:{
    marginBottom:50,
    marginTop:20,
  },
  txt:{
    fontSize: 18,
  }

});




