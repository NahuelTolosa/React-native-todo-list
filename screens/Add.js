import React, { useState } from 'react'
import {
    StyleSheet,
    Keyboard,
    Text,
    View,
    TextInput,
    TouchableOpacity
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { addTask } from "../redux/actions/taskActions";
import uuid from "uuidv4";

export const Add = ({navigation}) => {

    const [taskText, setTaskText] = useState('');
    const dispatch = useDispatch();

    const handleAddTask = () => {
        Keyboard.dismiss();
        dispatch(addTask({ id: uuid(), text: taskText }));
        setTaskText("");
        navigation.navigate('Tareas')
    };

    return (
        <View style={styles.container}>
            <View style={styles.writeTaskWrapper}>
                <TextInput
                    style={styles.input}
                    placeholder={"Ingrese una nueva tarea . . ."}
                    value={taskText}
                    onChangeText={(text) => setTaskText(text)}
                />
                <TouchableOpacity onPress={() => handleAddTask()}>
                    <View style={styles.addWrapper}>
                        <Text>+</Text>
                    </View>
                </TouchableOpacity>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        justifyContent: "center",
        paddingHorizontal: 10,
    },
    writeTaskWrapper: {
        width: "100%",
        bottom: 0,
        flexDirection: "row",
        justifyContent: "space-around",
    },
    input: {
        paddingVertical: 17,
        paddingHorizontal: 17,
        backgroundColor: "#e5e5e5",
        borderRadius: 10,
        borderColor: "#C0C0C0",
        borderWidth: 1,
        width: 250,
        marginBottom: 20,
    },
    addWrapper: {
        width: 55,
        height: 55,
        backgroundColor: "#e5e5e5",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        borderColor: "#C0C0C0",
        borderWidth: 1,
    }
});
