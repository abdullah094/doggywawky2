import React,{useState} from 'react'
import { StyleSheet, Text, View ,TextInput,TouchableOpacity,Image,ScrollView,ImageBackground,KeyboardAvoidingView} from 'react-native'
import Background from '../assets/background.png'
import BlackBackground from '../assets/BlackBackground.png'
import SocialMedia from '../SocialMedia'
import SignUpFor from './SignUpFor'

let disabled = false
let username = '123'
let passwWord = '123'
const SignIn = ({navigation}) => {

   const  [userName,setuserName] = useState('')
   const  [password,setpassword] = useState('')

const Authetication =  () => {

 if(userName===username && password===passwWord){
   
    navigation.navigate('Main')
}
else{
    console.log('wrong password')
}
}   
    return (
        <ImageBackground style={{flex:1}} source={Background}>
            <ScrollView style={{flex:1,}} 
            //contentContainerStyle={{justifyContent:'space-around'}}
             keyboardDismissMode={'on-drag'}> 
            <View style={styles.container}>
          
            <Image style={{width:200,height:200,}} source={BlackBackground}/>
            <SocialMedia/>
            
            <KeyboardAvoidingView behavior='height'>
            <TextInput style={styles.textinput} placeholder='Username' value={userName} onChangeText={setuserName}></TextInput>
            
            <TextInput style={styles.textinput} placeholder='Password' value={password} onChangeText={setpassword}></TextInput>
            </KeyboardAvoidingView>
           <TouchableOpacity onPress={Authetication} disabled={disabled} style={styles.button}><Text style={{color:'white', fontWeight:'bold'}}>Login In</Text></TouchableOpacity>
           <TouchableOpacity onPress={()=>navigation.navigate('SignUpFor')}  style={styles.button}><Text style={{color:'white', fontWeight:'bold'}}>Sign Up</Text></TouchableOpacity>
           
            </View>
            </ScrollView> 
            </ImageBackground>
    )
}

export default SignIn

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
marginTop:100,
    },
    textinput:{
        backgroundColor:'white',
       
        width:200,
        margin:5,
        borderRadius:20,
        height:40,
        textAlign:'center',
    },
    button:{
//borderWidth:1,
width:200,
marginTop:10,
borderRadius:20,
alignItems:'center',
height:40,
justifyContent:'center',
backgroundColor:'#c91661',
    },
})
