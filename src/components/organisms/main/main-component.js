import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {InitialLoader} from '_utils/initial-loader';
import {SplashScreen} from '_organisms/splash-screen';
import {Player} from '_organisms/player';

export default class MainComponent extends React.Component {

   state = {
      loaded : false
   }

   constructor(){
      super();
      InitialLoader.load(v => this.setState({loaded : true}));
   }

   render() {
      return (
         this.state.loaded ? <Player/>:<SplashScreen/>
      );
   }
}
