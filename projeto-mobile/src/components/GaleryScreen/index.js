import React, { useState } from 'react';
import { View, StyleSheet, FlatList,Image, Text} from "react-native";




export default function GaleryScrenn(){

    const [images, setimages] = useState([
       {id: 1, src: require('./imgs/celtinha.jpg')},
       {id: 2, src: require('./imgs/pao_frances.jpg')},
       {id: 3, src: require('./imgs/ufpr.jpg')},
       {id: 4, src:require('./imgs/cafe.jpg')}
    ]);

    const dimensaoAleatoria = () => {
        return Math.floor(Math.random() * 100) + 100; // Gerando uma dimensão aleatória entre 100 e 200
    };


    return (
        <View style={styles.root}>
            <FlatList 
                horizontal
                data={images}
                keyExtractor={item => item.id}
                renderItem={({ item }) =>
                    
                        <Image
                            style= {{width: dimensaoAleatoria(), height: dimensaoAleatoria(), }}
                            resizeMode='center'
                            source={item.src}/>
                    
                }
            />           
        </View>
        
    );
}


const styles = StyleSheet.create({
    root:{
        flex: 1,
        flexDirection: 'row',
        alignItems:'center'
    },
});

