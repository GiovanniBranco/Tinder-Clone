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
            iconName = "tinder";
            isActive = focused
              ? 'ios-information-circle'
              : 'ios-information-circle-outline';
          } else if (route.name === 'Settings') {
            isActive = focused ? 'ios-list-box' : 'ios-list';
          }

          if (route.name === 'Perfil') {
            iconName = "gear";
            isActive = focused
              ? 'ios-information-circle'
              : 'ios-information-circle-outline';
          } else if (route.name === 'Settings') {
            isActive = focused ? 'ios-list-box' : 'ios-list';
          }

          // You can return any component that you like here!
          return (
          <Fontisto name={iconName} size={size} color={color} />
          )
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
      />
      <Tab.Screen name="Perfil" component={Perfil} />
    </Tab.Navigator>
  );
}
