
import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import Viewer from './components/view';

function App (){
  
    return(
      <View style={styles.container}>
        <Viewer/>
        <View style={styles.Rojo}></View>
        <View style={styles.blanco}></View>
      </View>
    );
}




const styles = StyleSheet. create({
Rojo:{ 
  flex: 1, 
  backgroundColor: 'red', 
},

container:{
  flex: 1, 
 
},

blanco: {
  flex: 1, 
  backgroundColor: '#ff5', 
}


});
export default App;