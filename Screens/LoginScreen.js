import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, SafeAreaView, View, TextInput, TouchableOpacity } from 'react-native'
import { auth, db } from '../Firebase/firebase'
// import {onSnapshot, collection} from "@firebase/firestore";
import { collection, getDocs } from "firebase/firestore/lite";

export const GetData = async () => {
    const YrlythemeCol = collection(db, 'Yrlytheme');
    const Yrlycollection = await getDocs(YrlythemeCol);
    const YrlyList = Yrlycollection.docs.map(doc => doc.data());
    console.log(YrlyList[0].ThemeName);
    const string = YrlyList[0].ThemeName
    return string;
}

const LoginScreen = () => {
        const [email, setEmail] = useState('')
        const [password, setPassword] = useState('')

        const navigation = useNavigation()

        useEffect(() => {
            const unsubcribe = auth.onAuthStateChanged(user => {
                if(user) {
                    navigation.navigate("Home")
                }
            })

            return unsubcribe
        }, [])

        const handleSignUp = () => {
            auth
              .createUserWithEmailAndPassword(email, password)
              .then(userCredentials => {
                  const user = userCredentials.user;
                  console.log("Registered with: ", user.email);
              })
              .catch(error => alert(error.message))
        }

        const handleLogin = () => {
            auth
            .signInWithEmailAndPassword(email, password)
            .then(userCredentials => {
                const user = userCredentials.user;
                GetData();
                console.log(fromLogin.GetData());
                console.log('Logged in with: ', user.email);
            })
            .catch(error => alert(error.message))
        }


        return (
        <KeyboardAvoidingView
          style={styles.container}
          behavior='padding'
        >
            <SafeAreaView>
                <Text style={styles.titleText} adjustsFontSizeToFit={true}>
                    GetData()</Text>
            </SafeAreaView>
            <View style={styles.inputContainer}>
            <TextInput 
                placeholder="Email"
                value={email}
                onChangeText={text => setEmail(text)}
                style={styles.input}
            />
            <TextInput 
                placeholder="Password"
                value={password}
                onChangeText={text => setPassword(text)}
                style={styles.input}
                secureTextEntry
            />
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                  onPress={handleLogin}
                  style={styles.button}
                >
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={handleSignUp}
                  style={[styles.button, styles.buttonOutline]}
                >
                    <Text style={styles.buttonOutlineText}>Register</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
        )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputContainer: {
        width: "80%"
    },
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,
    },
    buttonContainer: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    },
    button: {
        backgroundColor: '#0782F9',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center'
    },
    buttonOutline: {
        backgroundColor: 'white',
        marginTop: 5,
        borderColor: '#0782F9',
        borderWidth: 2,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '700'
    },
    buttonOutlineText: {
        color: '#0782F9',
        fontSize: 16,
        fontWeight: '700'
    },
})
