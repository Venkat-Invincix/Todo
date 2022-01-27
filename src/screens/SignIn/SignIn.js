import { View, Image, StyleSheet, useWindowDimensions, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
// import Logo from '../../../assets/images/logo.png';
import { CustomButton, CustomInput } from '../../components';
import { NeuView } from 'react-native-neu-element';


export const ChevronRightBtn = () => {
    return (
        <NeuView color={'#E5F0F9'} height={widthScale(26)} width={widthScale(26)} borderRadius={widthScale(26)}>
            <TouchableOpacity style={{ height: '90%', width: '90%', backgroundColor: '#F2FAFF', borderRadius: widthScale(26), display: 'flex', justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
                {/* <Image style={{ width: widthScale(7), height: widthScale(11) }} resizeMode='cover' source={ChevronRight} /> */}
            </TouchableOpacity>
        </NeuView>
    );
}


const SignIn = ({ navigation }) => {

    const { height } = useWindowDimensions();

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const handleChangeUserName = (data) => {
        setUserName(data);
    }

    const handleChangePassword = (data) => {
        setPassword(data);
    }

    const handleChangeSubmit = () => {
        // console.warn('Sign In')
        navigation.navigate('SignUp');
    }

    const onPressForgotPasword = () => {
        console.warn('Forgot Password')
    }

    const onPressSignInWithGoogle = () => {
        console.warn('Google')
    }

    const onPressSignInWithFacebook = () => {
        console.warn('Facebook')
    }

    const onPressCreateAccount = () => {
        console.warn('ceate account')
    }

    return (
        <View style={styles.root}>
            {/* <Image source={Logo} style={[styles.logo, { height: height * 0.3 }]} /> */}
            <CustomInput
                placeholder="username"
                value={userName}
                onChangeText={handleChangeUserName} />
            <CustomInput
                placeholder="password"
                value={password}
                onChangeText={handleChangePassword}
                secureTextEntry />
            <CustomButton
                buttonName="Sign In"
                onPress={handleChangeSubmit} />
            <CustomButton
                buttonName="Forgot Password"
                onPress={onPressForgotPasword}
                type="TERTIARY" />

            <CustomButton
                buttonName="Sign In With Google"
                onPress={onPressSignInWithGoogle} />
            <CustomButton
                buttonName="Sign In with Facebook"
                onPress={onPressSignInWithFacebook} />
            <CustomButton
                buttonName="dont have account , create one"
                onPress={onPressCreateAccount}
                type="TERTIARY" />
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20
    },
    logo: {
        width: '60%',
        maxHeight: 200,
        marginTop: 30,
        marginBottom: 20
    }
})

export default SignIn;
