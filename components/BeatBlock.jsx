import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";


var numberOfBeats; // give global scope so seen in styles
const BeatBlock = ({ beatNumber }) => {
  numberOfBeats = beatNumber; // this is a hack
  return (
    <View style={styles.container}>
      <Text >{beatNumber}</Text>
    </View>
  )
}




const styles = StyleSheet.create({
  container: {
    height: 90,
    width: 90,
    
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    border: '5px solid black',
    borderRadius: 5,
  },
});


export default BeatBlock;