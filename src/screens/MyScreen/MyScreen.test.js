import 'react-native';
import React from 'react';
import { create, act } from 'react-test-renderer';
import Myscreen from './MyScreen';
import { Text, View } from 'react-native';

const tree = create(<Myscreen />)

describe('MyScreen Testing', () => {

    it('snapshot', () => {
        expect(tree).toMatchSnapshot();
    });

    it('Button Press', () => {

        const button = tree.root.findByProps({ testID: 'myButton' }).props;
        // console.log(button);
        act(() => button.onPress())
        const text = tree.root.findByProps({ testID: 'myText' }).props;
        expect(text.children).toBe('button pressed');

    });

    it('To Know', () => {
        const text = 'bar';
        const instance = create(
            <View>
                <Text testID='foo'>{text}</Text>
            </View>
        ).root;

        const result = instance.findByProps({ testID: 'foo' }).children.length

        // console.log('result', result);
        expect(result).toBe(1);
    });


});
