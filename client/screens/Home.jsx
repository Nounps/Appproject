import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const Home= () => {
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);

    const addTask = () => {
        if (task.trim() === '') return;
        setTasks([...tasks, { text: task, completed: false }]);
        setTask('');
    };

    const toggleTask = (index) => {
        const newTasks = tasks.map((task, i) =>
            i === index ? { ...task, completed: !task.completed } : task
        );
        setTasks(newTasks);
    };

    const removeTask = (index) => {
        const newTasks = tasks.filter((_, i) => i !== index);
        setTasks(newTasks);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Tasks App</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    value={task}
                    onChangeText={setTask}
                    placeholder="Enter a new task"
                />
                <Button title="Add Task" onPress={addTask} />
            </View>
            <FlatList
                data={tasks}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => (
                    <View style={styles.taskContainer}>
                        <TouchableOpacity onPress={() => toggleTask(index)}>
                            <Text style={[styles.taskText, item.completed && styles.completedTask]}>
                                {item.text}
                            </Text>
                        </TouchableOpacity>
                        <Button title="Delete" onPress={() => removeTask(index)} />
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    title: {
        fontSize: 24,
        paddingTop:80,
        marginBottom: 30,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    input: {
        flex: 1,
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 10,
        marginRight: 10,
    },
    taskContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#f0f0f0',
        marginVertical: 5,
        borderRadius: 5,
    },
    taskText: {
        fontSize: 16,
    },
    completedTask: {
        textDecorationLine: 'line-through',
        color: '#bbb',
    },
});

export default Home;
