import React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const TaskItem = (props) => {

  return (
    <View style={styles.container}>
        <FontAwesome style={styles.imageColumn} name="tasks" size={20} color="black" />
        <Text style={styles.descriptionColumn}>{props.task.description}</Text>
        <Text style={styles.dateColumn}>{props.task.date}</Text>
        <TouchableOpacity style={styles.removeColumn} onPress={() => props.removeTask(props.task.id)}>
            <AntDesign name="closesquare" size={20} color="red" />
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
        marginTop: 20,
        marginLeft: '2%',
        marginRight: '2%'
    },
    imageColumn: {
        width: '10%'
    },
    descriptionColumn: {
        width: '60%'
    },
    dateColumn: {
        width: '25%'
    },
    removeColumn: {
        width: '5%',
        alignItems: 'center'
    }
})

export default TaskItem
