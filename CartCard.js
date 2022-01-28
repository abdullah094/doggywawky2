import CheckBox from 'expo-checkbox';
import React,{useState} from 'react'
import { StyleSheet, Text, View ,Image,TouchableHighlight,TextInput, TouchableOpacity} from 'react-native'
import Product from './assets/b1.png'


export let count = 0
const CartCard = (props) => {
    const [counter, setCounter] = useState('0');
    

  let incrementCount = () => {
      if(counter<10){
    setCounter(counter + 1);
      }
  };
 
  let decrementCount = () => {
    if(counter>0){
    setCounter(counter - 1);
    }
    
  };
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
count = counter

    return (
        <View style={styles.container}>
            <View style={{flexDirection:'row',alignItems:'center'}}>
          
          {/* Checkbox */}
            <CheckBox
  style={{margin:10,borderRadius:10,}}
    disabled={false}
    value={toggleCheckBox}
    onValueChange={() => setToggleCheckBox(!toggleCheckBox)}
  />
  <Image style={{width:55,height:100, borderRadius:5,}} source= {{uri: props.image}} />
  </View>
  <View style={{marginLeft:20, marginTop:10,}}>
  <Text style={{fontWeight:'bold',fontSize:17,width:140}}>{props.name}</Text>
  <Text>SKU#{props.serial}</Text>
  <Text style={{color:'hotpink'}}>${props.price}</Text>
  </View>

  {/* Counter */}
<View style={{justifyContent:'center',marginHorizontal:5}}>
  <View style={styles.counter}>
<TouchableHighlight activeOpacity={0.9}
  underlayColor="#fd7e14" style={styles.counterButtons} onPress={props.decrement}>
  <Text style={styles.countertext}>-</Text>
</TouchableHighlight>

<TextInput style={{borderWidth:1,borderRadius:20,width:60,height:40, textAlign:'center',backgroundColor:'#252554'}}editable={false} >
  <Text style={{color:'white',}}>{props.counter}</Text>
  
</TextInput>
<TouchableHighlight activeOpacity={0.9}
  underlayColor="#fd7e14" style={styles.counterButtons} onPress={props.increment}>
  <Text style={styles.countertext}>+</Text>
  
</TouchableHighlight>

</View>
</View>

{/* Total */}
{/* <View style={{justifyContent:'center',marginLeft:13,}}>
    <Text style={{fontWeight:'bold'}}>Total</Text>
    <Text style={{color:'hotpink'}}>$5.51</Text>
</View> */}
  
                    </View>
    )
}

export default CartCard

const styles = StyleSheet.create({
    container:{
        height:120,
      marginVertical:10,
      width:'95%',
        flexDirection:'row',
    justifyContent:'space-around',
      //borderWidth:1,
      marginHorizontal:10,
    
      borderRadius:10,
      backgroundColor:'white',
      elevation:5,
    },
        counter:
        {
            flexDirection:'row', 
            marginLeft:5,
            justifyContent:'center',
            alignItems:'center',
            
      
        },
    
    
        counterButtons:
        {width:35,borderWidth:1,alignItems:'center',justifyContent:'center',height:35,marginHorizontal:2,
      borderRadius:20,backgroundColor:'#252554',
      
      },
      countertext:{
        fontWeight:'bold', fontSize:20,
        color:'white',
       
      },
}
)