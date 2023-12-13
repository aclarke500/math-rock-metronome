import { View, StyleSheet, FlatList } from "react-native";
import React, {useState} from "react";

import BeatBlock from "./BeatBlock";

const BeatBar = ({ bar }) => {
  const handleBeatPress = (beat) => {
    bar.toggleBeat(beat);
  }

  return (
    <View style={styles.wrapper}>
      <FlatList
        data={bar.beats}
        renderItem={({item})=>(
          <BeatBlock  beat={item} onBeatPress={handleBeatPress}/>
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
