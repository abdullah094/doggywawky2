import React,{useState} from 'react'
import { StyleSheet, Text, View,ImageBackground,SafeAreaView,FlatList,SafeAreaViewBase,Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { set } from 'react-native-reanimated'
import Background from '../assets/background.png'
import Gradiant from '../assets/gradiant.png'
import CartCard from '../CartCard'
import { useSelector, useDispatch } from 'react-redux'
import { addtoCart,removefromCart} from '../Slices/CartSlice'
import { createIconSetFromFontello } from 'react-native-vector-icons'
import { cart2 } from './StoreFood'

const CheckoutPage = ({route,navigation}) => {


const {cartItems} = route.params

const data = [
    {
        id:0,
        name: 'dog',
        price1: 34,   
},
{
    id:1,
    name: 'dog Food',
    price1: 134, 
},
]
console.log("Checkout Page")

const [t] =  useState()
    

    let incrementCount = () => {
        if(count<10){
     dispatch(addtoCart())
        }
    };
   
    let decrementCount = () => {
     if(count!=0){
      dispatch(removefromCart())
     }
    
      
      
    };

      const [toggleCheckBox, setToggleCheckBox] = useState(false)


      const dispatch = useDispatch()
      
      
      
      const price = 2.50;
      
      const count = useSelector((state) => state.cart.user.value)
      const Total = useSelector((state) => state.cart.total)

      const id = useSelector((state) => state.cart.id)
    //   console.log(cartItems)
      return (
        <ImageBackground style={styles.container} source={Background} blurRadius={4}>
          
            <ImageBackground 
            style={{width:'100%',flex:0.15,alignItems:'center', justifyContent:'flex-end'}}
            source={Gradiant}
            blurRadius={2}
            >
<Text style={{fontWeight:'bold',color:'black',fontSize:35,}}>Cart</Text>

            </ImageBackground>
            <SafeAreaView style={{flex:1}}>



           <FlatList
           data={cartItems}
           keyExtractor={(item) => item.itemID}
           renderItem={({item})=>(
               <CartCard name={item.itemName} price={item.itemPrice} image={item.itemImage} />)
           }
           />


            <View 
            style={{width:'100%',height:80,backgroundColor:'lightgray',position:'absolute',bottom:0,justifyContent:'center',alignItems:'flex-end'}}>
                <View style={{position:'absolute',top:10,left:10,}}>
                    <Text style={{fontSize:18}}>Total: ${Total}</Text>
                
                </View>
                <View style={{flexDirection:'row'}}> 


<TouchableOpacity 
style={styles.checkoutbuttons}
 onPress={()=>navigation.navigate('PaymentScreen')}>
     <Text style={styles.checkouttext}>Checkout</Text>
     </TouchableOpacity>


<TouchableOpacity 
style={styles.checkoutbuttons}
 onPress={()=> navigation.navigate('Main')}>
     <Text style={styles.checkouttext}>Go to Home</Text>
     </TouchableOpacity>
</View>
</View>

            </SafeAreaView>
        </ImageBackground>
    )
}

export default CheckoutPage

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    checkoutbuttons:{
       
        backgroundColor:'#c91661',
        borderRadius:10,
        height:30,
        width:100,
        alignItems:'center',
        justifyContent:'center',
        marginHorizontal:5,
        marginBottom:10,
    },
    checkouttext:{
        color:'white',
    }
})
