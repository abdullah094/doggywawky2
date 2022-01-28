// import React, {useEffect} from 'react';
// import {View, Text, SafeAreaView, TouchableOpacity, Image, FlatList, Dimensions, Animated, Alert} from 'react-native';
// import {Navigation} from 'react-native-navigation';
// import { inject , observer } from 'mobx-react'; // Observer lagta h jahan update karana ho
// import { } from 'mobx-react-lite'
// import { useShopCart , ShopCartContext } from './MODEL/Model_ShopCart';
// import Model_AppPrimitives from './MODEL/Model_AppPrimitives'
// import axios from 'axios'
// import {CustomImage} from './GeneralFiles/CustomWidgets';
// import {_splitUrl,_AppSpinner,_ModalPaymentSuccess,_WebViewPaypal} from './GeneralFiles/GeneralApp';
// import Snackbar from 'react-native-snackbar';
// import {RectButton} from 'react-native-gesture-handler';
// import Swipeable from 'react-native-gesture-handler/Swipeable';


// const ScreenShopCart = props => {
//     const {width,height} = Dimensions.get('screen')
//     const componentId = props.componentId;
//     const [paymentDone,setPaymentDone] =React.useState(false)
//     const [paypalUri , setPaypalUri] = React.useState( '')
//     const [modal , setModal] = React.useState( false )
//     const [spinner , setSpinner] = React.useState( false )
//     const shopCart = useShopCart()
//     const {itemsAddedToCart} =useShopCart()
//     const [state , setState ] =React.useState({
//       items : [ { title : '' } , { title : '' } , { title : '' } , { title : '' } , ]
//     })
//     const screenGoBack =()=>{
//         Navigation.pop( props.componentId )
//     }
//     const HeaderDelete =()=>{
//         Alert.alert(
//             "Delete All",
//             "Are you sure to delete all items from Cart",
//             [
//                 {
//                     text: "Cancel",
//                     onPress: () => console.log("Cancel Pressed"),
//                     style: "cancel"
//                 },
//                 { text: "OK", onPress: () => {console.log("OK Pressed"); shopCart.emptyCart(); } }
//             ],
//             { cancelable: true }
//         );

//     }
//     const funcCheckout = async()=> {
//         _paypalWithUrl()
//     }
//     const handleWebViewURLChange = async(newPage)=> {
//         const { url } = newPage
//         console.log("handle Web View URL")
//         console.log(url)
//         if(url.includes('www.google.com')){
//             setSpinner(true)
//             setModal(false)
//             console.log("hurrah -  got it " , url )
//             try {
//                 let obj = _splitUrl(url)
//                 obj = {...obj, amount: shopCart.total }
//                 console.log("Data Of Object", obj)
//                 try {
//                     let {status, data} = await axios.post(Model_AppPrimitives.apiUrl + '/api/transaction', obj, {headers: {Authorization: `Bearer ${Model_AppPrimitives.token}`}})
//                     if (data != null) {
//                         try {
//                             console.log(`order api body => ${JSON.stringify(itemsAddedToCart)}`)
//                             let {status, data} = await axios.post(Model_AppPrimitives.apiUrl + '/api/order', {itemsAddedToCart}, {headers: {Authorization: `Bearer ${Model_AppPrimitives.token}`}});
//                             // {
//                             //     "order": {
//                             //     "order_no": 1612244846,
//                             //         "amount": 1500
//                             // }
//                             // }
//                             console.log(`DATA FROM ORDER API ==>${JSON.stringify(data)}`)
//                             let orderDetails = data.order
//                             if (orderDetails != null) {
//                                 console.log("ORDER BEING PLACED !!! .. ")
//                             }
//                         } catch (e) {
//                             console.log("ERROR IN ORDER API => ", e)
//                         }
//                         setSpinner(false)
//                         setPaymentDone(true)
//                         console.log("RESPONSE FROM SERVER -> ", data)
//                     }
//                 } catch (e) {
//                     setSpinner(false)
//                     console.log("Error in PAypal Transaction API .. ", e)
//                 }
//             }catch(e) {
//                 setSpinner(false)
//                 alert(`got Error => ${e}`)
//             }
//         }
//     }
//     const _paypalWithUrl =async()=>{
//         setSpinner(true)
//         try {
//             console.log(`PAYPAL WITH URL. Total => ${shopCart.total}`)
//             let {status, data} = await axios.post(Model_AppPrimitives.apiUrl+'/api/paypal', {amount : shopCart.total}  , { headers : {Authorization: `Bearer ${Model_AppPrimitives.token}` }});
//             console.log(data)
//             let url=data.url
//             if( url!=null ) {
//                 setPaypalUri(url)
//                 console.log("setMODAL == true" )
//                 setModal(true)
//                 setSpinner(false)
//             }else {
//                 setSpinner(false)
//                 alert("Sorry Some Error Occured . While processing Payment . Please try again .")
//             }
//         }catch (e) {
//             setSpinner(false)
//             console.log("Error in PAypal API .. " , e )
//             alert("Sorry.Some Error Occured . Please Try Again")
//         }
//     }
//     const _paypalViews=()=>{
//         return(
//             <>
//                 <_WebViewPaypal
//                     setView={setModal}
//                     view={modal}
//                     URI={paypalUri}
//                     HandleWebViewURLChange={handleWebViewURLChange}
//                     setSpinner={setSpinner}
//                 />
//                 <_AppSpinner spinner={spinner}/>
//                 <_ModalPaymentSuccess setShow={setPaymentDone } show={paymentDone}/>
//             </>
//         )
//     }
//     const _footerView=()=>{
//         return(
//             <View style={ { borderTopWidth : 1 , borderTopColor : 'lightgrey' } }>
//                 <View style ={ { paddingStart : 20 , paddingEnd : 20  , marginTop : 10  } } >
//                     <Text>Sub Total</Text>
//                     <Text style ={ { position : 'absolute' , right : 20 } } >${ shopCart.subTotal }</Text>
//                 </View>
//                 <View style ={ { paddingStart : 20 , paddingEnd : 20 , marginTop : 10  } } >
//                     <Text>Total</Text>
//                     <_viewCartTotal/>
//                 </View>
//                 <TouchableOpacity onPress={ () => { funcCheckout() } } >
//                     <View style={ { backgroundColor : 'red' , borderRadius : 5 , alignItems : 'center'  , justifyContent : 'center'  , height : 40 , marginStart : 20 , marginEnd : 20  , marginTop : 30 , marginBottom : 20 } } >
//                         <Text style = { { color : 'white' } } >Checkout</Text>
//                     </View>
//             </TouchableOpacity>
//         </View>)
//     }
//     const _viewCartTotal=observer(()=>{
//         return(<Text style ={ { position : 'absolute' , right : 20 } } >${ shopCart.total }</Text>)
//     })
//     const _flatList=observer(()=>(
//         <FlatList
//             data={shopCart.itemsAddedToCart}
//             renderItem={ ( { item ,index } ) => ( <Cell product={item} index={index} /> )}
//             extraData={shopCart.refreshCartList}
//         />
//     ))
//     return(
//         <View style={ { flex : 1   } }>
//             <HeaderScreenCart
//                 title="Cart"
//                 funcGoBack={ screenGoBack }
//                 funcDelete={ HeaderDelete }/>
//             <_flatList/>
//             <_footerView/>
//             <_paypalViews/>
//         </View>
//     )
// }  ;
// const HeaderScreenCart = ( { title  , style  , funcGoBack  , funcDelete  } )=> {
//     return<>
//         <SafeAreaView />
//         <View style = {{ ... style  , flexDirection : 'row' , alignItems : 'center' , justifyContent : 'center'  , marginTop : 10  }} >
//             <TouchableOpacity style = { { position : 'absolute' , left : 20 } }  onPress= {()=>{funcGoBack()}}>
//                 <Image
//                     style = { { width : 25 , height : 25 } }
//                     resizeMode  = 'contain'
//                     source = { require ('./Assets/Bar_TopBar/back.png') }/>
//             </TouchableOpacity>
//             <Text style = {{ fontSize : 20  }} >{title}</Text>
//             <TouchableOpacity style={{position:'absolute',right:20}} onPress= { () => { funcDelete() } } >
//                 <Image
//                     style = { { width : 25 , height : 25 } }
//                     resizeMode  = 'contain'
//                     source = { require ('./Assets/Bar_TopBar/delete.png') }/>
//             </TouchableOpacity>
//         </View>
//     </>
// }
// const Cell=({product,index})=>{
//     const shopCart = useShopCart()
//     const _viewItemCount=observer(()=>{
//         return(
//             <Text style = {{width:25,textAlign:'center'}} >{String(product.initialQuantity)}</Text>
//         )
//     })
//     const _viewItemPrice=observer(()=>{
//         return(
//             <Text> ${product.price} </Text>
//         )
//     })
//     const funcPlus=()=>{
//         console.log(`initialQuantity =${product.initialQuantity} && quantity = ${product.quantity}`)
//         if(product.initialQuantity>=product.quantity){
//             console.log(`product.initialQuantity==product.quantity`)
//             if(product.quantity!=1){
//                 console.log(`product.quantity!=1`)
//                 Snackbar.show({text: product.title+' is Out of Stock, We only have '+product.quantity+' items avalible',duration:Snackbar.DURATION_SHORT,numberOfLines:2})
//             }
//             if(product.initialQuantity==1){
//                 console.log(`product.initialQuantity==1 OUTER`)
//                 Snackbar.show({text: product.title+' is Out of Stock, We only have '+product.initialQuantity+' item avalible',duration:Snackbar.DURATION_SHORT,numberOfLines:2})
//             }
//         }
//         shopCart.upgradeQuantity(index)
//     }
//     const funcMinus=()=>{
//         if(product.initialQuantity==1)
//         {
//             Snackbar.show({text:'Must have Atleast an Item', duration:Snackbar.LENGTH_SHORT})
//         }
//         shopCart.downgradeQuantity(index)
//     }
//     const _updateRef=ref=>{
//         console.log(`UPDATE REF CALLED -> ${ref}`)
//     }
//     const _renderRightActionButtons=(progress)=>{
//         const trans = progress.interpolate({
//             inputRange:[0,1],
//             outputRange:[50,0]
//         })
//         return(
//             <Animated.View style={{alignItems:'center',justifyContent:'center',flex:1,transform:[{translateX: trans}]}}>
//                 <RectButton style={{alignItems:'center',justifyContent:'center', height:80,backgroundColor:'red'}} onPress={()=>{alert('pressed')}} rippleColor={'black'}>
//                     <Image
//                         style = { { width : 25 , height : 25 } }
//                         resizeMode  = 'contain'
//                         source = { require ('./Assets/Bar_TopBar/delete.png') }/>
//                 </RectButton>
//             </Animated.View>
//         )
//     }
//     const _cellView=()=>(
//         <View style={  { height:80,marginTop:5,flexDirection:'row'  , alignItems : 'center'  , paddingStart : 20 , flex : 1 } }>
//             <CustomImage
//                 source={  product.image != null ? { uri : Model_AppPrimitives.apiUrl + product.image } : require('./Assets/Home/planset.png')  }
//                 BorderRadius={3}
//                 style ={ {  borderRadius : 3  , width : 60 , height : 60 ,borderWidth : 1 , borderColor : 'black' } }/>
//             <View style ={ { marginStart : 2  } } >
//                 <Text> { product.title } </Text>
//                 <Text style ={ { fontSize : 10 , color : 'grey' } } > { product.description } </Text>
//                 <_viewItemPrice/>
//             </View>
//             <View style ={ { flexDirection : 'row' , alignItems : 'center'  , position : 'absolute' , right : 20  } } >
//                 <TouchableOpacity  onPress={ () => { funcMinus() } }>
//                     <View style ={ { backgroundColor : 'black' , width : 25 , height : 25  , justifyContent : 'center' , alignItems : 'center' , marginEnd : 5  , borderRadius : 4 } } >
//                         <Text style ={ { color : 'white' } } >-</Text>
//                     </View>
//                 </TouchableOpacity>
//                 <_viewItemCount/>
//                 <TouchableOpacity  onPress={ () => { funcPlus() } } >
//                     <View style ={ { backgroundColor : 'black' , width : 25 , height : 25  , justifyContent : 'center' , alignItems : 'center' , marginStart : 5 , borderRadius : 4  } } >
//                         <Text style ={ { color : 'white' } } >+</Text>
//                     </View>
//                 </TouchableOpacity>
//             </View>
//         </View>
//     )
//     return(

//         <Swipeable
//         // ref={ref=>{_updateRef(ref)}}
//         // friction={2}
//         // rightThreshold={40}
//             renderRightActions={prog=>_renderRightActionButtons(prog)}
//             renderLeftActions={_renderRightActionButtons}
//             onSwipeableRightOpen={()=>{console.log('SWIPED RIGHT')}}
//         >
//             <_cellView/>
//         </Swipeable>
//     )
// }


// export default ScreenShopCart ;
