import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, SafeAreaView, TouchableOpacity } from 'react-native';
import { BeatBar } from './components'
import Bar  from './music'

const tempo = 120;
const timeSignature = 4; // 4/4 for now

const bar = new Bar(timeSignature, tempo);



export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />

      <BeatBar numberOfBeats={4} bar={bar}/>
      <Text>{bar.timeSignature}</Text>
      <TouchableOpacity onPress={() => bar.toggle()}>
          <Text style={styles.playButton}>Play</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
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
  }
});
