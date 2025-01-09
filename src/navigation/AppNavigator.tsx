import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import ProfileScreen from '../screens/ProfileScreen';
import WatchListScreen from '../screens/WatchListScreen';
import AnalysisScreen from '../screens/AnalysisScreen';
import ChatScreen from '../screens/ChatScreen';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#1F1BE8',
          borderTopWidth: 0,
          paddingBottom: 8,
          paddingTop: 8,
          borderTopColor: '#682BFF',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: -4,
          },
          shadowOpacity: 0.3,
          shadowRadius: 4,
          elevation: 10,
        },
        tabBarActiveTintColor: '#D91EFF',
        tabBarInactiveTintColor: '#1E55FF',
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="person-circle-outline" size={30} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="WatchList"
        component={WatchListScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="eye-outline" size={32} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Analysis"
        component={AnalysisScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="stats-chart" size={32} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="chatbubble-outline" size={30} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
