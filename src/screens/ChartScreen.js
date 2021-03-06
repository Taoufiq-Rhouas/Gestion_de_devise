// import React from 'react';
// import {View ,Text, StyleSheet} from "react-native";

// export default ChartScreen = () => {
//       return (
//     <View style={styles.container} >
//         <Text>ChartScreen screen</Text>
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


// ----------------------------------------------

import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Linking, Pressable } from 'react-native';

// import axios from "axios";

const ChartScreen = ({ navigation, route }) => {
    // const { userData, data, cryptoPrice } = route.params;
    const { data } = route.params;

    const webView = () => {
        // navigation.navigate("WebviewNav", { userData, data });
        navigation.navigate("WebviewNav", { data });
    }
    // const walletFun = () => {
    //     navigation.navigate("WalletNav", { userData, data })
    // }
    // const buyFun = () => {
    //     let GetUserData = {email: userData.email, price: cryptoPrice}

    //     axios.post("https://foreeeeex.herokuapp.com/api/user/buy", GetUserData).then(() => {
    //         console.log("data updated")
    //       })
    //       .catch((e) => {
    //         alert('you have not money')
    //       })
    // }
    // const sellFun = () => {
    //     let GetUserData = {email: userData.email, price: cryptoPrice}

    //     axios.post("https://foreeeeex.herokuapp.com/api/user/sell", GetUserData).then(() => {
    //         console.log("data updated")
    //       })
    //       .catch((e) => {
    //         alert('you have not money')
    //       })
    // }

  return (
    <View>
        <View style={styles.userInfo}>
            {/* <Image source={{uri: `${userData.photo_url}`}} style={{width:40, height:40,borderRadius:30}} /> */}
            {/* <Text style={styles.userInfoTxt}> {userData.name} </Text> */}
        </View>

        <Pressable onPress={webView} style={{marginTop: 100}} >
            <Text style={{fontWeight: "bold", textAlign: "center"}} >View chart</Text>
        </Pressable>

        {/* <View style={styles.btnGroup}>
            <Pressable onPress={walletFun} style={styles.BTN}>
                <Text style={{fontWeight: "bold"}} >YOUR WALLET</Text>
            </Pressable>
            <Pressable onPress={buyFun} style={styles.BTN}>
                <Text style={{fontWeight: "bold"}} >BUY</Text>
            </Pressable>
            <Pressable onPress={sellFun} style={styles.BTN}>
                <Text style={{fontWeight: "bold"}} >SELL</Text>
            </Pressable>
        </View> */}
    </View>
  );
};

export default ChartScreen;

const styles = StyleSheet.create({
    userInfo: {
        flex: 1,
        marginTop: 20,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "baseline"
    },
    userInfoTxt: {
        fontWeight: "bold"
    },
    btnGroup: {
        display: "flex",
        justifyContent: 'center',
        alignItems: "center"
    },
    BTN: {
        padding: 20,
        textAlign: "center",
        backgroundColor: "#d9d9d9",
        margin: 10,
        borderRadius: 20,
    },
});

