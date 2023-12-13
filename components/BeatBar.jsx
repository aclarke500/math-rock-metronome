import { View, StyleSheet, FlatList } from "react-native";
import BeatBlock from "./BeatBlock";

const BeatBar = ({ bar }) => {
  return (
    <View style={styles.wrapper}>
      <FlatList
        data={bar.beats}
        renderItem={({item})=>(
          <BeatBlock  beat={item}/>
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

});

export default BeatBar;
