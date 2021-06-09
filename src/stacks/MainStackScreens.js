import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Ionicons} from '@expo/vector-icons';

import HomeScreen from '../screens/HomeScreen';
// import MessageScreen from '../screens/MessageScreen';
// import PostScreen from '../screens/PostScreen';
import DepositScreen from '../screens/DepositScreen';
// import Notification from '../screens/NotificationScreen';
import WalletScreen from '../screens/WalletScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ChartScreen from '../screens/ChartScreen';
import WebviewScreen from '../screens/WebviewScreen';


export default MainStackScreens = () => {
    const MainStack = createBottomTabNavigator();

    const tabBarOptions = {
        showLabe: false,
        style:{
            // backgroundColor: "#222222",
            // backgroundColor: "#F9813A",
            backgroundColor: "#34495e",
            paddingBototm: 12,
        },
    };

    const screenOption = (({route}) => ({
        tabBarIcon: ({focused}) => {
            let iconName = "ios-home"

            switch (route.name){
                case "Home":
                    iconName = "ios-home";
                    break;
                case "Profile":
                    iconName = "ios-person";
                    break;
                // case "Message":
                //     iconName = "ios-chatbubbles";
                //     break;
                case "Wallet":
                    // iconName = "ios-notifications";
                    iconName = "ios-wallet";
                    break;
                
                case "Home":
                    iconName = "ios-home"
                    break;
                case "WebviewNav":
                    iconName = "ios-pie-chart";
                    // iconName = "ios-area-chart";
                    break;
                default:
                    iconName = "ios-home"
            }

            if (route.name == "Deposit") {
                return (
                    <Ionicons 
                        name="ios-add-circle" 
                        size={48} 
                        color="#23a8d9" 
                        style={{ 
                            shadowColor: "#23a8d9", 
                            shadowOffset: { width:0, height:10}, 
                            shadowRadius:10,
                            shadowOpacity: 0.3,
                        }}
                    />
                )
            }

            return <Ionicons name={iconName} size={24} color={focused ? "#ffffff" : "#666666"} />;
        },
    }))
    return (
        <MainStack.Navigator tabBarOptions={tabBarOptions} screenOptions={screenOption}>
            <MainStack.Screen name ="Home" component={HomeScreen} />
            <MainStack.Screen name ="Wallet" component={WalletScreen} />
            <MainStack.Screen name ="Deposit" component={DepositScreen} />
            <MainStack.Screen name ="Chart" component={ChartScreen} />
            <MainStack.Screen name ="Profile" component={ProfileScreen} />
            <MainStack.Screen name ="WebviewNav" component={WebviewScreen} />




            
            {/* <MainStack.Screen name ="Message" component={MessageScreen} /> */}
            {/* <MainStack.Screen name ="Post" component={PostScreen} /> */}
            {/* <MainStack.Screen name ="Message" component={MessageScreen} /> */}
            {/* <MainStack.Screen name ="Notification" component={Notification} /> */}
           
            
            
            
            
            
        </MainStack.Navigator>
    )
}