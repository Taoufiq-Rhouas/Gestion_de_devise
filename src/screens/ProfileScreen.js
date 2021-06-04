// import React, { useContext } from 'react';
// import styled from "styled-components";
// import {UserContext} from "../context/UserContext";
// import {FirebaseContext} from "../context/FirebaseContext";
// import Text from '../components/Text';


// export default ProfileScreen = () => {
//     const [user, setUser] = useContext(UserContext);
//     const firebase = useContext(FirebaseContext);

//     const logOut = async () => {
//         const loggeOut = await firebase.logOut();

//         if(loggeOut) {
//             setUser((state) => ({ ...state, isLoggedIn: false}));
//         }
//     }

//       return (
//         <Container>
//             {/* <ProfilePhotoContainer> */}
//                 {/* PHOTO PROFIL FOR TEST */}
//                 {/* <ProfilePhoto 
//                     source={
//                         user.profilePhotoUrl === "default"
//                         ? require("../../assets/user.png")
//                         : { uri: user.profilePhotoUrl }
//                     }
//                 /> */}
//             {/* </ProfilePhotoContainer> */}

//             <Text medium bold margin="16px 0 32px 0">
//                 {user.username}
//             </Text>

//             <StatsContainer>
//                 <StatContainer>
//                     <Text large light >
//                         21
//                     </Text>
//                     <Text small bold color="#c2c4cd" >
//                         Posts
//                     </Text>
//                 </StatContainer>
//             </StatsContainer>

//             <StatsContainer>
//                 <StatContainer>
//                     <Text large light >
//                         981
//                     </Text>
//                     <Text large light >
//                         63
//                     </Text>
//                     <Text small bold color="#c2c4cd" >
//                         Following
//                     </Text>
//                 </StatContainer>
//             </StatsContainer>

//             <Logout onPress={logOut}>
//                 <Text medium bold color="#23a8d9" >Log out</Text>
//             </Logout>
            
//         </Container>
//       );
// };

// const Container = styled.View`
//     align-items: center;
//     margin-top: 64px;
//     flex: 1;
// `;

// // const ProfilePhotoContainer = styled.view`
// //     shadow-opacity: 0.8;
// //     shadow-radius: 30px;
// //     shadow-color: "#222222";
// // `;

// // const ProfilePhoto = styled.Image`
// //     width: 126px;
// //     height: 126px;
// //     border-radius: 64px;
// // `;

// const StatsContainer = styled.View`
//     flex-direction: row;
//     justify-content: space-between;
//     margin: 0 32px;
//     flex: 1;
// `;

// const StatContainer = styled.View`
//     align-items: center;
//     flex: 1;
// `;

// const Logout = styled.TouchableOpacity`
//     margin-bottom: 32px;
// `



// -------------------------------------------
import React, { useContext } from 'react';
// import {View ,Text, StyleSheet, Image, SafeAreaView, ScrollView, Pressable,TextInput,} from "react-native";
import {View ,Text, StyleSheet, Image, ScrollView, Pressable,TextInput,TouchableOpacity,Alert} from "react-native";
import {UserContext} from "../context/UserContext";
import {FirebaseContext} from "../context/FirebaseContext";
import TextParam from '../components/Text';
import styled from "styled-components";
import {SafeAreaView} from 'react-native-safe-area-context';
import COLORS from '../consts/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default ProfileScreen = ({ route, navigation }) => {

    const DATA= [
        {
          id: 1,
          symbol: "SPX",
          name: "EUR / U.S. DOLLAR",
          img: "https://www.expertinvestor.net/images/logos/forexcom-logo-sq.png",
          redirectTo: "https://www.tradingview.com/symbols/SPX/",
          price: 10
        },
        {
          id: 2,
          symbol: "TVC-IXIC",
          name: "BRITISH POUND / U.S. DOLLAR",
          img: "https://www.expertinvestor.net/images/logos/forexcom-logo-sq.png",
          redirectTo: "https://www.tradingview.com/symbols/TVC-IXIC/",
          price: 20
        },
        {
          id: 3,
          symbol: "DJ-DJI",
          name: "AUSTRALIAN DOLLAR / JAPANESE YEN",
          img: "https://www.expertinvestor.net/images/logos/forexcom-logo-sq.png",
          redirectTo: "https://www.tradingview.com/symbols/DJ-DJI/",
          price: 30
        }
      ]

    const [user, setUser] = useContext(UserContext);
    const firebase = useContext(FirebaseContext);

    const logOut = async () => {
        const loggeOut = await firebase.logOut();

        if(loggeOut) {
            setUser((state) => ({ ...state,email:"", isLoggedIn: false}));
        }
    }
    return (
        <SafeAreaView
            style={{
                backgroundColor:COLORS.white,
                flex:1,
            }}
        >
            <View style={{
                    justifyContent:'center',
                    alignItems:'center',
                    marginVertical: 10,
                    marginHorizontal: 20,
                    paddingHorizontal: 10,
                    // backgroundColor:'#95a5a6'
            }}>
                <Text style={{fontSize:17,fontWeight:'bold'}}>Banque Centrale du Maroc </Text>
            </View>
            <ScrollView style={styles.scrollView}>
                <View style={styles.cartCard1}>
                    <Text style={{fontSize:17,fontWeight:'bold'}}>Wallet</Text>
                    <View style={styles.cartCard2} >
                        <View style={{
                            height:100,
                            marginLeft:10,
                            paddingVertical:20,
                            flex:1,
                            flexDirection: 'row',
                            justifyContent:'space-between'
                        }}>
                            {/*  */}
                            <View style={{flexDirection:'row'}} >
                                <View style={{alignItems:'center',justifyContent:'center'}}>
                                    <Text style={{fontSize:17,fontWeight:'bold'}}>EURO : </Text>
                                </View>
                                <View style={{marginLeft:10}}>
                                    <TextInput 
                                        style={styles.input}
                                        // placeholder='new todo...'
                                        keyboardType="numeric"
                                        // value={`${fromAmountMAD}`}
                                        // onChangeText={setAmountMAD}
                                    />
                                    <View style={{flexDirection:'row'}} >
                                        <TouchableOpacity onPress={() => Alert.alert('Simple Button pressed')}>
                                            <View style={styles.actionBtn}>
                                                <Icon name="remove" size={25} color={COLORS.white} />
                                            </View>    
                                        </TouchableOpacity>
                                        <Text> </Text>
                                        <TouchableOpacity onPress={() => Alert.alert('Simple Button pressed')}>
                                            <View style={styles.actionBtn}>
                                                <Icon name="add" size={25} color={COLORS.white} />
                                            </View>    
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                            {/*  */}
                        </View>
                    </View>
                </View>

            </ScrollView>
            <View>

                
                {/* <Text>Message screen</Text>
                <Text style={{fontSize:17,fontWeight:'bold'}}>Total mony: </Text>
                <TextInput 
                    style={styles.input}
                    // placeholder='new todo...'
                    keyboardType="numeric"
                    // value={`${fromAmountMAD}`}
                    // onChangeText={setAmountMAD}
                /> */}




                <SafeAreaView style={styles.areaView}>
                    <ScrollView style={styles.scrollView}>
                    <View style={styles.cryptoLists}>
                        {
                        DATA.map((data, i) => {
                            return (
                            <View style={styles.cryptoListsData} key={i}>
                                <View style={styles.cryptoListsTopData}>
                                <Image source={{uri: `${data.img}`}}  style={{width:40, height:40,borderRadius:30}} />
                                <Text>{data.symbol}</Text>
                                <Text>{data.name}</Text>
                                <Text>{data.price} $</Text>

                                <Pressable style={[styles.button, styles.buttonOpen]} onPress={() =>{ navigation.navigate("Chart", {  data: data.redirectTo, cryptoPrice: data.price }); }}>
                                {/* navigation.navigate("Chart", { user }); */}
                                <Text>SHOWING chart</Text>
                                </Pressable>

                                </View>
                                {/* <Text style={styles.cryptoListsTxt}>{data.price} $</Text> */}
                            </View>
                            )
                        })
                        }
                    </View>
                    </ScrollView>
                </SafeAreaView>












                <Logout onPress={logOut}>
                    <TextParam medium bold color="#23a8d9" >Log out</TextParam>
                </Logout>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    // container: {
    //     flex: 1,
    //     justifyContent: "center",
    //     alignItems: "center",
    // },



    // areaView: {
    //     marginTop: 40,
    //     marginBottom: 60
    // },
    // scrollView: {
    //     marginHorizontal: 20,
    // },
    // cryptoLists: {
    //     marginTop: 10
    // },
    // cryptoListsData: {
    //     padding: 20,
    //     margin: 10,
    //     backgroundColor: "#ffdfdf",
    //     borderRadius: 20
    // },
    // cryptoListsTopData: {
    //     display: "flex",
    //     flexDirection: "column",
    //     justifyContent: "space-around",
    //     alignItems: "center"
    // },
    // button: {
    //     borderRadius: 20,
    //     padding: 10,
    //     elevation: 2,
    //     backgroundColor: "#d4ff00",
    // }
    input:{
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 3,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        width:"100%",
        justifyContent:'center',
        alignItems:'center',
        textAlign:'center',
        
    },
    scrollView: {
        backgroundColor: '#ecf0f1',
        // marginHorizontal: 20,
        padding:0,
      //   marginTop:60,
        marginBottom:2,
      //   width: '80%',
        // flexDirection: "column",
    },
    cartCard1:{
        // height: 100,
        elevation: 15,
        borderRadius: 10,
        backgroundColor: COLORS.white,
        marginVertical: 10,
        marginHorizontal: 20,
        paddingHorizontal: 10,
        // flexDirection: 'row',
        alignItems:'center',
        paddingBottom:20
    },
    cartCard2:{
        // height: 100,
        // elevation: 15,
        borderRadius: 10,
        // backgroundColor: COLORS.white,
        // marginVertical: 10,
        // marginHorizontal: 20,
        // paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems:'center',
        // paddingBottom:20
    },
    input:{
      marginBottom: 10,
      paddingHorizontal: 8,
      paddingVertical: 3,
      borderBottomWidth: 1,
      borderBottomColor: '#ddd',
      width:"100%",
      justifyContent:'center',
      alignItems:'center',
      textAlign:'center',
      
    },
    actionBtn: {
        width: 40,
        height: 30,
        backgroundColor: COLORS.primary,
        borderRadius:30,
        paddingHorizontal:5,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    }
    // graphViewSell: {
    //     width: 100,
    //     height: 60,
    //     backgroundColor: COLORS.primary,
    //     borderRadius:30,
    //     // paddingHorizontal:5,
    //     marginVertical: 10,
    //     flexDirection:'row',
    //     justifyContent:'center',
    //     alignItems:'center',
    //     marginLeft: 50
    // }
});

const Logout = styled.TouchableOpacity`
    margin-bottom: 32px;
`