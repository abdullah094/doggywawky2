import React from 'react'
import { View, Text ,Image} from 'react-native'
import Gradiant from './assets/gradiant.png';
import Heart from './Heart';
const Line = () => {
    return (
        <View>
        <Image style={{height:3, marginVertical:3, }} source={Gradiant}/>
        </View>
    )
    }
export default Line
