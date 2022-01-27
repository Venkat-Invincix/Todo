import { View, TextInput, StyleSheet } from 'react-native';
import React from 'react';

const CustomInput = (props) => {
    const { value, onChangeText, placeholder, secureTextEntry } = props;
    return (
        <View style={styles.container}>
            <TextInput
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                style={styles.input}
                secureTextEntry={secureTextEntry} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '100%',

        borderColor: '#99959c',
        borderWidth: 1,
        borderRadius: 10,

        paddingHorizontal: 15,
        marginVertical: 10
    },
    input: {}
})

export default CustomInput;
