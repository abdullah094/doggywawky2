import React,{useState,useEffect} from 'react'
import { StyleSheet, Text, View,ImageBackground,FlatList } from 'react-native'
import Item from '../Item'
import Background from '../assets/background.png'
import Gradiant from '../assets/gradiant.png'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import { Icon } from 'react-native-elements'
import Loading from '../Loading'
import { useSelector, useDispatch } from 'react-redux'
import { addtoCart,removefromCart} from '../Slices/CartSlice'
import { connect } from 'react-redux'
import { createIconSetFromFontello } from 'react-native-vector-icons'
import Empty from '../assets/adaptive-icon.png'
import {THE_KEY_TO_HAPPINESS} from '@env'



 
const StoreFood = ({navigation}) => 
{



  const Total = useSelector((state) => state.cart.total)
  const count = useSelector((state) => state.cart.user.value)
  const Cart = useSelector((state) => state.cart.cart)
  
  const dispatch = useDispatch()


  let [itemID, setitemID] = useState('')
  const [itemPrice, setitemPRice] = useState('')
  const [itemName, setitemName] = useState('')
const [itemImage,setitemImage] = useState()

    const [selectedId, setSelectedId] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
  

  


    useEffect(() => {
      getArticlesFromApi();
      
    } , [] );




    const getArticlesFromApi = async () => {
      fetch('https://demo.wizardinnovations.us/doggywawky-shop/wp-json/wc/v3/products?search=&consumer_key=ck_ae89927cdcd98588e04801c27e3f901e09c591e2&consumer_secret=cs_9c3f39874f1c59ec38d422b959ea3dc38d0cd7d8')
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    };

    let [cartItems , setcartItems] = useState()
    
    const pressed = (obj) => {
   
      let cartf = []
  
cartf.push(obj)
 
console.log(cartf)
    }
   

   
  

    
    let renderItem = ({item}) => (

      
(item.images[0])?
<Item description={item.short_description} price={item.price} image= {item.images[0].src}
          Name={item.name} goto={()=>navigation.navigate('ItemsOpen',{id:item.id})}
             addtocart = {()=>{  
              dispatch(addtoCart());
              var name = item.name
              var price = item.price
              var image = item.images[0].src
              var id = item.id
              var obj = {name,price,image,id}
            pressed(obj)
          
            }
            
            }/>:
            <Item description={item.short_description} price={item.price} 
     
            Name={item.name} goto={()=>navigation.navigate('ItemsOpen',{id:item.id})}
             addtocart = {()=>{  
              dispatch(addtoCart());
           //  setitemImage(item.images[0].src)
              setitemID(item.id);
              setitemName(item.name);
              setitemPRice(item.price);
          
            }
            
            }/>

        )
     
        
    
  
      

    return (

        <ImageBackground style={styles.container} source={Background} blurRadius={5}>
            <ImageBackground 
            style={{width:'100%',height:100,alignItems:'center', justifyContent:'flex-end',}}
            source={Gradiant}
            blurRadius={100}
            >
                <Text style={{fontWeight:'bold',fontSize:40,color:'black',}}>Store</Text>
             
                <View style={{position:'absolute',right:10,bottom:20,}}>
                <TouchableOpacity style={{flexDirection:'row'}  }
                 onPress={(item)=>navigation.navigate('CheckoutPage',{cartItems: cartItems})}>
                <Icon type='antdesign'  name="shoppingcart" size={30} color="black" />
                  <TextInput value={count.toString()} editable={false} />
                    </TouchableOpacity>
                </View>
            </ImageBackground>
           


            <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      
      />
        </ImageBackground>
    )


    }
const mapStateToProps = (state) => ({user: state.user})

const mapDispatchToProps = (dispatch) => ({
  addUser:(username) => 
dispatch({
  type: ADD_USER,
  payload: {
    username,
  },
})
})

export default connect(mapStateToProps,mapDispatchToProps)(StoreFood)




const styles = StyleSheet.create({
    container:{
        flex:1,
       
    }
})
