import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'

export default class SplashScreen extends React.Component {
   render() {
      return (
         <View style = {styles.container}>
            <Text style = {styles.title}>NARAYANA</Text>
            <FontAwesome5 style = {styles.water} name="water" />
         </View>
      );
   }
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
   },
   title: {
      color: 'black',
      fontSize: 60,
      fontWeight: 'bold',
   },
   water: {
   }
});