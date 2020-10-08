import React from 'react';
import { ScrollView,StyleSheet, Text, View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from 'expo-linear-gradient';

export default class SplashScreen extends React.Component {
   render() {
      const fadeIn = {
         from: {
           opacity: 1
         },
         to: {
           opacity: 0.75
         },
       };

      return (
            <Animatable.View
               animation="fadeIn"
               easing="ease-out-sine" 
               iterationCount={1}
               duration={1000}
               direction="alternate" 
               style={{
                  flex:1,
                  resizeMode:'cover'
               }}>
            <LinearGradient            
               colors={["#02aab0","#00cdac"]}
               start={{x: 0, y: 0}} 
               end={{x: 1, y: 1}}
               style={{
                  flex:1,
                  alignItems: 'center',
                  justifyContent: 'center',
                  resizeMode:'cover'
               }}
            >
            <Animatable.Text 
               animation={fadeIn}
               easing="ease-in-out-sine" 
               iterationCount="infinite"
               duration={1500}
               direction="alternate" 
               style={styles.title}>
                  narayana
            </Animatable.Text>
            </LinearGradient>
            </Animatable.View>
      );
   }
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      resizeMode:'cover'
   },
   title: {
      color: '#ff512f',
      fontSize: 60,
      fontWeight:'bold'
   }
});