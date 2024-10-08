import styled from "styled-components";
import {View , Text , Image , TextInput , TouchableOpacity} from 'react-native';
import  Constants  from "expo-constants";

const StatusBarHeight = Constants.statusBarHeight;

//color
export const Colors={
    primary:'#fff',
    secondary: '#e5e7eb',
    tertiary: '#1f2937',
    darklight: '#9ca3af',
    brand: '#F3A5AC',
    green: '#10b981',
    red: '#ef4444',
};

const { primary , secondary , tertiary , darklight , brand , green , red }=Colors;
export const StyledContainer = styled.View`
flex: 1;
padding: 25px;
padding-top: ${StatusBarHeight+ 30}px;
background-color:${primary};
`;

export const InnerContainer = styled.View`
flex: 1;
width: 100%;
align-items: center;
`;

export const PageLogo = styled.Image`
width: 60%;
height: 30%;
`;

export const PageTitle = styled.Text`
font-size: 30px;
text-align: center;
font-weight: bold;
color: ${brand};
padding: 10px;
`;

export const SubTitle = styled.Text`
font-size: 25px;
text-align: center;
font-weight: bold;
color: ${tertiary};
padding: 10px;
`;

export const StyledFormArea= styled.View`
width: 100%;
`;

export const StyledTextInput = styled.TextInput`
background-color:${secondary};
padding: 15px;
padding-left: 55px;
padding-right: 55px;
border-radius: 5px;
font-size: 16px;
height: 60px;
margin-vertical: 3px;
margin-bottom: 10px;
color: ${ tertiary};
`;

export const StyledInputLabel = styled.Text`
color: ${ tertiary};
font-size: 13px;
text-align: left;
`;

export const LeftIcon = styled.View`
left: 15px;
top: 38px;
position: absolute;
z-index: 1;
`;

export const RightIcon = styled.TouchableOpacity`
right: 15px;
top: 38px;
position: absolute;
z-index: 1;
`;

export const BottonText = styled.Text`
  color: ${primary};
  font-size: 16px;
`;

export const StyledBotton = styled.TouchableOpacity`
  padding: 15px;
  background-color: ${brand};
  justify-content: center;
  border-radius: 5px;
  align-items: center;
  margin-vertical: 5px;
  height: 60px;
`;

// export const MsgBox= styled.Text`
// text-align:center;
// font-size: 13px;
// `;

// export const Line = styled.View` 
// height: 1px;
// width:100%;
// background-color:${darklight};
// margin-vertical:10px;
// `

export const ExtraView = styled.View`
justify-content: center;
flex-direction: row;
align-items: center;
padding: 10px;
`;

export const ExtraText = styled.Text`
justify-content: center;
align-content: center;
color:${tertiary};
font-size: 15px;
`;

export const TextLink = styled.TouchableOpacity`
justify-content: center;
align-items: center;
`;

export const TextLinkContent = styled.Text`
color:${brand};
font-size: 15px;
`
 