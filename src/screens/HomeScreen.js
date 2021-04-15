import React from "react";
import { Text, StyleSheet, View} from "react-native";
import { Button } from "react-native-paper"

const HomeScreen = (props) => {
  return (
    <View style= {styles.container}>
      <Text style= {styles.title}>App React Native</Text>
      
      <View style={{marginBottom: 10}}>
        <Button style={styles.button} mode='contained' onPress={() => props.navigation.navigate('Task')}>
          Tasks
        </Button>
      </View>

      <Button style={styles.button} mode='contained' onPress={() => props.navigation.navigate('Counter')}>
          Counter
      </Button>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#d1d8e0'
  },
  title: {
    fontSize: 30,
    marginTop: 50, 
    marginBottom: 50,
    borderRadius: 10,
    padding: 7
  },
  button: {
    backgroundColor: '#8854d0'
  },
})

export default HomeScreen
