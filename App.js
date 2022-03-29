
import React, {Component} from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
function App (){
  
const counters=0;
    return (
      <View style ={styles.container}>

        <View style={styles.sub}>
         
          <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnTxt}>{counters}</Text>
          onPress={() => {counters+1;}}

          </TouchableOpacity>

          <View style={styles.counterContainer}>
            <Text style={styles.counter}>{counters}</Text>
          </View>


          <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnTxt}>-</Text>
          </TouchableOpacity>

        </View>
      </View>
    );
}




const styles = StyleSheet. create({

  container: {
    flex: 1,
    backgroundColor: '#2c3e58',
    justifyContent: 'center',
    
  },
  sub: {
    height: 50,
    width: '100%',
    paddingHorizontal: 10,
    flexDirection: 'row',
    

  },

  btn: {
    width: 90,
    height: 50,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#ecf0f1',
    alignItems: 'center',
    borderRadius: 20,


  },

  btnTxt: {
    fontSize: 25,
    color: '#7f8c8d',
    fontWeight: 'bold',
    fontSize: 30,
    
    
  },

  counterContainer: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center'

  },

  counter: {
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold',
    
  }


});
export default App;