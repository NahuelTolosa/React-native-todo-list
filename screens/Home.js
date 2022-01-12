import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Task from "../components/Task";
import { addTask, removeTask } from "../redux/actions/taskActions";
import uuid from "uuidv4";

export const Home = () => {
  const [taskText, setTaskText] = useState();
  const taskItems = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();

  const handleAddTask = () => {
    Keyboard.dismiss();
    dispatch(addTask({ id: uuid(), text: taskText }));
    setTaskText("");
  };

  const completeTask = (id) => {
    dispatch(removeTask(id));
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView style={styles.titleWrapper}>
        <Text style={styles.sectionTitle}>Bienvenido!</Text>
      </KeyboardAvoidingView>

      <ScrollView>
        <View style={styles.tasksWrapper}>
          <View style={styles.items}>
            {taskItems
              ? taskItems.map((task) => {
                  return (
                    <TouchableOpacity
                      key={task.id}
                      onPress={() => completeTask(task.id)}
                    >
                      <Task text={task.text} />
                    </TouchableOpacity>
                  );
                })
              : <Text></Text>
              }
          </View>
        </View>
      </ScrollView>
      <KeyboardAvoidingView
        style={styles.writeTaskWrapper}
      >
      
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  titleWrapper: {
    flexDirection: "column",
    width: "100%",
    height: 90,
    justifyContent: "center",
    alignItems: "center",
  },
  tasksWrapper: {
    paddingBottom: 90,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  items: {
    marginTop: 30,
  }
});
