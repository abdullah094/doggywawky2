import * as React from 'react'
import { StyleSheet, Text, View,Image,ImageBackground } from 'react-native'
import { MotiView } from '@motify/components'
import Logo from './assets/Logo.png'
import Background from './assets/background.png'


const Loading = (size) => {
    
    return (
        <ImageBackground style={styles.app} source={Background}>
          <MotiView
          from={{
              width: 100,
              height:100,
              borderRadius: 100/2
          }}
          animate={{
              width: 100+40,
height: 100+40,
borderRadius: (100 + 40) /2 ,

          }}
          transition={{
              type: 'timing',
duration: 1000,
repeat: Infinity,
          }}
    style={{
    width: 100,
    height: 100,
    borderRadius:100/2,
    
    borderWidth:100/10,
    borderColor: '#d63384',
    shadowColor: '#d63384',
    shadowOffset: {width : 10 , height:10},
     shadowOpacity: 10,
     shadowRadius: 10,
}}
/>
   <Text style={{color:'#d63384',fontSize:30, position:'absolute',bottom:250}}>Loading...</Text>
        </ImageBackground>
    );
}

export default Loading

const styles = StyleSheet.create({
    app:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
       
    }
})
