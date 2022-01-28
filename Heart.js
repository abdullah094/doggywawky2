import React,{useState} from 'react'
import { StyleSheet, Text, View,Image ,TouchableOpacity} from 'react-native'
import { Icon } from 'react-native-elements'



const Heart  = (props) => {

    
const [isClick, setClick] = useState(true);
const heartPress = () =>{

   setClick(!isClick)
}
   if(isClick){ 
      return(
          <TouchableOpacity onPress={()=>heartPress()}>
            <Icon type='antdesign'  name="hearto" size={props.size} color="#DE3163" />
            </TouchableOpacity>
      )
   }
   else{
       return(
           <TouchableOpacity onPress={()=>heartPress()}>
        <Icon type='antdesign'  name="heart" size={props.size} color="#DE3163" />
        </TouchableOpacity>
       )
   }
      
      }

export default Heart

const styles = StyleSheet.create({})
