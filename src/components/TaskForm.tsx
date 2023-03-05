import React, {useState} from 'react';
import {Button, TextInput, View, StyleSheet} from 'react-native';
import {PALETTE} from '../assets/styles';
import {TaskModel} from '../models/Task.model';
import BookmarksIcon from '../../src/assets/images/BookmarksIcon';
import IconButton from './ui/IconButton';

interface AddTaskFormProps {
  onSubmit: (value: TaskModel) => void;
  deleteTask: () => void;
  isEditing: boolean;
  task: TaskModel | null;
}

const TaskForm = ({
  onSubmit,
  deleteTask,
  isEditing,
  task,
}: AddTaskFormProps) => {
  const [title, setTitle] = useState(() => task?.title ?? '');
  const [isBooked, setIsBooked] = useState(() => task?.isBooked ?? false);
  const id = title + Math.random();

  const handleSubmit = () => {
    onSubmit({title, date: new Date(), id: task?.id ?? id, isBooked});
    setTitle('');
  };

  return (
    <View style={styles.form}>
      <TextInput
        value={title}
        onChangeText={setTitle}
        placeholder="Enter task"
        style={styles.input}
        placeholderTextColor="#ffffff4f"
      />
      <View style={styles.buttonContainer}>
        <Button
          disabled={!title}
          color={PALETTE.color5}
          title="Save"
          onPress={handleSubmit}
        />
        {isEditing && <Button onPress={deleteTask} title="Delete" />}
        {isEditing && (
          <View style={styles.bookmark}>
            <IconButton
              onPress={() => setIsBooked(!isBooked)}
              icon={
                <BookmarksIcon
                  color={PALETTE.color5}
                  fill={isBooked ? PALETTE.color5 : PALETTE.color2}
                  size={25}
                />
              }
            />
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bookmark: {
    alignSelf: 'center',
  },
  form: {
    flexDirection: 'column',
    alignItems: 'center',
    marginVertical: 20,
    width: '100%',
  },
  input: {
    flex: 1,
    minHeight: 60,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    width: '100%',
    marginBottom: 20,
    color: PALETTE.color5,
  },
  buttonContainer: {
    borderColor: PALETTE.color5,
    borderWidth: 1,
    borderRadius: 5,
    flexDirection: 'row',
    paddingHorizontal: 20,
    gap: 30,
    alignContent: 'center',
    paddingVertical: 10,
    maxHeight: 60,
  },
});

export default TaskForm;
