import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const CustomError = (props) => {
    const { errorMessage } = props;
    return (
        <View style={styles.root}>
            <Text style={styles.errorText}>{errorMessage}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    root: {},
    errorText: {
        color: 'red'
    }
})

export default CustomError;
