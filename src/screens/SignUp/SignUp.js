import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { CustomInput, CustomButton, CustomError } from '../../components';

const SignUp = () => {

    const [userName, setUserName] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [age, setAge] = React.useState('');
    const error = {};

    const handleCreateAccount = () => {
        // console.warn('Create Account')
        if (userName.length === 0) {
            error.userName = "Length can't be empty";
            console.warn('length')
        }
        else if (password.length === 0) {
            error.password = "Password can't be empty";
        }
        else if (email.length === 0) {
            error.email = "Email can't be empty";
        }
        else if (age.length === 0) {
            error.age = "Age can't be empty";
        }
    }

    return (
        <View style={styles.root}>
            <Text style={styles.heading}>Create An Account</Text>
            <CustomInput
                placeholder="Username"
                value={userName}
                onChangeText={setUserName} />
            <CustomInput
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry />
            <CustomInput
                placeholder="Email"
                value={email}
                onChangeText={setEmail} />
            <CustomInput
                placeholder="Age"
                value={age}
                onChangeText={setAge} />
            <CustomButton
                buttonName="Create Account"
                onPress={handleCreateAccount} />
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
        marginTop: 60
    },
    heading: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 40
    }
})

export default SignUp;
