// // import React, { useContext } from 'react';
// // import styled from "styled-components";
// // import {UserContext} from "../context/UserContext";
// // import {FirebaseContext} from "../context/FirebaseContext";
// // import Text from '../components/Text';


// // export default ProfileScreen = () => {
// //     const [user, setUser] = useContext(UserContext);
// //     const firebase = useContext(FirebaseContext);

// //     const logOut = async () => {
// //         const loggeOut = await firebase.logOut();

// //         if(loggeOut) {
// //             setUser((state) => ({ ...state, isLoggedIn: false}));
// //         }
// //     }

// //       return (
// //         <Container>
// //             {/* <ProfilePhotoContainer> */}
// //                 {/* PHOTO PROFIL FOR TEST */}
// //                 {/* <ProfilePhoto 
// //                     source={
// //                         user.profilePhotoUrl === "default"
// //                         ? require("../../assets/user.png")
// //                         : { uri: user.profilePhotoUrl }
// //                     }
// //                 /> */}
// //             {/* </ProfilePhotoContainer> */}

// //             <Text medium bold margin="16px 0 32px 0">
// //                 {user.username}
// //             </Text>

// //             <StatsContainer>
// //                 <StatContainer>
// //                     <Text large light >
// //                         21
// //                     </Text>
// //                     <Text small bold color="#c2c4cd" >
// //                         Posts
// //                     </Text>
// //                 </StatContainer>
// //             </StatsContainer>

// //             <StatsContainer>
// //                 <StatContainer>
// //                     <Text large light >
// //                         981
// //                     </Text>
// //                     <Text large light >
// //                         63
// //                     </Text>
// //                     <Text small bold color="#c2c4cd" >
// //                         Following
// //                     </Text>
// //                 </StatContainer>
// //             </StatsContainer>

// //             <Logout onPress={logOut}>
// //                 <Text medium bold color="#23a8d9" >Log out</Text>
// //             </Logout>
            
// //         </Container>
// //       );
// // };

// // const Container = styled.View`
// //     align-items: center;
// //     margin-top: 64px;
// //     flex: 1;
// // `;

// // // const ProfilePhotoContainer = styled.view`
// // //     shadow-opacity: 0.8;
// // //     shadow-radius: 30px;
// // //     shadow-color: "#222222";
// // // `;

// // // const ProfilePhoto = styled.Image`
// // //     width: 126px;
// // //     height: 126px;
// // //     border-radius: 64px;
// // // `;

// // const StatsContainer = styled.View`
// //     flex-direction: row;
// //     justify-content: space-between;
// //     margin: 0 32px;
// //     flex: 1;
// // `;

// // const StatContainer = styled.View`
// //     align-items: center;
// //     flex: 1;
// // `;

// // const Logout = styled.TouchableOpacity`
// //     margin-bottom: 32px;
// // `



// // -------------------------------------------
// import React, { useContext,useState,useEffect } from 'react';
// // import {View ,Text, StyleSheet, Image, SafeAreaView, ScrollView, Pressable,TextInput,} from "react-native";
// import {View ,Text, StyleSheet, Image, ScrollView, Pressable,TextInput,TouchableOpacity,Alert,RefreshControl} from "react-native";
// import {UserContext} from "../context/UserContext";
// import {FirebaseContext} from "../context/FirebaseContext";
// import TextParam from '../components/Text';
// import styled from "styled-components";
// import {SafeAreaView} from 'react-native-safe-area-context';
// import COLORS from '../consts/colors';
// import Icon from 'react-native-vector-icons/MaterialIcons';

// export default ProfileScreen = ({ route, navigation }) => {


//     const [user, setUser] = useContext(UserContext);
//     const firebase = useContext(FirebaseContext);

//     const [userData, setUserData] = useContext(UserContext);
//     const [totalSold, setTotalSold] = useState(0);
//     const [usernameVal, setUsernameVal] = useState("");
//     const [userEmailVal, setEmailVal] = useState("");



//     useEffect(() => {
//         // getUserValue();
        
//         async function anyNameFunction() {
//             await getUserValue();
//         }
//         anyNameFunction();
//         // getUserValue();
//     },[]);

//     const getUserValue = async () => {
//         await axios.get(`https://foreexbackend.herokuapp.com/api/user/info/${userData.email}`).then((Userdata) => {
//             console.log("--email for sold ---");
//             console.log(userData.email),
//             console.log("----------");


//             setTotalSold(Userdata.data.sold);
//             setUsernameVal(Userdata.data.username);
//             setEmailVal(Userdata.data.email);



//         })
//         .catch((e) => {
//             console.log(e)
//         })
//     }



























//     const logOut = async () => {
//         const loggeOut = await firebase.logOut();

//         if(loggeOut) {
//             setUser((state) => ({ ...state,email:"", isLoggedIn: false}));
//         }
//     }


//     const wait = (timeout) => {
//         return new Promise(resolve => setTimeout(resolve, timeout));
//     }

//     const [refreshing, setRefreshing] = React.useState(false);
//     const onRefresh = React.useCallback(() => {
//         setRefreshing(true);
//         wait(2000).then(() => {
//             setRefreshing(false);
//             getUserValue();
//         });
//     }, []);






//     return (
//         <SafeAreaView
//             style={{
//                 backgroundColor:COLORS.white,
//                 flex:1,
//             }}

//             efreshControl={
//                 <RefreshControl
//                   refreshing={refreshing}
//                   onRefresh={onRefresh}
//                 />
//               }

//         >
//             <View style={{
//                     justifyContent:'center',
//                     alignItems:'center',
//                     marginVertical: 10,
//                     marginHorizontal: 20,
//                     paddingHorizontal: 10,
//                     // backgroundColor:'#95a5a6'
//             }}>
//                 <Text style={{fontSize:17,fontWeight:'bold'}}>Banque Centrale du Maroc </Text>
//             </View>
//             <ScrollView style={styles.scrollView}>
//                 <View style={styles.cartCard1}>
//                     <Text style={{fontSize:17,fontWeight:'bold'}}>Wallet</Text>

//                             <View style={styles.graphView}>
//                                 <Text style={{fontWeight:'bold',fontSize:18, color:COLORS.white}}>UseName : {usernameVal}</Text>
//                             </View>  
//                             <View style={styles.graphView}>
//                                 <Text style={{fontWeight:'bold',fontSize:18, color:COLORS.white}}>Email : {userEmailVal}</Text>
//                             </View>  
//                             <View style={styles.graphView}>
//                                 <Text style={{fontWeight:'bold',fontSize:18, color:COLORS.white}}>Sold : {totalSold}</Text>
//                             </View>    
//                 </View>

//             </ScrollView>
//             <View>
//                 <Logout onPress={logOut}>
//                     <TextParam medium bold color="#23a8d9" >Log out</TextParam>
//                 </Logout>
//             </View>
//         </SafeAreaView>
//     );
// };

// const styles = StyleSheet.create({

//     input:{
//         marginBottom: 10,
//         paddingHorizontal: 8,
//         paddingVertical: 3,
//         borderBottomWidth: 1,
//         borderBottomColor: '#ddd',
//         width:"100%",
//         justifyContent:'center',
//         alignItems:'center',
//         textAlign:'center',
        
//     },
//     scrollView: {
//         backgroundColor: '#ecf0f1',
//         // marginHorizontal: 20,
//         padding:0,
//       //   marginTop:60,
//         marginBottom:2,
//       //   width: '80%',
//         // flexDirection: "column",
//     },
//     cartCard1:{
//         // height: 100,
//         elevation: 15,
//         borderRadius: 10,
//         backgroundColor: COLORS.white,
//         marginVertical: 10,
//         marginHorizontal: 20,
//         paddingHorizontal: 10,
//         // flexDirection: 'row',
//         alignItems:'center',
//         paddingBottom:20
//     },
//     cartCard2:{
//         // height: 100,
//         // elevation: 15,
//         borderRadius: 10,
//         // backgroundColor: COLORS.white,
//         // marginVertical: 10,
//         // marginHorizontal: 20,
//         // paddingHorizontal: 10,
//         flexDirection: 'row',
//         alignItems:'center',
//         // paddingBottom:20
//     },
//     input:{
//       marginBottom: 10,
//       paddingHorizontal: 8,
//       paddingVertical: 3,
//       borderBottomWidth: 1,
//       borderBottomColor: '#ddd',
//       width:"100%",
//       justifyContent:'center',
//       alignItems:'center',
//       textAlign:'center',
      
//     },
//     actionBtn: {
//         width: 40,
//         height: 30,
//         backgroundColor: COLORS.primary,
//         borderRadius:30,
//         paddingHorizontal:5,
//         flexDirection:'row',
//         justifyContent:'center',
//         alignItems:'center',
//     },
//     graphView: {
//         width: 280,
//         height: 60,
//         backgroundColor: COLORS.primary,
//         borderRadius:30,
//         // paddingHorizontal:5,
//         marginVertical: 10,
//         flexDirection:'row',
//         justifyContent:'center',
//         alignItems:'center',
//     },
// });

// const Logout = styled.TouchableOpacity`
//     margin-bottom: 32px;
// `





















































































































// ---------------------------------------------------------

// VERSION 1


import React, { useEffect,useState,useContext } from 'react';
import {Text, StyleSheet, View, Image,Alert,TouchableOpacity,TextInput,ScrollView,RefreshControl} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import COLORS from '../consts/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styled from "styled-components";
import TextParam from '../components/Text';
// import AsyncStorage from '@react-native-community/async-storage';
import {UserContext} from '../context/UserContext';
import {FirebaseContext} from "../context/FirebaseContext";
import axios from "axios";


// const HomeScreen = ({navigation}) => {
const ProfileScreen = ({ navigation, route }) => {

    const BASE_URL = 'http://api.exchangeratesapi.io/v1/latest?access_key=2739b2331b1010220a696b99d3d3e828';

    
    const firebase = useContext(FirebaseContext);
    // ---------------------------------
    const [currencyOptions,setCurrencyOptions] = useState([]);
    const [fromCurrency,setFromCurrency] = useState();
    const [toCurrency,setToCurrency] = useState();
    const [exchangeRate,setExchangeRate] = useState();
    const [amount,setAmount] = useState(1);
    const [amountInFromCurrency,setAmountInFromCurrency] = useState(true);
    // ----------------------------------------------------

    const [currencyOptionstoto,setCurrencyOptionstoto] = useState([]);
    const [fromCurrencytoto,setFromCurrencytoto] = useState();

    const [ToCurrencytotoEUR,setToCurrencyTototEUR] = useState();

    // const [toCurrencyMAD,setToCurrencyMAD] = useState();
    // const [exchangeRateMAD,setExchangeRateMAD] = useState();

    // const [toCurrencyAED,setToCurrencyAED] = useState();
    // const [exchangeRateAED,setExchangeRateAED] = useState();

    // const [toCurrencyAFN,setToCurrencyAFN] = useState();
    // const [exchangeRateAFN,setExchangeRateAFN] = useState();

    // const [toCurrencyALL,setToCurrencyALL] = useState();
    // const [exchangeRateALL,setExchangeRateALL] = useState();

    // const [toCurrencyAMD,setToCurrencyAMD] = useState();
    // const [exchangeRateAMD,setExchangeRateAMD] = useState();

    // const [toCurrencyANG,setToCurrencyANG] = useState();
    // const [exchangeRateANG,setExchangeRateANG] = useState();

    // const [toCurrencyAOA,setToCurrencyAOA] = useState();
    // const [exchangeRateAOA,setExchangeRateAOA] = useState();

    // const [toCurrencyARS,setToCurrencyARS] = useState();
    // const [exchangeRateARS,setExchangeRateARS] = useState();

    // const [toCurrencyAUD,setToCurrencyAUD] = useState();
    // const [exchangeRateAUD,setExchangeRateAUD] = useState();

    // const [toCurrencyAWG,setToCurrencyAWG] = useState();
    // const [exchangeRateAWG,setExchangeRateAWG] = useState();

    // const [toCurrencyBTC,setToCurrencyBTC] = useState();
    // const [exchangeRateBTC,setExchangeRateBTC] = useState();

    // const [toCurrencyUSD,setToCurrencyUSD] = useState();
    // const [exchangeRateUSD,setExchangeRateUSD] = useState();

    // const [toCurrencyGBP,setToCurrencyGBP] = useState();
    // const [exchangeRateGBP,setExchangeRateGBP] = useState();

    // const [toCurrencyKWD,setToCurrencyKWD] = useState();
    // const [exchangeRateKWD,setExchangeRateKWD] = useState();
    // ----------------------------------------------------
    // const [amountInFromCurrencyMAD,setAmountInFromCurrencyMAD] = useState(true);
    // const [amountInFromCurrencyAED,setAmountInFromCurrencyAED] = useState(true);
    // const [amountInFromCurrencyAFN,setAmountInFromCurrencyAFN] = useState(true);
    // const [amountInFromCurrencyALL,setAmountInFromCurrencyALL] = useState(true);
    // const [amountInFromCurrencyAMD,setAmountInFromCurrencyAMD] = useState(true);
    // const [amountInFromCurrencyANG,setAmountInFromCurrencyANG] = useState(true);
    // const [amountInFromCurrencyAOA,setAmountInFromCurrencyAOA] = useState(true);
    // const [amountInFromCurrencyARS,setAmountInFromCurrencyARS] = useState(true);
    // const [amountInFromCurrencyAUD,setAmountInFromCurrencyAUD] = useState(true);
    // const [amountInFromCurrencyAWG,setAmountInFromCurrencyAWG] = useState(true);
    // const [amountInFromCurrencyBTC,setAmountInFromCurrencyBTC] = useState(true);
    // const [amountInFromCurrencyUSD,setAmountInFromCurrencyUSD] = useState(true);
    // const [amountInFromCurrencyGBP,setAmountInFromCurrencyGBP] = useState(true);
    // const [amountInFromCurrencyKWD,setAmountInFromCurrencyKWD] = useState(true);
    // ----------------------------------------------------
    // const [amountMAD,setAmountMAD] = useState(1);
    // const [amountAED,setAmountAED] = useState(1);
    // const [amountAFN,setAmountAFN] = useState(1);
    // const [amountALL,setAmountALL] = useState(1);
    // const [amountAMD,setAmountAMD] = useState(1);
    // const [amountANG,setAmountANG] = useState(1);
    // const [amountAOA,setAmountAOA] = useState(1);
    // const [amountARS,setAmountARS] = useState(1);
    // const [amountAUD,setAmountAUD] = useState(1);
    // const [amountAWG,setAmountAWG] = useState(1);
    // const [amountBTC,setAmountBTC] = useState(1);
    // const [amountUSD,setAmountUSD] = useState(1);
    // const [amountGBP,setAmountGBP] = useState(1);
    // const [amountKWD,setAmountKWD] = useState(1);
    // ----------------------------------------------------
    const [userData, setUserData] = useContext(UserContext);
    // ----------------------------------------------------
    const [totalSold, setTotalSold] = useState(0);
    const [userEmailVal, setEmailVal] = useState("");
    const [usernameVal, setUsernameVal] = useState("");
    

    // const [soldMAD, setSoldMAD ] = useState(0);
    // const [soldMADbuy, setSoldMADbuy] = useState(0);

    // const [soldBTC, setSoldBTC ] = useState(0);
    // const [soldBTCbuy, setSoldBTCbuy] = useState(0);

    // const [soldUSD, setSoldUSD ] = useState(0);
    // const [soldUSDbuy, setSoldUSDbuy] = useState(0);

    // const [soldGBP, setSoldGBP ] = useState(0);
    // const [soldGBPbuy, setSoldGBPbuy] = useState(0);

    // const [soldKWD, setSoldKWD ] = useState(0);
    // const [soldKWDbuy, setSoldKWDbuy] = useState(0);

    // const [soldAED, setSoldAED ] = useState(0);
    // const [soldAEDbuy, setSoldAEDbuy] = useState(0);

    // const [soldAFN, setSoldAFN ] = useState(0);
    // const [soldAFNbuy, setSoldAFNbuy] = useState(0);

    // const [soldALL, setSoldALL ] = useState(0);
    // const [soldALLbuy, setSoldALLbuy] = useState(0);

    // const [soldAMD, setSoldAMD ] = useState(0);
    // const [soldAMDbuy, setSoldAMDbuy] = useState(0);

    // const [soldANG, setSoldANG ] = useState(0);
    // const [soldANGbuy, setSoldANGbuy] = useState(0);

    // const [soldAOA, setSoldAOA ] = useState(0);
    // const [soldAOAbuy, setSoldAOAbuy] = useState(0);

    // const [soldARS, setSoldARS ] = useState(0);
    // const [soldARSbuy, setSoldARSbuy] = useState(0);

    // const [soldAUD, setSoldAUD ] = useState(0);
    // const [soldAUDbuy, setSoldAUDbuy] = useState(0);

    // const [soldAWG, setSoldAWG ] = useState(0);
    // const [soldAWGbuy, setSoldAWGbuy] = useState(0);



    // 
    const [_, setUser] = useContext(UserContext);

    // const [crypto, setCrypto ] = useState("");
    // const [soldBuy, setSoldBuy] = useState(0);
    let crypto = "";
    let soldBuy = 0;
    let soldCryptobuy = 0
    let newSoldCryptobuy = 0;
    let newSoldCryptoDeposit =0;

    crypto ="";
    soldBuy = 0;
    soldCryptobuy = 0
    newSoldCryptobuy = 0;
    newSoldCryptoDeposit =0;



    // console.log(userData.email);
    // const [emailData,setemailData] = useState("");

    // const readData = async () => {
    //     try {
    //       const userEmailData = await AsyncStorage.getItem(STORAGE_KEY)
      
    //       if (userEmailData !== null) {
    //         setemailData(userEmailData)
    //       }
    //     } catch (e) {
    //       alert('Failed to fetch the data from storage')
    //     }
    // }

    // const webView = () => {
    //     // navigation.navigate("WebviewNav", { userData, data });
    //     navigation.navigate("WebviewNav", { redirectTo: "https://fr.tradingview.com/symbols/EURMAD/?exchange=FX_IDC" });
    // }


    // let toAmount, fromAmount
    // if(amountInFromCurrency){
    //   fromAmount = amount
    //   toAmount = amount * exchangeRate
    // } else{
    //   toAmount = amount
    //   fromAmount = amount / exchangeRate
    // }
    // ----------------------------------------------------
    //MAD
    // let toAmountMAD, fromAmountMAD
    // if(amountInFromCurrencyMAD){
    //   fromAmountMAD = amountMAD
    //   toAmountMAD = amountMAD * exchangeRateMAD
    // } else{
    //   toAmounMADToto = amountMAD
    //   fromAmountMAD = amountMAD / exchangeRateMAD
    // }
    // function addVallMAD (){
    //     setAmountMAD(amountMAD + 1)
    // }
    // function minusVallMAD (){
    //     if(amountMAD > 0){
    //         setAmountMAD(amountMAD - 1)
    //     }
    // }
    // // ----------------------------------------------------
    // //AED
    // let toAmountAED, fromAmountAED
    // if(amountInFromCurrencyAED){
    //   fromAmountAED = amountAED
    //   toAmountAED = amountAED * exchangeRateAED
    // } else{
    //   toAmountAED = amountAED
    //   fromAmountAED = amountAED / exchangeRateAED
    // }
    // function addVallAED (){
    //     setAmountAED(amountAED + 1)
    // }
    // function minusVallAED (){
    //     if(amountAED > 0){
    //         setAmountAED(amountAED - 1)
    //     }
    // }
    // // ----------------------------------------------------
    // //AFN
    // let toAmountAFN, fromAmountAFN
    // if(amountInFromCurrencyAFN){
    //   fromAmountAFN = amountAFN
    //   toAmountAFN = amountAFN * exchangeRateAFN
    // } else{
    //   toAmountAFN = amountAFN
    //   fromAmountAFN = amountAFN / exchangeRateAFN
    // }
    // function addVallAFN (){
    //     setAmountAFN(amountAFN + 1)
    // }
    // function minusVallAFN (){
    //     if(amountAFN > 0){
    //         setAmountAFN(amountAFN - 1)
    //     }
    // }
    // // ----------------------------------------------------
    // //ALL
    // let toAmountALL, fromAmountALL
    // if(amountInFromCurrencyALL){
    //   fromAmountALL = amountALL
    //   toAmountALL = amountALL * exchangeRateALL
    // } else{
    //   toAmountALL = amountALL
    //   fromAmountALL = amountALL / exchangeRateALL
    // }
    // function addVallALL (){
    //     setAmountALL(amountALL + 1)
    // }
    // function minusVallALL (){
    //     if(amountALL > 0){
    //         setAmountALL(amountALL - 1)
    //     }
    // }
    // // ----------------------------------------------------
    // //AMD
    // let toAmountAMD, fromAmountAMD
    // if(amountInFromCurrencyAMD){
    //   fromAmountAMD = amountAMD
    //   toAmountAMD = amountAMD * exchangeRateAMD
    // } else{
    //   toAmountAMD = amountAMD
    //   fromAmountAMD = amountAMD / exchangeRateAMD
    // }
    // function addVallAMD (){
    //     setAmountAMD(amountAMD + 1)
    // }
    // function minusVallAMD (){
    //     if(amountAMD > 0){
    //         setAmountAMD(amountAMD - 1)
    //     }
    // }
    // // ----------------------------------------------------
    // //ANG
    // let toAmountANG, fromAmountANG
    // if(amountInFromCurrencyANG){
    //   fromAmountANG = amountANG
    //   toAmountANG = amountANG * exchangeRateANG
    // } else{
    //   toAmountANG = amountANG
    //   fromAmountANG = amountANG / exchangeRateANG
    // }
    // function addVallANG (){
    //     setAmountANG(amountANG + 1)
    // }
    // function minusVallANG (){
    //     if(amountANG > 0){
    //         setAmountANG(amountANG - 1)
    //     }
    // }
    // // ----------------------------------------------------
    // //AOA
    // let toAmountAOA, fromAmountAOA
    // if(amountInFromCurrencyAOA){
    //   fromAmountAOA = amountAOA
    //   toAmountAOA = amountAOA * exchangeRateAOA
    // } else{
    //   toAmountAOA = amountAOA
    //   fromAmountAOA = amountAOA / exchangeRateAOA
    // }
    // function addVallAOA (){
    //     setAmountAOA(amountAOA + 1)
    // }
    // function minusVallAOA (){
    //     if(amountAOA > 0){
    //         setAmountAOA(amountAOA - 1)
    //     }
    // }
    // // ----------------------------------------------------
    // //ARS
    // let toAmountARS, fromAmountARS
    // if(amountInFromCurrencyARS){
    //   fromAmountARS = amountARS
    //   toAmountARS = amountARS * exchangeRateARS
    // } else{
    //   toAmountARS = amountARS
    //   fromAmountARS = amountARS / exchangeRateARS
    // }
    // function addVallARS (){
    //     setAmountARS(amountARS + 1)
    // }
    // function minusVallARS (){
    //     if(amountARS > 0){
    //         setAmountARS(amountARS - 1)
    //     }
    // }
    // // ----------------------------------------------------
    // //AUD
    // let toAmountAUD, fromAmountAUD
    // if(amountInFromCurrencyAUD){
    //   fromAmountAUD = amountAUD
    //   toAmountAUD = amountAUD * exchangeRateAUD
    // } else{
    //   toAmountAUD = amountAUD
    //   fromAmountAUD = amountAUD / exchangeRateAUD
    // }
    // function addVallAUD (){
    //     setAmountAUD(amountAUD + 1)
    // }
    // function minusVallAUD (){
    //     if(amountAUD > 0){
    //         setAmountAUD(amountAUD - 1)
    //     }
    // }
    // // ----------------------------------------------------
    // //AWG
    // let toAmountAWG, fromAmountAWG
    // if(amountInFromCurrencyAWG){
    //   fromAmountAWG = amountAWG
    //   toAmountAWG = amountAWG * exchangeRateAWG
    // } else{
    //   toAmountAWG = amountAWG
    //   fromAmountAWG = amountAWG / exchangeRateAWG
    // }
    // function addVallAWG (){
    //     setAmountAWG(amountAWG + 1)
    // }
    // function minusVallAWG (){
    //     if(amountAWG > 0){
    //         setAmountAWG(amountAWG - 1)
    //     }
    // }
    // // ----------------------------------------------------
    // //BTC
    // let toAmountBTC, fromAmountBTC
    // if(amountInFromCurrencyBTC){
    //   fromAmountBTC = amountBTC
    //   toAmountBTC = amountBTC * exchangeRateBTC
    // } else{
    //   toAmountBTC = amountBTC
    //   fromAmountBTC = amountBTC / exchangeRateBTC
    // }
    // function addVallBTC (){
    //     setAmountBTC(amountBTC + 1)
    // }
    // function minusVallBTC (){
    //     if(amountBTC > 0){
    //         setAmountBTC(amountBTC - 1)
    //     }
    // }
    // // ----------------------------------------------------
    // //USD
    // let toAmountUSD, fromAmountUSD
    // if(amountInFromCurrencyUSD){
    //   fromAmountUSD = amountUSD
    //   toAmountUSD = amountUSD * exchangeRateUSD
    // } else{
    //   toAmountUSD = amountUSD
    //   fromAmountUSD = amountUSD / exchangeRateUSD
    // }
    // function addVallUSD (){
    //     setAmountUSD(amountUSD + 1)
    // }
    // function minusVallUSD (){
    //     if(amountUSD > 0){
    //         setAmountUSD(amountUSD - 1)
    //     }
    // }
    // // ----------------------------------------------------
    // //GBP
    // let toAmountGBP, fromAmountGBP
    // if(amountInFromCurrencyGBP){
    //   fromAmountGBP = amountGBP
    //   toAmountGBP = amountGBP * exchangeRateGBP
    // } else{
    //   toAmountGBP = amountGBP
    //   fromAmountGBP = amountGBP / exchangeRateGBP
    // }
    // function addVallGBP (){
    //     setAmountGBP(amountGBP + 1)
    // }
    // function minusVallGBP (){
    //     if(amountGBP > 0){
    //         setAmountGBP(amountGBP - 1)
    //     }
    // }
    // // ----------------------------------------------------
    // //KWD
    // let toAmountKWD, fromAmountKWD
    // if(amountInFromCurrencyKWD){
    //   fromAmountKWD = amountKWD
    //   toAmountKWD = amountKWD * exchangeRateKWD
    // } else{
    //   toAmountKWD = amountKWD
    //   fromAmountKWD = amountKWD / exchangeRateKWD
    // }
    // function addVallKWD (){
    //     setAmountKWD(amountKWD + 1)
    // }
    // function minusVallKWD (){
    //     if(amountKWD > 0){
    //         setAmountKWD(amountKWD - 1)
    //     }
    // }
    // ----------------------------------------------------

    useEffect(() => {
        fetch(BASE_URL)
          .then(res => res.json())
          .then(data => {
            // const firstCurrency = Object.keys(data.rates)[0]
            // setCurrencyOptions([data.base, ...Object.keys(data.rates) ])
            // setFromCurrency(data.base)
            // setToCurrency(firstCurrency)
            // setExchangeRate(data.rates[firstCurrency])
            // // ----------------------------------------------------
            // const firstCurrencyVal = Object.keys(data.rates)[91]
            // const firstAEDCurrencyVal = Object.keys(data.rates)[0]
            // const firstAFNCurrencyVal = Object.keys(data.rates)[1]
            // const firstALLCurrencyVal = Object.keys(data.rates)[2]
            // const firstAMDCurrencyVal = Object.keys(data.rates)[3]
            // const firstANGCurrencyVal = Object.keys(data.rates)[4]
            // const firstAOACurrencyVal = Object.keys(data.rates)[5]
            // const firstARSCurrencyVal = Object.keys(data.rates)[6]
            // const firstAUDCurrencyVal = Object.keys(data.rates)[7]
            // const firstAWGCurrencyVal = Object.keys(data.rates)[8]
            // const firstBTCCurrencyVal = Object.keys(data.rates)[21]
            // const firstUSDCurrencyVal = Object.keys(data.rates)[149]
            // const firstGBPCurrencyVal = Object.keys(data.rates)[49]
            // const firstKWDCurrencyVal = Object.keys(data.rates)[80]
            // // ----------------------------------------------------
            // setCurrencyOptionstoto([data.base, ...Object.keys(data.rates) ])
            // setFromCurrencytoto(data.base)
            // setToCurrencyMAD(firstCurrencyVal)
            // setToCurrencyAED(firstAEDCurrencyVal)
            // setToCurrencyAFN(firstAFNCurrencyVal)
            // setToCurrencyALL(firstALLCurrencyVal)
            // setToCurrencyAMD(firstAMDCurrencyVal)
            // setToCurrencyANG(firstANGCurrencyVal)
            // setToCurrencyAOA(firstAOACurrencyVal)
            // setToCurrencyARS(firstARSCurrencyVal)
            // setToCurrencyAUD(firstAUDCurrencyVal)
            // setToCurrencyAWG(firstAWGCurrencyVal)
            // setToCurrencyBTC(firstBTCCurrencyVal)
            // setToCurrencyUSD(firstUSDCurrencyVal)
            // setToCurrencyGBP(firstGBPCurrencyVal)
            // setToCurrencyKWD(firstKWDCurrencyVal)
            // ----------------------------------------------------
            // setExchangeRateMAD(data.rates[firstCurrencyVal])
            // setExchangeRateAED(data.rates[firstAEDCurrencyVal])
            // setExchangeRateAFN(data.rates[firstAFNCurrencyVal])
            // setExchangeRateALL(data.rates[firstALLCurrencyVal])
            // setExchangeRateAMD(data.rates[firstAMDCurrencyVal])
            // setExchangeRateANG(data.rates[firstANGCurrencyVal])
            // setExchangeRateAOA(data.rates[firstAOACurrencyVal])
            // setExchangeRateARS(data.rates[firstARSCurrencyVal])
            // setExchangeRateAUD(data.rates[firstAUDCurrencyVal])
            // setExchangeRateAWG(data.rates[firstAWGCurrencyVal])
            // setExchangeRateBTC(data.rates[firstBTCCurrencyVal])
            // setExchangeRateUSD(data.rates[firstUSDCurrencyVal])
            // setExchangeRateGBP(data.rates[firstGBPCurrencyVal])
            // setExchangeRateKWD(data.rates[firstKWDCurrencyVal])
            // ----------------------------------------------------
            getUserValue();
        });
          
    },[]);


    // -----get profil value----
    const getUserValue = async () => {
        await axios.get(`https://foreexbackend.herokuapp.com/api/user/info/${userData.email}`).then((Userdata) => {
            console.log("--email for sold ---");
            console.log(userData.email),
            console.log("----------");

            // SetWallet(walletdata.data.walletSold)
            // SetSold(walletdata.data.sold)
            // totalSold
            setTotalSold(Userdata.data.sold);
            setEmailVal(Userdata.data.email)
            setUsernameVal(Userdata.data.username)

            // setSoldMAD(Userdata.data.SoldMAD.SoldMADdeposit);
            // setSoldMADbuy(Userdata.data.SoldMAD.SoldMADCryptobuy);

            // setSoldBTC(Userdata.data.SoldBTC.SoldBTCdeposit);
            // setSoldBTCbuy(Userdata.data.SoldBTC.SoldBTCCryptobuy);

            // setSoldUSD(Userdata.data.SoldUSD.SoldUSDdeposit);
            // setSoldUSDbuy(Userdata.data.SoldUSD.SoldUSDCryptobuy);

            // setSoldGBP(Userdata.data.SoldGBP.SoldGBPdeposit);
            // setSoldGBPbuy(Userdata.data.SoldGBP.SoldGBPCryptobuy);

            // setSoldKWD(Userdata.data.SoldKWD.SoldKWDdeposit);
            // setSoldKWDbuy(Userdata.data.SoldKWD.SoldKWDCryptobuy);

            // setSoldAED(Userdata.data.SoldAED.SoldAEDdeposit);
            // setSoldAEDbuy(Userdata.data.SoldAED.SoldAEDCryptobuy);

            // setSoldAFN(Userdata.data.SoldAFN.SoldAFNdeposit);
            // setSoldAFNbuy(Userdata.data.SoldAFN.SoldAFNCryptobuy);

            // setSoldALL(Userdata.data.SoldALL.SoldALLdeposit);
            // setSoldALLbuy(Userdata.data.SoldALL.SoldALLCryptobuy);

            // setSoldAMD(Userdata.data.SoldAMD.SoldAMDdeposit);
            // setSoldAMDbuy(Userdata.data.SoldAMD.SoldAMDCryptobuy);

            // setSoldANG(Userdata.data.SoldANG.SoldANGdeposit);
            // setSoldANGbuy(Userdata.data.SoldANG.SoldANGCryptobuy);

            // setSoldAOA(Userdata.data.SoldAOA.SoldAOAdeposit);
            // setSoldAOAbuy(Userdata.data.SoldAOA.SoldAOACryptobuy);

            // setSoldARS(Userdata.data.SoldARS.SoldARSdeposit);
            // setSoldARSbuy(Userdata.data.SoldARS.SoldARSCryptobuy);

            // setSoldAUD(Userdata.data.SoldAUD.SoldAUDdeposit);
            // setSoldAUDbuy(Userdata.data.SoldAUD.SoldAUDCryptobuy);

            // setSoldAWG(Userdata.data.SoldAWG.SoldAWGdeposit);
            // setSoldAWGbuy(Userdata.data.SoldAWG.SoldAWGCryptobuy);

            


            // setSoldBTC(Userdata.data.soldBTC);
            // setSoldUSD(Userdata.data.soldUSD);
            // setSoldGBP(Userdata.data.soldGBP);
            // setSoldKWD(Userdata.data.soldKWD);
            // setSoldAED(Userdata.data.soldAED);
            // setSoldAFN(Userdata.data.soldAFN);
            // setSoldALL(Userdata.data.soldALL);
            // setSoldAMD(Userdata.data.soldAMD);
            // setSoldANG(Userdata.data.soldANG);
            // setSoldAOA(Userdata.data.soldAOA);
            // setSoldARS(Userdata.data.soldARS);


        })
        .catch((e) => {
            console.log(e)
        })
    }
    // ----- end get profil value----

    // ---Start Buy---
    // const buy = (sa) => {
    // const buyMAD = () => {
    //     // setCrypto("MAD");
    //     // setSoldBuy(amountMAD);
    //     // navigation.navigate("WebviewNav", { userData, data });
    //     // navigation.navigate("WebviewNav", { redirectTo: "https://fr.tradingview.com/symbols/EURMAD/?exchange=FX_IDC" });
    //     // Alert.alert('Simple Button pressed for buy');
    //     if(amountMAD > totalSold){
    //         // console.log("TCH : " , amountMAD);

    //         Alert.alert('Tcha rayeh a 3chiri');
    //     }else{
    //         // setCrypto("MAD");
    //         // setSoldBuy(amountMAD);
    //         crypto ="MAD";
    //         soldBuy = amountMAD;
    //         soldCryptobuy = (amountMAD / exchangeRateMAD);
            
    //         console.log('amountMAD : ',amountMAD);
    //         console.log('totalSold : ',totalSold);
            
    //         console.log('------------');
    //         console.log('crypto:',crypto);
    //         console.log('soldBuy:',soldBuy);
    //         console.log('soldCryptobuy:',soldCryptobuy)
    //         console.log('------------');
    //         buyCurency();
    //         // navigation.navigate("Home");

    //         // let GetUserData = {email: userData.email, Crypto:"MAD",SoldBuy:amountMAD}

    //         // axios.post("https://foreexbackend.herokuapp.com/api/user/buyCrypto", GetUserData).then(() => {
    //         //     console.log("data updated")
    //         // })
    //         // .catch((e) => {
    //         // alert('you have not money')
    //         // })




    //         // console.log("amountMAD : " , amountMAD);
    //     }
        

    // };

    // const buyCurency = () => {
    //     let GetUserData = {email: userData.email, Crypto:crypto,SoldDeposit:soldBuy,SoldCryptobuy:soldCryptobuy}

    //     axios.post("https://foreexbackend.herokuapp.com/api/user/buyCrypto", GetUserData).then(() => {
    //         console.log("data updated");
    //         alert('Buy completed successfully');
    //         onRefresh();
    //     })
    //     .catch((e) => {
    //     alert('you have not money')
    //     })
    // }

    // End buy---


    // start sell----

    // const sellMAD = () => {
    //     if(amountMAD > soldMADbuy){
    //         // console.log("TCH : " , amountMAD);

    //         Alert.alert('Tcha rayeh a 3chiri');
    //     }else{
    //         // setCrypto("MAD");
    //         // setSoldBuy(amountMAD);
    //         crypto ="MAD";
    //         soldBuy = parseFloat(amountMAD) * parseFloat(exchangeRateMAD);
    //         newSoldCryptobuy = parseFloat(soldMADbuy) - parseFloat(amountMAD);
    //         newSoldCryptoDeposit = parseFloat(soldMAD / soldMADbuy) *  parseFloat(newSoldCryptobuy);

    //         console.log("crypto : ",crypto);
    //         console.log("------------------------");
    //         console.log("value SELL : ",amountMAD);
    //         console.log("------------------------");
    //         console.log("last value diposit : ",soldMADbuy);
    //         console.log("------------------------");
    //         console.log("newSoldMADCryptobuy jdid dyal MAD : ",newSoldCryptobuy);
    //         console.log("------------------------");
    //         console.log("soldBuy li radi ytzad EURO : ",soldBuy);
    //         console.log("------------------------");
    //         console.log("newSold EURO deposit : ",newSoldCryptoDeposit);
    //         console.log("------------------------");
    //         console.log("newSold total deposit + binif : ",soldBuy + totalSold);
    //         sellCurency();
    //         // 
    //         // REST API

    //         // 

    //         // newSoldMad = (soldMAD / soldMADbuy) * soldCryptosell;

    //         // soldCryptobuy = (amountMAD / exchangeRateMAD);
            
    //         // console.log('amountMAD : ',amountMAD);
    //         // console.log('totalSold : ',totalSold);
            
    //         // console.log('------------');
    //         // console.log('crypto:',crypto);
    //         // console.log('soldBuy:',soldBuy);
    //         // console.log('soldCryptobuy:',soldCryptobuy)
    //         // console.log('------------');
    //         // buyCurency();
    //         // navigation.navigate("Home");

    //         // let GetUserData = {email: userData.email, Crypto:"MAD",SoldBuy:amountMAD}

    //         // axios.post("https://foreexbackend.herokuapp.com/api/user/buyCrypto", GetUserData).then(() => {
    //         //     console.log("data updated")
    //         // })
    //         // .catch((e) => {
    //         // alert('you have not money')
    //         // })




    //         // console.log("amountMAD : " , amountMAD);
    //     }
        

    // };

    // const sellCurency = () => {
    //     let GetUserDataSell = {email: userData.email, Crypto:crypto,newSoldDeposit:newSoldCryptoDeposit,newSoldCryptobuy:newSoldCryptobuy,newSoldTotal: parseFloat(soldBuy + totalSold) }

    //     axios.post("https://foreexbackend.herokuapp.com/api/user/sellCrypto", GetUserDataSell).then(() => {
    //         console.log("data updated");
    //         alert('Sale completed successfully');
    //     })
    //     .catch((e) => {
    //     alert('you have not money')
    //     })
    // }

    const [currencySearchVal, setCurrencySearchVal] = useState();

    // const buyAndSellMAD = async () => {
    //     navigation.navigate('Notification',{currencySearch: 'MAD',exchangeRateSearchV1:exchangeRateMAD,soldSearchebuyV1:soldMADbuy,fromCurrencySearchebuyV1:fromCurrencytoto,toCurrencySearchebuyV1:toCurrencyMAD});
    // }
    // const buyAndSellBTC = async () => {
    //     navigation.navigate('Notification',{currencySearch: 'BTC',exchangeRateSearchV1:exchangeRateBTC,soldSearchebuyV1:soldBTCbuy,fromCurrencySearchebuyV1:fromCurrencytoto,toCurrencySearchebuyV1:toCurrencyBTC});
    // }
    // const buyAndSellUSD = async () => {
    //     navigation.navigate('Notification',{currencySearch: 'USD',exchangeRateSearchV1:exchangeRateUSD,soldSearchebuyV1:soldUSDbuy,fromCurrencySearchebuyV1:fromCurrencytoto,toCurrencySearchebuyV1:toCurrencyUSD});
    // }
    // const buyAndSellGBP = async () => {
    //     navigation.navigate('Notification',{currencySearch: 'GBP',exchangeRateSearchV1:exchangeRateGBP,soldSearchebuyV1:soldGBPbuy,fromCurrencySearchebuyV1:fromCurrencytoto,toCurrencySearchebuyV1:toCurrencyGBP});
    // }
    // const buyAndSellKWD = async () => {
    //     navigation.navigate('Notification',{currencySearch: 'KWD',exchangeRateSearchV1:exchangeRateKWD,soldSearchebuyV1:soldKWDbuy,fromCurrencySearchebuyV1:fromCurrencytoto,toCurrencySearchebuyV1:toCurrencyKWD});
    // }
    // const buyAndSellAED = async () => {
    //     navigation.navigate('Notification',{currencySearch: 'AED',exchangeRateSearchV1:exchangeRateAED,soldSearchebuyV1:soldAEDbuy,fromCurrencySearchebuyV1:fromCurrencytoto,toCurrencySearchebuyV1:toCurrencyAED});
    // }
    // const buyAndSellAFN = async () => {
    //     navigation.navigate('Notification',{currencySearch: 'AFN',exchangeRateSearchV1:exchangeRateAFN,soldSearchebuyV1:soldAFNbuy,fromCurrencySearchebuyV1:fromCurrencytoto,toCurrencySearchebuyV1:toCurrencyAFN});
    // }
    // const buyAndSellALL = async () => {
    //     navigation.navigate('Notification',{currencySearch: 'ALL',exchangeRateSearchV1:exchangeRateALL,soldSearchebuyV1:soldALLbuy,fromCurrencySearchebuyV1:fromCurrencytoto,toCurrencySearchebuyV1:toCurrencyALL});
    // }
    // const buyAndSellAMD = async () => {
    //     navigation.navigate('Notification',{currencySearch: 'AMD',exchangeRateSearchV1:exchangeRateAMD,soldSearchebuyV1:soldAMDbuy,fromCurrencySearchebuyV1:fromCurrencytoto,toCurrencySearchebuyV1:toCurrencyAMD});
    // }
    // const buyAndSellANG = async () => {
    //     navigation.navigate('Notification',{currencySearch: 'ANG',exchangeRateSearchV1:exchangeRateANG,soldSearchebuyV1:soldANGbuy,fromCurrencySearchebuyV1:fromCurrencytoto,toCurrencySearchebuyV1:toCurrencyANG});
    // }
    // const buyAndSellAOA = async () => {
    //     navigation.navigate('Notification',{currencySearch: 'AOA',exchangeRateSearchV1:exchangeRateAOA,soldSearchebuyV1:soldAOAbuy,fromCurrencySearchebuyV1:fromCurrencytoto,toCurrencySearchebuyV1:toCurrencyAOA});
    // }
    // const buyAndSellARS = async () => {
    //     navigation.navigate('Notification',{currencySearch: 'ARS',exchangeRateSearchV1:exchangeRateARS,soldSearchebuyV1:soldARSbuy,fromCurrencySearchebuyV1:fromCurrencytoto,toCurrencySearchebuyV1:toCurrencyARS});
    // }
    // const buyAndSellAUD = async () => {
    //     navigation.navigate('Notification',{currencySearch: 'AUD',exchangeRateSearchV1:exchangeRateAUD,soldSearchebuyV1:soldAUDbuy,fromCurrencySearchebuyV1:fromCurrencytoto,toCurrencySearchebuyV1:toCurrencyAUD});
    // }
    // const buyAndSellAWG = async () => {
    //     navigation.navigate('Notification',{currencySearch: 'AWG',exchangeRateSearchV1:exchangeRateAWG,soldSearchebuyV1:soldAWGbuy,fromCurrencySearchebuyV1:fromCurrencytoto,toCurrencySearchebuyV1:toCurrencyAWG});
    // }

    

    // const [refreshing, setRefreshing] = React.useState(false);
    // const onRefresh = React.useCallback(() => {
    //     setRefreshing(true)

    //     wait(2000).then(() => {
    //         setRefreshing(false)
    //         //  setContent
    //     })
    // },[refreshing])

    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    }

    const [refreshing, setRefreshing] = React.useState(false);
    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(2000).then(() => {
            setRefreshing(false);
            // currencySearch,exchangeRateSearchV1,soldSearchebuyV1,fromCurrencySearchebuyV1,toCurrencySearchebuyV1 = 0;
            getUserValue();
        });
    }, []);





    // end bsell

    const logOut = async () => {
    const loggeOut = await firebase.logOut();

        if(loggeOut) {
            setUser((state) => ({ ...state, isLoggedIn: false}));
        }
    }



    // ----------------------------------------------------
    return (
        <SafeAreaView
            style={{
                backgroundColor:COLORS.white,
                flex:1,
            }}
        >
            <ScrollView
                refreshControl={
                    <RefreshControl
                      refreshing={refreshing}
                      onRefresh={onRefresh}
                    />
                }
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
                <ScrollView style={style.scrollView}>
                    <View style={style.cartCard1}>
                        <Text style={{fontSize:17,fontWeight:'bold'}}>Profile</Text>

                                <View style={style.graphView}>
                                    <Text style={{fontWeight:'bold',fontSize:18, color:COLORS.white}}>UseName : {usernameVal}</Text>
                                </View>  
                                <View style={style.graphView}>
                                    <Text style={{fontWeight:'bold',fontSize:18, color:COLORS.white}}>Email : {userEmailVal}</Text>
                                </View>  
                                <View style={style.graphView}>
                                    <Text style={{fontWeight:'bold',fontSize:18, color:COLORS.white}}>Sold : {totalSold}</Text>
                                </View>    
                    </View>

                </ScrollView>
                {/* <View style={{ marginTop:16 }}> */}
                <View style={{ marginTop:"12%" }}>
                    {/* <View style={{textAlign:'center',alignItems:'center'}}> */}
                    {/* style={style.graphView2} */}
                        <Logout onPress={logOut} >
                            {/* <TextParam medium bold color="#23a8d9" >Log out</TextParam> */}
                            <Text style={{fontWeight:'bold',fontSize:18, color:COLORS.white}} >Log out</Text>
                        </Logout>   
                    {/* </View> */}
                    
                </View>
            </ScrollView>




















            
        </SafeAreaView>
    );
};

const style = StyleSheet.create({
    header: {
        paddingVertical: 20,
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: '20',
    }, 
    cartCard:{
        height: 100,
        elevation: 15,
        borderRadius: 10,
        backgroundColor: COLORS.white,
        marginVertical: 10,
        marginHorizontal: 20,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems:'center',
        paddingBottom:20
    },
    cartCard1:{
        // height: 100,
        elevation: 15,
        borderRadius: 10,
        backgroundColor: COLORS.white,
        marginVertical: 80,
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
    actionBtn: {
        width: 40,
        height: 30,
        backgroundColor: COLORS.primary,
        borderRadius:30,
        paddingHorizontal:5,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    },
    graphView: {
        width: 280,
        height: 60,
        backgroundColor: COLORS.primary,
        borderRadius:30,
        // paddingHorizontal:5,
        marginVertical: 10,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    },
    graphView2: {
        width: 280,
        height: 60,
        backgroundColor: "#23a8d9",
        borderRadius:30,
        // paddingHorizontal:5,
        marginVertical: 10,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    },
    graphViewBuy: {
        width: 100,
        height: 60,
        backgroundColor: COLORS.primary,
        borderRadius:30,
        // paddingHorizontal:5,
        marginVertical: 10,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        marginRight: 50
    },
    graphViewSell: {
        width: 100,
        height: 60,
        backgroundColor: COLORS.primary,
        borderRadius:30,
        // paddingHorizontal:5,
        marginVertical: 10,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        marginLeft: 50
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
    scrollView: {
      backgroundColor: '#ecf0f1',
      // marginHorizontal: 20,
      padding:0,
    //   marginTop:60,
      marginBottom:2,
    //   height:460
    height:"20%"
    // height:"100%"
    //   width: '80%',
      // flexDirection: "column",
    }
});
const Logout = styled.TouchableOpacity`
    margin: 0 32px;
    height: 48px;
    align-items: center;
    justify-content: center;
    background-color: #23A6D5;
    border-radius: 6px;
`


export default ProfileScreen;