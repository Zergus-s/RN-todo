/* eslint-disable react/no-unstable-nested-components */
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StatusBar} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

import ManageTaskScreen from './src/screens/ManageTaskScreen';
import TaskListScreen from './src/screens/TaskListScreen';
import BookmarksTasksScreen from './src/screens/BookmarksTasksScreen';
import AllItemsIcon from './src/assets/images/AllItemsIcon';
import BookmarksIcon from './src/assets/images/BookmarksIcon';
import {PALETTE} from './src/assets/styles';
import PlusIcon from './src/assets/images/PlusIcon';
import IconButton from './src/components/ui/IconButton';

const Stack = createStackNavigator();
const BottomTabs = createBottomTabNavigator();

function ToDoOverview() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <BottomTabs.Navigator
      screenOptions={({navigation}) => ({
        headerRight: ({tintColor}) => (
          <IconButton
            onPress={() => {
              navigation.navigate('ManageTask');
            }}
            icon={<PlusIcon color={tintColor} />}
          />
        ),
        headerStyle: {backgroundColor: PALETTE.color1},
        headerTintColor: PALETTE.color5,
        tabBarStyle: {
          backgroundColor: PALETTE.color1,
          minHeight: 60,
          alignItems: 'center',
        },
        tabBarActiveTintColor: PALETTE.color5,
        tabBarLabelStyle: {marginBottom: 5},
      })}>
      <BottomTabs.Screen
        options={{
          title: 'All tasks',
          tabBarLabel: 'All',
          tabBarIcon: ({color, size}) => (
            <AllItemsIcon color={color} size={size} />
          ),
        }}
        name="AllTasks"
        component={TaskListScreen}
      />
      <BottomTabs.Screen
        options={{
          title: 'Bookmarks',
          tabBarIcon: ({color, size}) => (
            <BookmarksIcon color={color} size={size} />
          ),
        }}
        name="BookmarksTasks"
        component={BookmarksTasksScreen}
      />
    </BottomTabs.Navigator>
  );
}

const App = () => {
  return (
    <>
      <StatusBar barStyle={'light-content'} backgroundColor={PALETTE.color1} />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {backgroundColor: PALETTE.color1},
            headerTintColor: PALETTE.color5,
          }}
          initialRouteName="ToDoOverveiw">
          <Stack.Screen
            name="ToDoOverveiw"
            component={ToDoOverview}
            options={{headerShown: false, title: 'All tasks'}}
          />
          <Stack.Screen
            options={{title: 'Task', presentation: 'modal'}}
            name="ManageTask"
            component={ManageTaskScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
