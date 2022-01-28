
import React,{useState} from 'react';
import { StyleSheet,} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Dogwalkingform from './screens/DogWalkingForm';
//import Dropdown from './screens/Dropdown';
//import HomeScreen from './screens/HomeScreen';
import Item from './screens/Item';
import Main from './screens/Main';
import DogDating from './screens/DogDating';
import SignIn from './screens/SignIn';
//import SignUp from './screens/SignUp';
import SignUpfor from './screens/SignUpFor';
import DogSitting from './screens/DogSitting';
import StoreFood from './screens/StoreFood';
import DogGrooming from './screens/DogGrooming';
import DogMarket from './screens/DogMarket';
import DrWoof from './screens/DrWoof';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ItemsOpen from './screens/ItemsOpen';
import CheckoutPage from './screens/CheckoutPage';
import CartCard from './CartCard';
import ThankYou from './screens/ThankYou';
import { Provider } from 'react-redux'
import { StripeProvider } from '@stripe/stripe-react-native';
import PaymentScreen from './screens/PaymentScreen';
import Loading from './Loading';
import Loop from './Loop';
import store from './store'



export default function App() {
  const Stack = createNativeStackNavigator();
  const publishableKey = 'pk_test_M8AMOV5v7AxiAFB2FhBwrZ5i00LTxWA2L7'
  
  

  
  return (
    <Provider store={store}>
    <StripeProvider
      publishableKey={publishableKey}
    >
    <NavigationContainer>
    

<SafeAreaProvider>
<Stack.Navigator
initialRouteName='Main'
>

<Stack.Screen
name='SignIn'
component={SignIn}
options={{
  headerShown:false,
}}
/>
<Stack.Screen
name='SignUpFor'
component={SignUpfor}
options={{
  headerShown:false,
}}
/>
<Stack.Screen
name='Main'
component={Main}
options={{
  headerShown:false,
}}
/>

<Stack.Screen
name='Item'
component={Item}
options={{
  headerShown:false,
}}
/>
<Stack.Screen
name='Dogwalkingform'
component={Dogwalkingform}
options={{
  headerShown:false,
}}
/>
<Stack.Screen
name='DogDating'
component={DogDating}
options={{
  headerShown:false,
}}
/>
<Stack.Screen
name='DogGrooming'
component={DogGrooming}
options={{
  headerShown:false,
}}
/>
<Stack.Screen
name='DogShop'
component={DogMarket}
options={{
  headerShown:false,
}}
/>

<Stack.Screen
name='DogSitting'
component={DogSitting}
options={{
  headerShown:false,
}}
/>
<Stack.Screen
name='StoreFood'
component={StoreFood}
options={{
  headerShown:false,
}}
/>
<Stack.Screen
name='DrWoof'
component={DrWoof}
options={{
  headerShown:false,
}}
/>

<Stack.Screen
name='ItemsOpen'
component={ItemsOpen}
// initialParams={{ itemId: 23}}
options={{
  headerShown:false,
  
}}
/>
<Stack.Screen
name='CheckoutPage'
component={CheckoutPage}
options={{
  headerShown:false,
}}
/>
<Stack.Screen
name='CartCard'
component={CartCard}
options={{
  headerShown:false,
}}
/>
<Stack.Screen
name='ThankYou'
component={ThankYou}
options={{
  headerShown:false,
}}
/>
<Stack.Screen
name='PaymentScreen'
component={PaymentScreen}
options={{
  headerShown:false,
}}


/>
<Stack.Screen
name='Loop'
component={Loop}
options={{
  headerShown:false,
}}/>

<Stack.Screen
name='Loading'
component={Loading}
options={{
  headerShown:false,
}}/>
</Stack.Navigator>
{/* <DrWoof/> */}
{/* <CheckoutPage/> */}
{/* <FlatlistDatajson/> */}
{/* <SignIn/> */}
{/* <Main/> */}
{/* <Loop/> */}
{/* <Loading/> */}
{/* <HomeScreen/> */}
{/* <StoreFood/> */}
{/* <Dogwalkingform/> */}
{/* <DogDating/> */}
{/* <DogMarket/> */}
{/* <DogGrooming/> */}
{/* <DogSitting/> */}
{/* <ItemsOpen/> */}
{/* <ThankYou/> */}
{/* <SignUp/> */}
{/* <Dropdown/> */}
{/* <SignUpfor/> */}
{/* <PaymentScreen/> */}
{/* <Item/> */} 
{/* <CartCard/> */}
{/* <Backbutton/> */}
</SafeAreaProvider>
</NavigationContainer>
</StripeProvider>
</Provider>
    );
}
