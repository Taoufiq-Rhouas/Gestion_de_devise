// import React from 'react';
// import {View ,Text, StyleSheet} from "react-native";

// export default MessageScreen = () => {
//       return (
//     <View style={styles.container} >
//         <Text>Message screen</Text>
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

//  Version 1

import React, { useState,useContext,useEffect } from 'react';
// import {View ,Text, StyleSheet, Image, SafeAreaView, ScrollView, Pressable,TextInput,} from "react-native";
import {View ,Text, StyleSheet, Image, ScrollView, Pressable,TextInput,TouchableOpacity,Alert} from "react-native";
import {UserContext} from "../context/UserContext";
import {FirebaseContext} from "../context/FirebaseContext";
import TextParam from '../components/Text';
import styled from "styled-components";
import {SafeAreaView} from 'react-native-safe-area-context';
import COLORS from '../consts/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import axios from "axios";

export default MessageScreen = ({ route, navigation }) => {

    // const DATA= [
    //     {
    //       id: 1,
    //       symbol: "SPX",
    //       name: "EUR / U.S. DOLLAR",
    //       img: "https://www.expertinvestor.net/images/logos/forexcom-logo-sq.png",
    //       redirectTo: "https://www.tradingview.com/symbols/SPX/",
    //       price: 10
    //     },
    //     {
    //       id: 2,
    //       symbol: "TVC-IXIC",
    //       name: "BRITISH POUND / U.S. DOLLAR",
    //       img: "https://www.expertinvestor.net/images/logos/forexcom-logo-sq.png",
    //       redirectTo: "https://www.tradingview.com/symbols/TVC-IXIC/",
    //       price: 20
    //     },
    //     {
    //       id: 3,
    //       symbol: "DJ-DJI",
    //       name: "AUSTRALIAN DOLLAR / JAPANESE YEN",
    //       img: "https://www.expertinvestor.net/images/logos/forexcom-logo-sq.png",
    //       redirectTo: "https://www.tradingview.com/symbols/DJ-DJI/",
    //       price: 30
    //     }
    //   ]
    const firebase = useContext(FirebaseContext);

    const [user, setUser] = useContext(UserContext);
    const [totalSold, setTotalSold] = useState(0);
    // const [soldMAD, setSoldMAD ] = useState(0);
    const [amountEURODeposit,setAmountEURODeposit] = useState(1);

    const [userData, setUserData] = useContext(UserContext);

    useEffect(() => {
      getUserValue();
    });


    


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

        // setSoldMAD(Userdata.data.SoldMAD);
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

    // let AmountEURODepodsit = 0;
    function addTotalVallEURO (){
      setAmountEURODeposit(parseFloat(amountEURODeposit) + 1)
    }
    function minusTotalVallEURO (){
      if(amountEURODeposit > 0){
        setAmountEURODeposit(parseFloat(amountEURODeposit) - 1)
      }
    }


    const logOut = async () => {
        const loggeOut = await firebase.logOut();

        if(loggeOut) {
            setUser((state) => ({ ...state,email:"", isLoggedIn: false}));
        }
    }
    

    // Deposet DATA
    const signInAsync = async () => {
      try{
        if(amountEURODeposit > 0){
          // console.log("totalSold : ",totalSold);
          // console.log("amountEURODeposit : ",amountEURODeposit);
          // totalSold(totalSold + amountEURODeposit );
          // // Alert.alert('OUI');
          console.log("------- = -------")
          console.log("totalSold : ",totalSold + amountEURODeposit);
          // 
          let DataSend = {email: userData.email, sold: totalSold + amountEURODeposit}

          axios.put("https://foreexbackend.herokuapp.com/api/user/Deposit", DataSend).then(() => {
          console.log("data inserted")
          })
          .catch((e) => {
            console.log("data not inserted")
          })
          setTotalSold(DataSend.sold);

          // 

        }else{
          Alert.alert('Tcha rayeh a 3chiri');
        }
        // axios.post("https://foreeeeex.herokuapp.com/api/user/signUp", userData).then(() => {
        //   console.log("data inserted")
        // })
        // .catch((e) => {
        //   console.log("data not inserted")
        // })
      }catch (error){

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
                <Text style={{fontSize:17,fontWeight:'bold'}}>Welcom  {userData.email}</Text>
            </View>
            <ScrollView style={styles.scrollView}>
              <View style={styles.cartCard1}>
                {/*  */}
                <Text style={{fontSize:17,fontWeight:'bold'}}>Wallet</Text>
                <Text style={{fontSize:17,fontWeight:'bold'}}>TOTAL SOLD : {totalSold} €</Text>
                <View style={styles.cartCard2} >
                  <View style={{
                      height:100,
                      marginLeft:10,
                      paddingVertical:10,
                      flex:1,
                      // flexDirection: 'row',
                      alignItems:'center',
                      justifyContent:'space-between'
                  }}>
                    {/*  */}
                    <View style={{flexDirection:'row'}} >
                      {/* <View style={{alignItems:'center',justifyContent:'center'}}>
                          <Text style={{fontSize:17,fontWeight:'bold'}}>EURO : </Text>
                      </View> */}
                      <View>
                        <TouchableOpacity onPress={minusTotalVallEURO}>
                          <View style={styles.actionBtn2}>
                              <Icon name="remove" size={25} color={COLORS.white} />
                          </View>    
                        </TouchableOpacity>
                      </View>
                      {/* <View style={{marginLeft:20}}> */}
                      <View style={{marginLeft:20,marginRight:20}}>
                        <TextInput 
                            style={styles.input}
                            // placeholder='new todo...'
                            keyboardType="numeric"
                            // value={`10 €`}
                            // value={`${fromAmountMAD}`}
                            value={`${amountEURODeposit}`}
                            onChangeText={setAmountEURODeposit}
                        />
                        {/* <View style={{flexDirection:'row'}} >
                          <TouchableOpacity onPress={() => Alert.alert('Simple Button pressed')}>
                              <View style={styles.actionBtn}>
                                  <Icon name="remove" size={25} color={COLORS.white} />
                              </View>    
                          </TouchableOpacity>
                          <Text style={{width:80}}> </Text>
                          <TouchableOpacity onPress={() => Alert.alert('Simple Button pressed')}>
                              <View style={styles.actionBtn}>
                                  <Icon name="add" size={25} color={COLORS.white} />
                              </View>    
                          </TouchableOpacity>
                        </View> */}
                      </View>
                      <View>
                        <TouchableOpacity onPress={addTotalVallEURO}>
                          <View style={styles.actionBtn2}>
                            <Icon name="add" size={25} color={COLORS.white} />
                          </View>    
                        </TouchableOpacity>
                      </View>
                    </View>
                    {/* <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}} >
                      <Text style={{fontSize:13,color:COLORS.grey}} >=</Text>
                      <Text style={{fontWeight:'bold',fontSize:18}} >88</Text>
                    </View> */}
                    {/*  */}
                  </View>
                </View>
                <View>
                  {/* <TouchableOpacity onPress={() => Alert.alert('Simple Button pressed')}> */}
                  <TouchableOpacity onPress={signInAsync}>
                    {/* <View style={style.actionBtn}> */}
                    <View style={styles.graphView}>
                      <Text style={{fontWeight:'bold',fontSize:18, color:COLORS.white}}>Cash deposit</Text>
                      {/* <Icon name="home-filled" color={COLORS.grey} size={28} /> */}
                    </View>    
                  </TouchableOpacity>
                </View>
                {/*  */}
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




                {/* <SafeAreaView style={styles.areaView}>
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

                                <Pressable style={[styles.button, styles.buttonOpen]} onPress={() =>{ navigation.navigate("Chart", {  data: data.redirectTo, cryptoPrice: data.price }); }}> */}
                                {/* navigation.navigate("Chart", { user }); */}
                                {/* <Text>SHOWING chart</Text>
                                </Pressable>

                                </View> */}
                                {/* <Text style={styles.cryptoListsTxt}>{data.price} $</Text> */}
                            {/* </View>
                            )
                        })
                        }
                    </View>
                    </ScrollView>
                </SafeAreaView> */}












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
      // width:"100%",
      width: 160,
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
    },
    actionBtn2: {
      width: 40,
      height: 80,
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
