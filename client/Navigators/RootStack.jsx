import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Colors } from "../components/styles";
const {primary , teriary} = Colors;

import Login from '../screens/Login';
import Signup from "../screens/Signup";
import Home from "../screens/Home";


const Stack = createNativeStackNavigator();
const RootStack = () =>{
    return(
        <NavigationContainer>
            <Stack.Navigator
            screenOptions={{
                headerStyle:{
                    backgroundColor:'transparent'
                },
                headerTintColor:teriary,
                headerTransparent: true,
                headerTitle:'',
                headerLeftContainerStyles:{
                    paddingLeft:20
                }
            }}
            >
                <Stack.Screen name="Login" component={Login}/>
                <Stack.Screen name="Signup" component={Signup}/>
                <Stack.Screen name="Home" component={Home}/>
              
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default RootStack;