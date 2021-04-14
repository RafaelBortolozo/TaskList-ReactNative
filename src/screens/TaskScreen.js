import React, { useState } from "react";
import { Text, StyleSheet, View, FlatList, TouchableOpacity } from "react-native";
//import { TextInput } from "react-native-gesture-handler";
import { TextInput } from "react-native-paper"
import TaskItem from "../components/TaskItem";

const TaskScreen = () => {
    
    let [tarefas, setTarefas]= useState([])
    let [description, setDescription]= useState('')

    const newTask= () => {
        let id= Math.random()
        let date = new Date()
    
        let day= date.getDay()
        let month= date.getMonth()
        let year= date.getFullYear()
        
        setDescription('')

        return {id: `${id}` , description: description, date: `${day}/${month}/${year}`}
    }

    const removeTask= (id) => {
        let filteredList= tarefas.filter((task) => task.id != id)
        setTarefas(filteredList)
    }

    return (
        <View>
            <TextInput 
                placeholder="Descrição da tarefa"
                value={description}
                onChangeText={newValue => setDescription(newValue)}
            
            />

            <TouchableOpacity style={styles.taskBtn} onPress={() => {
                setTarefas([...tarefas, newTask()])
            }}>
                <Text>Cadastrar tarefa</Text>
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
