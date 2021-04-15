import React from "react";
import { StyleSheet} from "react-native";
import { List, Button } from "react-native-paper"
import { FontAwesome, AntDesign } from '@expo/vector-icons';

const TaskItem = (props) => {

  return (
    <List.Item
        title={props.task.description}
        description={props.task.date}
        left={paperProps => <FontAwesome {...paperProps} style={styles.icon} name="tasks" size={24} color="black" />}
        right={paperProps => 
            <Button style={styles.icon} onPress={() => props.removeTask(props.task.id)}>
                <AntDesign {...paperProps} style={styles.icon} name="closesquare" size={24} color="#fc5c65" />
            </Button>}
    />
  )
}

const styles = StyleSheet.create({
    icon: {
        marginTop: 14
    }
})

export default TaskItem
