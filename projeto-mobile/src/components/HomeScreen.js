import React from 'react';
import {SafeAreaView, View, FlatList, StyleSheet, Text,Button, StatusBar} from "react-native";


export default function HomeScreen({navigation}){

    const Item = ({title}) => (
        <View style={{flex:1 , alignItems:'center', justifyContent:'center'}}>
            <Text>{title}</Text>
        </View>
    )

    return (
        <SafeAreaView style={{flex:1 , alignItems:'center', justifyContent:'center'}} >

            <Button  title="Ir para Calculo de Média!"
                      onPress={ () => navigation.navigate('Media')}
            />
            <Button title="Ir para Couter!"
                         onPress={ () => navigation.navigate('Counter')}
            />
            <Button title="Ir para Color List!"
                                     onPress={ () => navigation.navigate('ColorList')}
            />
            <Button title="Ir para Galeria!"
                                     onPress={ () => navigation.navigate('Galery')}
            />
        </SafeAreaView>
    )

}