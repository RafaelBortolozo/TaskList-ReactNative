import React, { useState } from "react";
import { Text, StyleSheet, FlatList, SafeAreaView, View } from "react-native";
import { TextInput, Button} from "react-native-paper"
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
        <SafeAreaView style={styles.container}>
            <View style={styles.view}>
                <TextInput 
                    style={styles.descriptionInput}
                    placeholder="Descrição da tarefa"
                    value={description}
                    onChangeText={newValue => setDescription(newValue)}
                
                />

                <Button style={styles.taskBtn} mode='contained' onPress={() => {
                    setTarefas([...tarefas, newTask()])
                }}>
                    <Text>Cadastrar tarefa</Text>
                </Button>

                <FlatList style={styles.tasksList}
                    data={tarefas}     
                    keyExtractor={(task) => task.id}
                    renderItem={(element) => {
                        return <TaskItem task={element.item} removeTask={removeTask}/>
                    }}
                />
            </View> 
        </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#d1d8e0',
        flex: 1
    },
    view: {
        width: '96%',
        marginLeft: '2%',
        marginRight: '2%',
    },
    descriptionInput:{
        marginTop: 15
    },
    tasksList: {
        marginTop: 20
    },
    taskBtn: {
        marginTop: 10,
        backgroundColor: '#8854d0'
    }
    
})

export default TaskScreen
