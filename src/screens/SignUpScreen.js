// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// export default SignUpScreen = () => {
//   return (
//     <View style={styles.container}>
//       <Text>Sign Up Screen</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

// --------------Version 2

import React,{useState, useContext} from 'react';
import {Platform} from 'react-native';
import styled from "styled-components";
import {AntDesign} from '@expo/vector-icons';
// import * as Permissions from 'expo-permissions';
// import * as ImagePicher from 'expo-image-picker';

import {FirebaseContext} from '../context/FirebaseContext';
import {UserContext} from '../context/UserContext';

import Text from '../components/Text';

import axios from 'axios';

export default SignUpScreen = ({navigation}) => {
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword]= useState();
    const [loading, setLoading] = useState(false);
    const [profilePhoto, setProfilePhoto] = useState("Testing");
    const firebase = useContext(FirebaseContext);
    const [_, setUser] = useContext(UserContext);
    


    // const getPermission = async () => {
    //     if (Platform.OS !== 'web'){
    //         const {status} = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    //         return status;
    //     }
    // };
    // const pickImage = async () => {
    //     try{
    //         let result = await ImagePicher.launchImageLibraryAsync({
    //             mediaTypes: ImagePicher.MediaTypeOptions.Images,
    //             allowsEditing: true,
    //             aspect: [1, 1]
    //         })
    //     }catch(error){
    //         console.log("Error @pickImage:", error);
    //     }
    // }
    // const addProfilePhoto = async () => {
    //     const status = await getPermission()
    //     if (status !== "granted") {
    //         alert("we need permission to access your camera roll.");
    //         return;
    //     }
    // };

    const signUp = async () => {
        setLoading(true);

        const user = {username, email, password, profilePhoto};

        try{
            const createdUser = await firebase.createUser(user)
            

            

            setUser ({ ...createdUser,email:email, isLoggedIn: true});


        }catch (error) {
            console.log("Error @signUp:", error);
        }finally{
            // let userData = {username:username, email:email, password:password};
            // console.log("---userData Start--");
            // console.log(userData);
            // console.log("---userData End--");
            // axios.post("http://localhost:4000/api/user/signUp", userData).then(() => {
            //     console.log("data inserted")
            // })
            // .catch((e) => {
            //     console.log("data not insertedd")
            // })
            adduser();
            setLoading(false);
        }
    };

    const adduser = async () => {
        let userData = {username:username, email:email, password:password};
        console.log("---userData Start--");
        console.log(userData);
        console.log("---userData End--");

        await axios.post("https://foreexbackend.herokuapp.com/api/user/signUp", userData).then(() => {
            console.log("data inserted")
        })
        .catch((e) => {
            console.log("data not insertedd");
            console.log("----------------");
            console.log(e)
        })
    }

    
  return (
    <Container>
        <Main>
            <Text title semi center>
                Sign up to get started.
            </Text>
        </Main>
        {/* <ProfilePhotoContainer onPress={addProfilePhoto}> */}
        <ProfilePhotoContainer>
            <DefaultProfilePhoto>
                <AntDesign name="plus" size={24} color="#ffffff" />
            </DefaultProfilePhoto>
        </ProfilePhotoContainer>
        <Auth>
            <AuthContainer>
                <AuthTitle>Username</AuthTitle>
                <AuthField 
                    autoCapitalize="none" 
                    autoCorrect={false} 
                    autoFocus={true}
                    onChangeText={username => setUsername(username.trim())}
                    value={username}
                />
            </AuthContainer>

            <AuthContainer>
                <AuthTitle>Email Adress</AuthTitle>
                <AuthField 
                    autoCapitalize="none" 
                    autoCompleteType="email" 
                    autoCorrect={false} 
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
        <SignUpContainer onPress={signUp} disabled={loading}>
            {loading ? (
                <Loading/>
            ) : (
               <Text bold center color="#ffffff" >
                    Sign In
                </Text> 
            )}
            
        </SignUpContainer>
        <SignIn onPress={() => navigation.navigate("SignIn")}>
            <Text small center>
                Already have an account?{" "}
                {/* <Text bold color="#8022d9"> */}
                <Text bold color="#F9813A">
                    Sign In
                </Text>
            </Text>
        </SignIn>
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
    margin-top: 140px;
`;

const ProfilePhotoContainer = styled.TouchableOpacity`
    background-color: #e1e2e6;
    width: 80px;
    height: 80px;
    border-radius: 40px;
    align-self: center;
    margin-top: 6px;
    overflow: hidden;

`;

const DefaultProfilePhoto = styled.View`
    align-items: center;
    justify-content: center;
    flex: 1;
`;


const Auth = styled.View`
    margin: 1px 30px 30px;
`;

const AuthContainer = styled.View`
    margin-bottom: 22px;

`;

const AuthTitle = styled(Text)`
    color: #8e93a1;
    font-size: 12px;
    text-transform: uppercase;
    font-weight: 300;
`;
const AuthField = styled.TextInput`
    border-bottom-color: #8e93a1;
    border-bottom-width: 0.5px;
    height: 48px;
`;

const SignUpContainer = styled.TouchableOpacity`
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

const SignIn = styled.TouchableOpacity`
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