import React, {createContext} from 'react';

import firebase from 'firebase';
import "firebase/auth";
import "firebase/firestore";
import config from '../config/firebase';


const FirebaseContext = createContext();

if(!firebase.apps.length){
    firebase.initializeApp(config);
}

const db = firebase.firestore();

const Firebase = {
    getCurrentUser: () => {
        return firebase.auth.currentUser
    },
    createUser: async (user) => {
        try{
            await firebase.auth().createUserWithEmailAndPassword(user.email, user.password);
            const uid = Firebase.getCurrentUser().uid;
            let profilePhotoUrl = "default";
            await db.collection("users").doc(uid).set({
                username: user.username,
                email: user.email,
                profilePhotoUrl
            })

            // if (user.profilePhoto) {
            // 33
            // }

            delete user.password

            return { ...user, profilePhotoUrl, uid}
        }catch (error){
            console.log("Error @createuser: ", error.message)
        }
    },

    //UPLOAD_PROFIL_PHOTO

    getBlob: async (uri) => {
        return await new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();

            xhr.onload = () => {
                resolve(xhr.response);
            }

            xhr.onerror = () => {
                reject(new TypeError("Network request failed."));
            }

            xhr.response= "blob";
            xhr.open("GET", uri, true);
            xht.send(null);
        })
    },

    getUserInfo: async (uid) => {
        try{
            const user = await db.collection("users").doc(uid).get();
            if(user.exists){
                return user.data()
            }
        }catch (error) {
            console.log("Error @getUserInfo:", error)
        }
    },

    logOut: async () => {
        try{
            await firebase.auth().signOut();
            return true;
        }catch(error){
            console.log("Error @logOut: ", error)
        }
        return false;
    },

    signIn: async (email, password) => {
        return firebase.auth().signInWithEmailAndPassword(email, password);
    }
};

const FirebaseProvider = (props) => {
    return <FirebaseContext.Provider value={Firebase}>{props.children}</FirebaseContext.Provider>
};

export {FirebaseContext, FirebaseProvider};