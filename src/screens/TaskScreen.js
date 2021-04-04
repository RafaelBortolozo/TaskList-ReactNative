import React, { useState } from "react";
import { Text, StyleSheet, View, Button, FlatList, TouchableOpacity } from "react-native";
import TaskItem from "../components/TaskItem";

const TaskScreen = () => {
    
    let [tarefas, setTarefas]= useState([])

    const removeTask= (id) => {
        let filteredList= tarefas.filter((task) => task.id != id)
        setTarefas(filteredList)
    }

    return (
        <View>
            <TouchableOpacity style={styles.taskBtn} onPress={() => {
                setTarefas([...tarefas, newTask()])
            }}>
                <Text>Gerar tarefa</Text>
            </TouchableOpacity>
            <FlatList style={styles.tasksList}
                data={tarefas}     
                keyExtractor={(task) => task.id}
                renderItem={(element) => {
                    return <TaskItem task={element.item} removeTask={removeTask}/>
                }}
            />
        </View>
  )
}

const newTask= () => {
    let id= Math.random()
    let date = new Date()

    let day= date.getDay()
    let month= date.getMonth()
    let year= date.getFullYear()

    return {id: `${id}` , description: `Tarefa #${id}`, date: `${day}/${month}/${year}`}
}

const styles = StyleSheet.create({
    tasksList: {
        marginTop: 20
    },
    taskBtn: {
        margin: 10,
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10
    }
    
})

export default TaskScreen
