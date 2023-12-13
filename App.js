import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { BeatBar } from './components'

import Bar  from './music'

const tempo = 100;
const timeSignature = 4; // 4/4 for now

const bar = new Bar(timeSignature, tempo);

export default function App() {
  [play, setPlay] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      {/* THIS ONE BELOW */}
      <Text style={styles.playStateText}>{String(play)}</Text>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />

      <BeatBar numberOfBeats={4} bar={bar}/>
      <Text>{bar.timeSignature}</Text>
      <TouchableOpacity onPress={()=>{playButtonPressed(bar, setPlay)}}>
          <Text style={styles.playButton}>Play</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}


function playButtonPressed(bar, setPlay) {
  bar.toggle();
  setPlay(bar.play);
  console.log(`Play button pressed, play = ${bar.play}`);
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  playButton: {
    justifyContent: 'center',
    backgroundColor: '#ff4a80',
    width: 100,
    height: 100,
  },
  playStateText:{
    fontSize: 24,
  }
});
