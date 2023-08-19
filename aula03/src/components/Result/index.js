import React from "react";
import {View, Text, StyleSheet} from "react-native";


export default function ResultMedia(props){
    return(
        <View>
            <Text style={styles.txt}>{props.message} {props.result}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
  txt:{
    fontSize: 16,
    marginBottom:20,
    marginTop:20,
  }
});

