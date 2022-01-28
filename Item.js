import React from 'react'
import { StyleSheet, Text, View,Image,ImageBackground } from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import Product from './assets/product1.png'
import RenderHtml from 'react-native-render-html';
import Heart from './Heart'


const Item = (props) => {

    const source = {
        html: props.description
      };

    return (

        <View style={{width:'97%',height:200, flexDirection:'row',borderRadius:5,backgroundColor:'white',elevation:5,marginVertical:5,marginHorizontal:6}}>
         
            <View style={{width:130,height:150,backgroundColor:'#ececec',margin:5,alignItems:'center',justifyContent:'center',borderRadius:10}}>
       <Image style={{height:130,width:80}} source= {{uri: props.image}} />
       </View>
       <TouchableOpacity onPress={props.goto}>
<View style={{marginHorizontal:5, marginTop:10}}>
  <View style={{width:'80%'}}>
       <Text style={{fontWeight:'bold',fontSize:20,}}>{props.Name}</Text>

  </View>
       <View>
         <View style={{width:'59%'}}>
      <RenderHtml
     
      contentWidth={80}
      source={source}
      defaultTextProps={{
        numberOfLines: 2,
      }}
    />
    </View>
    </View>
       <Text style={{color:'hotpink',fontSize:20,}}>${props.price}</Text>
       </View>
       </TouchableOpacity>
   <View style={{width:'100%', height:40,position:'absolute',bottom:0,flexDirection:'row',}}>
   <View style={{height:40,flex:0.5,justifyContent:'center',alignItems:'center'}}>
  <Heart/>
</View>
<View style={{height:40,flex:0.5,justifyContent:'center',alignItems:'center'}}>
  <TouchableOpacity onPress= {props.addtocart}
  style={{height:30,justifyContent:'center',width:90,backgroundColor:'#d63384',alignItems:'center',borderRadius:10}}>
    <Text style={{color:'white'}}>Add to Cart</Text>
    </TouchableOpacity>
</View>


  </View>
   
        </View>
        
    )
}

export default Item

const styles = StyleSheet.create({
   
})
