import React, { useState } from 'react';
import { View, FlatList, Button } from "react-native";







export default function ColorListScreen(){
    const [colors,setColors] = useState([]);

    function generateColor() {
        const r = Math.floor(Math.random() * 255);
        const g = Math.floor(Math.random() * 255);
        const b = Math.floor(Math.random() * 255);
        setColors(prev => [...prev, `rgb(${r}, ${g},${b})`]);
    }

    return (
        <View>
            <Button title="Adiciona Cor" onPress={()=>generateColor()}/>
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