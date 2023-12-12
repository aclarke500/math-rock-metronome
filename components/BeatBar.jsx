import { View, StyleSheet, FlatList } from "react-native";
import BeatBlock from "./BeatBlock";

const BeatBar = ({ numberOfBeats }) => {
  let data = [];
  for (let i = 1; i < numberOfBeats+1; i++){
    data.push(i);
  }
  return (
    <View style={styles.wrapper}>
      <FlatList
        data={data}
        renderItem={({item})=>(
          <BeatBlock style={styles.beat} beatNumber={item}/>
        )}
        horizontal
      />
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    height: 200, // Absolute height
    backgroundColor: 'lightgreen',
  },
  beat:{
    display:'none'
  }
});

export default BeatBar;
