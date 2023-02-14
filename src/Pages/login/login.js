import React from 'react'
import { View, Text, TextInput, ScrollView, Image, Keyboard, ActivityIndicator } from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker';
import { useState } from 'react';
import Style from '../../Components/Common/Globle'
import { FONT_WHITE } from '../../Components/Common/Variable';
import ThemeButton from '../../Components/Themebutton'
import { useRef, useEffect } from 'react';
import { ToastAndroid } from 'react-native';
import { useNavigation, } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as axios from 'axios';
import { FONT_VOILET, BG_COLOR } from '../../Components/Common/Variable';
import { baseUrl } from '../../Components/Common/baseUrl';
const Login = () => {


    const [loader, setLoader] = useState(true)

    const navigation = useNavigation();
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")



    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const emailRef = useRef();
    const passwordRef = useRef()


    const [userId, setUserId] = useState("");
    const [token, setToken] = useState("");
    const [status, setStatus] = useState([]);

    // console.log(userId)
    //console.log(token)
    //console.log(status)
    const AuthuLogin = () => {

        setLoader(true)
        axios.post(baseUrl + 'authuser', {
            email: email,
            password: password,

        }, {
            headers: { 'Content-Type': 'application/json' }
        }
        ).then(async (response) => {

            if (response.data) {
                setStatus(response.status)
                //console.log(response.data)
                ToastAndroid.show(response.data.message, ToastAndroid.CENTER)
                await AsyncStorage.setItem("userDetails", JSON.stringify(response.data.userDetails))
                const userDetails = await AsyncStorage.getItem("userDetails")
                const currentUser = JSON.parse(userDetails);
                //console.log(currentUser)
                await AsyncStorage.setItem("status", JSON.stringify(response.data))

                if (currentUser.status == 2) {


                    navigation.reset({
                        index: 0,
                        routes: [{ name: 'VerificationLogin' }],
                    });




                }
                else {
                    if (currentUser.role == 0) {
                        navigation.reset({
                            index: 0,
                            routes: [{ name: 'AgencyDetails' }],
                        });
                    }
                    else {
                        navigation.reset({
                            index: 0,
                            routes: [{ name: 'VessalOwerDetails' }],
                        });
                    }

                }

                setLoader(false)
            }

        }).catch(function (error) {
            console.log(error)
        });

    }









    const onSubmit = () => {

        setEmailError("");
        setPasswordError("");
        var errorCount = 0;
        if (email == "") {
            setEmailError("Please enter your business email..");
            errorCount++
        }
        if (password == "") {
            setPasswordError("Please enter password..");
            errorCount++
        }

        if (email == "") {
            emailRef.current.focus();
        }
        else if (password == "") {
            passwordRef.current.focus();
        }
        else {
            passwordRef.current.focus();
        }





        if (errorCount == 0) {
            AuthuLogin(), Keyboard.dismiss();
        }

    }

    useEffect(() => {
        dataCheck();
    }, [])


    const dataCheck = async () => {
        setLoader(true)
        const userDetails = await AsyncStorage.getItem("userDetails")

        if (userDetails !== null) {

            navigation.reset({
                index: 0,
                routes: [{ name: 'VerificationLogin' }],
            });

        }
        setLoader(false)
    }

    return (

        <ScrollView keyboardDismissMode="on-drag"
            keyboardShouldPersistTaps="always" style={{ backgroundColor: FONT_WHITE }}  >
            <View>
                <Image style={{ height: 100, }} source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpEX0k-P1pPC3fkMG6KeOg4o3qCGLa64mSzscO8NKt28di-4wsW3ZwBi5HKdabt2nOlNw&usqp=CAU" }} />


            </View>
            <View style={{ marginHorizontal: 20 }}>

                <View style={{ flexDirection: 'row' }} >
                    <Text style={Style.contanttext}>
                        Your Business Email
                        <Text style={Style.red}>
                            *
                        </Text>
                    </Text>

                </View>

                <TextInput
                    style={Style.textinput}
                    placeholder='Enter your Business Email'
                    keyboardType='email-address'
                    autoCapitalize="none"
                    value={email}
                    ref={emailRef}
                    onChangeText={(value) => {
                        setEmail(value)
                        if (value == "") {
                            setEmailError("Please enter location...")
                        }
                        else {
                            setEmailError("");
                        }
                    }}

                >
                </TextInput>
                <Text style={Style.red}>
                    {emailError}
                </Text>
                <View style={{ flexDirection: 'row' }} >
                    <Text style={Style.contanttext}>
                        Password
                        <Text style={Style.red}>
                            *
                        </Text>
                    </Text>

                </View>

                <TextInput
                    secureTextEntry={true}
                    style={Style.textinput}
                    placeholder='Enter Password '
                    keyboardType='default'
                    value={password}
                    ref={passwordRef}
                    onChangeText={(value) => {
                        setPassword(value)
                        if (value == "") {
                            setPasswordError("Please enter your name...")
                        }
                        else {
                            setPasswordError("");
                        }
                    }}

                >
                </TextInput>
                <Text style={Style.red}>
                    {passwordError}
                </Text>



                <View style={{ width: '80%', marginTop: 10, marginEnd: 20, marginBottom: 17 }} >

                    <ThemeButton name="sign in" styleText={Style.themebtn_text} styleButton={Style.themebtn} onPressFun={() => { onSubmit() }}></ThemeButton>


                </View>


                <View style={{ width: '80%', marginTop: 130, marginEnd: 20, marginBottom: 17 }} >


                    <Text style={{ textAlign: 'center', marginStart: 60, marginBottom: 10 }}>
                        <Text style={Style.H4}>
                            New To GoldenSpare ?
                        </Text>


                    </Text>



                    <ThemeButton name="sign up" styleText={Style.themebtnlight_text} styleButton={Style.themebtnlight} onPressFun={() => {
                        navigation.reset({
                            index: 0,
                            routes: [{ name: 'SignUP_1' }],
                        });
                    }}></ThemeButton>


                </View>

            </View >
        </ScrollView >

    )
}

export default Login