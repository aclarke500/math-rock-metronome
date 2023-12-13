import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";



const BeatBlock = ({ beat }) => {

  return (
    <TouchableOpacity onPress={() => { beat.bar.toggle()}}>
      <View style={beat.isActive ? styles.isActive : styles.isNotActive}>
        <Text >{beat.beat}</Text>
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