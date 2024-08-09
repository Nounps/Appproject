import React , {useState}from "react";
import { StatusBar } from 'expo-status-bar';
import { Formik } from "formik";
import {Octicons , Ionicons , Fontisto} from '@expo/vector-icons';

import{
    StyledContainer,
    InnerContainer,
    PageLogo,
    PageTitle,
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
    TextLinkContent

} from '../components/styles';

import { View } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
const {brand, darklight, primary }  = Colors;

//API
import axios from "axios";

const Login = ({navigation}) =>{
    const [hidePassword, setHidePassword]=useState(true)
    return(
        <StyledContainer>
            <StatusBar style="dark"/>
            <InnerContainer>
                <PageLogo resizeMode="cover" source={require('./../assets/img/Logo.png')}/>
                <PageTitle>N&T</PageTitle>
                <Formik 
                initialValues={{ email:'', password:'' }}
                onSubmit={(values) => {
                    console.log(values);
                    navigation.navigate("Home");
                }}>
                    {({ handleChange , handleBlur , handleSubmit , values}) => (
                        <StyledFormArea>
                         <MyTextInput
                        label="Email Address"
                        icon="mail" 
                        placeholder="Noun@gmail.com"
                        placeholderTextColor={darklight}
                        onChangeText={handleChange('email')}
                        onBlur={handleBlur('email')}
                        value={values.email}
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
                        <StyledBotton onPress={handleSubmit}>
                           <BottonText>
                            Login
                           </BottonText>
    
                        </StyledBotton>
                        <ExtraView>
                            <ExtraText>Create account </ExtraText>
                            <TextLink onPress={()=> navigation.navigate("Signup")}>
                                <TextLinkContent>Sign up</TextLinkContent>
                            </TextLink>
                        </ExtraView>
                    </StyledFormArea>)}
                </Formik>
            </InnerContainer>
        </StyledContainer>
    );
};
const MyTextInput = ({ label,icon,isPassword, hidePassword,setHidePassword,...props}) =>{
    return(
        <View>
            <LeftIcon>
                <Octicons name={icon} size={28} color={brand} />
            </LeftIcon>
            <StyledInputLabel>
                {label}
            </StyledInputLabel>
            <StyledTextInput {...props}/>
            {isPassword &&(
                <RightIcon onPress={() => setHidePassword(!hidePassword)}>
                    <Ionicons name={hidePassword ? "eye-off-outline" : "eye-outline" } size={30} color={darklight}/>
                </RightIcon>
            )}
        </View>
        
    )
}
export default Login;
