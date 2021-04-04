import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = (props) => {
  return (
    <View style= {{alignItems: 'center'}}>
      <Text style= {styles.estilo1}>Olá mundo</Text>
      <Text style= {styles.estilo2}>Olá mundo2</Text>
      
      <View style={{marginBottom: 10}}>
        <Button 
          title='Tasks'
          onPress={() => props.navigation.navigate('Task')}
        />
      </View>

      <Button 
        title='Counter'
        onPress={() => props.navigation.navigate('Counter')}
      />
      
    </View>
  )
}

const styles = StyleSheet.create({
  estilo1: {
    fontSize: 30,
    marginTop: 50, 
    backgroundColor: '#DDDDDD',
    borderRadius: 10,
    padding: 7
  },

  estilo2: {
    marginTop: 50,
    color: '#0000FF',
    marginBottom: 20
  }
})

export default HomeScreen
