import React from "react";
import { View, Text, StyleSheet } from "react-native";


const Viewer = () => {
    return (
        <View>
          <View style={styles.containers} />
        </View>
      );
    };


const styles = StyleSheet.create({
    containers: {
        height: 45,
        width: '80%',
    },

})

export default Viewer;