import React from 'react';
import { StyleSheet, Text, Pressable } from 'react-native';

const CustomButton = (props) => {
    const { onPress, buttonName, type = "PRIMARY" } = props;
    return (
        <Pressable style={[styles.container, styles[`container_${type}`]]} onPress={onPress}>
            <Text style={[styles.text, styles[`text_${type}`]]}>{buttonName}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 50,
        padding: 15,
        marginVertical: 5,
        alignItems: 'center',
        borderRadius: 5
    },
    container_PRIMARY: {
        backgroundColor: '#547df0',
    },
    container_TERTIARY: {

    },
    text: {
        fontWeight: 'bold',
        color: 'white'
    },
    text_PRIMARY: {

    },
    text_TERTIARY: {

    }
})

export default CustomButton;
