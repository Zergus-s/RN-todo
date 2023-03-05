import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  NavigationProp,
  ParamListBase,
  RouteProp,
} from '@react-navigation/native';
import React, {useLayoutEffect} from 'react';
import {View, StyleSheet} from 'react-native';

import TaskForm from '../components/TaskForm';
import {PALETTE} from '../assets/styles';
import {TaskModel} from '../models/Task.model';

interface AddTaskScreenProps {
  navigation: NavigationProp<ParamListBase>;
  route: RouteProp<any>;
  // так и не понял какие тут типы пробрасывать
}

const ManageTaskScreen = ({
  navigation,
  route,
}: AddTaskScreenProps): JSX.Element => {
  const id = route?.params?.task?.id;
  const isEditing = !!id;

  const handleSubmit = async (value: TaskModel) => {
    try {
      const oldTasks = await AsyncStorage.getItem('tasks').then(res =>
        res ? JSON.parse(res) : [],
      );
      let newTasks = [...oldTasks];
      if (isEditing) {
        newTasks = newTasks.map(item => {
          if (item.id === id) {
            item = {...item, ...value};
          }
          return item;
        });
      } else {
        newTasks.push(value);
      }

      await AsyncStorage.setItem('tasks', JSON.stringify(newTasks));
      navigation.goBack();
    } catch (e) {
      console.log('Error saving data: ', e);
    }
  };

  async function deleteTask() {
    const oldTasks = (await AsyncStorage.getItem('tasks').then(res =>
      res ? JSON.parse(res) : [],
    )) as TaskModel[];
    const newTasks = oldTasks.filter(item => item.id !== id);
    await AsyncStorage.setItem('tasks', JSON.stringify(newTasks));
    navigation.goBack();
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Task' : 'Add New Task',
    });
  }, [navigation, isEditing]);

  return (
    <View style={styles.container}>
      <TaskForm
        isEditing={isEditing}
        onSubmit={handleSubmit}
        deleteTask={deleteTask}
        task={route?.params?.task ?? null}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PALETTE.color2,
    paddingHorizontal: 20,
    paddingTop: 40,
  },
});

export default ManageTaskScreen;
