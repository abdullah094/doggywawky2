import React, {useState} from 'react'
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker';

export default function Datepicker()  {
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
  
    const onChange = (event, selectedDate) => {
      const currentDate = selectedDate || date;
      setShow(Platform.OS === 'ios');
      setDate(currentDate);
    };
  
    const showMode = (currentMode) => {
      setShow(true);
      setMode(currentMode);
    };
  
    const showDatepicker = () => {
      showMode('date');
    };
  
    const showTimepicker = () => {
      showMode('time');
    };

    return (

        <TouchableOpacity style={styles.button} onPress={<Datepicker/>}>
    <Text style={styles.text}>Search Here</Text>
    
  
        <DateTimePicker
        testID="dateTimePicker"
        value={date}
        mode={mode}
        is24Hour={true}
        display="default"
        onChange={onChange}
      />
      </TouchableOpacity>
    )
}



const styles = StyleSheet.create({})
