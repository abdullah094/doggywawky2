import React,{useState} from 'react'
import { StyleSheet, Text, View ,Platform,TouchableOpacity,Button, TextInput} from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker';

const DateTime = () => {
    const [date,setDate] = useState(new Date());
    const [mode,setMode] = useState('date')
    const [show,setshow] = useState(false)
const [text,settext] = useState('Select date and time')


    const onChange = (event,selectDate) => {
const currentDate = selectDate || date;
setshow(Platform.OS==='ios')
setDate(currentDate);

let  tempDate = new Date(currentDate);
let fDate = tempDate.getDate()+ '/' + (tempDate.getMonth()+1) + '/' + tempDate.getFullYear();
let fTime = 'Hours:'  + tempDate.getHours() +'/' + tempDate.getMinutes();
settext(fDate+ '\n' +fTime)
console.log(fDate+' ' + fTime)
}

    const showMode = (currentMode) => {
        setshow(true)
        setMode(currentMode)
    }
    return (
        <View style={{marginVertical:20}}>
        
        <View>
            <Text>{text}</Text>
            <View style={{flexDirection:'row'}}>
         <TouchableOpacity style={styles.button} onPress={()=>showMode('time')}>
             <Text>Select time</Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.button} onPress={()=>showMode('date')}>
         <Text>Select Date</Text>
         </TouchableOpacity>
         </View>
        </View>


         {show&&(
            <DateTimePicker
         testID='dateTimePicker'
         value= {date}
        mode={mode}
        is24Hour={true}
        display='default'
        onChange={onChange}       
                />)}
                </View>

    );
}

export default DateTime

const styles = StyleSheet.create({
    button:{
        backgroundColor:'hotpink',
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center',
        margin:5,
        height:40,
        width:90,
    }
})
