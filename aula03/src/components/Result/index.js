import React from "react";
import {StyleSheet, View, Text} from "react-native";


export default function ResultMedia(props){
    return(
        <View style={styles.container}>
            <Text style={styles.result}>{props.messageResultMedia} {props.resultMedia}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10, marginBottom:20,
  },
  result:{
    fontSize: 16,
  }
});

