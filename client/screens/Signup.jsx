import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { Formik } from "formik";
import { Octicons, Ionicons } from '@expo/vector-icons';
import axios from "axios";
import {
    StyledContainer,
    InnerContainer,
    StyledFormArea,
    StyledTextInput,
    StyledInputLabel,
    StyledBotton,
    LeftIcon,
    RightIcon,
    BottonText,
    ExtraText,
    ExtraView,
    TextLink,
    TextLinkContent,
    SubTitle
} from '../components/styles';
import { Text, View } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

const { brand, darklight } = Colors;

const Signup = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [hidePassword, setHidePassword] = useState(true);

    const createUser = (values) => {
        axios.post('http://localhost:2024/Signup', {
            Email: values.Email,
            name: values.name,
            lastname: values.lastname,
            password: values.password
        })
        .then(response => {
            console.log('User created:', response.data);
            navigation.navigate("Home");
        })
        .catch(error => {
            console.error('Error:', error);
        });
    };

    return (
        <StyledContainer>
            <StatusBar style="dark" />
            <InnerContainer>
                <SubTitle>Create Account</SubTitle>
                <Formik
                    initialValues={{ Email: '', password: '', name: '', lastname: '', confirmpassword: '' }}
                    onSubmit={createUser}>
                    {({ handleChange, handleBlur, handleSubmit, values }) => (
                        <StyledFormArea>
                            <MyTextInput
                                label="First name"
                                icon="person"
                                placeholder="Enter your name"
                                placeholderTextColor={darklight}
                                onChangeText={handleChange('name')}
                                onBlur={handleBlur('name')}
                                value={values.name}
                            />
                            <MyTextInput
                                label="Last name"
                                icon="person"
                                placeholder="Enter your last name"
                                placeholderTextColor={darklight}
                                onChangeText={handleChange('lastname')}
                                onBlur={handleBlur('lastname')}
                                value={values.lastname}
                            />
                            <MyTextInput
                                label="Email Address"
                                icon="mail"
                                placeholder="Noun@gmail.com"
                                placeholderTextColor={darklight}
                                onChangeText={handleChange('Email')}
                                onBlur={handleBlur('Email')}
                                value={values.Email}
                                keyboardType="email-address"
                            />
                            <MyTextInput
                                label="Password"
                                icon="lock"
                                placeholder="* * * * * * *"
                                placeholderTextColor={darklight}
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                value={values.password}
                                secureTextEntry={hidePassword}
                                isPassword={true}
                                hidePassword={hidePassword}
                                setHidePassword={setHidePassword}
                            />
                            <MyTextInput
                                label="Confirm password"
                                icon="lock"
                                placeholder="* * * * * * *"
                                placeholderTextColor={darklight}
                                onChangeText={handleChange('confirmpassword')}
                                onBlur={handleBlur('confirmpassword')}
                                value={values.confirmpassword}
                                secureTextEntry={hidePassword}
                                isPassword={true}
                                hidePassword={hidePassword}
                                setHidePassword={setHidePassword}
                            />
                            <StyledBotton onPress={handleSubmit}>
                                <BottonText>Sign up</BottonText>
                            </StyledBotton>
                            <ExtraView>
                                <ExtraText>Already have an account?</ExtraText>
                                <TextLink onPress={() => navigation.navigate("Login")}>
                                    <TextLinkContent>Login</TextLinkContent>
                                </TextLink>
                            </ExtraView>
                        </StyledFormArea>
                    )}
                </Formik>
            </InnerContainer>
        </StyledContainer>
    );
};

const MyTextInput = ({ label, icon, isPassword, hidePassword, setHidePassword, ...props }) => {
    return (
        <View>
            <LeftIcon>
                <Octicons name={icon} size={28} color={brand} />
            </LeftIcon>
            <StyledInputLabel>
                {label}
            </StyledInputLabel>
            <StyledTextInput {...props} />
            {isPassword && (
                <RightIcon onPress={() => setHidePassword(!hidePassword)}>
                    <Ionicons name={hidePassword ? "eye-off-outline" : "eye-outline"} size={30} color={darklight} />
                </RightIcon>
            )}
        </View>
    );
};

export default Signup;
