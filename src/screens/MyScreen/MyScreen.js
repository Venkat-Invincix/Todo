import React from 'react';
import { View, StyleSheet, Button, Text } from 'react-native';

const Myscreen = () => {
    const [status, setStatus] = React.useState("");
    return (
        <View style={styles.root}>
            <Text
                testID='myText'>
                {status}
            </Text>
            <Button
                testID='myButton'
                onPress={() => { setStatus("button pressed") }}
                title='Press Me' />
        </View>
    );
}

const styles = StyleSheet.create({
    root: { backgroundColor: 'green' }
})

export default Myscreen;
