import React,{useState,useRef} from 'react'
import { StyleSheet, Text, View,Image,ScrollView,TextInput,ImageBackground, SafeAreaView} from 'react-native'
import DateTime from '../DateTime'
import BlackLogo from '../assets/BlackBackground.png'
import Background from '../assets/background.png'
import { TouchableOpacity } from 'react-native-gesture-handler'
import {Picker} from '@react-native-picker/picker';

const DogWalkingForm = ({navigation}) => {
 

    const [selectedLanguage, setSelectedLanguage] = useState()
   console.log(selectedLanguage)
    return (
        <ImageBackground style={{flex:1,}} source={Background}>
          <ScrollView style={{flex:1}}>
        <SafeAreaView style={styles.container}>
      
            <Image style={styles.logo} source={BlackLogo}/>


            <TextInput style={{borderBottomWidth:1,width:270, marginBottom:10}} placeholder='Zip code'></TextInput>

            <View>
            <Picker
             style={{width:270,marginVertical:10,}}
  selectedValue={selectedLanguage}
 
  onValueChange={(itemValue, itemIndex) =>
    setSelectedLanguage(itemValue)
  }>
  <Picker.Item label="Java" value="java" />
  <Picker.Item label="JavaScript" value="js1" />
  <Picker.Item label="JavaScript" value="js2" />
  <Picker.Item label="JavaScript" value="js3" />
  <Picker.Item label="JavaScript" value="js4" />
  <Picker.Item label="JavaScript" value="js5" />
</Picker>
      </View>
<DateTime/>


            
            <TouchableOpacity
             style={{backgroundColor:'#d63384', marginVertical:20,height:40,width:160,borderRadius:20,alignItems:'center',justifyContent:'center',}}>
                <Text style={{color:'white',fontSize:20,fontWeight:'bold'}}>Search now</Text>
            </TouchableOpacity>
               </SafeAreaView>
        </ScrollView>
        </ImageBackground>
    )
}

export default DogWalkingForm

const styles = StyleSheet.create({
container:{
flex:1,
justifyContent:'center',
alignItems:'center',
},
logo:{
    height:230,
    width:270,
},
dropdown:{
    marginHorizontal:30,
    
},
})
