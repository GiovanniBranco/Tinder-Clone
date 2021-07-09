import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Fontisto from 'react-native-vector-icons/Fontisto';

import Home from '../../src/Home';
import Perfil from '../../src/Perfil';

const Tab = createBottomTabNavigator();

export default function BottomTab() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let isActive;
          let iconName;

          if (route.name === 'Home') {
            iconName = 'tinder';
            isActive = focused
              ? 'ios-information-circle'
              : 'ios-information-circle-outline';
          } else if (route.name === 'Conversa') {
            iconName = 'comments';
            isActive = focused ? 'ios-list-box' : 'ios-list';
          } else if (route.name === 'Perfil') {
            iconName = 'male';
          }

          if (route.name === 'Perfil') {
            iconName = 'tinder';
            isActive = focused
              ? 'ios-information-circle'
              : 'ios-information-circle-outline';
          } else if (route.name === 'Settings') {
            isActive = focused ? 'ios-list-box' : 'ios-list';
          }
          return <Fontisto name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#e83866',
        inactiveTintColor: '#BCC1C7',
        showLabel: false,
      }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Conversa" component={Perfil} />
      <Tab.Screen name="Perfil" component={Perfil} />
    </Tab.Navigator>
  );
}
