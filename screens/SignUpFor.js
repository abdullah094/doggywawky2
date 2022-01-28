import React,{useState} from 'react'
import { StyleSheet, Text, SafeAreaView,View,ImageBackground ,Image,TouchableOpacity} from 'react-native'
import Background from '../assets/background.png'
import BlackBackground from '../assets/BlackBackground.png'
import SocialMedia from '../SocialMedia'
import CheckBox from 'expo-checkbox';

const SignUpFor = () => {
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    return (
        <ImageBackground style={{flex:1}} source={Background} blurRadius={4}>
        <SafeAreaView style={styles.container}>
        <Image style={{width:200,height:200,}} source={BlackBackground}/>
        <SocialMedia/>
        <TouchableOpacity style={styles.button}><Text style={{color:'white', fontWeight:'bold'}}>Sign Up with email</Text></TouchableOpacity>
       <View style={{flexDirection:'row',marginVertical:10,}}>
        <CheckBox
  style={{margin:5,borderRadius:10,}}
    disabled={false}
    value={toggleCheckBox}
    onValueChange={() => setToggleCheckBox(!toggleCheckBox)}
  />
  <Text style={{marginTop:3}}>I agreee to Doggywawky terms and conditions</Text>
  </View>
        </SafeAreaView>
        </ImageBackground>
    )
}

export default SignUpFor

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:"center",
    },
    button:{
        //borderWidth:1,
        width:170,
        marginTop:10,
        borderRadius:20,
        alignItems:'center',
        height:40,
        justifyContent:'center',
        backgroundColor:'gray',
            },
})
