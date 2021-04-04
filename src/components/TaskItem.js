import React from "react";
import { Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";

const TaskItem = (props) => {

  return (
    <View style={styles.container}>
        <Image source={require('../../assets/task.png')} style={styles.imageColumn}/>
        <Text style={styles.descriptionColumn}>{props.task.description}</Text>
        <Text style={styles.dateColumn}>{props.task.date}</Text>
        <TouchableOpacity style={styles.removeColumn} onPress={() => props.removeTask(props.task.id)}>
            <Text style={{color: '#FFFFFF'}}>X</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        marginTop: 20
    },
    imageColumn: {
        width: '10%',
        resizeMode: 'contain'
    },
    descriptionColumn: {
        width: '60%'
    },
    dateColumn: {
        width: '25%'
    },
    removeColumn: {
        width: '5%',
        backgroundColor: 'red',
        alignItems: 'center'
    }
})

export default TaskItem
