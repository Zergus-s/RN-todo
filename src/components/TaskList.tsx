import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';

import {TaskModel} from '../models/Task.model';
import Task from './Task';

interface TaskListProps {
  tasks: TaskModel[];
}

const TaskList: React.FC<TaskListProps> = ({tasks}) => {
  return (
    <View>
      <FlatList
        style={styles.container}
        data={tasks}
        keyExtractor={item => item.id}
        renderItem={({item}) => <Task task={item} />}
      />
    </View>
  );
};

export default TaskList;

const styles = StyleSheet.create({
  container: {
    rowGap: 30,
  },
});
