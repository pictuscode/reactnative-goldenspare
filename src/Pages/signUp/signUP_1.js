import React, { Component } from 'react'
import { View, Text, TextInput, ScrollView, Image, ActivityIndicator, Keyboard, ToastAndroid } from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker';
import { useState } from 'react';
import Style from '../../Components/Common/Globle'
import { BG_COLOR, FONT_BLACK, FONT_VOILET, FONT_WHITE, THEME_COLOR } from '../../Components/Common/Variable';
import ThemeButton from '../../Components/Themebutton'
import { useEffect, useRef } from 'react';
import { useNavigation, } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as axios from 'axios';
import { baseUrl } from '../../Components/Common/baseUrl';
const SignUP_1 = () => {
    const navigation = useNavigation();

    const [loader, setLoader] = useState(false)

    const [firstNameError, setFirstNameError] = useState("")
    const [lastNameError, setLastNameError] = useState("")
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [interestError, setInterestError] = useState("")


    const [userId, setUserId] = useState("");
    const [token, setToken] = useState("");
    const [status, setStatus] = useState([]);

    //  console.log(userId)
    //console.log(token)


    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');



    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();


    const [interestopen, setInterestOpen] = useState('');
    const [interestvalue, setInterestValue] = useState('');
    const [interestitems, setInterestItems] = useState([{ label: 'Vessal Owner', value: 1 }, { label: 'Agency', value: 0 },]);

    const Registeruser = () => {
        axios.post(baseUrl + 'registeruser', {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            role: interestvalue,
        }, {
            headers: { 'Content-Type': 'application/json' }
        }
        ).then(async (response) => {
            if (response.data) {
                //setStatus(response.status)
                //console.log(response.data)
                if (response.data.status == 1) {

                    await AsyncStorage.setItem("userDetails", JSON.stringify(response.data));
                    await AsyncStorage.setItem("status", JSON.stringify(response.data))


                    const savedUser = await AsyncStorage.getItem("userDetails")
                    const currentUser = JSON.parse(savedUser);
                    //console.log(currentUser)
                    setUserId(currentUser.userId)
                    setToken(currentUser.token)


                    navigation.reset({
                        index: 0,
                        routes: [{ name: 'VerificationSignUp' }],
                    });
                } else {

                    ToastAndroid.show(response.data.message, ToastAndroid.CENTER);
                }
            }
        }).catch(function (error) {
            console.log(error)
        });


    }

    const onSubmit = () => {


        setFirstNameError("");
        setLastNameError("");
        setEmailError("");
        var errorCount = 0;
        if (firstName == "") {

            setFirstNameError("Please enter your name..");
            errorCount++


        }
        if (lastName == "") {

            setLastNameError("Please enter your last name..");
            errorCount++


        }
        if (interestvalue == null) {

            setInterestError("Please choose ..");
            errorCount++


        }
        if (email == "") {

            setEmailError("Please enter your business email..");
            errorCount++


        }
        if (password == "") {

            setPasswordError("Please enter password..");
            errorCount++


        }








        if (firstName == "") {
            firstNameRef.current.focus();

        }

        else if (lastName == "") {
            lastNameRef.current.focus();


        }
        else if (interestvalue == null) {
            setInterestOpen(true)


        }

        else if (email == "") {
            emailRef.current.focus();


        }
        else if (password == "") {
            passwordRef.current.focus();


        }


        if (errorCount == 0) {

            Registeruser(), Keyboard.dismiss()
        }


    }

    useEffect(() => {
        dataCheck();
    }, [])


    const dataCheck = async () => {
        setLoader(true)
        const userDetails = await AsyncStorage.getItem("userDetails")

        if (userDetails !== null) {
            if (userDetails.status == 1) {

                navigation.reset({
                    index: 0,
                    routes: [{ name: 'VerificationSignUp' }],
                });

            }

            else {

                navigation.reset({
                    index: 0,
                    routes: [{ name: 'VerificationLogin' }],
                });


            }
        }
        setLoader(false)
    }



    return (
        loader ? (<ActivityIndicator size={30} color={FONT_VOILET} style={{ flex: 1, justifyContent: "center", backgroundColor: BG_COLOR }} />) : (
            <ScrollView keyboardDismissMode="on-drag"
                keyboardShouldPersistTaps="always" style={{ backgroundColor: FONT_WHITE }}  >
                <View>
                    <Image style={{ height: 70, }} source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpEX0k-P1pPC3fkMG6KeOg4o3qCGLa64mSzscO8NKt28di-4wsW3ZwBi5HKdabt2nOlNw&usqp=CAU" }} />


                </View>
                <View style={{ marginHorizontal: 20 }}>

                    <View style={{ flexDirection: 'row' }} >
                        <Text style={Style.contanttext}>
                            FirstName
                            <Text style={Style.red}>
                                *
                            </Text>
                        </Text>

                    </View>

                    <TextInput
                        style={Style.textinput}
                        placeholder='Enter your first name'
                        keyboardType='default'
                        value={firstName}
                        ref={firstNameRef}
                        onChangeText={(value) => {
                            setFirstName(value)
                            if (value == "") {
                                setFirstNameError("Please enter your name...")
                            }
                            else {
                                setFirstNameError("");
                            }
                        }}

                    >
                    </TextInput>
                    <Text style={Style.red}>
                        {firstNameError}
                    </Text>
                    <View style={{ flexDirection: 'row' }} >
                        <Text style={Style.contanttext}>
                            LastName
                            <Text style={Style.red}>
                                *
                            </Text>
                        </Text>

                    </View>

                    <TextInput
                        style={Style.textinput}
                        placeholder='Enter your last name'
                        keyboardType='default'
                        value={lastName}
                        ref={lastNameRef}
                        onChangeText={(value) => {
                            setLastName(value)
                            if (value == "") {
                                setLastNameError("Please enter your last name...")
                            }
                            else {
                                setLastNameError("");
                            }
                        }}

                    >
                    </TextInput>
                    <Text style={Style.red}>
                        {lastNameError}
                    </Text>
                    <View style={{ flexDirection: 'row' }} >
                        <Text style={Style.contanttext}>
                            What are your Role ?
                            <Text style={Style.red}>
                                *
                            </Text>
                        </Text>

                    </View>
                    <DropDownPicker
                        placeholder="Select on option"
                        textStyle={Style.dropdownlable}
                        labelStyle={Style.dropdownlable}
                        style={Style.textinput}
                        open={interestopen}
                        value={interestvalue}
                        items={interestitems}
                        setOpen={setInterestOpen}
                        setValue={(value) => {
                            setInterestValue(value)
                            if (value == "") {
                                setInterestError("Please choose...")
                            }
                            else {
                                setInterestError("");
                            }
                        }}
                        setItems={setInterestItems}

                        inputContainerStyle={{ borderBottomColor: 'transparent' }}
                        listMode="SCROLLVIEW"



                    >

                    </DropDownPicker>
                    <Text style={Style.red}>
                        {interestError}
                    </Text>
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

                    <View style={{ width: '80%', marginEnd: 20, marginBottom: 5 }} >

                        <ThemeButton name="sign up" styleText={Style.themebtn_text} styleButton={Style.themebtn} onPressFun={() => { onSubmit() }}></ThemeButton>

                    </View>
                    <View style={{ width: '80%', marginEnd: 20, marginBottom: 17 }} >


                        <Text style={{ textAlign: 'center', marginStart: 60, marginBottom: 10 }}>
                            <Text style={Style.H4}>
                                Already have an account
                            </Text>


                        </Text>



                        <ThemeButton name="sign in" styleText={Style.themebtnlight_text} styleButton={Style.themebtnlight} onPressFun={() => {
                            navigation.reset({
                                index: 0,
                                routes: [{ name: 'Login' }],
                            });
                        }}></ThemeButton>


                    </View>

                </View >
            </ScrollView >)
    )


}




export default SignUP_1