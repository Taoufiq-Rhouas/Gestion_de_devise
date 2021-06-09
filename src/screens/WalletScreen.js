


























































// // -------------------------------------------------------------------------------
// // Version 2

// import React, { useEffect,useState,useContext } from 'react';
// import {Text, StyleSheet, View, Image,Alert,TouchableOpacity,TextInput,ScrollView,RefreshControl} from 'react-native';
// import {SafeAreaView} from 'react-native-safe-area-context';
// import COLORS from '../consts/colors';
// import Icon from 'react-native-vector-icons/MaterialIcons';
// // import AsyncStorage from '@react-native-community/async-storage';
// import {UserContext} from '../context/UserContext';
// import axios from "axios";


// // const HomeScreen = ({navigation}) => {
// const WalletScreen = ({ navigation, route }) => {

//     const BASE_URL = 'http://api.exchangeratesapi.io/v1/latest?access_key=2739b2331b1010220a696b99d3d3e828';
//     let {currencySearch,exchangeRateSearchV1,soldSearchebuyV1,fromCurrencySearchebuyV1,toCurrencySearchebuyV1} = route.params;
//     console.log("toCurrencySearchebuyV1 v1 : ",toCurrencySearchebuyV1);
    

//     // ---------------------------------
//     const [currencyOptions,setCurrencyOptions] = useState([]);
//     const [fromCurrency,setFromCurrency] = useState();
//     const [toCurrency,setToCurrency] = useState();
//     const [exchangeRate,setExchangeRate] = useState();
//     const [amount,setAmount] = useState(1);
//     const [amountInFromCurrency,setAmountInFromCurrency] = useState(true);
//     // ----------------------------------------------------

//     const [currencyOptionstoto,setCurrencyOptionstoto] = useState([]);
//     const [fromCurrencytoto,setFromCurrencytoto] = useState();

//     const [ToCurrencytotoEUR,setToCurrencyTototEUR] = useState();

//     const [toCurrencyMAD,setToCurrencyMAD] = useState();
//     const [exchangeRateMAD,setExchangeRateMAD] = useState();
//     // 

//     const [toCurrencySearch,setToCurrencySearch] = useState();
//     const [exchangeRateSearch,setExchangeRateSearch] = useState();
//     // 

//     // const [toCurrencyAED,setToCurrencyAED] = useState();
//     // const [exchangeRateAED,setExchangeRateAED] = useState();

//     // const [toCurrencyAFN,setToCurrencyAFN] = useState();
//     // const [exchangeRateAFN,setExchangeRateAFN] = useState();

//     // const [toCurrencyALL,setToCurrencyALL] = useState();
//     // const [exchangeRateALL,setExchangeRateALL] = useState();

//     // const [toCurrencyAMD,setToCurrencyAMD] = useState();
//     // const [exchangeRateAMD,setExchangeRateAMD] = useState();

//     // const [toCurrencyANG,setToCurrencyANG] = useState();
//     // const [exchangeRateANG,setExchangeRateANG] = useState();

//     // const [toCurrencyAOA,setToCurrencyAOA] = useState();
//     // const [exchangeRateAOA,setExchangeRateAOA] = useState();

//     // const [toCurrencyARS,setToCurrencyARS] = useState();
//     // const [exchangeRateARS,setExchangeRateARS] = useState();

//     // const [toCurrencyAUD,setToCurrencyAUD] = useState();
//     // const [exchangeRateAUD,setExchangeRateAUD] = useState();

//     // const [toCurrencyAWG,setToCurrencyAWG] = useState();
//     // const [exchangeRateAWG,setExchangeRateAWG] = useState();

//     // const [toCurrencyBTC,setToCurrencyBTC] = useState();
//     // const [exchangeRateBTC,setExchangeRateBTC] = useState();

//     // const [toCurrencyUSD,setToCurrencyUSD] = useState();
//     // const [exchangeRateUSD,setExchangeRateUSD] = useState();

//     // const [toCurrencyGBP,setToCurrencyGBP] = useState();
//     // const [exchangeRateGBP,setExchangeRateGBP] = useState();

//     // const [toCurrencyKWD,setToCurrencyKWD] = useState();
//     // const [exchangeRateKWD,setExchangeRateKWD] = useState();
//     // ----------------------------------------------------
//     const [amountInFromCurrencyMAD,setAmountInFromCurrencyMAD] = useState(true);
//     // 

//     const [amountInFromCurrencySearch,setAmountInFromCurrencySearch] = useState(true);
//     // 
//     // const [amountInFromCurrencyAED,setAmountInFromCurrencyAED] = useState(true);
//     // const [amountInFromCurrencyAFN,setAmountInFromCurrencyAFN] = useState(true);
//     // const [amountInFromCurrencyALL,setAmountInFromCurrencyALL] = useState(true);
//     // const [amountInFromCurrencyAMD,setAmountInFromCurrencyAMD] = useState(true);
//     // const [amountInFromCurrencyANG,setAmountInFromCurrencyANG] = useState(true);
//     // const [amountInFromCurrencyAOA,setAmountInFromCurrencyAOA] = useState(true);
//     // const [amountInFromCurrencyARS,setAmountInFromCurrencyARS] = useState(true);
//     // const [amountInFromCurrencyAUD,setAmountInFromCurrencyAUD] = useState(true);
//     // const [amountInFromCurrencyAWG,setAmountInFromCurrencyAWG] = useState(true);
//     // const [amountInFromCurrencyBTC,setAmountInFromCurrencyBTC] = useState(true);
//     // const [amountInFromCurrencyUSD,setAmountInFromCurrencyUSD] = useState(true);
//     // const [amountInFromCurrencyGBP,setAmountInFromCurrencyGBP] = useState(true);
//     // const [amountInFromCurrencyKWD,setAmountInFromCurrencyKWD] = useState(true);
//     // ----------------------------------------------------
//     const [amountMAD,setAmountMAD] = useState(1);
//     // 
//     const [amountSearch,setAmountSearch] = useState(1);
//     // 
//     // const [amountAED,setAmountAED] = useState(1);
//     // const [amountAFN,setAmountAFN] = useState(1);
//     // const [amountALL,setAmountALL] = useState(1);
//     // const [amountAMD,setAmountAMD] = useState(1);
//     // const [amountANG,setAmountANG] = useState(1);
//     // const [amountAOA,setAmountAOA] = useState(1);
//     // const [amountARS,setAmountARS] = useState(1);
//     // const [amountAUD,setAmountAUD] = useState(1);
//     // const [amountAWG,setAmountAWG] = useState(1);
//     // const [amountBTC,setAmountBTC] = useState(1);
//     // const [amountUSD,setAmountUSD] = useState(1);
//     // const [amountGBP,setAmountGBP] = useState(1);
//     // const [amountKWD,setAmountKWD] = useState(1);
//     // ----------------------------------------------------
//     const [userData, setUserData] = useContext(UserContext);
//     // ----------------------------------------------------
//     const [totalSold, setTotalSold] = useState(0);
//     const [usernameVal, setUsernameVal] = useState("");
    

//     const [soldMAD, setSoldMAD ] = useState(0);
//     const [soldMADbuy, setSoldMADbuy] = useState(0);

//     // 
//     const [soldSearch, setSoldSearch ] = useState(0);
//     const [soldSearchbuy, setSoldSearchbuy] = useState(0);
//     // 

//     // const [soldBTC, setSoldBTC ] = useState(0);
//     // const [soldBTCbuy, setSoldBTCbuy] = useState(0);

//     // const [soldUSD, setSoldUSD ] = useState(0);
//     // const [soldUSDbuy, setSoldUSDbuy] = useState(0);

//     // const [soldGBP, setSoldGBP ] = useState(0);
//     // const [soldGBPbuy, setSoldGBPbuy] = useState(0);

//     // const [soldKWD, setSoldKWD ] = useState(0);
//     // const [soldKWDbuy, setSoldKWDbuy] = useState(0);

//     // const [soldAED, setSoldAED ] = useState(0);
//     // const [soldAEDbuy, setSoldAEDbuy] = useState(0);

//     // const [soldAFN, setSoldAFN ] = useState(0);
//     // const [soldAFNbuy, setSoldAFNbuy] = useState(0);

//     // const [soldALL, setSoldALL ] = useState(0);
//     // const [soldALLbuy, setSoldALLbuy] = useState(0);

//     // const [soldAMD, setSoldAMD ] = useState(0);
//     // const [soldAMDbuy, setSoldAMDbuy] = useState(0);

//     // const [soldANG, setSoldANG ] = useState(0);
//     // const [soldANGbuy, setSoldANGbuy] = useState(0);

//     // const [soldAOA, setSoldAOA ] = useState(0);
//     // const [soldAOAbuy, setSoldAOAbuy] = useState(0);

//     // const [soldARS, setSoldARS ] = useState(0);
//     // const [soldARSbuy, setSoldARSbuy] = useState(0);


//     // 
//     const [_, setUser] = useContext(UserContext);

//     // const [crypto, setCrypto ] = useState("");
//     // const [soldBuy, setSoldBuy] = useState(0);
//     let crypto = "";
//     let soldBuy = 0;
//     let soldCryptobuy = 0
//     let newSoldCryptobuy = 0;
//     let newSoldCryptoDeposit =0;

//     crypto ="";
//     soldBuy = 0;
//     soldCryptobuy = 0
//     newSoldCryptobuy = 0;
//     newSoldCryptoDeposit =0;



//     // console.log(userData.email);
//     // const [emailData,setemailData] = useState("");

//     // const readData = async () => {
//     //     try {
//     //       const userEmailData = await AsyncStorage.getItem(STORAGE_KEY)
      
//     //       if (userEmailData !== null) {
//     //         setemailData(userEmailData)
//     //       }
//     //     } catch (e) {
//     //       alert('Failed to fetch the data from storage')
//     //     }
//     // }

//     const webView = () => {
//         // navigation.navigate("WebviewNav", { userData, data });
//         navigation.navigate("WebviewNav", { redirectTo: "https://fr.tradingview.com/symbols/EURMAD/?exchange=FX_IDC" });
//     }


//     let toAmount, fromAmount
//     if(amountInFromCurrency){
//       fromAmount = amount
//       toAmount = amount * exchangeRate
//     } else{
//       toAmount = amount
//       fromAmount = amount / exchangeRate
//     }
//     // ----------------------------------------------------
//     //MAD
//     let toAmountMAD, fromAmountMAD
//     if(amountInFromCurrencyMAD){
//       fromAmountMAD = amountMAD
//       toAmountMAD = amountMAD * exchangeRateMAD
//     } else{
//       toAmounMADToto = amountMAD
//       fromAmountMAD = amountMAD / exchangeRateMAD
//     }
//     function addVallMAD (){
//         setAmountMAD(amountMAD + 1)
//     }
//     function minusVallMAD (){
//         if(amountMAD > 0){
//             setAmountMAD(amountMAD - 1)
//         }
//     }

//     // ----------------------------------------------------
//     //Search
//     let toAmountSearch, fromAmountSearch
//     if(amountInFromCurrencySearch){
//       fromAmountSearch = amountSearch
//       toAmountSearch = amountSearch * exchangeRateSearch
//     } else{
//       toAmounSearchToto = amountSearch
//       fromAmountSearch = amountSearch / exchangeRateSearch
//     }
//     function addVallSearch (){
//         setAmountSearch(amountSearch + 1)
//     }
//     function minusVallSearch (){
//         if(amountSearch > 0){
//             setAmountSearch(amountSearch - 1)
//         }
//     }
//     // ----------------------------------------------------
//     // //AED
//     // let toAmountAED, fromAmountAED
//     // if(amountInFromCurrencyAED){
//     //   fromAmountAED = amountAED
//     //   toAmountAED = amountAED * exchangeRateAED
//     // } else{
//     //   toAmountAED = amountAED
//     //   fromAmountAED = amountAED / exchangeRateAED
//     // }
//     // function addVallAED (){
//     //     setAmountAED(amountAED + 1)
//     // }
//     // function minusVallAED (){
//     //     if(amountAED > 0){
//     //         setAmountAED(amountAED - 1)
//     //     }
//     // }
//     // // ----------------------------------------------------
//     // //AFN
//     // let toAmountAFN, fromAmountAFN
//     // if(amountInFromCurrencyAFN){
//     //   fromAmountAFN = amountAFN
//     //   toAmountAFN = amountAFN * exchangeRateAFN
//     // } else{
//     //   toAmountAFN = amountAFN
//     //   fromAmountAFN = amountAFN / exchangeRateAFN
//     // }
//     // function addVallAFN (){
//     //     setAmountAFN(amountAFN + 1)
//     // }
//     // function minusVallAFN (){
//     //     if(amountAFN > 0){
//     //         setAmountAFN(amountAFN - 1)
//     //     }
//     // }
//     // // ----------------------------------------------------
//     // //ALL
//     // let toAmountALL, fromAmountALL
//     // if(amountInFromCurrencyALL){
//     //   fromAmountALL = amountALL
//     //   toAmountALL = amountALL * exchangeRateALL
//     // } else{
//     //   toAmountALL = amountALL
//     //   fromAmountALL = amountALL / exchangeRateALL
//     // }
//     // function addVallALL (){
//     //     setAmountALL(amountALL + 1)
//     // }
//     // function minusVallALL (){
//     //     if(amountALL > 0){
//     //         setAmountALL(amountALL - 1)
//     //     }
//     // }
//     // // ----------------------------------------------------
//     // //AMD
//     // let toAmountAMD, fromAmountAMD
//     // if(amountInFromCurrencyAMD){
//     //   fromAmountAMD = amountAMD
//     //   toAmountAMD = amountAMD * exchangeRateAMD
//     // } else{
//     //   toAmountAMD = amountAMD
//     //   fromAmountAMD = amountAMD / exchangeRateAMD
//     // }
//     // function addVallAMD (){
//     //     setAmountAMD(amountAMD + 1)
//     // }
//     // function minusVallAMD (){
//     //     if(amountAMD > 0){
//     //         setAmountAMD(amountAMD - 1)
//     //     }
//     // }
//     // // ----------------------------------------------------
//     // //ANG
//     // let toAmountANG, fromAmountANG
//     // if(amountInFromCurrencyANG){
//     //   fromAmountANG = amountANG
//     //   toAmountANG = amountANG * exchangeRateANG
//     // } else{
//     //   toAmountANG = amountANG
//     //   fromAmountANG = amountANG / exchangeRateANG
//     // }
//     // function addVallANG (){
//     //     setAmountANG(amountANG + 1)
//     // }
//     // function minusVallANG (){
//     //     if(amountANG > 0){
//     //         setAmountANG(amountANG - 1)
//     //     }
//     // }
//     // // ----------------------------------------------------
//     // //AOA
//     // let toAmountAOA, fromAmountAOA
//     // if(amountInFromCurrencyAOA){
//     //   fromAmountAOA = amountAOA
//     //   toAmountAOA = amountAOA * exchangeRateAOA
//     // } else{
//     //   toAmountAOA = amountAOA
//     //   fromAmountAOA = amountAOA / exchangeRateAOA
//     // }
//     // function addVallAOA (){
//     //     setAmountAOA(amountAOA + 1)
//     // }
//     // function minusVallAOA (){
//     //     if(amountAOA > 0){
//     //         setAmountAOA(amountAOA - 1)
//     //     }
//     // }
//     // // ----------------------------------------------------
//     // //ARS
//     // let toAmountARS, fromAmountARS
//     // if(amountInFromCurrencyARS){
//     //   fromAmountARS = amountARS
//     //   toAmountARS = amountARS * exchangeRateARS
//     // } else{
//     //   toAmountARS = amountARS
//     //   fromAmountARS = amountARS / exchangeRateARS
//     // }
//     // function addVallARS (){
//     //     setAmountARS(amountARS + 1)
//     // }
//     // function minusVallARS (){
//     //     if(amountARS > 0){
//     //         setAmountARS(amountARS - 1)
//     //     }
//     // }
//     // // ----------------------------------------------------
//     // //AUD
//     // let toAmountAUD, fromAmountAUD
//     // if(amountInFromCurrencyAUD){
//     //   fromAmountAUD = amountAUD
//     //   toAmountAUD = amountAUD * exchangeRateAUD
//     // } else{
//     //   toAmountAUD = amountAUD
//     //   fromAmountAUD = amountAUD / exchangeRateAUD
//     // }
//     // function addVallAUD (){
//     //     setAmountAUD(amountAUD + 1)
//     // }
//     // function minusVallAUD (){
//     //     if(amountAUD > 0){
//     //         setAmountAUD(amountAUD - 1)
//     //     }
//     // }
//     // // ----------------------------------------------------
//     // //AWG
//     // let toAmountAWG, fromAmountAWG
//     // if(amountInFromCurrencyAWG){
//     //   fromAmountAWG = amountAWG
//     //   toAmountAWG = amountAWG * exchangeRateAWG
//     // } else{
//     //   toAmountAWG = amountAWG
//     //   fromAmountAWG = amountAWG / exchangeRateAWG
//     // }
//     // function addVallAWG (){
//     //     setAmountAWG(amountAWG + 1)
//     // }
//     // function minusVallAWG (){
//     //     if(amountAWG > 0){
//     //         setAmountAWG(amountAWG - 1)
//     //     }
//     // }
//     // // ----------------------------------------------------
//     // //BTC
//     // let toAmountBTC, fromAmountBTC
//     // if(amountInFromCurrencyBTC){
//     //   fromAmountBTC = amountBTC
//     //   toAmountBTC = amountBTC * exchangeRateBTC
//     // } else{
//     //   toAmountBTC = amountBTC
//     //   fromAmountBTC = amountBTC / exchangeRateBTC
//     // }
//     // function addVallBTC (){
//     //     setAmountBTC(amountBTC + 1)
//     // }
//     // function minusVallBTC (){
//     //     if(amountBTC > 0){
//     //         setAmountBTC(amountBTC - 1)
//     //     }
//     // }
//     // // ----------------------------------------------------
//     // //USD
//     // let toAmountUSD, fromAmountUSD
//     // if(amountInFromCurrencyUSD){
//     //   fromAmountUSD = amountUSD
//     //   toAmountUSD = amountUSD * exchangeRateUSD
//     // } else{
//     //   toAmountUSD = amountUSD
//     //   fromAmountUSD = amountUSD / exchangeRateUSD
//     // }
//     // function addVallUSD (){
//     //     setAmountUSD(amountUSD + 1)
//     // }
//     // function minusVallUSD (){
//     //     if(amountUSD > 0){
//     //         setAmountUSD(amountUSD - 1)
//     //     }
//     // }
//     // // ----------------------------------------------------
//     // //GBP
//     // let toAmountGBP, fromAmountGBP
//     // if(amountInFromCurrencyGBP){
//     //   fromAmountGBP = amountGBP
//     //   toAmountGBP = amountGBP * exchangeRateGBP
//     // } else{
//     //   toAmountGBP = amountGBP
//     //   fromAmountGBP = amountGBP / exchangeRateGBP
//     // }
//     // function addVallGBP (){
//     //     setAmountGBP(amountGBP + 1)
//     // }
//     // function minusVallGBP (){
//     //     if(amountGBP > 0){
//     //         setAmountGBP(amountGBP - 1)
//     //     }
//     // }
//     // // ----------------------------------------------------
//     // //KWD
//     // let toAmountKWD, fromAmountKWD
//     // if(amountInFromCurrencyKWD){
//     //   fromAmountKWD = amountKWD
//     //   toAmountKWD = amountKWD * exchangeRateKWD
//     // } else{
//     //   toAmountKWD = amountKWD
//     //   fromAmountKWD = amountKWD / exchangeRateKWD
//     // }
//     // function addVallKWD (){
//     //     setAmountKWD(amountKWD + 1)
//     // }
//     // function minusVallKWD (){
//     //     if(amountKWD > 0){
//     //         setAmountKWD(amountKWD - 1)
//     //     }
//     // }
//     // ----------------------------------------------------

//     useEffect(() => {
//         // fetch(BASE_URL)
//         //   .then(res => res.json())
//         //   .then(data => {
//         //     const firstCurrency = Object.keys(data.rates)[0]
//         //     setCurrencyOptions([data.base, ...Object.keys(data.rates) ])
//         //     setFromCurrency(data.base)
//         //     setToCurrency(firstCurrency)
//         //     setExchangeRate(data.rates[firstCurrency])
//         //     // ----------------------------------------------------
//         //     if(toCurrencySearchebuyV1 == "MAD"){
//         //       const firstSearchCurrencyVal = Object.keys(data.rates)[91]
//         //     }else if(toCurrencySearchebuyV1 == "AED"){
//         //       const firstSearchCurrencyVal = Object.keys(data.rates)[0]
//         //     }else if(toCurrencySearchebuyV1 == "AFN"){
//         //       const firstSearchCurrencyVal = Object.keys(data.rates)[1]
//         //     }else if(toCurrencySearchebuyV1 == "ALL"){
//         //       const firstSearchCurrencyVal = Object.keys(data.rates)[2]
//         //     }else if(toCurrencySearchebuyV1 == "AMD"){
//         //       const firstSearchCurrencyVal = Object.keys(data.rates)[3]
//         //     }else if(toCurrencySearchebuyV1 == "ANG"){
//         //       const firstSearchCurrencyVal = Object.keys(data.rates)[4]
//         //     }else if(toCurrencySearchebuyV1 == "AOA"){
//         //       const firstSearchCurrencyVal = Object.keys(data.rates)[5]
//         //     }else if(toCurrencySearchebuyV1 == "ARS"){
//         //       const firstSearchCurrencyVal = Object.keys(data.rates)[6]
//         //     }else if(toCurrencySearchebuyV1 == "AUD"){
//         //       const firstSearchCurrencyVal = Object.keys(data.rates)[7]
//         //     }else if(toCurrencySearchebuyV1 == "AWG"){
//         //       const firstSearchCurrencyVal = Object.keys(data.rates)[8]
//         //     }else if(toCurrencySearchebuyV1 == "BTC"){
//         //       const firstSearchCurrencyVal = Object.keys(data.rates)[21]
//         //     }else if(toCurrencySearchebuyV1 == "USD"){
//         //       const firstSearchCurrencyVal = Object.keys(data.rates)[149]
//         //     }else if(toCurrencySearchebuyV1 == "GBP"){
//         //       const firstSearchCurrencyVal = Object.keys(data.rates)[49]
//         //     }else if(toCurrencySearchebuyV1 == "KWD"){
//         //       const firstSearchCurrencyVal = Object.keys(data.rates)[80]
//         //     }




//         //     const firstCurrencyVal = Object.keys(data.rates)[91]
//         //     // const firstAEDCurrencyVal = Object.keys(data.rates)[0]
//         //     // const firstAFNCurrencyVal = Object.keys(data.rates)[1]
//         //     // const firstALLCurrencyVal = Object.keys(data.rates)[2]
//         //     // const firstAMDCurrencyVal = Object.keys(data.rates)[3]
//         //     // const firstANGCurrencyVal = Object.keys(data.rates)[4]
//         //     // const firstAOACurrencyVal = Object.keys(data.rates)[5]
//         //     // const firstARSCurrencyVal = Object.keys(data.rates)[6]
//         //     // const firstAUDCurrencyVal = Object.keys(data.rates)[7]
//         //     // const firstAWGCurrencyVal = Object.keys(data.rates)[8]
//         //     // const firstBTCCurrencyVal = Object.keys(data.rates)[21]
//         //     // const firstUSDCurrencyVal = Object.keys(data.rates)[149]
//         //     // const firstGBPCurrencyVal = Object.keys(data.rates)[49]
//         //     // const firstKWDCurrencyVal = Object.keys(data.rates)[80]
//         //     // ----------------------------------------------------
//         //     setCurrencyOptionstoto([data.base, ...Object.keys(data.rates) ])
//         //     setFromCurrencytoto(data.base)
            

//         //     setToCurrencySearch(firstSearchCurrencyVal)


//         //     // setToCurrencyMAD(firstCurrencyVal)
//         //     // setToCurrencyAED(firstAEDCurrencyVal)
//         //     // setToCurrencyAFN(firstAFNCurrencyVal)
//         //     // setToCurrencyALL(firstALLCurrencyVal)
//         //     // setToCurrencyAMD(firstAMDCurrencyVal)
//         //     // setToCurrencyANG(firstANGCurrencyVal)
//         //     // setToCurrencyAOA(firstAOACurrencyVal)
//         //     // setToCurrencyARS(firstARSCurrencyVal)
//         //     // setToCurrencyAUD(firstAUDCurrencyVal)
//         //     // setToCurrencyAWG(firstAWGCurrencyVal)
//         //     // setToCurrencyBTC(firstBTCCurrencyVal)
//         //     // setToCurrencyUSD(firstUSDCurrencyVal)
//         //     // setToCurrencyGBP(firstGBPCurrencyVal)
//         //     // setToCurrencyKWD(firstKWDCurrencyVal)
//         //     // ----------------------------------------------------
//         //     setExchangeRateSearch(data.rates[firstSearchCurrencyVal])

//         //     setExchangeRateMAD(data.rates[firstCurrencyVal])
//         //     // setExchangeRateAED(data.rates[firstAEDCurrencyVal])
//         //     // setExchangeRateAFN(data.rates[firstAFNCurrencyVal])
//         //     // setExchangeRateALL(data.rates[firstALLCurrencyVal])
//         //     // setExchangeRateAMD(data.rates[firstAMDCurrencyVal])
//         //     // setExchangeRateANG(data.rates[firstANGCurrencyVal])
//         //     // setExchangeRateAOA(data.rates[firstAOACurrencyVal])
//         //     // setExchangeRateARS(data.rates[firstARSCurrencyVal])
//         //     // setExchangeRateAUD(data.rates[firstAUDCurrencyVal])
//         //     // setExchangeRateAWG(data.rates[firstAWGCurrencyVal])
//         //     // setExchangeRateBTC(data.rates[firstBTCCurrencyVal])
//         //     // setExchangeRateUSD(data.rates[firstUSDCurrencyVal])
//         //     // setExchangeRateGBP(data.rates[firstGBPCurrencyVal])
//         //     // setExchangeRateKWD(data.rates[firstKWDCurrencyVal])
//         //     // ----------------------------------------------------
//         //     getUserValue();
//         // });
//         getUserValuesalerdata();
//         getUserValue();
          
//     },[]);
//     let firstSearchCurrencyVal = 0;

//     const getUserValuesalerdata = () => {
//       fetch(BASE_URL)
//           .then(res => res.json())
//           .then(data => {
//             const firstCurrency = Object.keys(data.rates)[0]
//             setCurrencyOptions([data.base, ...Object.keys(data.rates) ])
//             setFromCurrency(data.base)
//             setToCurrency(firstCurrency)
//             setExchangeRate(data.rates[firstCurrency])
//             // ----------------------------------------------------
//             if(toCurrencySearchebuyV1 == "MAD"){
//               console.log("dkhal hna MAD");
//               firstSearchCurrencyVal = Object.keys(data.rates)[91]
//             }else if(toCurrencySearchebuyV1 == "AED"){
//               firstSearchCurrencyVal = Object.keys(data.rates)[0]
//             }else if(toCurrencySearchebuyV1 == "AFN"){
//               firstSearchCurrencyVal = Object.keys(data.rates)[1]
//             }else if(toCurrencySearchebuyV1 == "ALL"){
//               firstSearchCurrencyVal = Object.keys(data.rates)[2]
//             }else if(toCurrencySearchebuyV1 == "AMD"){
//               firstSearchCurrencyVal = Object.keys(data.rates)[3]
//             }else if(toCurrencySearchebuyV1 == "ANG"){
//               firstSearchCurrencyVal = Object.keys(data.rates)[4]
//             }else if(toCurrencySearchebuyV1 == "AOA"){
//               firstSearchCurrencyVal = Object.keys(data.rates)[5]
//             }else if(toCurrencySearchebuyV1 == "ARS"){
//               firstSearchCurrencyVal = Object.keys(data.rates)[6]
//             }else if(toCurrencySearchebuyV1 == "AUD"){
//               firstSearchCurrencyVal = Object.keys(data.rates)[7]
//             }else if(toCurrencySearchebuyV1 == "AWG"){
//               firstSearchCurrencyVal = Object.keys(data.rates)[8]
//             }else if(toCurrencySearchebuyV1 == "BTC"){
//               console.log("dkhal hna  2");
//               firstSearchCurrencyVal = Object.keys(data.rates)[21]
//             }else if(toCurrencySearchebuyV1 == "USD"){
//               firstSearchCurrencyVal = Object.keys(data.rates)[149]
//             }else if(toCurrencySearchebuyV1 == "GBP"){
//               firstSearchCurrencyVal = Object.keys(data.rates)[49]
//             }else if(toCurrencySearchebuyV1 == "KWD"){
//               firstSearchCurrencyVal = Object.keys(data.rates)[80]
//             }




//             const firstCurrencyVal = Object.keys(data.rates)[91]
//             // const firstAEDCurrencyVal = Object.keys(data.rates)[0]
//             // const firstAFNCurrencyVal = Object.keys(data.rates)[1]
//             // const firstALLCurrencyVal = Object.keys(data.rates)[2]
//             // const firstAMDCurrencyVal = Object.keys(data.rates)[3]
//             // const firstANGCurrencyVal = Object.keys(data.rates)[4]
//             // const firstAOACurrencyVal = Object.keys(data.rates)[5]
//             // const firstARSCurrencyVal = Object.keys(data.rates)[6]
//             // const firstAUDCurrencyVal = Object.keys(data.rates)[7]
//             // const firstAWGCurrencyVal = Object.keys(data.rates)[8]
//             // const firstBTCCurrencyVal = Object.keys(data.rates)[21]
//             // const firstUSDCurrencyVal = Object.keys(data.rates)[149]
//             // const firstGBPCurrencyVal = Object.keys(data.rates)[49]
//             // const firstKWDCurrencyVal = Object.keys(data.rates)[80]
//             // ----------------------------------------------------
//             setCurrencyOptionstoto([data.base, ...Object.keys(data.rates) ])
//             setFromCurrencytoto(data.base)
            

//             setToCurrencySearch(firstSearchCurrencyVal)


//             // setToCurrencyMAD(firstCurrencyVal)
//             // setToCurrencyAED(firstAEDCurrencyVal)
//             // setToCurrencyAFN(firstAFNCurrencyVal)
//             // setToCurrencyALL(firstALLCurrencyVal)
//             // setToCurrencyAMD(firstAMDCurrencyVal)
//             // setToCurrencyANG(firstANGCurrencyVal)
//             // setToCurrencyAOA(firstAOACurrencyVal)
//             // setToCurrencyARS(firstARSCurrencyVal)
//             // setToCurrencyAUD(firstAUDCurrencyVal)
//             // setToCurrencyAWG(firstAWGCurrencyVal)
//             // setToCurrencyBTC(firstBTCCurrencyVal)
//             // setToCurrencyUSD(firstUSDCurrencyVal)
//             // setToCurrencyGBP(firstGBPCurrencyVal)
//             // setToCurrencyKWD(firstKWDCurrencyVal)
//             // ----------------------------------------------------
//             setExchangeRateSearch(data.rates[firstSearchCurrencyVal])

//             setExchangeRateMAD(data.rates[firstCurrencyVal])
//             // setExchangeRateAED(data.rates[firstAEDCurrencyVal])
//             // setExchangeRateAFN(data.rates[firstAFNCurrencyVal])
//             // setExchangeRateALL(data.rates[firstALLCurrencyVal])
//             // setExchangeRateAMD(data.rates[firstAMDCurrencyVal])
//             // setExchangeRateANG(data.rates[firstANGCurrencyVal])
//             // setExchangeRateAOA(data.rates[firstAOACurrencyVal])
//             // setExchangeRateARS(data.rates[firstARSCurrencyVal])
//             // setExchangeRateAUD(data.rates[firstAUDCurrencyVal])
//             // setExchangeRateAWG(data.rates[firstAWGCurrencyVal])
//             // setExchangeRateBTC(data.rates[firstBTCCurrencyVal])
//             // setExchangeRateUSD(data.rates[firstUSDCurrencyVal])
//             // setExchangeRateGBP(data.rates[firstGBPCurrencyVal])
//             // setExchangeRateKWD(data.rates[firstKWDCurrencyVal])
//             // ----------------------------------------------------
//             // getUserValue();
//         });
//     }
    


//     // -----get profil value----
//     const getUserValue = async () => {
//         await axios.get(`https://foreexbackend.herokuapp.com/api/user/info/${userData.email}`).then((Userdata) => {
//             console.log("--email for sold ---");
//             console.log(userData.email),
//             console.log("----------");

//             // SetWallet(walletdata.data.walletSold)
//             // SetSold(walletdata.data.sold)
//             // totalSold
//             setTotalSold(Userdata.data.sold);
//             setUsernameVal(Userdata.data.username)


//             if(toCurrencySearchebuyV1 == "MAD"){
//               setSoldSearch(Userdata.data.SoldMAD.SoldMADdeposit);
//               setSoldSearchbuy(Userdata.data.SoldMAD.SoldMADCryptobuy);
//             }else if(toCurrencySearchebuyV1 == "AED"){
//               setSoldSearch(Userdata.data.SoldAED.SoldAEDdeposit);
//               setSoldSearchbuy(Userdata.data.SoldAED.SoldAEDCryptobuy);
//             }else if(toCurrencySearchebuyV1 == "AFN"){
//               setSoldSearch(Userdata.data.SoldAFN.SoldAFNdeposit);
//               setSoldSearchbuy(Userdata.data.SoldAFN.SoldAFNCryptobuy);
//             }else if(toCurrencySearchebuyV1 == "ALL"){
//               setSoldSearch(Userdata.data.SoldALL.SoldALLdeposit);
//               setSoldSearchbuy(Userdata.data.SoldALL.SoldALLCryptobuy);
//             }else if(toCurrencySearchebuyV1 == "AMD"){
//               setSoldSearch(Userdata.data.SoldAMD.SoldAMDdeposit);
//               setSoldSearchbuy(Userdata.data.SoldAMD.SoldAMDCryptobuy);
//             }else if(toCurrencySearchebuyV1 == "ANG"){
//               setSoldSearch(Userdata.data.SoldANG.SoldANGdeposit);
//               setSoldSearchbuy(Userdata.data.SoldANG.SoldANGCryptobuy);
//             }else if(toCurrencySearchebuyV1 == "AOA"){
//               setSoldSearch(Userdata.data.SoldAOA.SoldAOAdeposit);
//               setSoldSearchbuy(Userdata.data.SoldAOA.SoldAOACryptobuy);
//             }else if(toCurrencySearchebuyV1 == "ARS"){
//               setSoldSearch(Userdata.data.SoldARS.SoldARSdeposit);
//               setSoldSearchbuy(Userdata.data.SoldARS.SoldARSCryptobuy);
//             }else if(toCurrencySearchebuyV1 == "AUD"){
//               setSoldSearch(Userdata.data.SoldARUD.SoldARUDdeposit);
//               setSoldSearchbuy(Userdata.data.SoldARUD.SoldARUDCryptobuy);
//             }else if(toCurrencySearchebuyV1 == "AWG"){
//               setSoldSearch(Userdata.data.SoldAWG.SoldAWGdeposit);
//               setSoldSearchbuy(Userdata.data.SoldAWG.SoldAWGCryptobuy);
//             }else if(toCurrencySearchebuyV1 == "BTC"){
//               setSoldSearch(Userdata.data.SoldBTC.SoldBTCdeposit);
//               setSoldSearchbuy(Userdata.data.SoldBTC.SoldBTCCryptobuy);
//             }else if(toCurrencySearchebuyV1 == "USD"){
//               setSoldSearch(Userdata.data.SoldUSD.SoldUSDdeposit);
//               setSoldSearchbuy(Userdata.data.SoldUSD.SoldUSDCryptobuy);
//             }else if(toCurrencySearchebuyV1 == "GBP"){
//               setSoldSearch(Userdata.data.SoldGBP.SoldGBPdeposit);
//               setSoldSearchbuy(Userdata.data.SoldGBP.SoldGBPCryptobuy);
//             }else if(toCurrencySearchebuyV1 == "KWD"){
//               setSoldSearch(Userdata.data.SoldKWD.SoldKWDdeposit);
//               setSoldSearchbuy(Userdata.data.SoldKWD.SoldKWDCryptobuy);
//             }


//             // setSoldMAD(Userdata.data.SoldMAD.SoldMADdeposit);
//             // setSoldMADbuy(Userdata.data.SoldMAD.SoldMADCryptobuy);

//             // setSoldMAD(Userdata.data.SoldMAD.SoldMADdeposit);
//             // setSoldMADbuy(Userdata.data.SoldMAD.SoldMADCryptobuy);

//             // setSoldBTC(Userdata.data.SoldBTC.SoldBTCdeposit);
//             // setSoldBTCbuy(Userdata.data.SoldBTC.SoldBTCCryptobuy);

//             // setSoldUSD(Userdata.data.SoldUSD.SoldUSDdeposit);
//             // setSoldUSDbuy(Userdata.data.SoldUSD.SoldUSDCryptobuy);

//             // setSoldGBP(Userdata.data.SoldGBP.SoldGBPdeposit);
//             // setSoldGBPbuy(Userdata.data.SoldGBP.SoldGBPCryptobuy);

//             // setSoldKWD(Userdata.data.SoldKWD.SoldKWDdeposit);
//             // setSoldKWDbuy(Userdata.data.SoldKWD.SoldKWDCryptobuy);

//             // setSoldAED(Userdata.data.SoldAED.SoldAEDdeposit);
//             // setSoldAEDbuy(Userdata.data.SoldAED.SoldAEDCryptobuy);

//             // setSoldAFN(Userdata.data.SoldAFN.SoldAFNdeposit);
//             // setSoldAFNbuy(Userdata.data.SoldAFN.SoldAFNCryptobuy);

//             // setSoldALL(Userdata.data.SoldALL.SoldALLdeposit);
//             // setSoldALLbuy(Userdata.data.SoldALL.SoldALLCryptobuy);

//             // setSoldAMD(Userdata.data.SoldAMD.SoldAMDdeposit);
//             // setSoldAMDbuy(Userdata.data.SoldAMD.SoldAMDCryptobuy);

//             // setSoldANG(Userdata.data.SoldANG.SoldANGdeposit);
//             // setSoldANGbuy(Userdata.data.SoldANG.SoldANGCryptobuy);

//             // setSoldAOA(Userdata.data.SoldAOA.SoldAOAdeposit);
//             // setSoldAOAbuy(Userdata.data.SoldAOA.SoldAOACryptobuy);

//             // setSoldARS(Userdata.data.SoldARS.SoldARSdeposit);
//             // setSoldARSbuy(Userdata.data.SoldARS.SoldARSCryptobuy);


//         })
//         .catch((e) => {
//             console.log(e)
//         })
//     }
//     // ----- end get profil value----

//     // ---Start Buy---
//     // const buy = (sa) => {
//     // const buyMAD = () => {
//     //     if(amountMAD > totalSold){
//     //         // console.log("TCH : " , amountMAD);

//     //         Alert.alert('Tcha rayeh a 3chiri');
//     //     }else{
//     //         // setCrypto("MAD");
//     //         // setSoldBuy(amountMAD);
//     //         crypto ="MAD";
//     //         soldBuy = amountMAD;
//     //         soldCryptobuy = (amountMAD / exchangeRateMAD);
            
//     //         console.log('amountMAD : ',amountMAD);
//     //         console.log('totalSold : ',totalSold);
            
//     //         console.log('------------');
//     //         console.log('crypto:',crypto);
//     //         console.log('soldBuy:',soldBuy);
//     //         console.log('soldCryptobuy:',soldCryptobuy)
//     //         console.log('------------');
//     //         buyCurency();

//     //     }
        

//     // };

//     const updateNewSold = () => {
//       toCurrencySearchebuyV1
//     }
    

//     const buySearch = () => {
//       if(amountSearch > totalSold){
//           // console.log("TCH : " , amountMAD);

//           Alert.alert('Tcha rayeh a 3chiri');
//       }else{
//           // setCrypto("MAD");
//           // setSoldBuy(amountMAD);
//           crypto = toCurrencySearchebuyV1;
//           soldBuy = amountSearch;
//           soldCryptobuy = (amountSearch / exchangeRateSearch);
          
//           console.log('amountSearch : ',amountSearch);
//           console.log('totalSold : ',totalSold);
          
//           console.log('------------');
//           console.log('crypto:',toCurrencySearchebuyV1);
//           console.log('soldBuy:',soldBuy);
//           console.log('soldCryptobuy:',soldCryptobuy)
//           console.log('------------');
//           buyCurency();

//       }
      

//   };

//     const buyCurency = () => {
//         let GetUserData = {email: userData.email, Crypto:toCurrencySearchebuyV1,SoldDeposit:soldBuy,SoldCryptobuy:soldCryptobuy}

//         axios.post("https://foreexbackend.herokuapp.com/api/user/buyCrypto", GetUserData).then(() => {
//             console.log("data updated");
//             alert('Buy completed successfully');
//             setSoldSearch(soldSearch +soldBuy );
//             setSoldSearchbuy(soldSearch * exchangeRateSearch );
//             onRefresh();
//         })
//         .catch((e) => {
//         alert('you have not money')
//         })
//     }

//     // End buy---


//     // start sell----

//     // const sellMAD = () => {
//     //     if(amountMAD > soldMADbuy){
//     //         // console.log("TCH : " , amountMAD);

//     //         Alert.alert('Tcha rayeh a 3chiri');
//     //     }else{
//     //         // setCrypto("MAD");
//     //         // setSoldBuy(amountMAD);
//     //         crypto ="MAD";
//     //         soldBuy = parseFloat(amountMAD) * parseFloat(exchangeRateMAD);
//     //         newSoldCryptobuy = parseFloat(soldMADbuy) - parseFloat(amountMAD);
//     //         newSoldCryptoDeposit = parseFloat(soldMAD / soldMADbuy) *  parseFloat(newSoldCryptobuy);

//     //         console.log("crypto : ",crypto);
//     //         console.log("------------------------");
//     //         console.log("value SELL : ",amountMAD);
//     //         console.log("------------------------");
//     //         console.log("last value diposit : ",soldMADbuy);
//     //         console.log("------------------------");
//     //         console.log("newSoldMADCryptobuy jdid dyal MAD : ",newSoldCryptobuy);
//     //         console.log("------------------------");
//     //         console.log("soldBuy li radi ytzad EURO : ",soldBuy);
//     //         console.log("------------------------");
//     //         console.log("newSold EURO deposit : ",newSoldCryptoDeposit);
//     //         console.log("------------------------");
//     //         console.log("newSold total deposit + binif : ",soldBuy + totalSold);
//     //         sellCurency();

//     //     }
        

//     // };

//     const sellSearch = () => {
//       if(amountSearch > soldSearchbuy){
//           // console.log("TCH : " , amountMAD);

//           Alert.alert('Tcha rayeh a 3chiri');
//       }else{
//           // setCrypto("MAD");
//           // setSoldBuy(amountMAD);
//           crypto = toCurrencySearchebuyV1;
//           soldBuy = parseFloat(amountSearch) * parseFloat(exchangeRateSearch);
//           newSoldCryptobuy = parseFloat(soldSearchbuy) - parseFloat(amountSearch);
//           newSoldCryptoDeposit = parseFloat(soldSearch / soldSearchbuy) *  parseFloat(newSoldCryptobuy);

//           console.log("crypto : ",toCurrencySearchebuyV1);
//           console.log("------------------------");
//           console.log("value SELL : ",amountSearch);
//           console.log("------------------------");
//           console.log("last value diposit : ",soldSearchbuy);
//           console.log("------------------------");
//           console.log("newSoldMADCryptobuy jdid dyal Search : ",newSoldCryptobuy);
//           console.log("------------------------");
//           console.log("soldBuy li radi ytzad EURO : ",soldBuy);
//           console.log("------------------------");
//           console.log("newSold EURO deposit : ",newSoldCryptoDeposit);
//           console.log("------------------------");
//           console.log("newSold total deposit + binif : ",soldBuy + totalSold);
//           sellCurency();

//       }
      

//   };

//     const sellCurency = () => {
//         let GetUserDataSell = {email: userData.email, Crypto:toCurrencySearchebuyV1,newSoldDeposit:newSoldCryptoDeposit,newSoldCryptobuy:newSoldCryptobuy,newSoldTotal: parseFloat(soldBuy + totalSold) }

//         axios.post("https://foreexbackend.herokuapp.com/api/user/sellCrypto", GetUserDataSell).then(() => {
//             console.log("data updated");
//             alert('Sale completed successfully');
//         })
//         .catch((e) => {
//         alert('you have not money')
//         })
//     }

    

//     // const [refreshing, setRefreshing] = React.useState(false);
//     // const onRefresh = React.useCallback(() => {
//     //     setRefreshing(true)

//     //     wait(2000).then(() => {
//     //         setRefreshing(false)
//     //         //  setContent
//     //     })
//     // },[refreshing])

//     const wait = (timeout) => {
//         return new Promise(resolve => setTimeout(resolve, timeout));
//     }

//     const [refreshing, setRefreshing] = React.useState(false);
//     const onRefresh = React.useCallback(() => {
//         setRefreshing(true);
//         wait(2000).then(() => {
//             setRefreshing(false);
//             currencySearch,exchangeRateSearchV1,soldSearchebuyV1,fromCurrencySearchebuyV1,toCurrencySearchebuyV1 = route.params;
//             getUserValuesalerdata();
//             getUserValue();
//             setSoldSearch(soldSearch +soldBuy );
//             setSoldSearchbuy(soldSearch * exchangeRateSearch );
//         });
//     }, []);




//     // end bsell



//     // ----------------------------------------------------
//     return (
//         <SafeAreaView
//             style={{
//                 backgroundColor:COLORS.white,
//                 flex:1,
//             }}
            
//         >
//             {/* <View>
//                 <Text> Pull Down to REfresh</Text>
//             </View> */}
//             <ScrollView
//                 // RefreshControl={
//                 //     <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
//                 // }
//                 refreshControl={
//                     <RefreshControl
//                       refreshing={refreshing}
//                       onRefresh={onRefresh}
//                     />
//                   }
//             >
//                 {/* <Text> Pull Down to REfresh</Text> */}
//                 {/* <View style={style.header} >
//                     <Icon name="arrow-back-ios" size={28} />
//                     <Text style={{fontSize:20,fontWeight:'bold'}}> Cart </Text>
//                 </View> */}
//                 <View style={{
//                     justifyContent:'center',
//                     alignItems:'center',
//                     marginVertical: 10,
//                     marginHorizontal: 20,
//                     paddingHorizontal: 10,
//                     // backgroundColor:'#95a5a6'
//                 }}>
//                     <Text style={{fontSize:17,fontWeight:'bold'}}>Banque Centrale du Maroc </Text>
//                     <Text style={{fontSize:17,fontWeight:'bold'}}>Welcom  {usernameVal}</Text>
//                     <Text style={{fontSize:17,fontWeight:'bold'}}>Total mony Deposit : {(totalSold).toFixed(4)} €</Text>
                    
//                 </View>
//                 {/* ---------------------------------------------------- */}
//                 {/* ---------------------------------------------------- */}




//                 <ScrollView style={style.scrollView}>
//                     {/* START V2 MAD */}

//                     {/* 1 - START MAD */}
//                     <View style={style.cartCard1}>
//                         <View style={{
//                                 backgroundColor: '#dcdde1',
//                                 justifyContent:'center',
//                                 alignItems:'center',
//                                 // marginVertical: 10,
//                                 // marginHorizontal: 20,
//                                 paddingHorizontal: 10,
//                                 borderBottomLeftRadius: 10,
//                                 borderBottomRightRadius: 10,
//                             }}
//                         >
//                             <Text style={{fontSize:16,fontWeight:'bold'}}>Total Euro Deposits in {toCurrencySearchebuyV1} : {(soldSearch).toFixed(2)} €</Text>
//                             <Text style={{fontSize:17,fontWeight:'bold'}}>Total {toCurrencySearchebuyV1} buyer : {(soldSearchbuy).toFixed(4)}</Text>
//                             <Text style={{fontSize:17,fontWeight:'bold'}}>current EURO : {(soldSearchbuy * exchangeRateSearch).toFixed(4)}</Text>
//                             <Text style={{fontSize:17,fontWeight:'bold'}}>current {toCurrencySearchebuyV1} : {((soldSearchbuy * exchangeRateSearch) * exchangeRateSearch).toFixed(4)}</Text>
//                             <Text style={{fontSize:17,fontWeight:'bold'}}>value of profit : {((soldSearchbuy * exchangeRateSearch)-(soldSearch)).toFixed(4)}€</Text>
//                         </View>
//                         <View style={style.cartCard2} >
//                             <View style={{
//                                 height:100,
//                                 marginLeft:10,
//                                 paddingVertical:20,
//                                 flex:1,
//                                 flexDirection: 'row',
//                                 justifyContent:'space-between'
//                             }} >
//                                 <View style={{flexDirection:'row'}} >
//                                     <View style={{alignItems:'center',justifyContent:'center'}}>
//                                         <Text style={{fontSize:17,fontWeight:'bold'}}>{fromCurrencytoto} : </Text>
//                                     </View>
//                                     <View style={{marginLeft:10}}>
//                                         <TextInput 
//                                             style={style.input}
//                                             // placeholder='new todo...'
//                                             keyboardType="numeric"
//                                             value={`${fromAmountSearch}`}
//                                             onChangeText={setAmountSearch}
//                                         />
//                                         <View style={{flexDirection:'row'}} >
//                                             <TouchableOpacity onPress={minusVallSearch}>
//                                                 <View style={style.actionBtn}>
//                                                     <Icon name="remove" size={25} color={COLORS.white} />
//                                                 </View>    
//                                             </TouchableOpacity>
//                                             <Text> </Text>
//                                             <TouchableOpacity onPress={addVallSearch}>
//                                                 <View style={style.actionBtn}>
//                                                     <Icon name="add" size={25} color={COLORS.white} />
//                                                 </View>    
//                                             </TouchableOpacity>
//                                         </View>
//                                     </View>
//                                 </View>
//                                 <View  style={{alignItems:'center',justifyContent:'center'}}>
//                                     <Icon name="swap-horizontal-circle" size={24} color="black"/>
//                                 </View>
//                                 <View style={{alignItems:'center',justifyContent:'center'}}>
//                                     <Text style={{fontWeight:'bold',fontSize:18}} >{toCurrencySearchebuyV1}</Text>
//                                     <Text style={{fontSize:13,color:COLORS.grey}} >=</Text>

//                                     <Text style={{fontSize:17,fontWeight:'bold'}} >{(toAmountSearch).toFixed(4)}</Text>
//                                 </View>
//                             </View>
//                         </View>
                        
//                         <View style={{
//                             // height:100,
//                             // marginLeft:10,
//                             // paddingVertical:20,
//                             flex:1,
//                             flexDirection: 'row',
//                             justifyContent:'space-between'
//                             // flexDirection: 'row',justifyContent:'space-between'
//                         }} >
//                             <TouchableOpacity onPress={buySearch}>
//                                 <View style={style.graphViewBuy}>
//                                     <Text style={{fontWeight:'bold',fontSize:18, color:COLORS.white}}>buy</Text>
//                                 </View>    
//                             </TouchableOpacity>
//                             <TouchableOpacity onPress={sellSearch}>
//                                 <View style={style.graphViewSell}>
//                                     <Text style={{fontWeight:'bold',fontSize:18, color:COLORS.white}}>sel</Text>
//                                 </View>    
//                             </TouchableOpacity>
//                         </View>
//                         <View>
//                             <TouchableOpacity onPress={webView}>
//                                 <View style={style.graphView}>
//                                     <Text style={{fontWeight:'bold',fontSize:18, color:COLORS.white}}>Graph</Text>
//                                 </View>    
//                             </TouchableOpacity>
//                         </View>
//                     </View>

//                     {/* 1 - END MAD */}

//                     {/* END V2 MAD */}
//                 </ScrollView>
//             </ScrollView>
//         </SafeAreaView>
//     );
// };

// const style = StyleSheet.create({
//     header: {
//         paddingVertical: 20,
//         flexDirection: 'row',
//         alignItems: 'center',
//         marginHorizontal: '20',
//     }, 
//     cartCard:{
//         height: 100,
//         elevation: 15,
//         borderRadius: 10,
//         backgroundColor: COLORS.white,
//         marginVertical: 10,
//         marginHorizontal: 20,
//         paddingHorizontal: 10,
//         flexDirection: 'row',
//         alignItems:'center',
//         paddingBottom:20
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
//     graphViewBuy: {
//         width: 100,
//         height: 60,
//         backgroundColor: COLORS.primary,
//         borderRadius:30,
//         // paddingHorizontal:5,
//         marginVertical: 10,
//         flexDirection:'row',
//         justifyContent:'center',
//         alignItems:'center',
//         marginRight: 50
//     },
//     graphViewSell: {
//         width: 100,
//         height: 60,
//         backgroundColor: COLORS.primary,
//         borderRadius:30,
//         // paddingHorizontal:5,
//         marginVertical: 10,
//         flexDirection:'row',
//         justifyContent:'center',
//         alignItems:'center',
//         marginLeft: 50
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
//     scrollView: {
//       backgroundColor: '#ecf0f1',
//       // marginHorizontal: 20,
//       padding:0,
//     //   marginTop:60,
//       marginBottom:2,
//     //   width: '80%',
//       // flexDirection: "column",
//     }
// });

// export default WalletScreen;






















































































































// VERSION 2 for home
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
import {Text, StyleSheet, View, Image,Alert,TouchableOpacity,TextInput,ScrollView,RefreshControl} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import COLORS from '../consts/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
// import AsyncStorage from '@react-native-community/async-storage';
import {UserContext} from '../context/UserContext';
import axios from "axios";
import LottieView from 'lottie-react-native';
import styled from "styled-components";


// const HomeScreen = ({navigation}) => {
const WalletScreen = ({ navigation, route }) => {

    const BASE_URL = 'http://api.exchangeratesapi.io/v1/latest?access_key=2739b2331b1010220a696b99d3d3e828';

    // let {toCurrencySearchebuyV2} = route.params;
    

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
    const [usernameVal, setUsernameVal] = useState("");
    

    const [soldMAD, setSoldMAD ] = useState(0);
    const [soldMADbuy, setSoldMADbuy] = useState(0);

    const [soldBTC, setSoldBTC ] = useState(0);
    const [soldBTCbuy, setSoldBTCbuy] = useState(0);

    const [soldUSD, setSoldUSD ] = useState(0);
    const [soldUSDbuy, setSoldUSDbuy] = useState(0);

    const [soldGBP, setSoldGBP ] = useState(0);
    const [soldGBPbuy, setSoldGBPbuy] = useState(0);

    const [soldKWD, setSoldKWD ] = useState(0);
    const [soldKWDbuy, setSoldKWDbuy] = useState(0);

    const [soldAED, setSoldAED ] = useState(0);
    const [soldAEDbuy, setSoldAEDbuy] = useState(0);

    const [soldAFN, setSoldAFN ] = useState(0);
    const [soldAFNbuy, setSoldAFNbuy] = useState(0);

    const [soldALL, setSoldALL ] = useState(0);
    const [soldALLbuy, setSoldALLbuy] = useState(0);

    const [soldAMD, setSoldAMD ] = useState(0);
    const [soldAMDbuy, setSoldAMDbuy] = useState(0);

    const [soldANG, setSoldANG ] = useState(0);
    const [soldANGbuy, setSoldANGbuy] = useState(0);

    const [soldAOA, setSoldAOA ] = useState(0);
    const [soldAOAbuy, setSoldAOAbuy] = useState(0);

    const [soldARS, setSoldARS ] = useState(0);
    const [soldARSbuy, setSoldARSbuy] = useState(0);

    const [soldAUD, setSoldAUD ] = useState(0);
    const [soldAUDbuy, setSoldAUDbuy] = useState(0);

    const [soldAWG, setSoldAWG ] = useState(0);
    const [soldAWGbuy, setSoldAWGbuy] = useState(0);



    // 
    const [_, setUser] = useContext(UserContext);

    // const [loading, setLoading] = useState(true);
    const [loading, setLoading] = useState(false);

    // const [crypto, setCrypto ] = useState("");
    // const [soldBuy, setSoldBuy] = useState(0);
    // let crypto = "";
    // let soldBuy = 0;
    // let soldCryptobuy = 0;

    let crypto ="";
    let soldBuy = 0;
    let soldCryptobuy = 0
    let newSoldCryptobuy = 0;
    let newSoldCryptoDeposit =0;



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


        
        // setUser({
        //     isLoggedIn: true,
        // })
        // setUser((state) => ({ ...state,isLoggedIn: true}));
        setLoading(true)
        try{
            // setLoading(true)
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

                // setUser((state) => ({ ...state,isLoggedIn: false}));
                // setUser({
                    
                //     isLoggedIn: false,
                //     ...state,
                // })
                // setUser((state) => ({ isLoggedIn: false,...state}));
                
            });
        }catch{
            alert(error.message)
        }




        
        // finally{
        //         setLoading(false);
        // }  
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
            setUsernameVal(Userdata.data.username)

            setSoldMAD(Userdata.data.SoldMAD.SoldMADdeposit);
            setSoldMADbuy(Userdata.data.SoldMAD.SoldMADCryptobuy);

            setSoldBTC(Userdata.data.SoldBTC.SoldBTCdeposit);
            setSoldBTCbuy(Userdata.data.SoldBTC.SoldBTCCryptobuy);

            setSoldUSD(Userdata.data.SoldUSD.SoldUSDdeposit);
            setSoldUSDbuy(Userdata.data.SoldUSD.SoldUSDCryptobuy);

            setSoldGBP(Userdata.data.SoldGBP.SoldGBPdeposit);
            setSoldGBPbuy(Userdata.data.SoldGBP.SoldGBPCryptobuy);

            setSoldKWD(Userdata.data.SoldKWD.SoldKWDdeposit);
            setSoldKWDbuy(Userdata.data.SoldKWD.SoldKWDCryptobuy);

            setSoldAED(Userdata.data.SoldAED.SoldAEDdeposit);
            setSoldAEDbuy(Userdata.data.SoldAED.SoldAEDCryptobuy);

            setSoldAFN(Userdata.data.SoldAFN.SoldAFNdeposit);
            setSoldAFNbuy(Userdata.data.SoldAFN.SoldAFNCryptobuy);

            setSoldALL(Userdata.data.SoldALL.SoldALLdeposit);
            setSoldALLbuy(Userdata.data.SoldALL.SoldALLCryptobuy);

            setSoldAMD(Userdata.data.SoldAMD.SoldAMDdeposit);
            setSoldAMDbuy(Userdata.data.SoldAMD.SoldAMDCryptobuy);

            setSoldANG(Userdata.data.SoldANG.SoldANGdeposit);
            setSoldANGbuy(Userdata.data.SoldANG.SoldANGCryptobuy);

            setSoldAOA(Userdata.data.SoldAOA.SoldAOAdeposit);
            setSoldAOAbuy(Userdata.data.SoldAOA.SoldAOACryptobuy);

            setSoldARS(Userdata.data.SoldARS.SoldARSdeposit);
            setSoldARSbuy(Userdata.data.SoldARS.SoldARSCryptobuy);

            setSoldAUD(Userdata.data.SoldAUD.SoldAUDdeposit);
            setSoldAUDbuy(Userdata.data.SoldAUD.SoldAUDCryptobuy);

            setSoldAWG(Userdata.data.SoldAWG.SoldAWGdeposit);
            setSoldAWGbuy(Userdata.data.SoldAWG.SoldAWGCryptobuy);

            setLoading(false)
            


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
            // navigation.navigate("Home");

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
    const buyBTC = () => {
      if(amountBTC > totalSold){
          Alert.alert('Tcha rayeh a 3chiri');
      }else{
          // setCrypto("MAD");
          // setSoldBuy(amountMAD);
          crypto ="BTC";
          soldBuy = amountBTC;
          soldCryptobuy = (amountBTC / exchangeRateBTC);
          
          console.log('amountBTC : ',amountBTC);
          console.log('totalSold : ',totalSold);
          
          console.log('------------');
          console.log('crypto:',crypto);
          console.log('soldBuy:',soldBuy);
          console.log('soldCryptobuy:',soldCryptobuy)
          console.log('------------');
          buyCurency();
      }
    };

    const buyUSD = () => {
      if(amountUSD > totalSold){
          Alert.alert('Tcha rayeh a 3chiri');
      }else{
          // setCrypto("MAD");
          // setSoldBuy(amountMAD);
          crypto ="USD";
          soldBuy = amountUSD;
          soldCryptobuy = (amountUSD / exchangeRateUSD);
          
          console.log('amountUSD : ',amountUSD);
          console.log('totalSold : ',totalSold);
          
          console.log('------------');
          console.log('crypto:',crypto);
          console.log('soldBuy:',soldBuy);
          console.log('soldCryptobuy:',soldCryptobuy)
          console.log('------------');
          buyCurency();
      }
    };

    const buyGBP = () => {
      if(amountGBP > totalSold){
          Alert.alert('Tcha rayeh a 3chiri');
      }else{
          // setCrypto("MAD");
          // setSoldBuy(amountMAD);
          crypto ="GBP";
          soldBuy = amountGBP;
          soldCryptobuy = (amountGBP / exchangeRateGBP);
          
          console.log('amountGBP : ',amountGBP);
          console.log('totalSold : ',totalSold);
          
          console.log('------------');
          console.log('crypto:',crypto);
          console.log('soldBuy:',soldBuy);
          console.log('soldCryptobuy:',soldCryptobuy)
          console.log('------------');
          buyCurency();
      }
    };

    const buyKWD = () => {
      if(amountKWD > totalSold){
          Alert.alert('Tcha rayeh a 3chiri');
      }else{
          // setCrypto("MAD");
          // setSoldBuy(amountMAD);
          crypto ="KWD";
          soldBuy = amountKWD;
          soldCryptobuy = (amountKWD / exchangeRateKWD);
          
          console.log('amountKWD : ',amountKWD);
          console.log('totalSold : ',totalSold);
          
          console.log('------------');
          console.log('crypto:',crypto);
          console.log('soldBuy:',soldBuy);
          console.log('soldCryptobuy:',soldCryptobuy)
          console.log('------------');
          buyCurency();
      }
    };

    const buyAED = () => {
      if(amountAED > totalSold){
          Alert.alert('Tcha rayeh a 3chiri');
      }else{
          // setCrypto("MAD");
          // setSoldBuy(amountMAD);
          crypto ="AED";
          soldBuy = amountAED;
          soldCryptobuy = (amountAED / exchangeRateAED);
          
          console.log('amountAED : ',amountAED);
          console.log('totalSold : ',totalSold);
          
          console.log('------------');
          console.log('crypto:',crypto);
          console.log('soldBuy:',soldBuy);
          console.log('soldCryptobuy:',soldCryptobuy)
          console.log('------------');
          buyCurency();
      }
    };

    const buyAFN = () => {
      if(amountAFN > totalSold){
          Alert.alert('Tcha rayeh a 3chiri');
      }else{
          // setCrypto("MAD");
          // setSoldBuy(amountMAD);
          crypto ="AFN";
          soldBuy = amountAFN;
          soldCryptobuy = (amountAFN / exchangeRateAFN);
          
          console.log('amountAFN : ',amountAFN);
          console.log('totalSold : ',totalSold);
          
          console.log('------------');
          console.log('crypto:',crypto);
          console.log('soldBuy:',soldBuy);
          console.log('soldCryptobuy:',soldCryptobuy)
          console.log('------------');
          buyCurency();
      }
    };

    const buyALL = () => {
      if(amountALL > totalSold){
          Alert.alert('Tcha rayeh a 3chiri');
      }else{
          // setCrypto("MAD");
          // setSoldBuy(amountMAD);
          crypto ="ALL";
          soldBuy = amountALL;
          soldCryptobuy = (amountALL / exchangeRateALL);
          
          console.log('amountALL : ',amountALL);
          console.log('totalSold : ',totalSold);
          
          console.log('------------');
          console.log('crypto:',crypto);
          console.log('soldBuy:',soldBuy);
          console.log('soldCryptobuy:',soldCryptobuy)
          console.log('------------');
          buyCurency();
      }
    };

    const buyAMD = () => {
      if(amountAMD > totalSold){
          Alert.alert('Tcha rayeh a 3chiri');
      }else{
          // setCrypto("MAD");
          // setSoldBuy(amountMAD);
          crypto ="AMD";
          soldBuy = amountAMD;
          soldCryptobuy = (amountAMD / exchangeRateAMD);
          
          console.log('amountAMD : ',amountAMD);
          console.log('totalSold : ',totalSold);
          
          console.log('------------');
          console.log('crypto:',crypto);
          console.log('soldBuy:',soldBuy);
          console.log('soldCryptobuy:',soldCryptobuy)
          console.log('------------');
          buyCurency();
      }
    };

    const buyANG = () => {
      if(amountANG > totalSold){
          Alert.alert('Tcha rayeh a 3chiri');
      }else{
          // setCrypto("MAD");
          // setSoldBuy(amountMAD);
          crypto ="ANG";
          soldBuy = amountANG;
          soldCryptobuy = (amountANG / exchangeRateANG);
          
          console.log('amountANG : ',amountANG);
          console.log('totalSold : ',totalSold);
          
          console.log('------------');
          console.log('crypto:',crypto);
          console.log('soldBuy:',soldBuy);
          console.log('soldCryptobuy:',soldCryptobuy)
          console.log('------------');
          buyCurency();
      }
    };
    const buyAOA = () => {
      if(amountAOA > totalSold){
          Alert.alert('Tcha rayeh a 3chiri');
      }else{
          // setCrypto("MAD");
          // setSoldBuy(amountMAD);
          crypto ="AOA";
          soldBuy = amountAOA;
          soldCryptobuy = (amountAOA / exchangeRateAOA);
          
          console.log('amountAOA : ',amountAOA);
          console.log('totalSold : ',totalSold);
          
          console.log('------------');
          console.log('crypto:',crypto);
          console.log('soldBuy:',soldBuy);
          console.log('soldCryptobuy:',soldCryptobuy)
          console.log('------------');
          buyCurency();
      }
    };
    const buyARS = () => {
      if(amountARS > totalSold){
          Alert.alert('Tcha rayeh a 3chiri');
      }else{
          // setCrypto("MAD");
          // setSoldBuy(amountMAD);
          crypto ="ARS";
          soldBuy = amountARS;
          soldCryptobuy = (amountARS / exchangeRateARS);
          
          console.log('amountARS : ',amountARS);
          console.log('totalSold : ',totalSold);
          
          console.log('------------');
          console.log('crypto:',crypto);
          console.log('soldBuy:',soldBuy);
          console.log('soldCryptobuy:',soldCryptobuy)
          console.log('------------');
          buyCurency();
      }
    };
    const buyAUD = () => {
      if(amountAUD > totalSold){
          Alert.alert('Tcha rayeh a 3chiri');
      }else{
          // setCrypto("MAD");
          // setSoldBuy(amountMAD);
          crypto ="AUD";
          soldBuy = amountAUD;
          soldCryptobuy = (amountAUD / exchangeRateAUD);
          
          console.log('amountAUD : ',amountAUD);
          console.log('totalSold : ',totalSold);
          
          console.log('------------');
          console.log('crypto:',crypto);
          console.log('soldBuy:',soldBuy);
          console.log('soldCryptobuy:',soldCryptobuy)
          console.log('------------');
          buyCurency();
      }
    };
    const buyAWG = () => {
      if(amountAWG > totalSold){
          Alert.alert('Tcha rayeh a 3chiri');
      }else{
          // setCrypto("MAD");
          // setSoldBuy(amountMAD);
          crypto ="AWG";
          soldBuy = amountAWG;
          soldCryptobuy = (amountAWG / exchangeRateAWG);
          
          console.log('amountAWG : ',amountAWG);
          console.log('totalSold : ',totalSold);
          
          console.log('------------');
          console.log('crypto:',crypto);
          console.log('soldBuy:',soldBuy);
          console.log('soldCryptobuy:',soldCryptobuy)
          console.log('------------');
          buyCurency();
      }
    };

    const buyCurency = () => {
        let GetUserData = {email: userData.email, Crypto:crypto,SoldDeposit:soldBuy,SoldCryptobuy:soldCryptobuy}

        axios.post("https://foreexbackend.herokuapp.com/api/user/buyCrypto", GetUserData).then(() => {
            console.log("data updated");
            alert('Buy completed successfully');
            onRefresh();
        })
        .catch((e) => {
        alert('you have not money')
        })
    }

    // End buy---


    // start sell----

    const sellMAD = () => {
        if(amountMAD > soldMADbuy){
            // console.log("TCH : " , amountMAD);

            Alert.alert('Tcha rayeh a 3chiri');
        }else{
            // setCrypto("MAD");
            // setSoldBuy(amountMAD);
            crypto ="MAD";
            soldBuy = parseFloat(amountMAD) * parseFloat(exchangeRateMAD);
            newSoldCryptobuy = parseFloat(soldMADbuy) - parseFloat(amountMAD);
            newSoldCryptoDeposit = parseFloat(soldMAD / soldMADbuy) *  parseFloat(newSoldCryptobuy);

            console.log("crypto : ",crypto);
            console.log("------------------------");
            console.log("value SELL : ",amountMAD);
            console.log("------------------------");
            console.log("last value diposit : ",soldMADbuy);
            console.log("------------------------");
            console.log("newSoldMADCryptobuy jdid dyal MAD : ",newSoldCryptobuy);
            console.log("------------------------");
            console.log("soldBuy li radi ytzad EURO : ",soldBuy);
            console.log("------------------------");
            console.log("newSold EURO deposit : ",newSoldCryptoDeposit);
            console.log("------------------------");
            console.log("newSold total deposit + binif : ",soldBuy + totalSold);
            sellCurency();
            // 
            // REST API

            // 

            // newSoldMad = (soldMAD / soldMADbuy) * soldCryptosell;

            // soldCryptobuy = (amountMAD / exchangeRateMAD);
            
            // console.log('amountMAD : ',amountMAD);
            // console.log('totalSold : ',totalSold);
            
            // console.log('------------');
            // console.log('crypto:',crypto);
            // console.log('soldBuy:',soldBuy);
            // console.log('soldCryptobuy:',soldCryptobuy)
            // console.log('------------');
            // buyCurency();
            // navigation.navigate("Home");

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

    const sellBTC = () => {
      if(amountBTC > soldBTCbuy){
          // console.log("TCH : " , amountMAD);
          Alert.alert('Tcha rayeh a 3chiri');
      }else{
          // setCrypto("MAD");
          // setSoldBuy(amountMAD);
          crypto ="BTC";
          soldBuy = parseFloat(amountBTC) * parseFloat(exchangeRateBTC);
          newSoldCryptobuy = parseFloat(soldBTCbuy) - parseFloat(amountBTC);
          newSoldCryptoDeposit = parseFloat(soldBTC / soldBTCbuy) *  parseFloat(newSoldCryptobuy);

          console.log("crypto : ",crypto);
          console.log("------------------------");
          console.log("value SELL : ",amountBTC);
          console.log("------------------------");
          console.log("last value diposit : ",soldBTCbuy);
          console.log("------------------------");
          console.log("newSoldMADCryptobuy jdid dyal BTC : ",newSoldCryptobuy);
          console.log("------------------------");
          console.log("soldBuy li radi ytzad EURO : ",soldBuy);
          console.log("------------------------");
          console.log("newSold EURO deposit : ",newSoldCryptoDeposit);
          console.log("------------------------");
          console.log("newSold total deposit + binif : ",soldBuy + totalSold);
          sellCurency();
      }
    };

    const sellUSD = () => {
      if(amountUSD > soldUSDbuy){
          Alert.alert('Tcha rayeh a 3chiri');
      }else{
          crypto ="USD";
          soldBuy = parseFloat(amountUSD) * parseFloat(exchangeRateUSD);
          newSoldCryptobuy = parseFloat(soldUSDbuy) - parseFloat(amountUSD);
          newSoldCryptoDeposit = parseFloat(soldUSD / soldUSDbuy) *  parseFloat(newSoldCryptobuy);
          sellCurency();
      }
    };
    const sellGBP = () => {
      if(amountGBP > soldGBPbuy){
          Alert.alert('Tcha rayeh a 3chiri');
      }else{
          crypto ="GBP";
          soldBuy = parseFloat(amountGBP) * parseFloat(exchangeRateGBP);
          newSoldCryptobuy = parseFloat(soldGBPbuy) - parseFloat(amountGBP);
          newSoldCryptoDeposit = parseFloat(soldGBP / soldGBPbuy) *  parseFloat(newSoldCryptobuy);
          sellCurency();
      }
    };
    const sellKWD = () => {
      if(amountKWD > soldKWDbuy){
          Alert.alert('Tcha rayeh a 3chiri');
      }else{
          crypto ="KWD";
          soldBuy = parseFloat(amountKWD) * parseFloat(exchangeRateKWD);
          newSoldCryptobuy = parseFloat(soldKWDbuy) - parseFloat(amountKWD);
          newSoldCryptoDeposit = parseFloat(soldKWD / soldKWDbuy) *  parseFloat(newSoldCryptobuy);
          sellCurency();
      }
    };
    const sellAED = () => {
      if(amountAED > soldAEDbuy){
          Alert.alert('Tcha rayeh a 3chiri');
      }else{
          crypto ="AED";
          soldBuy = parseFloat(amountAED) * parseFloat(exchangeRateAED);
          newSoldCryptobuy = parseFloat(soldAEDbuy) - parseFloat(amountAED);
          newSoldCryptoDeposit = parseFloat(soldAED / soldAEDbuy) *  parseFloat(newSoldCryptobuy);
          sellCurency();
      }
    };
    const sellAFN = () => {
      if(amountAFN > soldAFNbuy){
          Alert.alert('Tcha rayeh a 3chiri');
      }else{
          crypto ="AFN";
          soldBuy = parseFloat(amountAFN) * parseFloat(exchangeRateAFN);
          newSoldCryptobuy = parseFloat(soldAFNbuy) - parseFloat(amountAFN);
          newSoldCryptoDeposit = parseFloat(soldAFN / soldAFNbuy) *  parseFloat(newSoldCryptobuy);
          sellCurency();
      }
    };
    const sellALL = () => {
      if(amountALL > soldALLbuy){
          Alert.alert('Tcha rayeh a 3chiri');
      }else{
          crypto ="ALL";
          soldBuy = parseFloat(amountALL) * parseFloat(exchangeRateALL);
          newSoldCryptobuy = parseFloat(soldALLbuy) - parseFloat(amountALL);
          newSoldCryptoDeposit = parseFloat(soldALL / soldALLbuy) *  parseFloat(newSoldCryptobuy);
          sellCurency();
      }
    };
    const sellAMD = () => {
      if(amountAMD > soldAMDbuy){
          Alert.alert('Tcha rayeh a 3chiri');
      }else{
          crypto ="AMD";
          soldBuy = parseFloat(amountAMD) * parseFloat(exchangeRateAMD);
          newSoldCryptobuy = parseFloat(soldAMDbuy) - parseFloat(amountAMD);
          newSoldCryptoDeposit = parseFloat(soldAMD / soldAMDbuy) *  parseFloat(newSoldCryptobuy);
          sellCurency();
      }
    };
    const sellANG = () => {
      if(amountANG > soldANGbuy){
          Alert.alert('Tcha rayeh a 3chiri');
      }else{
          crypto ="ANG";
          soldBuy = parseFloat(amountANG) * parseFloat(exchangeRateANG);
          newSoldCryptobuy = parseFloat(soldANGbuy) - parseFloat(amountANG);
          newSoldCryptoDeposit = parseFloat(soldANG / soldANGbuy) *  parseFloat(newSoldCryptobuy);
          sellCurency();
      }
    };
    const sellAOA = () => {
      if(amountAOA > soldAOAbuy){
          Alert.alert('Tcha rayeh a 3chiri');
      }else{
          crypto ="AOA";
          soldBuy = parseFloat(amountAOA) * parseFloat(exchangeRateAOA);
          newSoldCryptobuy = parseFloat(soldAOAbuy) - parseFloat(amountAOA);
          newSoldCryptoDeposit = parseFloat(soldAOA / soldAOAbuy) *  parseFloat(newSoldCryptobuy);
          sellCurency();
      }
    };
    const sellARS = () => {
      if(amountARS > soldARSbuy){
          Alert.alert('Tcha rayeh a 3chiri');
      }else{
          crypto ="ARS";
          soldBuy = parseFloat(amountARS) * parseFloat(exchangeRateARS);
          newSoldCryptobuy = parseFloat(soldARSbuy) - parseFloat(amountARS);
          newSoldCryptoDeposit = parseFloat(soldARS / soldARSbuy) *  parseFloat(newSoldCryptobuy);
          sellCurency();
      }
    };
    const sellAUD = () => {
      if(amountAUD > soldAUDbuy){
          Alert.alert('Tcha rayeh a 3chiri');
      }else{
          crypto ="AUD";
          soldBuy = parseFloat(amountAUD) * parseFloat(exchangeRateAUD);
          newSoldCryptobuy = parseFloat(soldAUDbuy) - parseFloat(amountAUD);
          newSoldCryptoDeposit = parseFloat(soldAUD / soldAUDbuy) *  parseFloat(newSoldCryptobuy);
          sellCurency();
      }
    };
    const sellAWG = () => {
      if(amountAWG > soldAWGbuy){
          Alert.alert('Tcha rayeh a 3chiri');
      }else{
          crypto ="AWG";
          soldBuy = parseFloat(amountAWG) * parseFloat(exchangeRateAWG);
          newSoldCryptobuy = parseFloat(soldAWGbuy) - parseFloat(amountAWG);
          newSoldCryptoDeposit = parseFloat(soldAWG / soldAWGbuy) *  parseFloat(newSoldCryptobuy);
          sellCurency();
      }
    };

    const sellCurency = () => {
        let GetUserDataSell = {email: userData.email, Crypto:crypto,newSoldDeposit:newSoldCryptoDeposit,newSoldCryptobuy:newSoldCryptobuy,newSoldTotal: parseFloat(soldBuy + totalSold) }

        axios.post("https://foreexbackend.herokuapp.com/api/user/sellCrypto", GetUserDataSell).then(() => {
            console.log("data updated");
            alert('Sale completed successfully');
            onRefresh();
        })
        .catch((e) => {
        alert('you have not money')
        })
    }

    const [currencySearchVal, setCurrencySearchVal] = useState();

    const buyAndSellMAD = async () => {
        navigation.navigate('Wallet',{currencySearch: 'MAD',exchangeRateSearchV1:exchangeRateMAD,soldSearchebuyV1:soldMADbuy,fromCurrencySearchebuyV1:fromCurrencytoto,toCurrencySearchebuyV1:toCurrencyMAD});
    }
    const buyAndSellBTC = async () => {
        navigation.navigate('Wallet',{currencySearch: 'BTC',exchangeRateSearchV1:exchangeRateBTC,soldSearchebuyV1:soldBTCbuy,fromCurrencySearchebuyV1:fromCurrencytoto,toCurrencySearchebuyV1:toCurrencyBTC});
    }
    const buyAndSellUSD = async () => {
        navigation.navigate('Wallet',{currencySearch: 'USD',exchangeRateSearchV1:exchangeRateUSD,soldSearchebuyV1:soldUSDbuy,fromCurrencySearchebuyV1:fromCurrencytoto,toCurrencySearchebuyV1:toCurrencyUSD});
    }
    const buyAndSellGBP = async () => {
        navigation.navigate('Wallet',{currencySearch: 'GBP',exchangeRateSearchV1:exchangeRateGBP,soldSearchebuyV1:soldGBPbuy,fromCurrencySearchebuyV1:fromCurrencytoto,toCurrencySearchebuyV1:toCurrencyGBP});
    }
    const buyAndSellKWD = async () => {
        navigation.navigate('Wallet',{currencySearch: 'KWD',exchangeRateSearchV1:exchangeRateKWD,soldSearchebuyV1:soldKWDbuy,fromCurrencySearchebuyV1:fromCurrencytoto,toCurrencySearchebuyV1:toCurrencyKWD});
    }
    const buyAndSellAED = async () => {
        navigation.navigate('Wallet',{currencySearch: 'AED',exchangeRateSearchV1:exchangeRateAED,soldSearchebuyV1:soldAEDbuy,fromCurrencySearchebuyV1:fromCurrencytoto,toCurrencySearchebuyV1:toCurrencyAED});
    }
    const buyAndSellAFN = async () => {
        navigation.navigate('Wallet',{currencySearch: 'AFN',exchangeRateSearchV1:exchangeRateAFN,soldSearchebuyV1:soldAFNbuy,fromCurrencySearchebuyV1:fromCurrencytoto,toCurrencySearchebuyV1:toCurrencyAFN});
    }
    const buyAndSellALL = async () => {
        navigation.navigate('Wallet',{currencySearch: 'ALL',exchangeRateSearchV1:exchangeRateALL,soldSearchebuyV1:soldALLbuy,fromCurrencySearchebuyV1:fromCurrencytoto,toCurrencySearchebuyV1:toCurrencyALL});
    }
    const buyAndSellAMD = async () => {
        navigation.navigate('Wallet',{currencySearch: 'AMD',exchangeRateSearchV1:exchangeRateAMD,soldSearchebuyV1:soldAMDbuy,fromCurrencySearchebuyV1:fromCurrencytoto,toCurrencySearchebuyV1:toCurrencyAMD});
    }
    const buyAndSellANG = async () => {
        navigation.navigate('Wallet',{currencySearch: 'ANG',exchangeRateSearchV1:exchangeRateANG,soldSearchebuyV1:soldANGbuy,fromCurrencySearchebuyV1:fromCurrencytoto,toCurrencySearchebuyV1:toCurrencyANG});
    }
    const buyAndSellAOA = async () => {
        navigation.navigate('Wallet',{currencySearch: 'AOA',exchangeRateSearchV1:exchangeRateAOA,soldSearchebuyV1:soldAOAbuy,fromCurrencySearchebuyV1:fromCurrencytoto,toCurrencySearchebuyV1:toCurrencyAOA});
    }
    const buyAndSellARS = async () => {
        navigation.navigate('Wallet',{currencySearch: 'ARS',exchangeRateSearchV1:exchangeRateARS,soldSearchebuyV1:soldARSbuy,fromCurrencySearchebuyV1:fromCurrencytoto,toCurrencySearchebuyV1:toCurrencyARS});
    }
    const buyAndSellAUD = async () => {
        navigation.navigate('Wallet',{currencySearch: 'AUD',exchangeRateSearchV1:exchangeRateAUD,soldSearchebuyV1:soldAUDbuy,fromCurrencySearchebuyV1:fromCurrencytoto,toCurrencySearchebuyV1:toCurrencyAUD});
    }
    const buyAndSellAWG = async () => {
        navigation.navigate('Wallet',{currencySearch: 'AWG',exchangeRateSearchV1:exchangeRateAWG,soldSearchebuyV1:soldAWGbuy,fromCurrencySearchebuyV1:fromCurrencytoto,toCurrencySearchebuyV1:toCurrencyAWG});
    }

    

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
            setLoading(true);
            // currencySearch,exchangeRateSearchV1,soldSearchebuyV1,fromCurrencySearchebuyV1,toCurrencySearchebuyV1 = 0;
            getUserValue();
        });
    }, []);


    





    // end bsell



    // ----------------------------------------------------
    return (
        <SafeAreaView
            style={{
                backgroundColor:COLORS.white,
                flex:1,
            }}
            
        >
            {/* <View>
                <Text> Pull Down to REfresh</Text>
            </View> */}
            <ScrollView
                // RefreshControl={
                //     <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                // }
                refreshControl={
                    <RefreshControl
                      refreshing={refreshing}
                      onRefresh={onRefresh}
                    />
                }
            >
                {/* <Text> Pull Down to REfresh</Text> */}
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
                    {/* <Text>Searche For{toCurrencySearchebuyV2}</Text> */}
                    {/* <Text>Searche For</Text> */}


                    <View disabled={loading}>
                            {loading ? (
                                <Loading/>
                            ) : (
                            // <Text style={{fontSize:17,fontWeight:'bold'}} >
                            //     Welcom
                            // </Text> 
                            <View
                                style={{
                                    justifyContent:'center',
                                    alignItems:'center',
                                    // marginVertical: 10,
                                    // marginHorizontal: 20,
                                    // paddingHorizontal: 10,
                                    // backgroundColor:'#95a5a6'
                                }}
                            >
                                {/* <Text style={{fontSize:1}} > */}
                                    {/* Welcom */}

                                    <Text style={{fontSize:17,fontWeight:'bold'}}>Welcom : {usernameVal}</Text>
                                    <Text style={{fontSize:17,fontWeight:'bold'}}>Total mony Deposit : {(totalSold).toFixed(2)} €</Text>


                                {/* </Text>  */}
                            </View>
                            
                            )}
                            
                        </View>





                    {/* <Container> */}
                        {/* <LottieView 
                            // style={{
                            //     flex: 1,
                            //     alignItems: 'center',
                            //     justifyContent: 'center',
                            //     backgroundColor: '#222222',
                            // }}
                            source={require("../../assets/62981-loader.json")} 
                            autoPlay 
                            // loop 
                            style={{ width: 100}} 
                        /> */}
                    {/* </Container> */}
                    {/* <SignInContainer disabled={loading}>
                        {loading ? (
                            <Loading/>
                        ) : (
                        <Text bold center color="#ffffff" >
                                Sign In
                            </Text> 
                        )}
                        
                    </SignInContainer> */}
                    {/* <Text style={{fontSize:17,fontWeight:'bold'}}>Welcom  {usernameVal}</Text>
                    <Text style={{fontSize:17,fontWeight:'bold'}}>Total mony Deposit : {(totalSold).toFixed(4)} €</Text> */}
                    
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
                    {/* <View style={style.cartCard1}>
                        <View style={{
                                backgroundColor: '#dcdde1',
                                justifyContent:'center',
                                alignItems:'center',
                                paddingHorizontal: 10,
                                borderBottomLeftRadius: 10,
                                borderBottomRightRadius: 10,
                            }}
                        >
                            <Text style={{fontSize:17,fontWeight:'bold'}}>Total MAD Deposit : {(soldMAD).toFixed(4)} €</Text>
                            <Text style={{fontSize:17,fontWeight:'bold'}}>value of profit : {((soldMADbuy * exchangeRateMAD)-(soldMAD)).toFixed(4)}€</Text>
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
                                </View> */}
                                {/* <View  style={{alignItems:'center',justifyContent:'center'}}> */}
                                    {/* <Image 
                                        style={{
                                            width:30,
                                            height:30,
                                        }}
                                        // source={require("../../assets/iconfinder_transaction.png")}
                                        source="https://drive.google.com/file/d/1ZFaOejFmkKvo9oATPnVG66ww4v54ei5c/view?usp=sharing"
                                        
                                    /> */}
                                    {/*<Icon name="swap-horizontal-circle" size={24} color="black"/>
                                 </View>
                                <View style={{alignItems:'center',justifyContent:'center'}}>
                                    <Text style={{fontWeight:'bold',fontSize:18}} >{toCurrencyMAD}</Text>
                                    <Text style={{fontSize:13,color:COLORS.grey}} >=</Text>

                                    <Text style={{fontSize:17,fontWeight:'bold'}} >{(toAmountMAD).toFixed(6)}</Text> */}
                                {/* </View> */}
                                {/* <TouchableOpacity onPress={() => Alert.alert('Simple Button pressed')}> */}
                                    {/* <View style={style.actionBtn}> */}
                                    {/* <View style={style.graphView}>
                                        <Text style={{fontWeight:'bold',fontSize:18}}>Graph</Text> */}
                                        {/* <Icon name="home-filled" color={COLORS.grey} size={28} /> */}
                                    {/* </View>    
                                </TouchableOpacity> */}
                            {/* </View>
                        </View> */}
                        
                        {/* <View style={{
                            // height:100,
                            // marginLeft:10,
                            // paddingVertical:20,
                            flex:1,
                            flexDirection: 'row',
                            justifyContent:'space-between'
                            // flexDirection: 'row',justifyContent:'space-between'
                        }} >
                            <TouchableOpacity onPress={buyMAD}>
                                <View style={style.graphViewBuy}>
                                    <Text style={{fontWeight:'bold',fontSize:18, color:COLORS.white}}>buy</Text>
                                </View>    
                            </TouchableOpacity>
                            <TouchableOpacity onPress={sellMAD}>
                                <View style={style.graphViewSell}>
                                    <Text style={{fontWeight:'bold',fontSize:18, color:COLORS.white}}>sel</Text>
                                </View>    
                            </TouchableOpacity>
                        </View> */}
                        {/* <View> */}
                            {/* <TouchableOpacity onPress={() => Alert.alert('Simple Button pressed')}> */}
                            {/* <TouchableOpacity onPress={buyAndSellMAD}> */}
                                {/* <View style={style.actionBtn}> */}
                                {/* <View style={style.graphView}>
                                    <Text style={{fontWeight:'bold',fontSize:18, color:COLORS.white}}>More Information / Buy And Sell</Text> */}
                                    {/* <Icon name="home-filled" color={COLORS.grey} size={28} /> */}
                                {/* </View>    
                            </TouchableOpacity>
                        </View>
                    </View> */}
                    {/* v2 */}
                    {/* <View style={style.cartCard1}>
                        <View style={{
                                backgroundColor: '#dcdde1',
                                justifyContent:'center',
                                alignItems:'center',
                                paddingHorizontal: 10,
                                borderBottomLeftRadius: 10,
                                borderBottomRightRadius: 10,
                            }}
                        >
                            <Text style={{fontSize:17,fontWeight:'bold'}}>Total MAD Deposit : {(soldMAD).toFixed(4)} €</Text>
                            <Text style={{fontSize:17,fontWeight:'bold'}}>value of profit : {((soldMADbuy * exchangeRateMAD)-(soldMAD)).toFixed(4)}€</Text>
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
                                    <Icon name="swap-horizontal-circle" size={24} color="black"/>
                                </View>
                                <View style={{alignItems:'center',justifyContent:'center'}}>
                                    <Text style={{fontWeight:'bold',fontSize:18}} >{toCurrencyMAD}</Text>
                                    <Text style={{fontSize:13,color:COLORS.grey}} >=</Text>

                                    <Text style={{fontSize:17,fontWeight:'bold'}} >{(toAmountMAD).toFixed(6)}</Text>
                                </View>
                            </View>
                        </View>
                        <View>
                            <TouchableOpacity onPress={buyAndSellMAD}>
                                <View style={style.graphView}>
                                    <Text style={{fontWeight:'bold',fontSize:18, color:COLORS.white}}>More Information / Buy And Sell</Text>
                                </View>    
                            </TouchableOpacity>
                        </View>
                    </View> */}

                    {/* 1 - END MAD */}


                    {/* START V2 MAD */}

                    {/* 1 - START MAD */}
                    <View style={style.cartCard1}>
                        <View style={{
                                backgroundColor: '#dcdde1',
                                justifyContent:'center',
                                alignItems:'center',
                                // marginVertical: 10,
                                // marginHorizontal: 20,
                                paddingHorizontal: 10,
                                paddingVertical:10,
                                borderBottomLeftRadius: 10,
                                borderBottomRightRadius: 10,
                            }}
                        >
                          <Text style={{fontSize:17,fontWeight:'bold',paddingVertical:10}}>Total Euro Deposits in MAD : {(soldMAD).toFixed(2)}€</Text>
                          <Text style={{fontSize:17,fontWeight:'bold',paddingVertical:2}}>Total MAD Buyer : {(soldMADbuy).toFixed(4)}</Text>
                          <Text style={{fontSize:17,fontWeight:'bold',paddingVertical:2}}>Current EURO : {(soldMADbuy * exchangeRateMAD).toFixed(4)}€</Text>
                          <Text style={{fontSize:17,fontWeight:'bold',paddingVertical:2}}>Current MAD : {((soldMADbuy * exchangeRateMAD) * exchangeRateMAD).toFixed(4)}</Text>
                          <Text style={{fontSize:17,fontWeight:'bold',paddingVertical:2}}>Value Of Profit : {((soldMADbuy * exchangeRateMAD)-(soldMAD)).toFixed(4)}€</Text>
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
                                    <Icon name="swap-horizontal-circle" size={24} color="black"/>
                                </View>
                                <View style={{alignItems:'center',justifyContent:'center'}}>
                                    <Text style={{fontWeight:'bold',fontSize:18}} >{toCurrencyMAD}</Text>
                                    <Text style={{fontSize:13,color:COLORS.grey}} >=</Text>

                                    <Text style={{fontSize:17,fontWeight:'bold'}} >{(toAmountMAD).toFixed(6)}</Text>
                                </View>
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
                            {/* <TouchableOpacity onPress={buyMAD}> */}
                            <TouchableOpacity 
                              onPress={
                                () => 
                                // Alert.alert(
                                //   "Alert Title",
                                //   "My Alert Msg",
                                //   [
                                //     {
                                //       text: "Cancel",
                                //       onPress: () => console.log("Cancel Pressed"),
                                //       style: "cancel"
                                //     },
                                //     { text: "OK", onPress: () => console.log("OK Pressed") }
                                //   ]
                                // )
                                Alert.alert(
                                  "Buy Transaction Confirmation :",
                                  "Total EUR Deposit Of MAD : "+amountMAD+" €",
                                  [
                                    {
                                      text: "Cancel",
                                      onPress: () => console.log("Cancel Pressed"),
                                      style: "cancel"
                                    },
                                    { text: "OK", onPress: () => buyMAD()  }
                                  ]
                                )
                              }
                            >
                                <View style={style.graphViewBuy}>
                                    <Text style={{fontWeight:'bold',fontSize:18, color:COLORS.white}}>buy</Text>
                                </View>    
                            </TouchableOpacity>
                            <TouchableOpacity 
                              // onPress={sellMAD}
                              onPress={
                                () => 
                                // Alert.alert(
                                //   "Alert Title",
                                //   "My Alert Msg",
                                //   [
                                //     {
                                //       text: "Cancel",
                                //       onPress: () => console.log("Cancel Pressed"),
                                //       style: "cancel"
                                //     },
                                //     { text: "OK", onPress: () => console.log("OK Pressed") }
                                //   ]
                                // )
                                Alert.alert(
                                  "Sel transaction confirmation :",
                                  "Total Sale of MAD : "+amountMAD+" MAD",
                                  [
                                    {
                                      text: "Cancel",
                                      onPress: () => console.log("Cancel Pressed"),
                                      style: "cancel"
                                    },
                                    { text: "OK",onPress: () => sellMAD() }
                                  ]
                                )
                              }
                            
                            >
                                <View style={style.graphViewSell}>
                                    <Text style={{fontWeight:'bold',fontSize:18, color:COLORS.white}}>sel</Text>
                                </View>    
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity onPress={webView}>
                                <View style={style.graphView}>
                                    <Text style={{fontWeight:'bold',fontSize:18, color:COLORS.white}}>Graph</Text>
                                </View>    
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* 1 - END MAD */}

                    {/* END V2 MAD */}
                    {/* START BTC */}
                    
                    <View style={style.cartCard1}>
                        {/* <View style={{
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
                            <Text style={{fontSize:17,fontWeight:'bold'}}>Total Euro Deposits in BTC : {soldBTC} €</Text>
                            <Text style={{fontSize:17,fontWeight:'bold'}}>Total BTC buyer : {soldBTCbuy}</Text>
                            <Text style={{fontSize:17,fontWeight:'bold'}}>current EURO : {soldBTCbuy * exchangeRateBTC}</Text>
                            <Text style={{fontSize:17,fontWeight:'bold'}}>current BTC : {(soldBTCbuy * exchangeRateBTC) * exchangeRateBTC}</Text>
                            <Text style={{fontSize:17,fontWeight:'bold'}}>value of profit : {(soldBTCbuy * exchangeRateBTC)-(soldBTC)}€</Text>
                        </View> */}
                        <View style={{
                                backgroundColor: '#dcdde1',
                                justifyContent:'center',
                                alignItems:'center',
                                // marginVertical: 10,
                                // marginHorizontal: 20,
                                paddingHorizontal: 10,
                                paddingVertical:10,
                                borderBottomLeftRadius: 10,
                                borderBottomRightRadius: 10,
                            }}
                        >
                          <Text style={{fontSize:17,fontWeight:'bold',paddingVertical:10}}>Total Euro Deposits in BTC : {(soldBTC).toFixed(2)}€</Text>
                          <Text style={{fontSize:17,fontWeight:'bold',paddingVertical:2}}>Total BTC Buyer : {(soldBTCbuy).toFixed(4)}</Text>
                          <Text style={{fontSize:17,fontWeight:'bold',paddingVertical:2}}>Current EURO : {(soldBTCbuy * exchangeRateBTC).toFixed(4)}€</Text>
                          <Text style={{fontSize:17,fontWeight:'bold',paddingVertical:2}}>Current BTC : {((soldBTCbuy * exchangeRateBTC) * exchangeRateBTC).toFixed(4)}</Text>
                          <Text style={{fontSize:17,fontWeight:'bold',paddingVertical:2}}>Value Of Profit : {((soldBTCbuy * exchangeRateBTC)-(soldBTC)).toFixed(4)}€</Text>
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
                                    <Icon name="swap-horizontal-circle" size={24} color="black"/>
                                </View>
                                <View style={{alignItems:'center',justifyContent:'center'}}>
                                    <Text style={{fontWeight:'bold',fontSize:18}} >{toCurrencyBTC}</Text>
                                    <Text style={{fontSize:13,color:COLORS.grey}} >=</Text>

                                    <Text style={{fontSize:17,fontWeight:'bold'}} >{(toAmountBTC).toFixed(6)}</Text>
                                </View>
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
                            <TouchableOpacity 
                              // onPress={buyBTC}
                              onPress={
                                () => 
                                Alert.alert(
                                  "Buy Transaction Confirmation :",
                                  "Total EUR Deposit Of BTC : "+amountBTC+" €",
                                  [
                                    {
                                      text: "Cancel",
                                      onPress: () => console.log("Cancel Pressed"),
                                      style: "cancel"
                                    },
                                    { text: "OK", onPress: () => buyBTC()  }
                                  ]
                                )
                              }
                            
                            >
                              <View style={style.graphViewBuy}>
                                  <Text style={{fontWeight:'bold',fontSize:18, color:COLORS.white}}>buy</Text>
                              </View>    
                            </TouchableOpacity>
                            <TouchableOpacity 
                              // onPress={sellBTC}
                              onPress={
                                () => 
                                Alert.alert(
                                  "Sel transaction confirmation :",
                                  "Total Sale of BTC : "+amountBTC+" BTC",
                                  [
                                    {
                                      text: "Cancel",
                                      onPress: () => console.log("Cancel Pressed"),
                                      style: "cancel"
                                    },
                                    { text: "OK",onPress: () => sellBTC() }
                                  ]
                                )
                              }
                            >
                              <View style={style.graphViewSell}>
                                <Text style={{fontWeight:'bold',fontSize:18, color:COLORS.white}}>sel</Text>
                              </View>    
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity onPress={webView}>
                                <View style={style.graphView}>
                                    <Text style={{fontWeight:'bold',fontSize:18, color:COLORS.white}}>Graph</Text>
                                </View>    
                            </TouchableOpacity>
                        </View>
                    </View>
                    
                    {/* END BTC */}
                    {/* START USD */}

                    <View style={style.cartCard1}>
                        {/* <View style={{
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
                            <Text style={{fontSize:17,fontWeight:'bold'}}>Total Euro Deposits in USD : {soldUSD} €</Text>
                            <Text style={{fontSize:17,fontWeight:'bold'}}>Total USD buyer : {soldUSDbuy}</Text>
                            <Text style={{fontSize:17,fontWeight:'bold'}}>current EURO : {soldUSDbuy * exchangeRateUSD}</Text>
                            <Text style={{fontSize:17,fontWeight:'bold'}}>current USD : {(soldUSDbuy * exchangeRateUSD) * exchangeRateUSD}</Text>
                            <Text style={{fontSize:17,fontWeight:'bold'}}>value of profit : {(soldUSDbuy * exchangeRateUSD)-(soldUSD)}€</Text>
                        </View> */}
                        <View style={{
                                backgroundColor: '#dcdde1',
                                justifyContent:'center',
                                alignItems:'center',
                                // marginVertical: 10,
                                // marginHorizontal: 20,
                                paddingHorizontal: 10,
                                paddingVertical:10,
                                borderBottomLeftRadius: 10,
                                borderBottomRightRadius: 10,
                            }}
                        >
                          <Text style={{fontSize:17,fontWeight:'bold',paddingVertical:10}}>Total Euro Deposits in USD : {(soldUSD).toFixed(2)}€</Text>
                          <Text style={{fontSize:17,fontWeight:'bold',paddingVertical:2}}>Total USD Buyer : {(soldUSDbuy).toFixed(4)}</Text>
                          <Text style={{fontSize:17,fontWeight:'bold',paddingVertical:2}}>Current EURO : {(soldUSDbuy * exchangeRateUSD).toFixed(4)}€</Text>
                          <Text style={{fontSize:17,fontWeight:'bold',paddingVertical:2}}>Current USD : {((soldUSDbuy * exchangeRateUSD) * exchangeRateUSD).toFixed(4)}</Text>
                          <Text style={{fontSize:17,fontWeight:'bold',paddingVertical:2}}>Value Of Profit : {((soldUSDbuy * exchangeRateUSD)-(soldUSD)).toFixed(4)}€</Text>
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
                                    <Icon name="swap-horizontal-circle" size={24} color="black"/>
                                </View>
                                <View style={{alignItems:'center',justifyContent:'center'}}>
                                    <Text style={{fontWeight:'bold',fontSize:18}} >{toCurrencyUSD}</Text>
                                    <Text style={{fontSize:13,color:COLORS.grey}} >=</Text>

                                    <Text style={{fontSize:17,fontWeight:'bold'}} >{(toAmountUSD).toFixed(6)}</Text>
                                </View>
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
                            <TouchableOpacity 
                              // onPress={buyUSD}
                              onPress={
                                () => 
                                Alert.alert(
                                  "Buy Transaction Confirmation :",
                                  "Total EUR Deposit Of USD : "+amountUSD+" €",
                                  [
                                    {
                                      text: "Cancel",
                                      onPress: () => console.log("Cancel Pressed"),
                                      style: "cancel"
                                    },
                                    { text: "OK", onPress: () => buyUSD()  }
                                  ]
                                )
                              }
                            >
                                <View style={style.graphViewBuy}>
                                    <Text style={{fontWeight:'bold',fontSize:18, color:COLORS.white}}>buy</Text>
                                </View>    
                            </TouchableOpacity>
                            <TouchableOpacity 
                              // onPress={sellUSD}
                              onPress={
                                () => 
                                Alert.alert(
                                  "Sel transaction confirmation :",
                                  "Total Sale of USD : "+amountUSD+" USD",
                                  [
                                    {
                                      text: "Cancel",
                                      onPress: () => console.log("Cancel Pressed"),
                                      style: "cancel"
                                    },
                                    { text: "OK",onPress: () => sellUSD() }
                                  ]
                                )
                              }
                            >
                                <View style={style.graphViewSell}>
                                    <Text style={{fontWeight:'bold',fontSize:18, color:COLORS.white}}>sel</Text>
                                </View>    
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity onPress={webView}>
                                <View style={style.graphView}>
                                    <Text style={{fontWeight:'bold',fontSize:18, color:COLORS.white}}>Graph</Text>
                                </View>    
                            </TouchableOpacity>
                        </View>
                    </View>


                    {/* END USD */}
                    {/* START GBP */}

                    <View style={style.cartCard1}>
                        {/* <View style={{
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
                            <Text style={{fontSize:17,fontWeight:'bold'}}>Total Euro Deposits in GBP : {soldGBP} €</Text>
                            <Text style={{fontSize:17,fontWeight:'bold'}}>Total GBP buyer : {soldGBPbuy}</Text>
                            <Text style={{fontSize:17,fontWeight:'bold'}}>current EURO : {soldGBPbuy * exchangeRateGBP}</Text>
                            <Text style={{fontSize:17,fontWeight:'bold'}}>current GBP : {(soldGBPbuy * exchangeRateGBP) * exchangeRateGBP}</Text>
                            <Text style={{fontSize:17,fontWeight:'bold'}}>value of profit : {(soldGBPbuy * exchangeRateGBP)-(soldGBP)}€</Text>
                        </View> */}
                        <View style={{
                                backgroundColor: '#dcdde1',
                                justifyContent:'center',
                                alignItems:'center',
                                // marginVertical: 10,
                                // marginHorizontal: 20,
                                paddingHorizontal: 10,
                                paddingVertical:10,
                                borderBottomLeftRadius: 10,
                                borderBottomRightRadius: 10,
                            }}
                        >
                          <Text style={{fontSize:17,fontWeight:'bold',paddingVertical:10}}>Total Euro Deposits in GBP : {(soldGBP).toFixed(2)}€</Text>
                          <Text style={{fontSize:17,fontWeight:'bold',paddingVertical:2}}>Total GBP Buyer : {(soldGBPbuy).toFixed(4)}</Text>
                          <Text style={{fontSize:17,fontWeight:'bold',paddingVertical:2}}>Current EURO : {(soldGBPbuy * exchangeRateGBP).toFixed(4)}€</Text>
                          <Text style={{fontSize:17,fontWeight:'bold',paddingVertical:2}}>Current GBP : {((soldGBPbuy * exchangeRateGBP) * exchangeRateGBP).toFixed(4)}</Text>
                          <Text style={{fontSize:17,fontWeight:'bold',paddingVertical:2}}>Value Of Profit : {((soldGBPbuy * exchangeRateGBP)-(soldGBP)).toFixed(4)}€</Text>
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
                                    <Icon name="swap-horizontal-circle" size={24} color="black"/>
                                </View>
                                <View style={{alignItems:'center',justifyContent:'center'}}>
                                    <Text style={{fontWeight:'bold',fontSize:18}} >{toCurrencyGBP}</Text>
                                    <Text style={{fontSize:13,color:COLORS.grey}} >=</Text>

                                    <Text style={{fontSize:17,fontWeight:'bold'}} >{(toAmountGBP).toFixed(6)}</Text>
                                </View>
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
                            <TouchableOpacity 
                              // onPress={buyGBP}
                              onPress={
                                () => 
                                Alert.alert(
                                  "Buy Transaction Confirmation :",
                                  "Total EUR Deposit Of GBP : "+amountGBP+" €",
                                  [
                                    {
                                      text: "Cancel",
                                      onPress: () => console.log("Cancel Pressed"),
                                      style: "cancel"
                                    },
                                    { text: "OK", onPress: () => buyGBP()  }
                                  ]
                                )
                              }
                            
                            >
                                <View style={style.graphViewBuy}>
                                    <Text style={{fontWeight:'bold',fontSize:18, color:COLORS.white}}>buy</Text>
                                </View>    
                            </TouchableOpacity>
                            <TouchableOpacity 
                              // onPress={sellGBP}
                              onPress={
                                () => 
                                Alert.alert(
                                  "Sel transaction confirmation :",
                                  "Total Sale of GBP : "+amountGBP+" GBP",
                                  [
                                    {
                                      text: "Cancel",
                                      onPress: () => console.log("Cancel Pressed"),
                                      style: "cancel"
                                    },
                                    { text: "OK",onPress: () => sellGBP() }
                                  ]
                                )
                              }
                            
                            >
                                <View style={style.graphViewSell}>
                                    <Text style={{fontWeight:'bold',fontSize:18, color:COLORS.white}}>sel</Text>
                                </View>    
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity onPress={webView}>
                                <View style={style.graphView}>
                                    <Text style={{fontWeight:'bold',fontSize:18, color:COLORS.white}}>Graph</Text>
                                </View>    
                            </TouchableOpacity>
                        </View>
                    </View>


                    {/* END GBP */}
                    {/* START KWD */}

                    <View style={style.cartCard1}>
                        {/* <View style={{
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
                            <Text style={{fontSize:17,fontWeight:'bold'}}>Total Euro Deposits in KWD : {soldKWD} €</Text>
                            <Text style={{fontSize:17,fontWeight:'bold'}}>Total KWD buyer : {soldKWDbuy}</Text>
                            <Text style={{fontSize:17,fontWeight:'bold'}}>current EURO : {soldKWDbuy * exchangeRateKWD}</Text>
                            <Text style={{fontSize:17,fontWeight:'bold'}}>current KWD : {(soldUSDbuy * exchangeRateKWD) * exchangeRateKWD}</Text>
                            <Text style={{fontSize:17,fontWeight:'bold'}}>value of profit : {(soldKWDbuy * exchangeRateKWD)-(soldKWD)}€</Text>
                        </View> */}
                        <View style={{
                                backgroundColor: '#dcdde1',
                                justifyContent:'center',
                                alignItems:'center',
                                // marginVertical: 10,
                                // marginHorizontal: 20,
                                paddingHorizontal: 10,
                                paddingVertical:10,
                                borderBottomLeftRadius: 10,
                                borderBottomRightRadius: 10,
                            }}
                        >
                          <Text style={{fontSize:17,fontWeight:'bold',paddingVertical:10}}>Total Euro Deposits in KWD : {(soldKWD).toFixed(2)}€</Text>
                          <Text style={{fontSize:17,fontWeight:'bold',paddingVertical:2}}>Total KWD Buyer : {(soldKWDbuy).toFixed(4)}</Text>
                          <Text style={{fontSize:17,fontWeight:'bold',paddingVertical:2}}>Current EURO : {(soldKWDbuy * exchangeRateKWD).toFixed(4)}€</Text>
                          <Text style={{fontSize:17,fontWeight:'bold',paddingVertical:2}}>Current KWD : {((soldKWDbuy * exchangeRateKWD) * exchangeRateKWD).toFixed(4)}</Text>
                          <Text style={{fontSize:17,fontWeight:'bold',paddingVertical:2}}>Value Of Profit : {((soldKWDbuy * exchangeRateKWD)-(soldKWD)).toFixed(4)}€</Text>
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
                                    <Icon name="swap-horizontal-circle" size={24} color="black"/>
                                </View>
                                <View style={{alignItems:'center',justifyContent:'center'}}>
                                    <Text style={{fontWeight:'bold',fontSize:18}} >{toCurrencyKWD}</Text>
                                    <Text style={{fontSize:13,color:COLORS.grey}} >=</Text>

                                    <Text style={{fontSize:17,fontWeight:'bold'}} >{(toAmountKWD).toFixed(6)}</Text>
                                </View>
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
                            <TouchableOpacity 
                              // onPress={buyKWD}
                              onPress={
                                () => 
                                Alert.alert(
                                  "Buy Transaction Confirmation :",
                                  "Total EUR Deposit Of KWD : "+amountKWD+" €",
                                  [
                                    {
                                      text: "Cancel",
                                      onPress: () => console.log("Cancel Pressed"),
                                      style: "cancel"
                                    },
                                    { text: "OK", onPress: () => buyKWD()  }
                                  ]
                                )
                              }
                            
                            >
                                <View style={style.graphViewBuy}>
                                    <Text style={{fontWeight:'bold',fontSize:18, color:COLORS.white}}>buy</Text>
                                </View>    
                            </TouchableOpacity>
                            <TouchableOpacity 
                              // onPress={sellKWD}
                              onPress={
                                () => 
                                Alert.alert(
                                  "Sel transaction confirmation :",
                                  "Total Sale of KWD : "+amountKWD+" KWD",
                                  [
                                    {
                                      text: "Cancel",
                                      onPress: () => console.log("Cancel Pressed"),
                                      style: "cancel"
                                    },
                                    { text: "OK",onPress: () => sellKWD() }
                                  ]
                                )
                              }
                            >
                                <View style={style.graphViewSell}>
                                    <Text style={{fontWeight:'bold',fontSize:18, color:COLORS.white}}>sel</Text>
                                </View>    
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity onPress={webView}>
                                <View style={style.graphView}>
                                    <Text style={{fontWeight:'bold',fontSize:18, color:COLORS.white}}>Graph</Text>
                                </View>    
                            </TouchableOpacity>
                        </View>
                    </View>


                    {/* END KWD */}

                    {/* START AED */}

                    <View style={style.cartCard1}>
                        {/* <View style={{
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
                            <Text style={{fontSize:17,fontWeight:'bold'}}>Total Euro Deposits in AED : {soldAED} €</Text>
                            <Text style={{fontSize:17,fontWeight:'bold'}}>Total AED buyer : {soldAEDbuy}</Text>
                            <Text style={{fontSize:17,fontWeight:'bold'}}>current EURO : {soldAEDbuy * exchangeRateAED}</Text>
                            <Text style={{fontSize:17,fontWeight:'bold'}}>current AED : {(soldAEDbuy * exchangeRateAED) * exchangeRateAED}</Text>
                            <Text style={{fontSize:17,fontWeight:'bold'}}>value of profit : {(soldAEDbuy * exchangeRateAED)-(soldAED)}€</Text>
                        </View> */}
                        <View style={{
                                backgroundColor: '#dcdde1',
                                justifyContent:'center',
                                alignItems:'center',
                                // marginVertical: 10,
                                // marginHorizontal: 20,
                                paddingHorizontal: 10,
                                paddingVertical:10,
                                borderBottomLeftRadius: 10,
                                borderBottomRightRadius: 10,
                            }}
                        >
                          <Text style={{fontSize:17,fontWeight:'bold',paddingVertical:10}}>Total Euro Deposits in AED : {(soldAED).toFixed(2)}€</Text>
                          <Text style={{fontSize:17,fontWeight:'bold',paddingVertical:2}}>Total AED Buyer : {(soldAEDbuy).toFixed(4)}</Text>
                          <Text style={{fontSize:17,fontWeight:'bold',paddingVertical:2}}>Current EURO : {(soldAEDbuy * exchangeRateAED).toFixed(4)}€</Text>
                          <Text style={{fontSize:17,fontWeight:'bold',paddingVertical:2}}>Current AED : {((soldAEDbuy * exchangeRateAED) * exchangeRateAED).toFixed(4)}</Text>
                          <Text style={{fontSize:17,fontWeight:'bold',paddingVertical:2}}>Value Of Profit : {((soldAEDbuy * exchangeRateAED)-(soldAED)).toFixed(4)}€</Text>
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
                                    <Icon name="swap-horizontal-circle" size={24} color="black"/>
                                </View>
                                <View style={{alignItems:'center',justifyContent:'center'}}>
                                    <Text style={{fontWeight:'bold',fontSize:18}} >{toCurrencyAED}</Text>
                                    <Text style={{fontSize:13,color:COLORS.grey}} >=</Text>

                                    <Text style={{fontSize:17,fontWeight:'bold'}} >{(toAmountAED).toFixed(6)}</Text>
                                </View>
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
                            <TouchableOpacity 
                              // onPress={buyAED}
                              onPress={
                                () => 
                                Alert.alert(
                                  "Buy Transaction Confirmation :",
                                  "Total EUR Deposit Of AED : "+amountAED+" €",
                                  [
                                    {
                                      text: "Cancel",
                                      onPress: () => console.log("Cancel Pressed"),
                                      style: "cancel"
                                    },
                                    { text: "OK", onPress: () => buyAED()  }
                                  ]
                                )
                              }
                            >
                                <View style={style.graphViewBuy}>
                                    <Text style={{fontWeight:'bold',fontSize:18, color:COLORS.white}}>buy</Text>
                                </View>    
                            </TouchableOpacity>
                            <TouchableOpacity 
                              // onPress={sellAED}
                              onPress={
                                () => 
                                Alert.alert(
                                  "Sel transaction confirmation :",
                                  "Total Sale of AED : "+amountAED+" AED",
                                  [
                                    {
                                      text: "Cancel",
                                      onPress: () => console.log("Cancel Pressed"),
                                      style: "cancel"
                                    },
                                    { text: "OK",onPress: () => sellAED() }
                                  ]
                                )
                              }
                            >
                                <View style={style.graphViewSell}>
                                    <Text style={{fontWeight:'bold',fontSize:18, color:COLORS.white}}>sel</Text>
                                </View>    
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity onPress={webView}>
                                <View style={style.graphView}>
                                    <Text style={{fontWeight:'bold',fontSize:18, color:COLORS.white}}>Graph</Text>
                                </View>    
                            </TouchableOpacity>
                        </View>
                    </View>


                    {/* END AED */}

                    {/* START AFN */}

                    <View style={style.cartCard1}>
                        {/* <View style={{
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
                            <Text style={{fontSize:17,fontWeight:'bold'}}>Total Euro Deposits in AFN : {soldAFN} €</Text>
                            <Text style={{fontSize:17,fontWeight:'bold'}}>Total AFN buyer : {soldAFNbuy}</Text>
                            <Text style={{fontSize:17,fontWeight:'bold'}}>current EURO : {soldAFNbuy * exchangeRateAFN}</Text>
                            <Text style={{fontSize:17,fontWeight:'bold'}}>current AFN : {(soldAFNbuy * exchangeRateAFN) * exchangeRateAFN}</Text>
                            <Text style={{fontSize:17,fontWeight:'bold'}}>value of profit : {(soldAFNbuy * exchangeRateAFN)-(soldAFN)}€</Text>
                        </View> */}
                        <View style={{
                                backgroundColor: '#dcdde1',
                                justifyContent:'center',
                                alignItems:'center',
                                // marginVertical: 10,
                                // marginHorizontal: 20,
                                paddingHorizontal: 10,
                                paddingVertical:10,
                                borderBottomLeftRadius: 10,
                                borderBottomRightRadius: 10,
                            }}
                        >
                          <Text style={{fontSize:17,fontWeight:'bold',paddingVertical:10}}>Total Euro Deposits in AFN : {(soldAFN).toFixed(2)}€</Text>
                          <Text style={{fontSize:17,fontWeight:'bold',paddingVertical:2}}>Total AFN Buyer : {(soldAFNbuy).toFixed(4)}</Text>
                          <Text style={{fontSize:17,fontWeight:'bold',paddingVertical:2}}>Current EURO : {(soldAFNbuy * exchangeRateAFN).toFixed(4)}€</Text>
                          <Text style={{fontSize:17,fontWeight:'bold',paddingVertical:2}}>Current AFN : {((soldAFNbuy * exchangeRateAFN) * exchangeRateAFN).toFixed(4)}</Text>
                          <Text style={{fontSize:17,fontWeight:'bold',paddingVertical:2}}>Value Of Profit : {((soldAFNbuy * exchangeRateAFN)-(soldAFN)).toFixed(4)}€</Text>
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
                                    <Icon name="swap-horizontal-circle" size={24} color="black"/>
                                </View>
                                <View style={{alignItems:'center',justifyContent:'center'}}>
                                    <Text style={{fontWeight:'bold',fontSize:18}} >{toCurrencyAFN}</Text>
                                    <Text style={{fontSize:13,color:COLORS.grey}} >=</Text>

                                    <Text style={{fontSize:17,fontWeight:'bold'}} >{(toAmountAFN).toFixed(6)}</Text>
                                </View>
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
                            <TouchableOpacity 
                              // onPress={buyAFN}
                              onPress={
                                () => 
                                Alert.alert(
                                  "Buy Transaction Confirmation :",
                                  "Total EUR Deposit Of AFN : "+amountAFN+" €",
                                  [
                                    {
                                      text: "Cancel",
                                      onPress: () => console.log("Cancel Pressed"),
                                      style: "cancel"
                                    },
                                    { text: "OK", onPress: () => buyAFN()  }
                                  ]
                                )
                              }
                            >
                                <View style={style.graphViewBuy}>
                                    <Text style={{fontWeight:'bold',fontSize:18, color:COLORS.white}}>buy</Text>
                                </View>    
                            </TouchableOpacity>
                            <TouchableOpacity 
                              // onPress={sellAFN}
                              onPress={
                                () => 
                                Alert.alert(
                                  "Sel transaction confirmation :",
                                  "Total Sale of AFN : "+amountAFN+" AFN",
                                  [
                                    {
                                      text: "Cancel",
                                      onPress: () => console.log("Cancel Pressed"),
                                      style: "cancel"
                                    },
                                    { text: "OK",onPress: () => sellAFN() }
                                  ]
                                )
                              }
                            
                            >
                                <View style={style.graphViewSell}>
                                    <Text style={{fontWeight:'bold',fontSize:18, color:COLORS.white}}>sel</Text>
                                </View>    
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity onPress={webView}>
                                <View style={style.graphView}>
                                    <Text style={{fontWeight:'bold',fontSize:18, color:COLORS.white}}>Graph</Text>
                                </View>    
                            </TouchableOpacity>
                        </View>
                    </View>


                    {/* END AFN */}

                    {/* START ALL */}

                    <View style={style.cartCard1}>
                        {/* <View style={{
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
                            <Text style={{fontSize:17,fontWeight:'bold'}}>Total Euro Deposits in ALL : {soldALL} €</Text>
                            <Text style={{fontSize:17,fontWeight:'bold'}}>Total ALL buyer : {soldALLbuy}</Text>
                            <Text style={{fontSize:17,fontWeight:'bold'}}>current EURO : {soldALLbuy * exchangeRateALL}</Text>
                            <Text style={{fontSize:17,fontWeight:'bold'}}>current ALL : {(soldALLbuy * exchangeRateALL) * exchangeRateALL}</Text>
                            <Text style={{fontSize:17,fontWeight:'bold'}}>value of profit : {(soldALLbuy * exchangeRateALL)-(soldALL)}€</Text>
                        </View> */}
                        <View style={{
                                backgroundColor: '#dcdde1',
                                justifyContent:'center',
                                alignItems:'center',
                                // marginVertical: 10,
                                // marginHorizontal: 20,
                                paddingHorizontal: 10,
                                paddingVertical:10,
                                borderBottomLeftRadius: 10,
                                borderBottomRightRadius: 10,
                            }}
                        >
                          <Text style={{fontSize:17,fontWeight:'bold',paddingVertical:10}}>Total Euro Deposits in ALL : {(soldALL).toFixed(2)}€</Text>
                          <Text style={{fontSize:17,fontWeight:'bold',paddingVertical:2}}>Total ALL Buyer : {(soldALLbuy).toFixed(4)}</Text>
                          <Text style={{fontSize:17,fontWeight:'bold',paddingVertical:2}}>Current EURO : {(soldALLbuy * exchangeRateALL).toFixed(4)}€</Text>
                          <Text style={{fontSize:17,fontWeight:'bold',paddingVertical:2}}>Current ALL : {((soldALLbuy * exchangeRateALL) * exchangeRateALL).toFixed(4)}</Text>
                          <Text style={{fontSize:17,fontWeight:'bold',paddingVertical:2}}>Value Of Profit : {((soldALLbuy * exchangeRateALL)-(soldALL)).toFixed(4)}€</Text>
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
                                    <Icon name="swap-horizontal-circle" size={24} color="black"/>
                                </View>
                                <View style={{alignItems:'center',justifyContent:'center'}}>
                                    <Text style={{fontWeight:'bold',fontSize:18}} >{toCurrencyALL}</Text>
                                    <Text style={{fontSize:13,color:COLORS.grey}} >=</Text>

                                    <Text style={{fontSize:17,fontWeight:'bold'}} >{(toAmountALL).toFixed(6)}</Text>
                                </View>
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
                            <TouchableOpacity 
                              // onPress={buyALL}
                              onPress={
                                () => 
                                Alert.alert(
                                  "Buy Transaction Confirmation :",
                                  "Total EUR Deposit Of ALL : "+amountALL+" €",
                                  [
                                    {
                                      text: "Cancel",
                                      onPress: () => console.log("Cancel Pressed"),
                                      style: "cancel"
                                    },
                                    { text: "OK", onPress: () => buyALL()  }
                                  ]
                                )
                              }
                            >
                                <View style={style.graphViewBuy}>
                                    <Text style={{fontWeight:'bold',fontSize:18, color:COLORS.white}}>buy</Text>
                                </View>    
                            </TouchableOpacity>
                            <TouchableOpacity 
                              // onPress={sellALL}
                              onPress={
                                () => 
                                Alert.alert(
                                  "Sel transaction confirmation :",
                                  "Total Sale of ALL : "+amountALL+" ALL",
                                  [
                                    {
                                      text: "Cancel",
                                      onPress: () => console.log("Cancel Pressed"),
                                      style: "cancel"
                                    },
                                    { text: "OK",onPress: () => sellALL() }
                                  ]
                                )
                              }
                            >
                                <View style={style.graphViewSell}>
                                    <Text style={{fontWeight:'bold',fontSize:18, color:COLORS.white}}>sel</Text>
                                </View>    
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity onPress={webView}>
                                <View style={style.graphView}>
                                    <Text style={{fontWeight:'bold',fontSize:18, color:COLORS.white}}>Graph</Text>
                                </View>    
                            </TouchableOpacity>
                        </View>
                    </View>


                    {/* END ALL */}

                    {/* START AMD */}

                    <View style={style.cartCard1}>
                        {/* <View style={{
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
                            <Text style={{fontSize:17,fontWeight:'bold'}}>Total Euro Deposits in AMD : {soldAMD} €</Text>
                            <Text style={{fontSize:17,fontWeight:'bold'}}>Total AMD buyer : {soldAMDbuy}</Text>
                            <Text style={{fontSize:17,fontWeight:'bold'}}>current EURO : {soldAMDbuy * exchangeRateAMD}</Text>
                            <Text style={{fontSize:17,fontWeight:'bold'}}>current AMD : {(soldAMDbuy * exchangeRateAMD) * exchangeRateAMD}</Text>
                            <Text style={{fontSize:17,fontWeight:'bold'}}>value of profit : {(soldAMDbuy * exchangeRateAMD)-(soldAMD)}€</Text>
                        </View> */}
                        <View style={{
                                backgroundColor: '#dcdde1',
                                justifyContent:'center',
                                alignItems:'center',
                                // marginVertical: 10,
                                // marginHorizontal: 20,
                                paddingHorizontal: 10,
                                paddingVertical:10,
                                borderBottomLeftRadius: 10,
                                borderBottomRightRadius: 10,
                            }}
                        >
                          <Text style={{fontSize:17,fontWeight:'bold',paddingVertical:10}}>Total Euro Deposits in AMD : {(soldAMD).toFixed(2)}€</Text>
                          <Text style={{fontSize:17,fontWeight:'bold',paddingVertical:2}}>Total AMD Buyer : {(soldAMDbuy).toFixed(4)}</Text>
                          <Text style={{fontSize:17,fontWeight:'bold',paddingVertical:2}}>Current EURO : {(soldAMDbuy * exchangeRateAMD).toFixed(4)}€</Text>
                          <Text style={{fontSize:17,fontWeight:'bold',paddingVertical:2}}>Current AMD : {((soldAMDbuy * exchangeRateAMD) * exchangeRateAMD).toFixed(4)}</Text>
                          <Text style={{fontSize:17,fontWeight:'bold',paddingVertical:2}}>Value Of Profit : {((soldAMDbuy * exchangeRateAMD)-(soldAMD)).toFixed(4)}€</Text>
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
                                    <Icon name="swap-horizontal-circle" size={24} color="black"/>
                                </View>
                                <View style={{alignItems:'center',justifyContent:'center'}}>
                                    <Text style={{fontWeight:'bold',fontSize:18}} >{toCurrencyAMD}</Text>
                                    <Text style={{fontSize:13,color:COLORS.grey}} >=</Text>

                                    <Text style={{fontSize:17,fontWeight:'bold'}} >{(toAmountAMD).toFixed(6)}</Text>
                                </View>
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
                            <TouchableOpacity 
                              // onPress={buyAMD}
                              onPress={
                                () => 
                                Alert.alert(
                                  "Buy Transaction Confirmation :",
                                  "Total EUR Deposit Of AMD : "+amountAMD+" €",
                                  [
                                    {
                                      text: "Cancel",
                                      onPress: () => console.log("Cancel Pressed"),
                                      style: "cancel"
                                    },
                                    { text: "OK", onPress: () => buyAMD()  }
                                  ]
                                )
                              }
                            
                            >
                                <View style={style.graphViewBuy}>
                                    <Text style={{fontWeight:'bold',fontSize:18, color:COLORS.white}}>buy</Text>
                                </View>    
                            </TouchableOpacity>
                            <TouchableOpacity 
                              // onPress={sellAMD}
                              onPress={
                                () => 
                                Alert.alert(
                                  "Sel transaction confirmation :",
                                  "Total Sale of AMD : "+amountAMD+" AMD",
                                  [
                                    {
                                      text: "Cancel",
                                      onPress: () => console.log("Cancel Pressed"),
                                      style: "cancel"
                                    },
                                    { text: "OK",onPress: () => sellAMD() }
                                  ]
                                )
                              }
                            >
                                <View style={style.graphViewSell}>
                                    <Text style={{fontWeight:'bold',fontSize:18, color:COLORS.white}}>sel</Text>
                                </View>    
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity onPress={webView}>
                                <View style={style.graphView}>
                                    <Text style={{fontWeight:'bold',fontSize:18, color:COLORS.white}}>Graph</Text>
                                </View>    
                            </TouchableOpacity>
                        </View>
                    </View>


                    {/* END AMD */}

                    {/* START ANG */}

                    <View style={style.cartCard1}>
                        {/* <View style={{
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
                            <Text style={{fontSize:17,fontWeight:'bold'}}>Total Euro Deposits in ANG : {soldANG} €</Text>
                            <Text style={{fontSize:17,fontWeight:'bold'}}>Total ANG buyer : {soldANGbuy}</Text>
                            <Text style={{fontSize:17,fontWeight:'bold'}}>current EURO : {soldANGbuy * exchangeRateANG}</Text>
                            <Text style={{fontSize:17,fontWeight:'bold'}}>current ANG : {(soldANGbuy * exchangeRateANG) * exchangeRateANG}</Text>
                            <Text style={{fontSize:17,fontWeight:'bold'}}>value of profit : {(soldANGbuy * exchangeRateANG)-(soldANG)}€</Text>
                        </View> */}
                        <View style={{
                                backgroundColor: '#dcdde1',
                                justifyContent:'center',
                                alignItems:'center',
                                // marginVertical: 10,
                                // marginHorizontal: 20,
                                paddingHorizontal: 10,
                                paddingVertical:10,
                                borderBottomLeftRadius: 10,
                                borderBottomRightRadius: 10,
                            }}
                        >
                          <Text style={{fontSize:17,fontWeight:'bold',paddingVertical:10}}>Total Euro Deposits in ANG : {(soldANG).toFixed(2)}€</Text>
                          <Text style={{fontSize:17,fontWeight:'bold',paddingVertical:2}}>Total ANG Buyer : {(soldANGbuy).toFixed(4)}</Text>
                          <Text style={{fontSize:17,fontWeight:'bold',paddingVertical:2}}>Current EURO : {(soldANGbuy * exchangeRateANG).toFixed(4)}€</Text>
                          <Text style={{fontSize:17,fontWeight:'bold',paddingVertical:2}}>Current ANG : {((soldANGbuy * exchangeRateANG) * exchangeRateANG).toFixed(4)}</Text>
                          <Text style={{fontSize:17,fontWeight:'bold',paddingVertical:2}}>Value Of Profit : {((soldANGbuy * exchangeRateANG)-(soldANG)).toFixed(4)}€</Text>
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
                                    <Icon name="swap-horizontal-circle" size={24} color="black"/>
                                </View>
                                <View style={{alignItems:'center',justifyContent:'center'}}>
                                    <Text style={{fontWeight:'bold',fontSize:18}} >{toCurrencyANG}</Text>
                                    <Text style={{fontSize:13,color:COLORS.grey}} >=</Text>

                                    <Text style={{fontSize:17,fontWeight:'bold'}} >{(toAmountANG).toFixed(6)}</Text>
                                </View>
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
                            <TouchableOpacity 
                              // onPress={buyANG}
                              onPress={
                                () => 
                                Alert.alert(
                                  "Buy Transaction Confirmation :",
                                  "Total EUR Deposit Of ANG : "+amountANG+" €",
                                  [
                                    {
                                      text: "Cancel",
                                      onPress: () => console.log("Cancel Pressed"),
                                      style: "cancel"
                                    },
                                    { text: "OK", onPress: () => buyANG()  }
                                  ]
                                )
                              }
                            >
                                <View style={style.graphViewBuy}>
                                    <Text style={{fontWeight:'bold',fontSize:18, color:COLORS.white}}>buy</Text>
                                </View>    
                            </TouchableOpacity>
                            <TouchableOpacity 
                              // onPress={sellANG}
                              onPress={
                                () => 
                                Alert.alert(
                                  "Sel transaction confirmation :",
                                  "Total Sale of ANG : "+amountANG+" ANG",
                                  [
                                    {
                                      text: "Cancel",
                                      onPress: () => console.log("Cancel Pressed"),
                                      style: "cancel"
                                    },
                                    { text: "OK",onPress: () => sellANG() }
                                  ]
                                )
                              }
                            >
                                <View style={style.graphViewSell}>
                                    <Text style={{fontWeight:'bold',fontSize:18, color:COLORS.white}}>sel</Text>
                                </View>    
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity onPress={webView}>
                                <View style={style.graphView}>
                                    <Text style={{fontWeight:'bold',fontSize:18, color:COLORS.white}}>Graph</Text>
                                </View>    
                            </TouchableOpacity>
                        </View>
                    </View>


                    {/* END ANG */}

                    {/* START AOA */}

                    <View style={style.cartCard1}>
                        {/* <View style={{
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
                            <Text style={{fontSize:17,fontWeight:'bold'}}>Total Euro Deposits in AOA : {soldAOA} €</Text>
                            <Text style={{fontSize:17,fontWeight:'bold'}}>Total AOA buyer : {soldAOAbuy}</Text>
                            <Text style={{fontSize:17,fontWeight:'bold'}}>current EURO : {soldAOAbuy * exchangeRateAOA}</Text>
                            <Text style={{fontSize:17,fontWeight:'bold'}}>current AOA : {(soldAOAbuy * exchangeRateAOA) * exchangeRateAOA}</Text>
                            <Text style={{fontSize:17,fontWeight:'bold'}}>value of profit : {(soldAOAbuy * exchangeRateAOA)-(soldAOA)}€</Text>
                        </View> */}
                        <View style={{
                                backgroundColor: '#dcdde1',
                                justifyContent:'center',
                                alignItems:'center',
                                // marginVertical: 10,
                                // marginHorizontal: 20,
                                paddingHorizontal: 10,
                                paddingVertical:10,
                                borderBottomLeftRadius: 10,
                                borderBottomRightRadius: 10,
                            }}
                        >
                          <Text style={{fontSize:17,fontWeight:'bold',paddingVertical:10}}>Total Euro Deposits in AOA : {(soldAOA).toFixed(2)}€</Text>
                          <Text style={{fontSize:17,fontWeight:'bold',paddingVertical:2}}>Total AOA Buyer : {(soldAOAbuy).toFixed(4)}</Text>
                          <Text style={{fontSize:17,fontWeight:'bold',paddingVertical:2}}>Current EURO : {(soldAOAbuy * exchangeRateAOA).toFixed(4)}€</Text>
                          <Text style={{fontSize:17,fontWeight:'bold',paddingVertical:2}}>Current AOA : {((soldAOAbuy * exchangeRateAOA) * exchangeRateAOA).toFixed(4)}</Text>
                          <Text style={{fontSize:17,fontWeight:'bold',paddingVertical:2}}>Value Of Profit : {((soldAOAbuy * exchangeRateAOA)-(soldAOA)).toFixed(4)}€</Text>
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
                                    <Icon name="swap-horizontal-circle" size={24} color="black"/>
                                </View>
                                <View style={{alignItems:'center',justifyContent:'center'}}>
                                    <Text style={{fontWeight:'bold',fontSize:18}} >{toCurrencyAOA}</Text>
                                    <Text style={{fontSize:13,color:COLORS.grey}} >=</Text>

                                    <Text style={{fontSize:17,fontWeight:'bold'}} >{(toAmountAOA).toFixed(6)}</Text>
                                </View>
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
                            <TouchableOpacity 
                              // onPress={buyAOA}
                              onPress={
                                () => 
                                Alert.alert(
                                  "Buy Transaction Confirmation :",
                                  "Total EUR Deposit Of AOA : "+amountAOA+" €",
                                  [
                                    {
                                      text: "Cancel",
                                      onPress: () => console.log("Cancel Pressed"),
                                      style: "cancel"
                                    },
                                    { text: "OK", onPress: () => buyAOA()  }
                                  ]
                                )
                              }
                            >
                                <View style={style.graphViewBuy}>
                                    <Text style={{fontWeight:'bold',fontSize:18, color:COLORS.white}}>buy</Text>
                                </View>    
                            </TouchableOpacity>
                            <TouchableOpacity 
                              // onPress={sellAOA}
                              onPress={
                                () => 
                                Alert.alert(
                                  "Sel transaction confirmation :",
                                  "Total Sale Of AOA : "+amountAOA+" AOA",
                                  [
                                    {
                                      text: "Cancel",
                                      onPress: () => console.log("Cancel Pressed"),
                                      style: "cancel"
                                    },
                                    { text: "OK",onPress: () => sellAOA() }
                                  ]
                                )
                              }
                            >
                                <View style={style.graphViewSell}>
                                    <Text style={{fontWeight:'bold',fontSize:18, color:COLORS.white}}>sel</Text>
                                </View>    
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity onPress={webView}>
                                <View style={style.graphView}>
                                    <Text style={{fontWeight:'bold',fontSize:18, color:COLORS.white}}>Graph</Text>
                                </View>    
                            </TouchableOpacity>
                        </View>
                    </View>


                    {/* END AOA */}

                    {/* START ARS */}

                    <View style={style.cartCard1}>
                        {/* <View style={{
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
                            <Text style={{fontSize:17,fontWeight:'bold'}}>Total Euro Deposits in ARS : {soldARS} €</Text>
                            <Text style={{fontSize:17,fontWeight:'bold'}}>Total ARS buyer : {soldARSbuy}</Text>
                            <Text style={{fontSize:17,fontWeight:'bold'}}>current EURO : {soldARSbuy * exchangeRateARS}</Text>
                            <Text style={{fontSize:17,fontWeight:'bold'}}>current ARS : {(soldARSbuy * exchangeRateARS) * exchangeRateARS}</Text>
                            <Text style={{fontSize:17,fontWeight:'bold'}}>value of profit : {(soldARSbuy * exchangeRateARS)-(soldARS)}€</Text>
                        </View> */}
                        <View style={{
                                backgroundColor: '#dcdde1',
                                justifyContent:'center',
                                alignItems:'center',
                                // marginVertical: 10,
                                // marginHorizontal: 20,
                                paddingHorizontal: 10,
                                paddingVertical:10,
                                borderBottomLeftRadius: 10,
                                borderBottomRightRadius: 10,
                            }}
                        >
                          <Text style={{fontSize:17,fontWeight:'bold',paddingVertical:10}}>Total Euro Deposits in ARS : {(soldARS).toFixed(2)}€</Text>
                          <Text style={{fontSize:17,fontWeight:'bold',paddingVertical:2}}>Total ARS Buyer : {(soldARSbuy).toFixed(4)}</Text>
                          <Text style={{fontSize:17,fontWeight:'bold',paddingVertical:2}}>Current EURO : {(soldARSbuy * exchangeRateARS).toFixed(4)}€</Text>
                          <Text style={{fontSize:17,fontWeight:'bold',paddingVertical:2}}>Current ARS : {((soldARSbuy * exchangeRateARS) * exchangeRateARS).toFixed(4)}</Text>
                          <Text style={{fontSize:17,fontWeight:'bold',paddingVertical:2}}>Value Of Profit : {((soldARSbuy * exchangeRateARS)-(soldARS)).toFixed(4)}€</Text>
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
                                    <Icon name="swap-horizontal-circle" size={24} color="black"/>
                                </View>
                                <View style={{alignItems:'center',justifyContent:'center'}}>
                                    <Text style={{fontWeight:'bold',fontSize:18}} >{toCurrencyARS}</Text>
                                    <Text style={{fontSize:13,color:COLORS.grey}} >=</Text>

                                    <Text style={{fontSize:17,fontWeight:'bold'}} >{(toAmountARS).toFixed(6)}</Text>
                                </View>
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
                            <TouchableOpacity 
                              // onPress={buyARS}
                              onPress={
                                () => 
                                Alert.alert(
                                  "Buy Transaction Confirmation :",
                                  "Total EUR Deposit Of ARS : "+amountARS+" €",
                                  [
                                    {
                                      text: "Cancel",
                                      onPress: () => console.log("Cancel Pressed"),
                                      style: "cancel"
                                    },
                                    { text: "OK", onPress: () => buyARS()  }
                                  ]
                                )
                              }
                            >
                                <View style={style.graphViewBuy}>
                                    <Text style={{fontWeight:'bold',fontSize:18, color:COLORS.white}}>buy</Text>
                                </View>    
                            </TouchableOpacity>
                            <TouchableOpacity 
                              // onPress={sellARS}
                              onPress={
                                () => 
                                Alert.alert(
                                  "Sel transaction confirmation :",
                                  "Total Sale of ARS : "+amountARS+" ARS",
                                  [
                                    {
                                      text: "Cancel",
                                      onPress: () => console.log("Cancel Pressed"),
                                      style: "cancel"
                                    },
                                    { text: "OK",onPress: () => sellARS() }
                                  ]
                                )
                              }
                            >
                                <View style={style.graphViewSell}>
                                    <Text style={{fontWeight:'bold',fontSize:18, color:COLORS.white}}>sel</Text>
                                </View>    
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity onPress={webView}>
                                <View style={style.graphView}>
                                    <Text style={{fontWeight:'bold',fontSize:18, color:COLORS.white}}>Graph</Text>
                                </View>    
                            </TouchableOpacity>
                        </View>
                    </View>


                    {/* END ARS */}
                    {/* START AUD */}

                    <View style={style.cartCard1}>
                        {/* <View style={{
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
                            <Text style={{fontSize:17,fontWeight:'bold'}}>Total Euro Deposits in AUD : {soldAUD} €</Text>
                            <Text style={{fontSize:17,fontWeight:'bold'}}>Total AUD buyer : {soldAUDbuy}</Text>
                            <Text style={{fontSize:17,fontWeight:'bold'}}>current EURO : {soldAUDbuy * exchangeRateAUD}</Text>
                            <Text style={{fontSize:17,fontWeight:'bold'}}>current AUD : {(soldAUDbuy * exchangeRateAUD) * exchangeRateAUD}</Text>
                            <Text style={{fontSize:17,fontWeight:'bold'}}>value of profit : {(soldAUDbuy * exchangeRateAUD)-(soldAUD)}€</Text>
                        </View> */}
                        <View style={{
                                backgroundColor: '#dcdde1',
                                justifyContent:'center',
                                alignItems:'center',
                                // marginVertical: 10,
                                // marginHorizontal: 20,
                                paddingHorizontal: 10,
                                paddingVertical:10,
                                borderBottomLeftRadius: 10,
                                borderBottomRightRadius: 10,
                            }}
                        >
                          <Text style={{fontSize:17,fontWeight:'bold',paddingVertical:10}}>Total Euro Deposits in AUD : {(soldAUD).toFixed(2)}€</Text>
                          <Text style={{fontSize:17,fontWeight:'bold',paddingVertical:2}}>Total AUD Buyer : {(soldAUDbuy).toFixed(4)}</Text>
                          <Text style={{fontSize:17,fontWeight:'bold',paddingVertical:2}}>Current EURO : {(soldAUDbuy * exchangeRateAUD).toFixed(4)}€</Text>
                          <Text style={{fontSize:17,fontWeight:'bold',paddingVertical:2}}>Current AUD : {((soldAUDbuy * exchangeRateAUD) * exchangeRateAUD).toFixed(4)}</Text>
                          <Text style={{fontSize:17,fontWeight:'bold',paddingVertical:2}}>Value Of Profit : {((soldAUDbuy * exchangeRateAUD)-(soldAUD)).toFixed(4)}€</Text>
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
                                    <Icon name="swap-horizontal-circle" size={24} color="black"/>
                                </View>
                                <View style={{alignItems:'center',justifyContent:'center'}}>
                                    <Text style={{fontWeight:'bold',fontSize:18}} >{toCurrencyAUD}</Text>
                                    <Text style={{fontSize:13,color:COLORS.grey}} >=</Text>

                                    <Text style={{fontSize:17,fontWeight:'bold'}} >{(toAmountAUD).toFixed(6)}</Text>
                                </View>
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
                            <TouchableOpacity 
                              // onPress={buyAUD}
                              onPress={
                                () => 
                                Alert.alert(
                                  "Buy Transaction Confirmation :",
                                  "Total EUR Deposit Of AUD : "+amountAUD+" €",
                                  [
                                    {
                                      text: "Cancel",
                                      onPress: () => console.log("Cancel Pressed"),
                                      style: "cancel"
                                    },
                                    { text: "OK", onPress: () => buyAUD()  }
                                  ]
                                )
                              }
                            >
                                <View style={style.graphViewBuy}>
                                    <Text style={{fontWeight:'bold',fontSize:18, color:COLORS.white}}>buy</Text>
                                </View>    
                            </TouchableOpacity>
                            <TouchableOpacity 
                              // onPress={sellAUD}
                              onPress={
                                () => 
                                Alert.alert(
                                  "Sel transaction confirmation :",
                                  "Total Sale of AUD : "+amountAUD+" AUD",
                                  [
                                    {
                                      text: "Cancel",
                                      onPress: () => console.log("Cancel Pressed"),
                                      style: "cancel"
                                    },
                                    { text: "OK",onPress: () => sellAUD() }
                                  ]
                                )
                              }
                            >
                                <View style={style.graphViewSell}>
                                    <Text style={{fontWeight:'bold',fontSize:18, color:COLORS.white}}>sel</Text>
                                </View>    
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity onPress={webView}>
                                <View style={style.graphView}>
                                    <Text style={{fontWeight:'bold',fontSize:18, color:COLORS.white}}>Graph</Text>
                                </View>    
                            </TouchableOpacity>
                        </View>
                    </View>


                    {/* END AUD */}
                    {/* START AWG */}

                    <View style={style.cartCard1}>
                        {/* <View style={{
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
                            <Text style={{fontSize:17,fontWeight:'bold'}}>Total Euro Deposits in AWG : {soldAWG} €</Text>
                            <Text style={{fontSize:17,fontWeight:'bold'}}>Total AWG buyer : {soldAWGbuy}</Text>
                            <Text style={{fontSize:17,fontWeight:'bold'}}>current EURO : {soldAWGbuy * exchangeRateAWG}</Text>
                            <Text style={{fontSize:17,fontWeight:'bold'}}>current AWG : {(soldAWGbuy * exchangeRateAWG) * exchangeRateAWG}</Text>
                            <Text style={{fontSize:17,fontWeight:'bold'}}>value of profit : {(soldAWGbuy * exchangeRateAWG)-(soldAWG)}€</Text>
                        </View> */}
                        <View style={{
                                backgroundColor: '#dcdde1',
                                justifyContent:'center',
                                alignItems:'center',
                                // marginVertical: 10,
                                // marginHorizontal: 20,
                                paddingHorizontal: 10,
                                paddingVertical:10,
                                borderBottomLeftRadius: 10,
                                borderBottomRightRadius: 10,
                            }}
                        >
                          <Text style={{fontSize:17,fontWeight:'bold',paddingVertical:10}}>Total Euro Deposits in AWG : {(soldAWG).toFixed(2)}€</Text>
                          <Text style={{fontSize:17,fontWeight:'bold',paddingVertical:2}}>Total AWG Buyer : {(soldAWGbuy).toFixed(4)}</Text>
                          <Text style={{fontSize:17,fontWeight:'bold',paddingVertical:2}}>Current EURO : {(soldAWGbuy * exchangeRateAWG).toFixed(4)}€</Text>
                          <Text style={{fontSize:17,fontWeight:'bold',paddingVertical:2}}>Current AWG : {((soldAWGbuy * exchangeRateAWG) * exchangeRateAWG).toFixed(4)}</Text>
                          <Text style={{fontSize:17,fontWeight:'bold',paddingVertical:2}}>Value Of Profit : {((soldAWGbuy * exchangeRateAWG)-(soldAWG)).toFixed(4)}€</Text>
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
                                    <Icon name="swap-horizontal-circle" size={24} color="black"/>
                                </View>
                                <View style={{alignItems:'center',justifyContent:'center'}}>
                                    <Text style={{fontWeight:'bold',fontSize:18}} >{toCurrencyAWG}</Text>
                                    <Text style={{fontSize:13,color:COLORS.grey}} >=</Text>

                                    <Text style={{fontSize:17,fontWeight:'bold'}} >{(toAmountAWG).toFixed(6)}</Text>
                                </View>
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
                            <TouchableOpacity 
                              // onPress={buyAWG}
                              onPress={
                                () => 
                                Alert.alert(
                                  "Buy Transaction Confirmation :",
                                  "Total EUR Deposit Of AWG : "+amountAWG+" €",
                                  [
                                    {
                                      text: "Cancel",
                                      onPress: () => console.log("Cancel Pressed"),
                                      style: "cancel"
                                    },
                                    { text: "OK", onPress: () => buyAWG()  }
                                  ]
                                )
                              }
                            >
                                <View style={style.graphViewBuy}>
                                    <Text style={{fontWeight:'bold',fontSize:18, color:COLORS.white}}>buy</Text>
                                </View>    
                            </TouchableOpacity>
                            <TouchableOpacity 
                              // onPress={sellAWG}
                              onPress={
                                () => 
                                Alert.alert(
                                  "Sel transaction confirmation :",
                                  "Total Sale of AWG : "+amountAWG+" AWG",
                                  [
                                    {
                                      text: "Cancel",
                                      onPress: () => console.log("Cancel Pressed"),
                                      style: "cancel"
                                    },
                                    { text: "OK",onPress: () => sellAWG() }
                                  ]
                                )
                              }
                            >
                                <View style={style.graphViewSell}>
                                    <Text style={{fontWeight:'bold',fontSize:18, color:COLORS.white}}>sel</Text>
                                </View>    
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity onPress={webView}>
                                <View style={style.graphView}>
                                    <Text style={{fontWeight:'bold',fontSize:18, color:COLORS.white}}>Graph</Text>
                                </View>    
                            </TouchableOpacity>
                        </View>
                    </View>


                    {/* END AWG */}









































                </ScrollView>
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

// const Container = styled.View`
//     flex: 1;
//     align-items: center;
//     justify-content: center;
//     background-color: #222222;
// `
// const SignInContainer = styled.TouchableOpacity`
//     margin: 0 32px;
//     height: 48px;
//     align-items: center;
//     justify-content: center;
//     background-color: #F9813A;
//     border-radius: 6px;
// `;
// const Loading = styled.ActivityIndicator.attrs(props => ({
//     color: "#ffffff",
//     size: "small",
// }))``;

const Loading = styled.ActivityIndicator.attrs(props => ({
  // color: "#ffffff",
  color: "#F9813A",
  size: "small",
}))``;

export default WalletScreen;