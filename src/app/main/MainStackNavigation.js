import { View, Text, Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from './tabs/Home'
import Search from './tabs/Search'
import History from './tabs/History'
import Person from './tabs/Person'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Detail from './stacks/Detail'
import Cart from './stacks/Cart'
import Payment from './stacks/Payment'
import Product from './stacks/Product'
import ChangeInfo from './stacks/ChangeInfo'
import QA from './stacks/QA'

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const MainTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#FF6C22'
      }}
    >
      <Tab.Screen name="Home" component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              source={require('../../../assets/images/ic_person.png')}
              style={{ width: size, height: size, tintColor: color }}
            />
          ),
        }} />
      <Tab.Screen name="Search" component={Search}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              source={require('../../../assets/images/ic_person.png')}
              style={{ width: size, height: size, tintColor: color }}
            />
          ),
        }} />
      <Tab.Screen name="History" component={History}
        options={{
          tabBarLabel: 'History',
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              source={require('../../../assets/images/ic_person.png')}
              style={{ width: size, height: size, tintColor: color }}
            />
          ),
        }} />
      <Tab.Screen name="Person" component={Person}
        options={{
          tabBarLabel: 'Person',
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              source={require('../../../assets/images/ic_person.png')}
              style={{ width: size, height: size, tintColor: color }}
            />
          ),
        }} />
    </Tab.Navigator>

  )
}

const MainStackNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MainTabNavigation" component={MainTabNavigation} />
      <Stack.Screen name="Detail" component={Detail} />
      <Stack.Screen name="Payment" component={Payment} />
      <Stack.Screen name='Cart' component={Cart} />
      <Stack.Screen name='Product' component={Product} />
      <Stack.Screen name='ChangeInfo' component={ChangeInfo} />
      <Stack.Screen name='QA' component={QA} />
    </Stack.Navigator>
  )
}

export default MainStackNavigation
