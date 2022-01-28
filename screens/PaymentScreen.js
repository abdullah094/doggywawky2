import React, { useState } from 'react'
import { StyleSheet, Text, View,ScrollView,ImageBackground,TouchableOpacity,TextInput, Alert } from 'react-native'
import {CardField, useStripe,useConfirmPayment,ApplePayButton, PaymentIntents } from '@stripe/stripe-react-native';
import Background from '../assets/background.png'
//import Stripe from 'stripe';



const PaymentScreen = () => {
  // const stripe = Stripe(secretKey,{apiVersion:''})
   const secretKey = 'sk_test_51GYJKpA44rYLBGNvEu3XEQ26n5QypzAgcKgePrbFJBTjqVmHbKjFIqmypxn3o9OP9Az5DbkrJqu1tmz1vuUJYM22003qD83pZj'
 const publishableKey = 'pk_test_M8AMOV5v7AxiAFB2FhBwrZ5i00LTxWA2L7'


 
 

   //const { confirmPayment } = useStripe();
const [cardDetails,setcardDetails] = useState()
    const [name, setname] = useState('')
    const {confirmPayment, loading } = useConfirmPayment();

    const handlePayment = () => {
if(!cardDetails?.complete || !name){
  console.log('entercomplete details')
}
}
// const paymentIntent = stripe.PaymentIntents.create({
//   amount: 1099,
//   currency: 'usd',
   
// })
// const clientsecret = paymentIntent.client_secret;
//     }

    return (
    <ImageBackground style={{flex:1}} source={Background} blurRadius={5}
    >
        <View style={{flex:1,justifyContent:'center',marginLeft:10,width:'95%',}}>
            <ScrollView contentContainerStyle={{flexGrow : 1, justifyContent : 'center',alignItems:'center'}}>
            
           
           
            <Text style={{marginBottom:15,fontSize:15}}>Enter Credit Card Information</Text>
           
            <TextInput placeholder='Enter Name' onChange={value => setname(value.nativeEvent.text)}
             style={{width:300,textAlign:'center',borderRadius:2,backgroundColor:'white',height:40}}/>
           
        <CardField
        postalCodeEnabled={true}
        placeholder={{
          number: '4242 4242 4242 4242',
        }}
        cardStyle={{
          backgroundColor: '#FFFFFF',
          textColor: '#000000',
        }}
        style={{
          width: '100%',
          height: 50,
          marginVertical: 20,
        }}
        onCardChange={(cardDetails) => {
          setcardDetails(cardDetails)
        }}
        // onFocus={(focusedField) => {
        //   console.log('focusField', focusedField);
        // }}
      />
      <TouchableOpacity onPress={handlePayment} disabled={loading}><Text style={{color:'blue',fontSize:20,fontStyle:'italic'}}>Pay</Text></TouchableOpacity>
     
    
    
    
      </ScrollView>
      </View>
      </ImageBackground>
    )
}

export default PaymentScreen

const styles = StyleSheet.create({})
