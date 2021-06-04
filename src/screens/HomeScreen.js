// import React from 'react';
// import {View ,Text, StyleSheet} from "react-native";

// export default HomeScreen = () => {
//       return (
//     <View style={styles.container} >
//         <Text>home screen</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//     }
// });

// VERSION 1


// import React from 'react';
// import {Text, StyleSheet, View, Image} from 'react-native';
// import {SafeAreaView} from 'react-native-safe-area-context';
// import COLORS from '../consts/colors';
// import { PrimaryButton } from '../components/Button';
// import Icon from 'react-native-vector-icons/MaterialIcons';

// // const OnBoardScreen = ({navigation}) => {
// const HomeScreen = ({navigation}) => {
//     return (
//         <SafeAreaView 
//             style={{
//                 flex:1,
//                 backgroundColor:COLORS.white
//             }}
//         >
//             <View style={{ height:400 }} >
//                 {/* <Image style={{
//                     width:"100%",
//                     resizeMode: "contain",
//                     // top: -150,
//                 }} 
//                 // source={require("../../assets/onboardImage.png")} />
//                 // source={require("../../assets/d63bf7c3-0d8a-47da-b446-82220ede3a9e.jpg")} />
//                 source="https://drive.google.com/file/d/1PvFLitvvLt6087mPAqFq5xwPlQV486LW/view?usp=sharing" /> */}
//                 <Icon 
//                 style={{
//                     // width:"100%",
//                     // resizeMode: "contain",
//                     // top: -150,
//                     justifyContent:'center',
//                     textAlign:'center',
//                     alignItems:'center',
//                     marginTop:80
//                 }}
//                 name="monetization-on" size={200} color="black"/>
                
//             </View>
//             <View style={style.textContainer} >
//                 <View>
//                     <Text 
//                         style={{
//                             fontSize:32,
//                             fontWeight:"bold",
//                             textAlign:"center",
//                         }}
//                     >
//                         Banque du Maroc
//                     </Text>
//                     <Text
//                         style={{
//                             marginTop:10,
//                             fontSize:18,
//                             textAlign:"center",
//                             color: COLORS.grey,
//                         }}
//                     >
//                         La banque Centrale Maroc souhaite automatiser son système de taux de change
//                     </Text>
//                 </View>
//                 <View style={style.indicatorContainer}>
//                     <View style={style.currentIndicator} />
//                     <View style={style.indicator} />
//                     <View style={style.indicator} />
//                 </View>
//                 {/* <PrimaryButton onPress={() => navigation.navigate('Home')} title="Get Start"/> */}
//                 <PrimaryButton 
//                     onPress={() => navigation.navigate('Home')} 
//                     title="Get Start"
//                 />
//             </View>
            
//         </SafeAreaView>
//     );
// };

// const style = StyleSheet.create({
//     textContainer: {
//         flex: 1,
//         paddingHorizontal:50,
//         justifyContent:"space-between",
//         paddingBottom:40,
//     },
//     indicatorContainer: {
//         height:50,
//         flex:1,
//         justifyContent:'center',
//         flexDirection:'row',
//         alignItems:'center',
//     },
//     currentIndicator: {
//         height: 12,
//         width: 30,
//         borderRadius: 10,
//         backgroundColor: COLORS.primary,
//         marginHorizontal: 5,
//     },
//     indicator: {
//         height:12,
//         width:12,
//         borderRadius:6,
//         backgroundColor:COLORS.grey,
//         marginHorizontal:5,
//     }
// });

// export default HomeScreen;

// Version 2

import React, { useEffect,useState,useContext } from 'react';
import {Text, StyleSheet, View, Image,Alert,TouchableOpacity,TextInput,ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import COLORS from '../consts/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
// import AsyncStorage from '@react-native-community/async-storage';
import {UserContext} from '../context/UserContext';
import axios from "axios";


// const HomeScreen = ({navigation}) => {
const HomeScreen = ({ navigation, route }) => {

    const BASE_URL = 'http://api.exchangeratesapi.io/v1/latest?access_key=2739b2331b1010220a696b99d3d3e828';

    

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

    const [toCurrencyMAD,setToCurrencyMAD] = useState();
    const [exchangeRateMAD,setExchangeRateMAD] = useState();

    const [toCurrencyAED,setToCurrencyAED] = useState();
    const [exchangeRateAED,setExchangeRateAED] = useState();

    const [toCurrencyAFN,setToCurrencyAFN] = useState();
    const [exchangeRateAFN,setExchangeRateAFN] = useState();

    const [toCurrencyALL,setToCurrencyALL] = useState();
    const [exchangeRateALL,setExchangeRateALL] = useState();

    const [toCurrencyAMD,setToCurrencyAMD] = useState();
    const [exchangeRateAMD,setExchangeRateAMD] = useState();

    const [toCurrencyANG,setToCurrencyANG] = useState();
    const [exchangeRateANG,setExchangeRateANG] = useState();

    const [toCurrencyAOA,setToCurrencyAOA] = useState();
    const [exchangeRateAOA,setExchangeRateAOA] = useState();

    const [toCurrencyARS,setToCurrencyARS] = useState();
    const [exchangeRateARS,setExchangeRateARS] = useState();

    const [toCurrencyAUD,setToCurrencyAUD] = useState();
    const [exchangeRateAUD,setExchangeRateAUD] = useState();

    const [toCurrencyAWG,setToCurrencyAWG] = useState();
    const [exchangeRateAWG,setExchangeRateAWG] = useState();

    const [toCurrencyBTC,setToCurrencyBTC] = useState();
    const [exchangeRateBTC,setExchangeRateBTC] = useState();

    const [toCurrencyUSD,setToCurrencyUSD] = useState();
    const [exchangeRateUSD,setExchangeRateUSD] = useState();

    const [toCurrencyGBP,setToCurrencyGBP] = useState();
    const [exchangeRateGBP,setExchangeRateGBP] = useState();

    const [toCurrencyKWD,setToCurrencyKWD] = useState();
    const [exchangeRateKWD,setExchangeRateKWD] = useState();
    // ----------------------------------------------------
    const [amountInFromCurrencyMAD,setAmountInFromCurrencyMAD] = useState(true);
    const [amountInFromCurrencyAED,setAmountInFromCurrencyAED] = useState(true);
    const [amountInFromCurrencyAFN,setAmountInFromCurrencyAFN] = useState(true);
    const [amountInFromCurrencyALL,setAmountInFromCurrencyALL] = useState(true);
    const [amountInFromCurrencyAMD,setAmountInFromCurrencyAMD] = useState(true);
    const [amountInFromCurrencyANG,setAmountInFromCurrencyANG] = useState(true);
    const [amountInFromCurrencyAOA,setAmountInFromCurrencyAOA] = useState(true);
    const [amountInFromCurrencyARS,setAmountInFromCurrencyARS] = useState(true);
    const [amountInFromCurrencyAUD,setAmountInFromCurrencyAUD] = useState(true);
    const [amountInFromCurrencyAWG,setAmountInFromCurrencyAWG] = useState(true);
    const [amountInFromCurrencyBTC,setAmountInFromCurrencyBTC] = useState(true);
    const [amountInFromCurrencyUSD,setAmountInFromCurrencyUSD] = useState(true);
    const [amountInFromCurrencyGBP,setAmountInFromCurrencyGBP] = useState(true);
    const [amountInFromCurrencyKWD,setAmountInFromCurrencyKWD] = useState(true);
    // ----------------------------------------------------
    const [amountMAD,setAmountMAD] = useState(1);
    const [amountAED,setAmountAED] = useState(1);
    const [amountAFN,setAmountAFN] = useState(1);
    const [amountALL,setAmountALL] = useState(1);
    const [amountAMD,setAmountAMD] = useState(1);
    const [amountANG,setAmountANG] = useState(1);
    const [amountAOA,setAmountAOA] = useState(1);
    const [amountARS,setAmountARS] = useState(1);
    const [amountAUD,setAmountAUD] = useState(1);
    const [amountAWG,setAmountAWG] = useState(1);
    const [amountBTC,setAmountBTC] = useState(1);
    const [amountUSD,setAmountUSD] = useState(1);
    const [amountGBP,setAmountGBP] = useState(1);
    const [amountKWD,setAmountKWD] = useState(1);
    // ----------------------------------------------------
    const [userData, setUserData] = useContext(UserContext);
    // ----------------------------------------------------
    const [totalSold, setTotalSold] = useState(0);
    

    const [soldMAD, setSoldMAD ] = useState(0);
    const [soldMADbuy, setSoldMADbuy] = useState(0);
    const [soldBTC, setSoldBTC ] = useState(0);
    const [soldUSD, setSoldUSD ] = useState(0);
    const [soldGBP, setSoldGBP ] = useState(0);
    const [soldKWD, setSoldKWD ] = useState(0);
    const [soldAED, setSoldAED ] = useState(0);
    const [soldAFN, setSoldAFN ] = useState(0);
    const [soldALL, setSoldALL ] = useState(0);
    const [soldAMD, setSoldAMD ] = useState(0);
    const [soldANG, setSoldANG ] = useState(0);
    const [soldAOA, setSoldAOA ] = useState(0);
    const [soldARS, setSoldARS ] = useState(0);

    // const [crypto, setCrypto ] = useState("");
    // const [soldBuy, setSoldBuy] = useState(0);
    let crypto = "";
    let soldBuy = 0;



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

    const webView = () => {
        // navigation.navigate("WebviewNav", { userData, data });
        navigation.navigate("WebviewNav", { redirectTo: "https://fr.tradingview.com/symbols/EURMAD/?exchange=FX_IDC" });
    }


    let toAmount, fromAmount
    if(amountInFromCurrency){
      fromAmount = amount
      toAmount = amount * exchangeRate
    } else{
      toAmount = amount
      fromAmount = amount / exchangeRate
    }
    // ----------------------------------------------------
    //MAD
    let toAmountMAD, fromAmountMAD
    if(amountInFromCurrencyMAD){
      fromAmountMAD = amountMAD
      toAmountMAD = amountMAD * exchangeRateMAD
    } else{
      toAmounMADToto = amountMAD
      fromAmountMAD = amountMAD / exchangeRateMAD
    }
    function addVallMAD (){
        setAmountMAD(amountMAD + 1)
    }
    function minusVallMAD (){
        if(amountMAD > 0){
            setAmountMAD(amountMAD - 1)
        }
    }
    // ----------------------------------------------------
    //AED
    let toAmountAED, fromAmountAED
    if(amountInFromCurrencyAED){
      fromAmountAED = amountAED
      toAmountAED = amountAED * exchangeRateAED
    } else{
      toAmountAED = amountAED
      fromAmountAED = amountAED / exchangeRateAED
    }
    function addVallAED (){
        setAmountAED(amountAED + 1)
    }
    function minusVallAED (){
        if(amountAED > 0){
            setAmountAED(amountAED - 1)
        }
    }
    // ----------------------------------------------------
    //AFN
    let toAmountAFN, fromAmountAFN
    if(amountInFromCurrencyAFN){
      fromAmountAFN = amountAFN
      toAmountAFN = amountAFN * exchangeRateAFN
    } else{
      toAmountAFN = amountAFN
      fromAmountAFN = amountAFN / exchangeRateAFN
    }
    function addVallAFN (){
        setAmountAFN(amountAFN + 1)
    }
    function minusVallAFN (){
        if(amountAFN > 0){
            setAmountAFN(amountAFN - 1)
        }
    }
    // ----------------------------------------------------
    //ALL
    let toAmountALL, fromAmountALL
    if(amountInFromCurrencyALL){
      fromAmountALL = amountALL
      toAmountALL = amountALL * exchangeRateALL
    } else{
      toAmountALL = amountALL
      fromAmountALL = amountALL / exchangeRateALL
    }
    function addVallALL (){
        setAmountALL(amountALL + 1)
    }
    function minusVallALL (){
        if(amountALL > 0){
            setAmountALL(amountALL - 1)
        }
    }
    // ----------------------------------------------------
    //AMD
    let toAmountAMD, fromAmountAMD
    if(amountInFromCurrencyAMD){
      fromAmountAMD = amountAMD
      toAmountAMD = amountAMD * exchangeRateAMD
    } else{
      toAmountAMD = amountAMD
      fromAmountAMD = amountAMD / exchangeRateAMD
    }
    function addVallAMD (){
        setAmountAMD(amountAMD + 1)
    }
    function minusVallAMD (){
        if(amountAMD > 0){
            setAmountAMD(amountAMD - 1)
        }
    }
    // ----------------------------------------------------
    //ANG
    let toAmountANG, fromAmountANG
    if(amountInFromCurrencyANG){
      fromAmountANG = amountANG
      toAmountANG = amountANG * exchangeRateANG
    } else{
      toAmountANG = amountANG
      fromAmountANG = amountANG / exchangeRateANG
    }
    function addVallANG (){
        setAmountANG(amountANG + 1)
    }
    function minusVallANG (){
        if(amountANG > 0){
            setAmountANG(amountANG - 1)
        }
    }
    // ----------------------------------------------------
    //AOA
    let toAmountAOA, fromAmountAOA
    if(amountInFromCurrencyAOA){
      fromAmountAOA = amountAOA
      toAmountAOA = amountAOA * exchangeRateAOA
    } else{
      toAmountAOA = amountAOA
      fromAmountAOA = amountAOA / exchangeRateAOA
    }
    function addVallAOA (){
        setAmountAOA(amountAOA + 1)
    }
    function minusVallAOA (){
        if(amountAOA > 0){
            setAmountAOA(amountAOA - 1)
        }
    }
    // ----------------------------------------------------
    //ARS
    let toAmountARS, fromAmountARS
    if(amountInFromCurrencyARS){
      fromAmountARS = amountARS
      toAmountARS = amountARS * exchangeRateARS
    } else{
      toAmountARS = amountARS
      fromAmountARS = amountARS / exchangeRateARS
    }
    function addVallARS (){
        setAmountARS(amountARS + 1)
    }
    function minusVallARS (){
        if(amountARS > 0){
            setAmountARS(amountARS - 1)
        }
    }
    // ----------------------------------------------------
    //AUD
    let toAmountAUD, fromAmountAUD
    if(amountInFromCurrencyAUD){
      fromAmountAUD = amountAUD
      toAmountAUD = amountAUD * exchangeRateAUD
    } else{
      toAmountAUD = amountAUD
      fromAmountAUD = amountAUD / exchangeRateAUD
    }
    function addVallAUD (){
        setAmountAUD(amountAUD + 1)
    }
    function minusVallAUD (){
        if(amountAUD > 0){
            setAmountAUD(amountAUD - 1)
        }
    }
    // ----------------------------------------------------
    //AWG
    let toAmountAWG, fromAmountAWG
    if(amountInFromCurrencyAWG){
      fromAmountAWG = amountAWG
      toAmountAWG = amountAWG * exchangeRateAWG
    } else{
      toAmountAWG = amountAWG
      fromAmountAWG = amountAWG / exchangeRateAWG
    }
    function addVallAWG (){
        setAmountAWG(amountAWG + 1)
    }
    function minusVallAWG (){
        if(amountAWG > 0){
            setAmountAWG(amountAWG - 1)
        }
    }
    // ----------------------------------------------------
    //BTC
    let toAmountBTC, fromAmountBTC
    if(amountInFromCurrencyBTC){
      fromAmountBTC = amountBTC
      toAmountBTC = amountBTC * exchangeRateBTC
    } else{
      toAmountBTC = amountBTC
      fromAmountBTC = amountBTC / exchangeRateBTC
    }
    function addVallBTC (){
        setAmountBTC(amountBTC + 1)
    }
    function minusVallBTC (){
        if(amountBTC > 0){
            setAmountBTC(amountBTC - 1)
        }
    }
    // ----------------------------------------------------
    //USD
    let toAmountUSD, fromAmountUSD
    if(amountInFromCurrencyUSD){
      fromAmountUSD = amountUSD
      toAmountUSD = amountUSD * exchangeRateUSD
    } else{
      toAmountUSD = amountUSD
      fromAmountUSD = amountUSD / exchangeRateUSD
    }
    function addVallUSD (){
        setAmountUSD(amountUSD + 1)
    }
    function minusVallUSD (){
        if(amountUSD > 0){
            setAmountUSD(amountUSD - 1)
        }
    }
    // ----------------------------------------------------
    //GBP
    let toAmountGBP, fromAmountGBP
    if(amountInFromCurrencyGBP){
      fromAmountGBP = amountGBP
      toAmountGBP = amountGBP * exchangeRateGBP
    } else{
      toAmountGBP = amountGBP
      fromAmountGBP = amountGBP / exchangeRateGBP
    }
    function addVallGBP (){
        setAmountGBP(amountGBP + 1)
    }
    function minusVallGBP (){
        if(amountGBP > 0){
            setAmountGBP(amountGBP - 1)
        }
    }
    // ----------------------------------------------------
    //KWD
    let toAmountKWD, fromAmountKWD
    if(amountInFromCurrencyKWD){
      fromAmountKWD = amountKWD
      toAmountKWD = amountKWD * exchangeRateKWD
    } else{
      toAmountKWD = amountKWD
      fromAmountKWD = amountKWD / exchangeRateKWD
    }
    function addVallKWD (){
        setAmountKWD(amountKWD + 1)
    }
    function minusVallKWD (){
        if(amountKWD > 0){
            setAmountKWD(amountKWD - 1)
        }
    }
    // ----------------------------------------------------

    useEffect(() => {
        fetch(BASE_URL)
          .then(res => res.json())
          .then(data => {
            const firstCurrency = Object.keys(data.rates)[0]
            setCurrencyOptions([data.base, ...Object.keys(data.rates) ])
            setFromCurrency(data.base)
            setToCurrency(firstCurrency)
            setExchangeRate(data.rates[firstCurrency])
            // ----------------------------------------------------
            const firstCurrencyVal = Object.keys(data.rates)[91]
            const firstAEDCurrencyVal = Object.keys(data.rates)[0]
            const firstAFNCurrencyVal = Object.keys(data.rates)[1]
            const firstALLCurrencyVal = Object.keys(data.rates)[2]
            const firstAMDCurrencyVal = Object.keys(data.rates)[3]
            const firstANGCurrencyVal = Object.keys(data.rates)[4]
            const firstAOACurrencyVal = Object.keys(data.rates)[5]
            const firstARSCurrencyVal = Object.keys(data.rates)[6]
            const firstAUDCurrencyVal = Object.keys(data.rates)[7]
            const firstAWGCurrencyVal = Object.keys(data.rates)[8]
            const firstBTCCurrencyVal = Object.keys(data.rates)[21]
            const firstUSDCurrencyVal = Object.keys(data.rates)[149]
            const firstGBPCurrencyVal = Object.keys(data.rates)[49]
            const firstKWDCurrencyVal = Object.keys(data.rates)[80]
            // ----------------------------------------------------
            setCurrencyOptionstoto([data.base, ...Object.keys(data.rates) ])
            setFromCurrencytoto(data.base)
            setToCurrencyMAD(firstCurrencyVal)
            setToCurrencyAED(firstAEDCurrencyVal)
            setToCurrencyAFN(firstAFNCurrencyVal)
            setToCurrencyALL(firstALLCurrencyVal)
            setToCurrencyAMD(firstAMDCurrencyVal)
            setToCurrencyANG(firstANGCurrencyVal)
            setToCurrencyAOA(firstAOACurrencyVal)
            setToCurrencyARS(firstARSCurrencyVal)
            setToCurrencyAUD(firstAUDCurrencyVal)
            setToCurrencyAWG(firstAWGCurrencyVal)
            setToCurrencyBTC(firstBTCCurrencyVal)
            setToCurrencyUSD(firstUSDCurrencyVal)
            setToCurrencyGBP(firstGBPCurrencyVal)
            setToCurrencyKWD(firstKWDCurrencyVal)
            // ----------------------------------------------------
            setExchangeRateMAD(data.rates[firstCurrencyVal])
            setExchangeRateAED(data.rates[firstAEDCurrencyVal])
            setExchangeRateAFN(data.rates[firstAFNCurrencyVal])
            setExchangeRateALL(data.rates[firstALLCurrencyVal])
            setExchangeRateAMD(data.rates[firstAMDCurrencyVal])
            setExchangeRateANG(data.rates[firstANGCurrencyVal])
            setExchangeRateAOA(data.rates[firstAOACurrencyVal])
            setExchangeRateARS(data.rates[firstARSCurrencyVal])
            setExchangeRateAUD(data.rates[firstAUDCurrencyVal])
            setExchangeRateAWG(data.rates[firstAWGCurrencyVal])
            setExchangeRateBTC(data.rates[firstBTCCurrencyVal])
            setExchangeRateUSD(data.rates[firstUSDCurrencyVal])
            setExchangeRateGBP(data.rates[firstGBPCurrencyVal])
            setExchangeRateKWD(data.rates[firstKWDCurrencyVal])
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

            setSoldMAD(Userdata.data.SoldMAD.SoldMADdeposit);
            setSoldMADbuy(Userdata.data.SoldMAD.SoldMADCryptobuy);


            setSoldBTC(Userdata.data.soldBTC);
            setSoldUSD(Userdata.data.soldUSD);
            setSoldGBP(Userdata.data.soldGBP);
            setSoldKWD(Userdata.data.soldKWD);
            setSoldAED(Userdata.data.soldAED);
            setSoldAFN(Userdata.data.soldAFN);
            setSoldALL(Userdata.data.soldALL);
            setSoldAMD(Userdata.data.soldAMD);
            setSoldANG(Userdata.data.soldANG);
            setSoldAOA(Userdata.data.soldAOA);
            setSoldARS(Userdata.data.soldARS);


        })
        .catch((e) => {
            console.log(e)
        })
    }
    // ----- end get profil value----

    // ---Start Buy---
    // const buy = (sa) => {
    const buyMAD = () => {
        // setCrypto("MAD");
        // setSoldBuy(amountMAD);
        // navigation.navigate("WebviewNav", { userData, data });
        // navigation.navigate("WebviewNav", { redirectTo: "https://fr.tradingview.com/symbols/EURMAD/?exchange=FX_IDC" });
        // Alert.alert('Simple Button pressed for buy');
        if(amountMAD > totalSold){
            // console.log("TCH : " , amountMAD);

            Alert.alert('Tcha rayeh a 3chiri');
        }else{
            // setCrypto("MAD");
            // setSoldBuy(amountMAD);
            crypto ="MAD";
            soldBuy = amountMAD;
            soldCryptobuy = (amountMAD / exchangeRateMAD);
            
            console.log('amountMAD : ',amountMAD);
            console.log('totalSold : ',totalSold);
            
            console.log('------------');
            console.log('crypto:',crypto);
            console.log('soldBuy:',soldBuy);
            console.log('soldCryptobuy:',soldCryptobuy)
            console.log('------------');
            buyCurency();
            navigation.navigate("Home");

            // let GetUserData = {email: userData.email, Crypto:"MAD",SoldBuy:amountMAD}

            // axios.post("https://foreexbackend.herokuapp.com/api/user/buyCrypto", GetUserData).then(() => {
            //     console.log("data updated")
            // })
            // .catch((e) => {
            // alert('you have not money')
            // })




            // console.log("amountMAD : " , amountMAD);
        }
        

    };

    const buyCurency = () => {
        let GetUserData = {email: userData.email, Crypto:crypto,SoldDeposit:soldBuy,SoldCryptobuy:soldCryptobuy}

        axios.post("https://foreexbackend.herokuapp.com/api/user/buyCrypto", GetUserData).then(() => {
            console.log("data updated")
        })
        .catch((e) => {
        alert('you have not money')
        })
    }

    // End Sell---



    // ----------------------------------------------------
    return (
        <SafeAreaView
            style={{
                backgroundColor:COLORS.white,
                flex:1,
            }}
        >
            {/* <View style={style.header} >
                <Icon name="arrow-back-ios" size={28} />
                <Text style={{fontSize:20,fontWeight:'bold'}}> Cart </Text>
            </View> */}
            <View style={{
                justifyContent:'center',
                alignItems:'center',
                marginVertical: 10,
                marginHorizontal: 20,
                paddingHorizontal: 10,
                // backgroundColor:'#95a5a6'
            }}>
                <Text style={{fontSize:17,fontWeight:'bold'}}>Banque Centrale du Maroc </Text>
                <Text style={{fontSize:17,fontWeight:'bold'}}>Welcom  {userData.email}</Text>
                <Text style={{fontSize:17,fontWeight:'bold'}}>Total mony Deposit : {totalSold} €</Text>
                
            </View>
            {/* ---------------------------------------------------- */}
            {/* MAD-1 */}
            {/* <View style={style.cartCard} >
                <View style={{
                    height:100,
                    marginLeft:10,
                    paddingVertical:20,
                    flex:1,
                    flexDirection: 'row',
                    justifyContent:'space-between'
                }} >
                    

                    
                    <View style={{flexDirection:'row'}} >
                        <View style={{alignItems:'center',justifyContent:'center'}}>
                            <Text style={{fontSize:17,fontWeight:'bold'}}>EUR : </Text>
                        </View>
                        
                        <View style={{marginLeft:10}}>
                            <TextInput 
                                style={style.input}
                                // placeholder='new todo...'
                                keyboardType="numeric"
                                value="1255"
                                // onChangeText={setAmountAUD}
                            />
                            <View style={{flexDirection:'row'}} >
                            
                                <View style={style.actionBtn} onPress={() => Alert.alert('Simple Button pressed')}>
                                    <Icon name="remove" size={25} color={COLORS.white} onPress={() => console.log('Pressed')}/>
                                    
                                </View>
                                <Text> </Text>
                                <TouchableOpacity onPress={subtract}>
                                    <View style={style.actionBtn}>
                                        <Icon name="add" size={25} color={COLORS.white} />
                                    </View>    
                                </TouchableOpacity>
                                

                            </View>
                        </View>
                    </View>
                    <View  style={{alignItems:'center',justifyContent:'center'}}>
                        <Image 
                            style={{
                                width:30,
                                height:30,
                                // justifyContent:'center',
                                // alignItems:'center',
                            }}
                            source={require("../../assets/iconfinder_transaction.png")}
                        />
                    </View>
                    
                    <View style={{alignItems:'center',justifyContent:'center'}}>
                        <Text style={{fontWeight:'bold',fontSize:18}} >MAD</Text>
                        <Text style={{fontSize:13,color:COLORS.grey}} >=</Text>

                        <Text style={{fontSize:17,fontWeight:'bold'}} >100.00</Text>
                    </View>
                </View>
            </View> */}
            {/* ---------------------------------------------------- */}




            <ScrollView style={style.scrollView}>
                {/* 1 - START MAD */}
                <View style={style.cartCard1}>
                    <View style={{
                            backgroundColor: '#dcdde1',
                            justifyContent:'center',
                            alignItems:'center',
                            // marginVertical: 10,
                            // marginHorizontal: 20,
                            paddingHorizontal: 10,
                            borderBottomLeftRadius: 10,
                            borderBottomRightRadius: 10,
                        }}
                    >
                        {/* <Text style={{fontSize:17,fontWeight:'bold'}}>Total MAD Deposit</Text>
                        <Text style={{fontSize:17,fontWeight:'bold'}}>{soldMAD} € = {soldMAD * exchangeRateMAD} MAD</Text> */}
                        <Text style={{fontSize:17,fontWeight:'bold'}}>Total Euro Deposits in MAD : {soldMAD} €</Text>
                        <Text style={{fontSize:17,fontWeight:'bold'}}>Total MAD buyer : {soldMADbuy}</Text>
                        {/* <Text style={{fontSize:17,fontWeight:'bold'}}>current EURO amount : {soldMADbuy * exchangeRateMAD}</Text> */}
                        <Text style={{fontSize:17,fontWeight:'bold'}}>current EURO : {soldMADbuy * exchangeRateMAD}</Text>
                        <Text style={{fontSize:17,fontWeight:'bold'}}>current MAD : {(soldMADbuy * exchangeRateMAD) * exchangeRateMAD}</Text>
                        <Text style={{fontSize:17,fontWeight:'bold'}}>value of profit : {(soldMADbuy * exchangeRateMAD)-(soldMAD)}€</Text>
                        {/* <Text style={{fontSize:17,fontWeight:'bold'}}>{soldMAD} € = {soldMAD * exchangeRateMAD} MAD</Text> */}
                    </View>
                    <View style={style.cartCard2} >
                        <View style={{
                            height:100,
                            marginLeft:10,
                            paddingVertical:20,
                            flex:1,
                            flexDirection: 'row',
                            justifyContent:'space-between'
                        }} >
                            <View style={{flexDirection:'row'}} >
                                <View style={{alignItems:'center',justifyContent:'center'}}>
                                    <Text style={{fontSize:17,fontWeight:'bold'}}>{fromCurrencytoto} : </Text>
                                </View>
                                <View style={{marginLeft:10}}>
                                    <TextInput 
                                        style={style.input}
                                        // placeholder='new todo...'
                                        keyboardType="numeric"
                                        value={`${fromAmountMAD}`}
                                        onChangeText={setAmountMAD}
                                    />
                                    <View style={{flexDirection:'row'}} >
                                        <TouchableOpacity onPress={minusVallMAD}>
                                            <View style={style.actionBtn}>
                                                <Icon name="remove" size={25} color={COLORS.white} />
                                            </View>    
                                        </TouchableOpacity>
                                        <Text> </Text>
                                        <TouchableOpacity onPress={addVallMAD}>
                                            <View style={style.actionBtn}>
                                                <Icon name="add" size={25} color={COLORS.white} />
                                            </View>    
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                            <View  style={{alignItems:'center',justifyContent:'center'}}>
                                {/* <Image 
                                    style={{
                                        width:30,
                                        height:30,
                                    }}
                                    // source={require("../../assets/iconfinder_transaction.png")}
                                    source="https://drive.google.com/file/d/1ZFaOejFmkKvo9oATPnVG66ww4v54ei5c/view?usp=sharing"
                                    
                                /> */}
                                <Icon name="swap-horizontal-circle" size={24} color="black"/>
                            </View>
                            <View style={{alignItems:'center',justifyContent:'center'}}>
                                <Text style={{fontWeight:'bold',fontSize:18}} >{toCurrencyMAD}</Text>
                                <Text style={{fontSize:13,color:COLORS.grey}} >=</Text>

                                <Text style={{fontSize:17,fontWeight:'bold'}} >{toAmountMAD}</Text>
                            </View>
                            {/* <TouchableOpacity onPress={() => Alert.alert('Simple Button pressed')}> */}
                                {/* <View style={style.actionBtn}> */}
                                {/* <View style={style.graphView}>
                                    <Text style={{fontWeight:'bold',fontSize:18}}>Graph</Text> */}
                                    {/* <Icon name="home-filled" color={COLORS.grey} size={28} /> */}
                                {/* </View>    
                            </TouchableOpacity> */}
                        </View>
                    </View>
                    
                    <View style={{
                        // height:100,
                        // marginLeft:10,
                        // paddingVertical:20,
                        flex:1,
                        flexDirection: 'row',
                        justifyContent:'space-between'
                        // flexDirection: 'row',justifyContent:'space-between'
                    }} >
                        {/* <TouchableOpacity onPress={buy}> */}
                        <TouchableOpacity onPress={buyMAD}>
                            <View style={style.graphViewBuy}>
                                <Text style={{fontWeight:'bold',fontSize:18, color:COLORS.white}}>buy</Text>
                            </View>    
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => Alert.alert('Simple Button pressed')}>
                            <View style={style.graphViewSell}>
                                <Text style={{fontWeight:'bold',fontSize:18, color:COLORS.white}}>sel</Text>
                            </View>    
                        </TouchableOpacity>
                    </View>
                    <View>
                        {/* <TouchableOpacity onPress={() => Alert.alert('Simple Button pressed')}> */}
                        <TouchableOpacity onPress={webView}>
                            {/* <View style={style.actionBtn}> */}
                            <View style={style.graphView}>
                                <Text style={{fontWeight:'bold',fontSize:18, color:COLORS.white}}>Graph</Text>
                                {/* <Icon name="home-filled" color={COLORS.grey} size={28} /> */}
                            </View>    
                        </TouchableOpacity>
                    </View>
                </View>

                {/* 1 - END MAD */}

                {/* 2 - START BTC */}
                <View style={style.cartCard1}>
                    <Text style={{fontSize:17,fontWeight:'bold'}}>Total BTC Deposit : {soldBTC} </Text>
                    <View style={style.cartCard2} >
                        <View style={{
                            height:100,
                            marginLeft:10,
                            paddingVertical:20,
                            flex:1,
                            flexDirection: 'row',
                            justifyContent:'space-between'
                        }} >
                            <View style={{flexDirection:'row'}} >
                                <View style={{alignItems:'center',justifyContent:'center'}}>
                                    <Text style={{fontSize:17,fontWeight:'bold'}}>{fromCurrencytoto} : </Text>
                                </View>
                                <View style={{marginLeft:10}}>
                                    <TextInput 
                                        style={style.input}
                                        // placeholder='new todo...'
                                        keyboardType="numeric"
                                        value={`${fromAmountBTC}`}
                                        onChangeText={setAmountBTC}
                                    />
                                    <View style={{flexDirection:'row'}} >
                                        <TouchableOpacity onPress={minusVallBTC}>
                                            <View style={style.actionBtn}>
                                                <Icon name="remove" size={25} color={COLORS.white} />
                                            </View>    
                                        </TouchableOpacity>
                                        <Text> </Text>
                                        <TouchableOpacity onPress={addVallBTC}>
                                            <View style={style.actionBtn}>
                                                <Icon name="add" size={25} color={COLORS.white} />
                                            </View>    
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                            <View  style={{alignItems:'center',justifyContent:'center'}}>
                                {/* <Image 
                                    style={{
                                        width:30,
                                        height:30,
                                    }}
                                    // source="https://drive.google.com/file/d/1ZFaOejFmkKvo9oATPnVG66ww4v54ei5c/view?usp=sharing"
                                /> */}
                                <Icon name="swap-horizontal-circle" size={24} color="black"/>
                            </View>
                            <View style={{alignItems:'center',justifyContent:'center'}}>
                                <Text style={{fontWeight:'bold',fontSize:18}} >{toCurrencyBTC}</Text>
                                <Text style={{fontSize:13,color:COLORS.grey}} >=</Text>

                                <Text style={{fontSize:17,fontWeight:'bold'}} >{toAmountBTC}</Text>
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity onPress={() => Alert.alert('Simple Button pressed')}>
                        {/* <View style={style.actionBtn}> */}
                        <View style={style.graphView}>
                            <Text style={{fontWeight:'bold',fontSize:18, color:COLORS.white}}>Graph</Text>
                            {/* <Icon name="home-filled" color={COLORS.grey} size={28} /> */}
                        </View>    
                    </TouchableOpacity>
                </View>
                {/* 2 - END BTC */}

                {/* 3 - START USD */}
                <View style={style.cartCard1}>
                    <View style={style.cartCard2} >
                        <View style={{
                            height:100,
                            marginLeft:10,
                            paddingVertical:20,
                            flex:1,
                            flexDirection: 'row',
                            justifyContent:'space-between'
                        }} >
                            <View style={{flexDirection:'row'}} >
                                <View style={{alignItems:'center',justifyContent:'center'}}>
                                    <Text style={{fontSize:17,fontWeight:'bold'}}>{fromCurrencytoto} : </Text>
                                </View>
                                <View style={{marginLeft:10}}>
                                    <TextInput 
                                        style={style.input}
                                        // placeholder='new todo...'
                                        keyboardType="numeric"
                                        value={`${fromAmountUSD}`}
                                        onChangeText={setAmountUSD}
                                    />
                                    <View style={{flexDirection:'row'}} >
                                        <TouchableOpacity onPress={minusVallUSD}>
                                            <View style={style.actionBtn}>
                                                <Icon name="remove" size={25} color={COLORS.white} />
                                            </View>    
                                        </TouchableOpacity>
                                        <Text> </Text>
                                        <TouchableOpacity onPress={addVallUSD}>
                                            <View style={style.actionBtn}>
                                                <Icon name="add" size={25} color={COLORS.white} />
                                            </View>    
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                            <View  style={{alignItems:'center',justifyContent:'center'}}>
                                {/* <Image 
                                    style={{
                                        width:30,
                                        height:30,
                                    }}
                                    // source="https://drive.google.com/file/d/1ZFaOejFmkKvo9oATPnVG66ww4v54ei5c/view?usp=sharing"
                                /> */}
                                <Icon name="swap-horizontal-circle" size={24} color="black"/>
                            </View>
                            <View style={{alignItems:'center',justifyContent:'center'}}>
                                <Text style={{fontWeight:'bold',fontSize:18}} >{toCurrencyUSD}</Text>
                                <Text style={{fontSize:13,color:COLORS.grey}} >=</Text>

                                <Text style={{fontSize:17,fontWeight:'bold'}} >{toAmountUSD}</Text>
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity onPress={() => Alert.alert('Simple Button pressed')}>
                        {/* <View style={style.actionBtn}> */}
                        <View style={style.graphView}>
                            <Text style={{fontWeight:'bold',fontSize:18, color:COLORS.white}}>Graph</Text>
                            {/* <Icon name="home-filled" color={COLORS.grey} size={28} /> */}
                        </View>    
                    </TouchableOpacity>
                </View>

                {/* 3 - END USD */}

                {/* 4 - START GBP */}
                <View style={style.cartCard1}>
                    <View style={style.cartCard2} >
                        <View style={{
                            height:100,
                            marginLeft:10,
                            paddingVertical:20,
                            flex:1,
                            flexDirection: 'row',
                            justifyContent:'space-between'
                        }} >
                            <View style={{flexDirection:'row'}} >
                                <View style={{alignItems:'center',justifyContent:'center'}}>
                                    <Text style={{fontSize:17,fontWeight:'bold'}}>{fromCurrencytoto} : </Text>
                                </View>
                                <View style={{marginLeft:10}}>
                                    <TextInput 
                                        style={style.input}
                                        // placeholder='new todo...'
                                        keyboardType="numeric"
                                        value={`${fromAmountGBP}`}
                                        onChangeText={setAmountGBP}
                                    />
                                    <View style={{flexDirection:'row'}} >
                                        <TouchableOpacity onPress={minusVallGBP}>
                                            <View style={style.actionBtn}>
                                                <Icon name="remove" size={25} color={COLORS.white} />
                                            </View>    
                                        </TouchableOpacity>
                                        <Text> </Text>
                                        <TouchableOpacity onPress={addVallGBP}>
                                            <View style={style.actionBtn}>
                                                <Icon name="add" size={25} color={COLORS.white} />
                                            </View>    
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                            <View  style={{alignItems:'center',justifyContent:'center'}}>
                                {/* <Image 
                                    style={{
                                        width:30,
                                        height:30,
                                    }}
                                    // source="https://drive.google.com/file/d/1ZFaOejFmkKvo9oATPnVG66ww4v54ei5c/view?usp=sharing"
                                /> */}
                                <Icon name="swap-horizontal-circle" size={24} color="black"/>
                            </View>
                            
                            <View style={{alignItems:'center',justifyContent:'center'}}>
                                <Text style={{fontWeight:'bold',fontSize:18}} >{toCurrencyGBP}</Text>
                                <Text style={{fontSize:13,color:COLORS.grey}} >=</Text>
                                <Text style={{fontSize:17,fontWeight:'bold'}} >{toAmountGBP}</Text>
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity onPress={() => Alert.alert('Simple Button pressed')}>
                        {/* <View style={style.actionBtn}> */}
                        <View style={style.graphView}>
                            <Text style={{fontWeight:'bold',fontSize:18, color:COLORS.white}}>Graph</Text>
                            {/* <Icon name="home-filled" color={COLORS.grey} size={28} /> */}
                        </View>    
                    </TouchableOpacity>
                </View>

                {/* 4 - END GBP */}

                {/* 5 - START KWD */}
                <View style={style.cartCard1}>
                    <View style={style.cartCard2} >
                        <View style={{
                            height:100,
                            marginLeft:10,
                            paddingVertical:20,
                            flex:1,
                            flexDirection: 'row',
                            justifyContent:'space-between'
                        }} >
                            <View style={{flexDirection:'row'}} >
                                <View style={{alignItems:'center',justifyContent:'center'}}>
                                    <Text style={{fontSize:17,fontWeight:'bold'}}>{fromCurrencytoto} : </Text>
                                </View>
                                <View style={{marginLeft:10}}>
                                    <TextInput 
                                        style={style.input}
                                        // placeholder='new todo...'
                                        keyboardType="numeric"
                                        value={`${fromAmountKWD}`}
                                        onChangeText={setAmountKWD}
                                    />
                                    <View style={{flexDirection:'row'}} >
                                        <TouchableOpacity onPress={minusVallKWD}>
                                            <View style={style.actionBtn}>
                                                <Icon name="remove" size={25} color={COLORS.white} />
                                            </View>    
                                        </TouchableOpacity>
                                        <Text> </Text>
                                        <TouchableOpacity onPress={addVallKWD}>
                                            <View style={style.actionBtn}>
                                                <Icon name="add" size={25} color={COLORS.white} />
                                            </View>    
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                            <View  style={{alignItems:'center',justifyContent:'center'}}>
                                {/* <Image 
                                    style={{
                                        width:30,
                                        height:30,
                                    }}
                                    // source="https://drive.google.com/file/d/1ZFaOejFmkKvo9oATPnVG66ww4v54ei5c/view?usp=sharing"
                                /> */}
                                <Icon name="swap-horizontal-circle" size={24} color="black"/>
                            </View>
                            
                            <View style={{alignItems:'center',justifyContent:'center'}}>
                                <Text style={{fontWeight:'bold',fontSize:18}} >{toCurrencyKWD}</Text>
                                <Text style={{fontSize:13,color:COLORS.grey}} >=</Text>
                                <Text style={{fontSize:17,fontWeight:'bold'}} >{toAmountKWD}</Text>
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity onPress={() => Alert.alert('Simple Button pressed')}>
                        {/* <View style={style.actionBtn}> */}
                        <View style={style.graphView}>
                            <Text style={{fontWeight:'bold',fontSize:18, color:COLORS.white}}>Graph</Text>
                            {/* <Icon name="home-filled" color={COLORS.grey} size={28} /> */}
                        </View>    
                    </TouchableOpacity>
                </View>

                {/* 5 - END KWD */}

                {/* 6 - START AED */}
                <View style={style.cartCard1}>
                    <View style={style.cartCard2} >
                        <View style={{
                            height:100,
                            marginLeft:10,
                            paddingVertical:20,
                            flex:1,
                            flexDirection: 'row',
                            justifyContent:'space-between'
                        }} >
                            <View style={{flexDirection:'row'}} >
                                <View style={{alignItems:'center',justifyContent:'center'}}>
                                    <Text style={{fontSize:17,fontWeight:'bold'}}>{fromCurrencytoto} : </Text>
                                </View>
                                <View style={{marginLeft:10}}>
                                    <TextInput 
                                        style={style.input}
                                        // placeholder='new todo...'
                                        keyboardType="numeric"
                                        value={`${fromAmountAED}`}
                                        onChangeText={setAmountAED}
                                    />
                                    <View style={{flexDirection:'row'}} >
                                        <TouchableOpacity onPress={minusVallAED}>
                                            <View style={style.actionBtn}>
                                                <Icon name="remove" size={25} color={COLORS.white} />
                                            </View>    
                                        </TouchableOpacity>
                                        <Text> </Text>
                                        <TouchableOpacity onPress={addVallAED}>
                                            <View style={style.actionBtn}>
                                                <Icon name="add" size={25} color={COLORS.white} />
                                            </View>    
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                            <View  style={{alignItems:'center',justifyContent:'center'}}>
                                {/* <Image 
                                    style={{
                                        width:30,
                                        height:30,
                                    }}
                                    // source="https://drive.google.com/file/d/1ZFaOejFmkKvo9oATPnVG66ww4v54ei5c/view?usp=sharing"
                                /> */}
                                <Icon name="swap-horizontal-circle" size={24} color="black"/>
                            </View>
                            
                            <View style={{alignItems:'center',justifyContent:'center'}}>
                                <Text style={{fontWeight:'bold',fontSize:18}} >{toCurrencyAED}</Text>
                                <Text style={{fontSize:13,color:COLORS.grey}} >=</Text>
                                <Text style={{fontSize:17,fontWeight:'bold'}} >{toAmountAED}</Text>
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity onPress={() => Alert.alert('Simple Button pressed')}>
                        {/* <View style={style.actionBtn}> */}
                        <View style={style.graphView}>
                            <Text style={{fontWeight:'bold',fontSize:18, color:COLORS.white}}>Graph</Text>
                            {/* <Icon name="home-filled" color={COLORS.grey} size={28} /> */}
                        </View>    
                    </TouchableOpacity>
                </View>

                {/* 6 - END AED */}

                {/* 7 - START AFN */}
                <View style={style.cartCard1}>
                    <View style={style.cartCard2} >
                        <View style={{
                            height:100,
                            marginLeft:10,
                            paddingVertical:20,
                            flex:1,
                            flexDirection: 'row',
                            justifyContent:'space-between'
                        }} >
                            <View style={{flexDirection:'row'}} >
                                <View style={{alignItems:'center',justifyContent:'center'}}>
                                    <Text style={{fontSize:17,fontWeight:'bold'}}>{fromCurrencytoto} : </Text>
                                </View>
                                <View style={{marginLeft:10}}>
                                    <TextInput 
                                        style={style.input}
                                        // placeholder='new todo...'
                                        keyboardType="numeric"
                                        value={`${fromAmountAFN}`}
                                        onChangeText={setAmountAFN}
                                    />
                                    <View style={{flexDirection:'row'}} >
                                        <TouchableOpacity onPress={minusVallAFN}>
                                            <View style={style.actionBtn}>
                                                <Icon name="remove" size={25} color={COLORS.white} />
                                            </View>    
                                        </TouchableOpacity>
                                        <Text> </Text>
                                        <TouchableOpacity onPress={addVallAFN}>
                                            <View style={style.actionBtn}>
                                                <Icon name="add" size={25} color={COLORS.white} />
                                            </View>    
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                            <View  style={{alignItems:'center',justifyContent:'center'}}>
                                {/* <Image 
                                    style={{
                                        width:30,
                                        height:30,
                                    }}
                                    // source="https://drive.google.com/file/d/1ZFaOejFmkKvo9oATPnVG66ww4v54ei5c/view?usp=sharing"
                                /> */}
                                <Icon name="swap-horizontal-circle" size={24} color="black"/>
                            </View>
                            
                            <View style={{alignItems:'center',justifyContent:'center'}}>
                                <Text style={{fontWeight:'bold',fontSize:18}} >{toCurrencyAFN}</Text>
                                <Text style={{fontSize:13,color:COLORS.grey}} >=</Text>
                                <Text style={{fontSize:17,fontWeight:'bold'}} >{toAmountAFN}</Text>
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity onPress={() => Alert.alert('Simple Button pressed')}>
                        {/* <View style={style.actionBtn}> */}
                        <View style={style.graphView}>
                            <Text style={{fontWeight:'bold',fontSize:18, color:COLORS.white}}>Graph</Text>
                            {/* <Icon name="home-filled" color={COLORS.grey} size={28} /> */}
                        </View>    
                    </TouchableOpacity>
                </View>

                {/* 7 - END AFN */}

                {/* 8 - START ALL */}
                <View style={style.cartCard1}>
                    <View style={style.cartCard2} >
                        <View style={{
                            height:100,
                            marginLeft:10,
                            paddingVertical:20,
                            flex:1,
                            flexDirection: 'row',
                            justifyContent:'space-between'
                        }} >
                            <View style={{flexDirection:'row'}} >
                                <View style={{alignItems:'center',justifyContent:'center'}}>
                                    <Text style={{fontSize:17,fontWeight:'bold'}}>{fromCurrencytoto} : </Text>
                                </View>
                                <View style={{marginLeft:10}}>
                                    <TextInput 
                                        style={style.input}
                                        // placeholder='new todo...'
                                        keyboardType="numeric"
                                        value={`${fromAmountALL}`}
                                        onChangeText={setAmountALL}
                                    />
                                    <View style={{flexDirection:'row'}} >
                                        <TouchableOpacity onPress={minusVallALL}>
                                            <View style={style.actionBtn}>
                                                <Icon name="remove" size={25} color={COLORS.white} />
                                            </View>    
                                        </TouchableOpacity>
                                        <Text> </Text>
                                        <TouchableOpacity onPress={addVallALL}>
                                            <View style={style.actionBtn}>
                                                <Icon name="add" size={25} color={COLORS.white} />
                                            </View>    
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                            <View  style={{alignItems:'center',justifyContent:'center'}}>
                                {/* <Image 
                                    style={{
                                        width:30,
                                        height:30,
                                    }}
                                    // source="https://drive.google.com/file/d/1ZFaOejFmkKvo9oATPnVG66ww4v54ei5c/view?usp=sharing"
                                /> */}
                                <Icon name="swap-horizontal-circle" size={24} color="black"/>
                            </View>
                            
                            <View style={{alignItems:'center',justifyContent:'center'}}>
                                <Text style={{fontWeight:'bold',fontSize:18}} >{toCurrencyALL}</Text>
                                <Text style={{fontSize:13,color:COLORS.grey}} >=</Text>
                                <Text style={{fontSize:17,fontWeight:'bold'}} >{toAmountALL}</Text>
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity onPress={() => Alert.alert('Simple Button pressed')}>
                        {/* <View style={style.actionBtn}> */}
                        <View style={style.graphView}>
                            <Text style={{fontWeight:'bold',fontSize:18, color:COLORS.white}}>Graph</Text>
                            {/* <Icon name="home-filled" color={COLORS.grey} size={28} /> */}
                        </View>    
                    </TouchableOpacity>
                </View>

                {/* 8 - END ALL */}

                {/* 9 - START AMD */}
                <View style={style.cartCard1}>
                    <View style={style.cartCard2} >
                        <View style={{
                            height:100,
                            marginLeft:10,
                            paddingVertical:20,
                            flex:1,
                            flexDirection: 'row',
                            justifyContent:'space-between'
                        }} >
                            <View style={{flexDirection:'row'}} >
                                <View style={{alignItems:'center',justifyContent:'center'}}>
                                    <Text style={{fontSize:17,fontWeight:'bold'}}>{fromCurrencytoto} : </Text>
                                </View>
                                <View style={{marginLeft:10}}>
                                    <TextInput 
                                        style={style.input}
                                        // placeholder='new todo...'
                                        keyboardType="numeric"
                                        value={`${fromAmountAMD}`}
                                        onChangeText={setAmountAMD}
                                    />
                                    <View style={{flexDirection:'row'}} >
                                        <TouchableOpacity onPress={minusVallAMD}>
                                            <View style={style.actionBtn}>
                                                <Icon name="remove" size={25} color={COLORS.white} />
                                            </View>    
                                        </TouchableOpacity>
                                        <Text> </Text>
                                        <TouchableOpacity onPress={addVallAMD}>
                                            <View style={style.actionBtn}>
                                                <Icon name="add" size={25} color={COLORS.white} />
                                            </View>    
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                            <View  style={{alignItems:'center',justifyContent:'center'}}>
                                {/* <Image 
                                    style={{
                                        width:30,
                                        height:30,
                                    }}
                                    // source="https://drive.google.com/file/d/1ZFaOejFmkKvo9oATPnVG66ww4v54ei5c/view?usp=sharing"
                                /> */}
                                <Icon name="swap-horizontal-circle" size={24} color="black"/>
                            </View>
                            
                            <View style={{alignItems:'center',justifyContent:'center'}}>
                                <Text style={{fontWeight:'bold',fontSize:18}} >{toCurrencyAMD}</Text>
                                <Text style={{fontSize:13,color:COLORS.grey}} >=</Text>
                                <Text style={{fontSize:17,fontWeight:'bold'}} >{toAmountAMD}</Text>
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity onPress={() => Alert.alert('Simple Button pressed')}>
                        {/* <View style={style.actionBtn}> */}
                        <View style={style.graphView}>
                            <Text style={{fontWeight:'bold',fontSize:18, color:COLORS.white}}>Graph</Text>
                            {/* <Icon name="home-filled" color={COLORS.grey} size={28} /> */}
                        </View>    
                    </TouchableOpacity>
                </View>

                {/* 9 - END AMD */}

                {/* 10 - START ANG */}
                <View style={style.cartCard1}>
                    <View style={style.cartCard2} >
                        <View style={{
                            height:100,
                            marginLeft:10,
                            paddingVertical:20,
                            flex:1,
                            flexDirection: 'row',
                            justifyContent:'space-between'
                        }} >
                            <View style={{flexDirection:'row'}} >
                                <View style={{alignItems:'center',justifyContent:'center'}}>
                                    <Text style={{fontSize:17,fontWeight:'bold'}}>{fromCurrencytoto} : </Text>
                                </View>
                                <View style={{marginLeft:10}}>
                                    <TextInput 
                                        style={style.input}
                                        // placeholder='new todo...'
                                        keyboardType="numeric"
                                        value={`${fromAmountANG}`}
                                        onChangeText={setAmountANG}
                                    />
                                    <View style={{flexDirection:'row'}} >
                                        <TouchableOpacity onPress={minusVallANG}>
                                            <View style={style.actionBtn}>
                                                <Icon name="remove" size={25} color={COLORS.white} />
                                            </View>    
                                        </TouchableOpacity>
                                        <Text> </Text>
                                        <TouchableOpacity onPress={addVallANG}>
                                            <View style={style.actionBtn}>
                                                <Icon name="add" size={25} color={COLORS.white} />
                                            </View>    
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                            <View  style={{alignItems:'center',justifyContent:'center'}}>
                                {/* <Image 
                                    style={{
                                        width:30,
                                        height:30,
                                    }}
                                    // source="https://drive.google.com/file/d/1ZFaOejFmkKvo9oATPnVG66ww4v54ei5c/view?usp=sharing"
                                /> */}
                                <Icon name="swap-horizontal-circle" size={24} color="black"/>
                            </View>
                            
                            <View style={{alignItems:'center',justifyContent:'center'}}>
                                <Text style={{fontWeight:'bold',fontSize:18}} >{toCurrencyANG}</Text>
                                <Text style={{fontSize:13,color:COLORS.grey}} >=</Text>
                                <Text style={{fontSize:17,fontWeight:'bold'}} >{toAmountANG}</Text>
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity onPress={() => Alert.alert('Simple Button pressed')}>
                        {/* <View style={style.actionBtn}> */}
                        <View style={style.graphView}>
                            <Text style={{fontWeight:'bold',fontSize:18, color:COLORS.white}}>Graph</Text>
                            {/* <Icon name="home-filled" color={COLORS.grey} size={28} /> */}
                        </View>    
                    </TouchableOpacity>
                </View>

                {/* 10 - END ANG */}

                {/* 11 - START AOA */}
                <View style={style.cartCard1}>
                    <View style={style.cartCard2} >
                        <View style={{
                            height:100,
                            marginLeft:10,
                            paddingVertical:20,
                            flex:1,
                            flexDirection: 'row',
                            justifyContent:'space-between'
                        }} >
                            <View style={{flexDirection:'row'}} >
                                <View style={{alignItems:'center',justifyContent:'center'}}>
                                    <Text style={{fontSize:17,fontWeight:'bold'}}>{fromCurrencytoto} : </Text>
                                </View>
                                <View style={{marginLeft:10}}>
                                    <TextInput 
                                        style={style.input}
                                        // placeholder='new todo...'
                                        keyboardType="numeric"
                                        value={`${fromAmountAOA}`}
                                        onChangeText={setAmountAOA}
                                    />
                                    <View style={{flexDirection:'row'}} >
                                        <TouchableOpacity onPress={minusVallAOA}>
                                            <View style={style.actionBtn}>
                                                <Icon name="remove" size={25} color={COLORS.white} />
                                            </View>    
                                        </TouchableOpacity>
                                        <Text> </Text>
                                        <TouchableOpacity onPress={addVallAOA}>
                                            <View style={style.actionBtn}>
                                                <Icon name="add" size={25} color={COLORS.white} />
                                            </View>    
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                            <View  style={{alignItems:'center',justifyContent:'center'}}>
                                {/* <Image 
                                    style={{
                                        width:30,
                                        height:30,
                                    }}
                                    // source="https://drive.google.com/file/d/1ZFaOejFmkKvo9oATPnVG66ww4v54ei5c/view?usp=sharing"
                                /> */}
                                <Icon name="swap-horizontal-circle" size={24} color="black"/>
                            </View>
                            
                            <View style={{alignItems:'center',justifyContent:'center'}}>
                                <Text style={{fontWeight:'bold',fontSize:18}} >{toCurrencyAOA}</Text>
                                <Text style={{fontSize:13,color:COLORS.grey}} >=</Text>
                                <Text style={{fontSize:17,fontWeight:'bold'}} >{toAmountAOA}</Text>
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity onPress={() => Alert.alert('Simple Button pressed')}>
                        {/* <View style={style.actionBtn}> */}
                        <View style={style.graphView}>
                            <Text style={{fontWeight:'bold',fontSize:18, color:COLORS.white}}>Graph</Text>
                            {/* <Icon name="home-filled" color={COLORS.grey} size={28} /> */}
                        </View>    
                    </TouchableOpacity>
                </View>

                {/* 11 - END AOA */}

                {/* 12 - STAR ARS */}
                <View style={style.cartCard1}>
                    <View style={style.cartCard2} >
                        <View style={{
                            height:100,
                            marginLeft:10,
                            paddingVertical:20,
                            flex:1,
                            flexDirection: 'row',
                            justifyContent:'space-between'
                        }} >
                            <View style={{flexDirection:'row'}} >
                                <View style={{alignItems:'center',justifyContent:'center'}}>
                                    <Text style={{fontSize:17,fontWeight:'bold'}}>{fromCurrencytoto} : </Text>
                                </View>
                                <View style={{marginLeft:10}}>
                                    <TextInput 
                                        style={style.input}
                                        // placeholder='new todo...'
                                        keyboardType="numeric"
                                        value={`${fromAmountARS}`}
                                        onChangeText={setAmountARS}
                                    />
                                    <View style={{flexDirection:'row'}} >
                                        <TouchableOpacity onPress={minusVallARS}>
                                            <View style={style.actionBtn}>
                                                <Icon name="remove" size={25} color={COLORS.white} />
                                            </View>    
                                        </TouchableOpacity>
                                        <Text> </Text>
                                        <TouchableOpacity onPress={addVallARS}>
                                            <View style={style.actionBtn}>
                                                <Icon name="add" size={25} color={COLORS.white} />
                                            </View>    
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                            <View  style={{alignItems:'center',justifyContent:'center'}}>
                                {/* <Image 
                                    style={{
                                        width:30,
                                        height:30,
                                    }}
                                    // source="https://drive.google.com/file/d/1ZFaOejFmkKvo9oATPnVG66ww4v54ei5c/view?usp=sharing"
                                /> */}
                                <Icon name="swap-horizontal-circle" size={24} color="black"/>
                            </View>
                            
                            <View style={{alignItems:'center',justifyContent:'center'}}>
                                <Text style={{fontWeight:'bold',fontSize:18}} >{toCurrencyARS}</Text>
                                <Text style={{fontSize:13,color:COLORS.grey}} >=</Text>
                                <Text style={{fontSize:17,fontWeight:'bold'}} >{toAmountARS}</Text>
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity onPress={() => Alert.alert('Simple Button pressed')}>
                        {/* <View style={style.actionBtn}> */}
                        <View style={style.graphView}>
                            <Text style={{fontWeight:'bold',fontSize:18, color:COLORS.white}}>Graph</Text>
                            {/* <Icon name="home-filled" color={COLORS.grey} size={28} /> */}
                        </View>    
                    </TouchableOpacity>
                </View>

                {/* 12 - END ARS */}

                {/* 13 - STAR AUD */}
                <View style={style.cartCard1}>
                    <View style={style.cartCard2} >
                        <View style={{
                            height:100,
                            marginLeft:10,
                            paddingVertical:20,
                            flex:1,
                            flexDirection: 'row',
                            justifyContent:'space-between'
                        }} >
                            <View style={{flexDirection:'row'}} >
                                <View style={{alignItems:'center',justifyContent:'center'}}>
                                    <Text style={{fontSize:17,fontWeight:'bold'}}>{fromCurrencytoto} : </Text>
                                </View>
                                <View style={{marginLeft:10}}>
                                    <TextInput 
                                        style={style.input}
                                        // placeholder='new todo...'
                                        keyboardType="numeric"
                                        value={`${fromAmountAUD}`}
                                        onChangeText={setAmountAUD}
                                    />
                                    <View style={{flexDirection:'row'}} >
                                        <TouchableOpacity onPress={minusVallAUD}>
                                            <View style={style.actionBtn}>
                                                <Icon name="remove" size={25} color={COLORS.white} />
                                            </View>    
                                        </TouchableOpacity>
                                        <Text> </Text>
                                        <TouchableOpacity onPress={addVallAUD}>
                                            <View style={style.actionBtn}>
                                                <Icon name="add" size={25} color={COLORS.white} />
                                            </View>    
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                            <View  style={{alignItems:'center',justifyContent:'center'}}>
                                {/* <Image 
                                    style={{
                                        width:30,
                                        height:30,
                                    }}
                                    // source="https://drive.google.com/file/d/1ZFaOejFmkKvo9oATPnVG66ww4v54ei5c/view?usp=sharing"
                                /> */}
                                <Icon name="swap-horizontal-circle" size={24} color="black"/>
                            </View>
                            
                            <View style={{alignItems:'center',justifyContent:'center'}}>
                                <Text style={{fontWeight:'bold',fontSize:18}} >{toCurrencyAUD}</Text>
                                <Text style={{fontSize:13,color:COLORS.grey}} >=</Text>
                                <Text style={{fontSize:17,fontWeight:'bold'}} >{toAmountAUD}</Text>
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity onPress={() => Alert.alert('Simple Button pressed')}>
                        {/* <View style={style.actionBtn}> */}
                        <View style={style.graphView}>
                            <Text style={{fontWeight:'bold',fontSize:18, color:COLORS.white}}>Graph</Text>
                            {/* <Icon name="home-filled" color={COLORS.grey} size={28} /> */}
                        </View>    
                    </TouchableOpacity>
                </View>

                {/* 13 - END AUD */}

                {/* 14 - STA AWG */}
                <View style={style.cartCard1}>
                    <View style={style.cartCard2} >
                        <View style={{
                            height:100,
                            marginLeft:10,
                            paddingVertical:20,
                            flex:1,
                            flexDirection: 'row',
                            justifyContent:'space-between'
                        }} >
                            <View style={{flexDirection:'row'}} >
                                <View style={{alignItems:'center',justifyContent:'center'}}>
                                    <Text style={{fontSize:17,fontWeight:'bold'}}>{fromCurrencytoto} : </Text>
                                </View>
                                <View style={{marginLeft:10}}>
                                    <TextInput 
                                        style={style.input}
                                        // placeholder='new todo...'
                                        keyboardType="numeric"
                                        value={`${fromAmountAWG}`}
                                        onChangeText={setAmountAWG}
                                    />
                                    <View style={{flexDirection:'row'}} >
                                        <TouchableOpacity onPress={minusVallAWG}>
                                            <View style={style.actionBtn}>
                                                <Icon name="remove" size={25} color={COLORS.white} />
                                            </View>    
                                        </TouchableOpacity>
                                        <Text> </Text>
                                        <TouchableOpacity onPress={addVallAWG}>
                                            <View style={style.actionBtn}>
                                                <Icon name="add" size={25} color={COLORS.white} />
                                            </View>    
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                            <View  style={{alignItems:'center',justifyContent:'center'}}>
                                {/* <Image 
                                    style={{
                                        width:30,
                                        height:30,
                                    }}
                                    // source="https://drive.google.com/file/d/1ZFaOejFmkKvo9oATPnVG66ww4v54ei5c/view?usp=sharing"
                                /> */}
                                <Icon name="swap-horizontal-circle" size={24} color="black"/>
                            </View>
                            
                            <View style={{alignItems:'center',justifyContent:'center'}}>
                                <Text style={{fontWeight:'bold',fontSize:18}} >{toCurrencyAWG}</Text>
                                <Text style={{fontSize:13,color:COLORS.grey}} >=</Text>
                                <Text style={{fontSize:17,fontWeight:'bold'}} >{toAmountAWG}</Text>
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity onPress={() => Alert.alert('Simple Button pressed')}>
                        {/* <View style={style.actionBtn}> */}
                        <View style={style.graphView}>
                            <Text style={{fontWeight:'bold',fontSize:18, color:COLORS.white}}>Graph</Text>
                            {/* <Icon name="home-filled" color={COLORS.grey} size={28} /> */}
                        </View>    
                    </TouchableOpacity>
                </View>

                {/* 14 - END AWG */}
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
        width: 200,
        height: 60,
        backgroundColor: COLORS.primary,
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
    //   width: '80%',
      // flexDirection: "column",
    }
});

export default HomeScreen;