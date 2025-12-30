import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../Screens/HomeScreen";
import CounterScreen from "../Screens/CounterScreen";

const AppStack = createNativeStackNavigator();

const AppNavigator =()=>{
    return(
        <NavigationContainer>
            <AppStack.Navigator  screenOptions={{ headerShown: false }}>
            <AppStack.Screen   name="Home" component={HomeScreen}/>
             <AppStack.Screen   name="Counter" component={CounterScreen}/>

            </AppStack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;
