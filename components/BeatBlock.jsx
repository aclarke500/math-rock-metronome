import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, {useEffect, useState} from "react";



const BeatBlock = ({ beat }) => {
  const [isActive, setIsActive] = useState(false);
  // beat.isActiveFunction = setIsActive;
  useEffect(() => {
    if (beat.isActive) {
      setIsActive(true);
      const timer = setTimeout(() => {
        setIsActive(false); // Turn off after numberOfMs
      }, beat.numberOfMs);

      return () => clearTimeout(timer); // Clear timer on unmount or re-render
    }
  }, [beat.isActive, beat.numberOfMs]);

  return (
    <TouchableOpacity onPress={() => { 
      setIsActive(!isActive);
      beat.isActive = !isActive;
    }}>

      <View style={isActive ? styles.isActive : styles.isNotActive}>
        <Text >{String(beat.tempo)}</Text>
        <Text>{String(beat.isActive)}</Text>
        <Text>{beat.beat}</Text>
      </View>
    </TouchableOpacity>
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
  isActive: {
    height: 90,
    width: 90,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    border: '5px solid black',
    borderRadius: 5,

  },
  isNotActive: {
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