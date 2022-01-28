import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native'

export default function SocialMedia({navigation}) {
    return (
        <View style={{flexDirection:'row',marginVertical:10,marginBottom:20,justifyContent:'center'}}>
<TouchableOpacity style={styles.logo} activeOpacity={0.5} >

    <Image style={styles.image}
     source={{ uri: 'https://cdn3.iconfinder.com/data/icons/capsocial-round/500/facebook-512.png',}}
    
    />
    
    
</TouchableOpacity>
    
<TouchableOpacity style={styles.logo} activeOpacity={0.5}>
    <Image style={styles.image}
     source={{ uri: 'https://cdn3.iconfinder.com/data/icons/2018-social-media-logotypes/1000/2018_social_media_popular_app_logo_instagram-256.png',}}
    
    />
    
</TouchableOpacity>
<TouchableOpacity style={styles.logo} activeOpacity={0.5}>
    <Image style={styles.image}
     source={{ uri: 'https://cdn3.iconfinder.com/data/icons/capsocial-round/500/linkedin-512.png',}}
    
    />
    
    
</TouchableOpacity>

  </View>
    )
}



const styles = StyleSheet.create({
    logo:{
        padding:6,
          },
          image:{
            width:50,
            height:50,
            resizeMode:'contain',
            padding:1,
            
          },
})
