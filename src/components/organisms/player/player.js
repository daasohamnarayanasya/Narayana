import React from 'react';
import { ScrollView,StyleSheet, Text, View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from 'expo-linear-gradient';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

export default class Player extends React.Component {

   constructor(props) {
      super(props);
      this.state = {
        gestureName: 'none',
        backgroundColor: '#fff'
      };
   }

   onSwipeUp(gestureState) {
   this.setState({myText: 'up'});
   }

   onSwipeDown(gestureState) {
   this.setState({myText: 'down'});
   }

   onSwipeLeft(gestureState) {
   this.setState({myText: 'left'});
   }

   onSwipeRight(gestureState) {
   this.setState({myText: 'right'});
   }

   onSwipe(gestureName, gestureState) {
      console.log("Sdf"+JSON.stringify(gestureName));
      const {SWIPE_UP, SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT} = swipeDirections;
      this.setState({gestureName: gestureName});
      switch (gestureName) {
        case SWIPE_UP:
          this.setState({backgroundColor: 'red'});
          break;
        case SWIPE_DOWN:
          this.setState({backgroundColor: 'green'});
          break;
        case SWIPE_LEFT:
          this.setState({backgroundColor: 'blue'});
          break;
        case SWIPE_RIGHT:
          this.setState({backgroundColor: 'yellow'});
          break;
      }
    }

   render() {

      const swipeConfig = {
         velocityThreshold: 0.3,
         directionalOffsetThreshold: 80
       };

      const fadeIn = {
         from: {
           opacity: 1
         },
         to: {
           opacity: 0.75
         },
       };

      return (
         <GestureRecognizer
         onSwipe={(direction, state) => this.onSwipe(direction, state)}
         onSwipeUp={(state) => this.onSwipeUp(state)}
         onSwipeDown={(state) => this.onSwipeDown(state)}
         onSwipeLeft={(state) => this.onSwipeLeft(state)}
         onSwipeRight={(state) => this.onSwipeRight(state)}
         config={swipeConfig}
         style={{
           flex: 1,
           backgroundColor: this.state.backgroundColor
         }}
         >
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
            </GestureRecognizer>
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