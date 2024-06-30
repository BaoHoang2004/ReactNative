import { View, Text, StatusBar } from 'react-native'
import React,{useContext} from 'react'
import { NavigationContainer } from '@react-navigation/native'
import MainStackNavigation from './main/MainStackNavigation'
import AuthenStackNavigation from './authen/AuthenStackNavigation'
import { AppContext } from './AppContext'
import { GestureHandlerRootView } from 'react-native-gesture-handler';


const AppNavigation = () => {
  const { isLogin} = useContext(AppContext);
  return (
    <GestureHandlerRootView style={{flex:1}}>
    <NavigationContainer>
      {isLogin?<MainStackNavigation/>:
      <AuthenStackNavigation/>}
    </NavigationContainer>
    </GestureHandlerRootView>
  )
}

export default AppNavigation