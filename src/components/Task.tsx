import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, StyleSheet, View, Pressable} from 'react-native';

import {PALETTE} from '../assets/styles';
import {TaskModel} from '../models/Task.model';

interface TaskProps {
  task: TaskModel;
}

const Task: React.FC<TaskProps> = ({task}) => {
  const {date, title} = task;
  const navigation = useNavigation();

  function taskPressHandler() {
    navigation.navigate('ManageTask' as never, {task} as never);
  }

  const taskDate = new Date(date);

  return (
    <Pressable
      style={({pressed}) => pressed && styles.pressed}
      onPress={taskPressHandler}>
      <View style={styles.taskContainer}>
        <Text style={styles.taskText}>{title}</Text>
        <Text style={styles.dateText}>{`${taskDate.getFullYear()}-${
          taskDate.getMonth() + 1
        }-${taskDate.getDate()}`}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  pressed: {opacity: 0.75},
  taskContainer: {
    display: 'flex',
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: PALETTE.color1,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: PALETTE.color5,
    flex: 1,
    paddingRight: 20,
    margin: 10,
  },
  taskText: {
    color: PALETTE.color1,
    fontSize: 20,
    padding: 10,
  },
  dateText: {
    color: PALETTE.color1,
  },
});

export default Task;
