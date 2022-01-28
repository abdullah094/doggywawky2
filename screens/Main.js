import React from 'react'
import { StyleSheet, Text, View ,ImageBackground,Image,TouchableOpacity,ScrollView} from 'react-native'
import AppLoading from 'expo-app-loading';
import { useFonts,oswald,Montserrat} from '@expo-google-fonts/inter';
import DogWalking from '../assets/DogWalking.png.jpg'
import DogDating from '../assets/DogDating.png.jpg'
import DogSitting from '../assets/DogSitting.png'
import DwShop from '../assets/DwShop.png.jpg'
import PooperScooper from '../assets/PooperScooper.jpg'
import DogGrooming from '../assets/DogGrooming.png.jpg'
import DrWoof from '../assets/DrWoof.jpg'
import Background from '../assets/background.png'
import { LinearGradient } from 'expo-linear-gradient';




     const Main = ({navigation}) => {
        let [fontsLoaded] = useFonts({
           oswald: require('../assets/oswald/Oswald_Stencil/Oswald-Stencil.otf'),
           Montserrat: require('../assets/Montserrat/Montserrat-Black.ttf')
          });
        
          if (!fontsLoaded) {
            return <AppLoading />;
          } else {
    return (
        <ImageBackground style={{flex:1}} source={Background} blurRadius={3}>
      <ScrollView style={{flex:1,}}>
     
     
     
      <TouchableOpacity
       style={{position:'absolute', top:50,right:20,}} onPress={()=> navigation.navigate('StoreFood')}>
            <LinearGradient
        // Background Linear Gradient
        colors={['rgba(240,30,128,200)', 'transparent']}
        start={{ x: 0.91, y:0.91 }}
        end={{ x: 1, y: 1 }}
        style={{borderRadius:10,width:70,height:30,alignItems:'center'}}>
            <Text style={{fontSize:20 ,color:'white',fontWeight:'bold',textDecorationLine:'underline'}}>Store</Text>
            </LinearGradient>
     
        </TouchableOpacity>
     
     
     
     
        <View style={styles.container}>
        
            <View style={{justifyContent:'center'}}>
            <Text style={{fontSize:20,fontFamily:'Montserrat',}}>Your BestFriend</Text>
            </View>
            
            <Text style={{fontSize:35,fontFamily:'oswald',marginBottom:10}}>IS IN RIGHT HANDS</Text>
            
            <View>
                <View style={{flexDirection:'row'}}>
                <TouchableOpacity onPress={()=> navigation.navigate('Dogwalkingform')}>
                    <Image style={styles.icons} source={DogWalking}/>
                </TouchableOpacity>
                <TouchableOpacity  onPress={()=> navigation.navigate('DogDating')}>
                    <Image style={styles.icons} source={DogDating}/>
                </TouchableOpacity>
                </View>
                <View style={{flexDirection:'row'}}>
                <TouchableOpacity  onPress={()=> navigation.navigate('DogSitting')}>
                    <Image style={styles.icons} source={DogSitting}/>
                </TouchableOpacity>
                <TouchableOpacity  onPress={()=> navigation.navigate('DogMarket')}>
                    <Image style={styles.icons} source={DwShop}/>
                </TouchableOpacity>
                </View>
                <View style={{flexDirection:'row'}}>
                <TouchableOpacity  onPress={()=> navigation.navigate('StoreFood')}>
                    <Image style={styles.icons} source={PooperScooper}/>
                </TouchableOpacity>
                <TouchableOpacity  onPress={()=> navigation.navigate('DogGrooming')}>
                    <Image style={styles.icons} source={DogGrooming}/>
                </TouchableOpacity>
                </View>
                <View style={{alignItems:'center',}}>
                <TouchableOpacity  onPress={()=> navigation.navigate('DrWoof')}>
                    <Image style={styles.icons} source={DrWoof}/>
                </TouchableOpacity>

                
             </View>
            </View>
          
        </View>

        <View style={{marginVertical:10, borderTopWidth:1,borderBottomWidth:1,height:200,marginTop:40}}>
            <Text>Best Selling Items</Text>
        </View>
        <View style={{marginVertical:10, borderTopWidth:1,borderBottomWidth:1,height:200}}>
            <Text>Reviews</Text>
        </View>
        </ScrollView>
        </ImageBackground>
    )
          }
}

export default Main

const styles = StyleSheet.create({
container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    width:'100%',
    marginTop:80,
},
icons:{
    height:110,
    width:110,
    margin:10,
    borderRadius:15,
    
}

})
