import { View, StyleSheet, Text } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { Colors } from '../constants';
import moment from 'moment';
import WeatherCoordinates from '../components/WeatherCoordinates';
import WeatherCurrent from '../components/WeatherCurrent';

function formatDate(date :Date){
    const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    const today = date.getDate();
    console.log(today < 10 && '0')
    const month = months[date.getMonth()];
    return `${month} ${today < 10 ?`0${today}` : today}, ${date.getFullYear()}`;
}

export default function HomeScreen() {
    const now = moment(new Date());
  return (
      <LinearGradient colors={[Colors.LIGHT_GRAY,Colors.DRAKER_GRAY]} testID='home-screen' style={styles.container}>
        <View style={styles.title}>
            <Text style={styles.date}>{now.format('MMM DD, YYYY')}</Text>
            <Text style={styles.day}>{now.format('dddd')}</Text>
        </View>
        <WeatherCurrent />
        <Text testID='home-screen-divider'  style={styles.divider}> OR </Text>
        <WeatherCoordinates />
      </LinearGradient>

  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:40,
        alignContent:'space-between',
        justifyContent:'space-evenly'
    },
    title:{
        justifyContent:'flex-end',
    },
    date:{
        color:Colors.GRAY,
        fontSize:13,
    },
    day:{
        color:Colors.WHITE,
        fontSize:21
    },
    divider:{
        color:Colors.WHITE,
        textAlign:'center'
    }
});