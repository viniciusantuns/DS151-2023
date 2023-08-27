import React, {useState} from 'react';
import { View,Text, Button } from "react-native";


export default function CounterScreen(){
       const [counter, setCounter] = useState(0)

    return (
        <View style={{flex:1 , alignItems:'center', justifyContent:'center'}} >
            <Button  title="Incrementa"
                onPress={ () => setCounter(counter+1)}
            />
            <Text>{counter}</Text>
        </View>
    )

}