import React from 'react';
import { ScrollView,StyleSheet, Text, View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from 'expo-linear-gradient';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import TrackPlayer from 'react-native-track-player';
const colors = require('./colors.json');
const songs = require('./data.json');

export default class Player extends React.Component {

   

   constructor(props) {
      super(props);

      this.state = {
        colors:JSON.parse(JSON.stringify(colors)),
        songs:JSON.parse(JSON.stringify(songs)),
        gestureName: 'none',
        paused: false,
        gradientColors:[],
        colorIndex: 0,
        backgroundColor: '#fff'
      };
   }

   
   componentDidMount() {
      this.setState({gradientColors:this.state.colors[0]});
      TrackPlayer.setupPlayer().then(() => {
         TrackPlayer.add(this.state.songs).then(()=> {
            TrackPlayer.play();
         });
     });
   }

   pausePlayTrack() {
      if(!this.state.paused) {
         this.setState({paused:true});
         TrackPlayer.pause();
      } else {
         this.setState({paused:false});
         TrackPlayer.play();
      }
   }

   onSwipeUp(gestureState) {
   this.setState({myText: 'up'});
   this.pausePlayTrack();
   }

   onSwipeDown(gestureState) {
   this.setState({myText: 'down'});
   }

   onSwipeLeft(gestureState) {
   this.setState({myText: 'left',colorIndex:this.state.colorIndex<this.state.colors.length-1?this.state.colorIndex+1:0});
   this.setState({gradientColors: this.state.colors[this.state.colorIndex]});
   TrackPlayer.skipToPrevious().then(()=>{},()=>{console.log("Promise Error")});
   }


   onSwipeRight(gestureState) {
   this.setState({myText: 'right',colorIndex:this.state.colorIndex>0?this.state.colorIndex-1:this.state.colors.length-1});
   this.setState({gradientColors: this.state.colors[this.state.colorIndex]});
   TrackPlayer.skipToNext().then(()=>{},()=>{console.log("Promise Error")});;
   }

   onSwipe(gestureName, gestureState) {
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
               easing="ease-in-sine" 
               iterationCount={1}
               duration={1000}
               direction="alternate" 
               style={{
                  flex:1,
                  resizeMode:'cover'
               }}>
               <LinearGradient            
                  colors={this.state.gradientColors}
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
      fontFamily: 'Josefin Slab SemiBold',
      color: 'black',
      fontSize: 60
   }
});