import React,{useState, useContext} from 'react';
import styled from "styled-components";

import {FirebaseContext} from '../context/FirebaseContext';
import {UserContext} from '../context/UserContext';

import Text from '../components/Text';
// import AsyncStorage from '@react-native-community/async-storage';

export default SignInScreen = ({navigation}) => {
    const [email, setEmail] = useState();
    const [password, setPassword]= useState();
    const [loading, setLoading] = useState(false);
    const firebase = useContext(FirebaseContext);
    const [_, setUser] = useContext(UserContext);

    // const STORAGE_KEY = '@save_email';
    // const saveData = async () => {
    //     try {
    //       await AsyncStorage.setItem(STORAGE_KEY, email)
    //       alert('Data successfully saved')
    //     } catch (e) {
    //       alert('Failed to save the data to the storage')
    //     }
    //   }

    const signIn = async () => {
        setLoading(true)

        try{
            await firebase.signIn(email, password)
            // const uid = firebase.getCurrentUser().uid;
            const uid = 'BskOF0wMYFQElea6KxMuoPs0Fg62';
            const userInfo = await firebase.getUserInfo(uid)
            setUser({
                // username: userInfo.username,
                // email: userInfo.email,
                // uid,
                // profilePhotoUrl: userInfo.profilePhotoUrl,
                email: email,
                isLoggedIn: true,
            });
            // saveData();

        }catch (error) {
            alert(error.message)
        } finally{
            setLoading(false);
        }
    }

  return (
    <Container>
        <Main>
            {/* <Text title semi center>Welcom back.</Text> */}
            <Text title semi center>Welcom To My Money</Text>
        </Main>
        <Auth>
            <AuthContainer>
                <AuthTitle>Email Adress</AuthTitle>
                <AuthField 
                    autoCapitalize="none" 
                    autoCompleteType="email" 
                    autoCorrect={false} 
                    autoFocus={true}
                    keyboardType="email-address"
                    onChangeText={email => setEmail(email.trim())}
                    value={email}
                />
            </AuthContainer>

            <AuthContainer>
                <AuthTitle>Password</AuthTitle>
                <AuthField 
                    autoCapitalize="none" 
                    autoCompleteType="password" 
                    autoCorrect={false} 
                    secureTextEntry={true}
                    onChangeText= {password => setPassword(password.trim())}
                    value={password}
                />
            </AuthContainer>
        </Auth>
        <SignInContainer onPress={signIn} disabled={loading}>
            {loading ? (
                <Loading/>
            ) : (
               <Text bold center color="#ffffff" >
                    Sign In
                </Text> 
            )}
            
        </SignInContainer>
        <SignUp onPress={() => navigation.navigate("SignUp")}>
            <Text small center>
                New to SocialApp?{" "}
                <Text bold color="#F9813A">
                    Sign Up
                </Text>
            </Text>
        </SignUp>
        <HeaderGraphic>
            <RightCircle />
            <LeftCircle />
        </HeaderGraphic>
        <StatusBar barStyle="light-content" />
    </Container>
  );
}

const Container = styled.View`
    flex: 1;
`;

const Main = styled.View`
    margin-top: 192px;
`;
const Auth = styled.View`
    margin: 64px 32px 32px;
`;

const AuthContainer = styled.View`
    margin-bottom: 32px;

`;

const AuthTitle = styled(Text)`
    color: #7f8c8d;
    font-size: 12px;
    text-transform: uppercase;
    font-weight: 300;
`;
const AuthField = styled.TextInput`
    border-bottom-color: #7f8c8d;
    border-bottom-width: 0.5px;
    height: 48px;
`;
// background-color: #8022d9;
const SignInContainer = styled.TouchableOpacity`
    margin: 0 32px;
    height: 48px;
    align-items: center;
    justify-content: center;
    background-color: #F9813A;
    border-radius: 6px;
`;

const Loading = styled.ActivityIndicator.attrs(props => ({
    color: "#ffffff",
    size: "small",
}))``;

const SignUp = styled.TouchableOpacity`
    margin-top: 16px;
`

const HeaderGraphic = styled.View`
    position: absolute;
    width: 100%;
    top: -50px;
    z-index: -100;
`;

const RightCircle = styled.View`
background-color: #F9813A;
position: absolute;
width: 400px;
height: 400px;
border-radius: 200px;
right: -100px;
top: -200px;
`;

const LeftCircle = styled.View`
    background-color: #23A6D5;
    position: absolute;
    width: 200px;
    height: 200px;
    border-radius: 100px;
    left: -50px;
    top: -50px;
;`;

const StatusBar = styled.StatusBar``;