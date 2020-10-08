import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'
import * as Animatable from 'react-native-animatable';

export default class SplashScreen extends React.Component {
   render() {
      const fadeIn = {
         from: {
           opacity: 0,
         },
         to: {
           opacity: 1,
         },
       };

      return (
         <View style = {styles.container}>
            <Animatable.Text 
               animation={fadeIn} 
               easing="ease-in-out-sine" 
               iterationCount="infinite"
               duration={1500}
               direction="alternate" 
               style={styles.title}>
                  NARAYANA
            </Animatable.Text>
         </View>
      );
   }
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#ebf0f2',
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