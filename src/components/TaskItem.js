import React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { List, Button } from "react-native-paper"
import { FontAwesome, AntDesign } from '@expo/vector-icons';

const TaskItem = (props) => {

  return (
    <List.Item
        title={props.task.description}
        description={props.task.date}
        left={paperProps => <FontAwesome {...paperProps} style={styles.icon} name="tasks" size={24} color="#4b6584" />}
        right={paperProps => 
            <Button style={styles.icon} onPress={() => props.removeTask(props.task.id)}>
                <AntDesign {...paperProps} style={styles.icon} name="closesquare" size={24} color="#fc5c65" />
            </Button>}
    />

    
    // <View style={styles.container}>
    //     <FontAwesome style={styles.imageColumn} name="tasks" size={20} color="black" />
    //     <Text style={styles.descriptionColumn}>{props.task.description}</Text>
    //     <Text style={styles.dateColumn}>{props.task.date}</Text>
    //     <TouchableOpacity style={styles.removeColumn} onPress={() => props.removeTask(props.task.id)}>
    //         <AntDesign name="closesquare" size={20} color="red" />
    //     </TouchableOpacity>
    // </View>
  )
}

const styles = StyleSheet.create({
    icon: {
        marginTop: 14
    }
})

export default TaskItem
