import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Octicons from 'react-native-vector-icons/Octicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from '../../src/Home';
import Curtidas from '../../src/Curtidas';
import Conversas from '../../src/Conversas';
import Perfil from '../../src/Perfil';

const Tab = createBottomTabNavigator();

export default function BottomTab() {

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let isActive;

          if (route.name === 'Home') {
            isActive = focused
              ? 'ios-information-circle'
              : 'ios-information-circle-outline';

            return <Fontisto name={"tinder"} size={size} color={color} />;
          } else if (route.name === 'Curtidas') {
            isActive = focused ? 'ios-list-box' : 'ios-list';

            return <MaterialCommunityIcons name={'rhombus'} size={size} color={color} />;
          } else if (route.name === 'Conversa') {
            isActive = focused ? 'ios-list-box' : 'ios-list';

            return (
              <Ionicons name={'chatbubble-sharp'} size={size} color={color} />
            );
          } else if (route.name === 'Perfil') {
            isActive = focused ? 'ios-list-box' : 'ios-list';

            return <Octicons name={'person'} size={size} color={color} />;
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: '#e83866',
        inactiveTintColor: '#BCC1C7',
        activeTintColorYellow: '#EAA843',
        showLabel: false,
      }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Curtidas" component={Curtidas} />
      <Tab.Screen name="Conversa" component={Conversas} />
      <Tab.Screen name="Perfil" component={Perfil} />
    </Tab.Navigator>
  );
}
