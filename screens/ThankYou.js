import React from 'react'
import { StyleSheet, Text, View ,ImageBackground,Button} from 'react-native'
import Background from '../assets/background.png'
const ThankYou = ({navigation}) => {
    return (
        <ImageBackground style={{flex:1,justifyContent:'center',alignItems:'center'}} source={Background}>

            <Text>ThankYou For Shopping with Doggywawky</Text>
            <Button title='Go to HomeScreen' onPress={()=> navigation.navigate('Main')}  />
        </ImageBackground>
    )
}

export default ThankYou

const styles = StyleSheet.create({})
