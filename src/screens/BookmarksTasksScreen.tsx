import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import React, {useLayoutEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';

import TaskList from '../components/TaskList';
import {PALETTE} from '../assets/styles';
import {TaskModel} from '../models/Task.model';

const BookmarksTasksScreen = () => {
  const [tasks, setTasks] = useState<TaskModel[]>([]);

  const navigation = useNavigation();

  const getTasks = async () => {
    const newTasks = await AsyncStorage.getItem('tasks');
    console.log('newTasks :>> ', newTasks);
    if (newTasks && newTasks.length > 3) {
      const list = (JSON.parse(newTasks) as TaskModel[])?.filter(
        item => item.isBooked,
      );
      setTasks(list);
    }
  };

  useLayoutEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getTasks();
    });
    return unsubscribe;
  }, [navigation]);

  return (
    <View style={styles.container}>
      {!!tasks?.length && <TaskList tasks={tasks} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PALETTE.color2,
    paddingLeft: 5,
    paddingRight: 10,
    paddingTop: 40,
  },
});

export default BookmarksTasksScreen;
