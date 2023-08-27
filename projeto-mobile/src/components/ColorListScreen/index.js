import React, { useState } from 'react';
import {SafeAreaView, View, FlatList, Text,Button } from "react-native";







export default function ColorListScreen(){
    const [colors,setColors] = useState([]);

    const DATA =[
    ]

    function generateColor() {
        const r = Math.floor(Math.random() * 255);
        const g = Math.floor(Math.random() * 255);
        const b = Math.floor(Math.random() * 255);
        setColors(prev => [...prev, `rgb(${r}, ${g},${b})`]);
    }



    const Item = ({title}) => (
        <View style={{flex:1 , alignItems:'center', justifyContent:'center'}}>
            <Text>{title}</Text>
        </View>
    )

    const addColor = () =>{
        DATA.push(generateColor())
    }


    return (
        <View>
            <Button title="Adiciona Cor" onPress={()=>addColor()}/>
            <FlatList
                data={colors}
                horizontal={true}
                keyExtractor={item => item}
                renderItem={({ item }) =>
                    <View style={{backgroundColor: item, width: 100, height: 100}}>
                    </View>
                }
            />
        </View>
    )

}