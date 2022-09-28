import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import UserForm from './views/UserForm';
import UserList from './views/UserList';
import { Button, Icon } from "@rneui/base";
import { UsersProvider } from './context/userContext';

const Stack = createNativeStackNavigator()

export default function App(props) {
    return (
        <UsersProvider>
            <NavigationContainer>
            <Stack.Navigator initialRouteName="UserList"
                screenOptions={screenOptions}>

                <Stack.Screen name="UserList"
                    component={UserList} 
                    options={({ navigation }) => {
                        return {
                            title: "Lista de usuarios",
                            headerRight: () => (
                                <Button onPress={() => navigation.navigate('UserForm')} 
                                    type="clear"
                                    icon={<Icon name="add" size={25} color="white" />}
                                    />
                            )
                        }
                    }}/>

                <Stack.Screen name="UserForm"
                    component={UserForm}
                    options = {{
                        title: "Formulário de Usuarios"
                    }} />

            </Stack.Navigator>
            <StatusBar style='light' />
        </NavigationContainer>
        </UsersProvider>
    );
}

const screenOptions = {
    headerStyle: {
        backgroundColor: "#f4511e"
    },
    headerTintColor: '#fff',

    headerTitleStyle: {
        fontWeight: 'bold'
    }
}