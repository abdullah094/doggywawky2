import React,{useState,useEffect} from 'react'
import { StyleSheet, Text, View ,Image,ImageBackground,ScrollView,SafeAreaView,TouchableHighlight,TextInput} from 'react-native'
import Background from '../assets/background.png'
import { SliderBox } from "react-native-image-slider-box";
import Product from '../assets/b1.png'
import Product1 from '../assets/b2.png'
import product2 from '../assets/b3.png'
import StarRating from '../StarRating';
import { Paragraph } from 'react-native-paper';
import RenderHtml from 'react-native-render-html';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AppLoading from 'expo-app-loading';
import BlackBackground from '../assets/BlackBackground.png'
import Loading from '../Loading';

const ItemsOpen = ({ route, navigation }) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const { id } = route.params;


  
const url = 'https://demo.wizardinnovations.us/doggywawky-shop/wp-json/wc/v3/products/'+id+'?consumer_key=ck_ae89927cdcd98588e04801c27e3f901e09c591e2&consumer_secret=cs_9c3f39874f1c59ec38d422b959ea3dc38d0cd7d8'
 
useEffect(() => {
   async function fetchData(){
   try{
    const response = await fetch(url)
    const results = await response.json();
    setData(results)
   
   }
   catch(err){
console.log(err)
   } 
  }
  fetchData();
  
},[]);


var images_arr = [];

if(!data.name)
{
console.log('Loading...')
}
else
{
 
  var images_obj = data.images;
  images_obj.forEach(element => {
    images_arr.push(element.src);
  });
}


// var image = []
// for (let i =0; i<(data.images).length;i++)
// {
// image.push(data.images[i].src)
// }


// console.log(data.images[0].src)
 
    
      const source = {
        html: data.short_description
      };
      if(!data.short_description){
        return(
         <Loading/>
        )
      }
      else
      {
    return (
       <ImageBackground style={styles.container} source={Background} blurRadius={4}>
           <ScrollView>
           <SafeAreaView>
           <View >
<SliderBox images={images_arr}  sliderBoxHeight={450} resizeMode={'contain'}/>
</View>
<View style={{marginTop:15, marginLeft:10}}>
    <Text style={{fontWeight:'bold',fontSize:30,}}>{data.name}</Text>
    <RenderHtml
     
     contentWidth={90}
     source={source}
     
   />
    <Text style={{color:'#d63384',fontSize:20,}}>${data.price}</Text>
   
    <StarRating stars={2.5}/>
    {/* Counter */}
  


    {/* buttons */}
   
</View>

</SafeAreaView>
</ScrollView>
           </ImageBackground>
    )}
}

export default ItemsOpen

const styles = StyleSheet.create({
container:{
    flex:1,

},
checkoutbuttons:{
    backgroundColor:'#c91661',
    height:40,
    marginHorizontal:20,
   elevation:5,
    justifyContent:'center',
    alignItems:'center',
    width:120,
    borderRadius:15,
    
},
buttontext:{
    color:'white',
    fontWeight:'bold',

},
counter:
{
    flexDirection:'row', 
    marginLeft:5,
  //  justifyContent:'center',
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
})
