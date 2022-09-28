import React from "react";
import { Text, View, TextInput, StyleSheet, Button } from "react-native"
import UsersContext from "../context/userContext";

export default function UserForm(props) {
    const [user, setUser] = React.useState(props.route.params ? props.route.params : {})
    const { dispatch } = React.useContext(UsersContext)
    return (
        <View style={style.Form}>
            <Text>Nome</Text>
            <TextInput
                style={style.Input}
                onChangeText={name => setUser({ ...user, name })}
                placeholder="Informe o Nome"
                value={user.name}
            />

            <Text>Email</Text>
            <TextInput
                style={style.Input}
                onChangeText={email => setUser({ ...user, email })}
                placeholder="Informe o E-mail"
                value={user.email}
            />

            <Text>Url do Avatar</Text>
            <TextInput
                style={style.Input}
                onChangeText={avatarUrl => setUser({ ...user, avatarUrl })}
                placeholder="Informe a URL do avatar"
                value={user.avatarUrl}
            />

            <Button
                title="Salvar"
                onPress={() => {
                    dispatch({
                        type: user.id ? 'updateUser' : 'createUser',
                        payload: user,
                    })
                    props.navigation.goBack()
                }}
            />

        </View>
    );
}

const style = StyleSheet.create({

    Form: {
        padding: 12
    },

    Input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 25,
        marginTop: 8,
        marginBottom: 10,
        paddingLeft: 12,
        paddingRight:12
    }
})