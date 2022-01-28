import React,{useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import StarRating from 'react-native-star-rating';

const Starrating = (props) => {
   
//     let [starRating, setStarRating] = useState(stars)
  
// const onStarRatingPress = (rating) => {
//     setStarRating(starRating=rating)
// }
    return (
        <View style={{width:150, alignItems:'flex-start',marginVertical:10}}>
        <StarRating
        fullStarColor='#dbba00'
        disabled={true}
        starStyle={{marginHorizontal:2}}
        maxStars={5}
        halfStarEnabled={true}
        rating={props.stars}
        starSize={40}
       // selectedStar={(rating) => onStarRatingPress(rating)}
      />
      </View>
    )
}

export default Starrating

const styles = StyleSheet.create({})
