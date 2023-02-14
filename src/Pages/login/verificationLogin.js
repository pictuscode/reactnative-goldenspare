import React, { useState, useEffect } from 'react';
import NextTextInput from 'react-native-next-input';
import Style from '../../Components/Common/Globle';
import { ToastAndroid, View, Keyboard, ActivityIndicator, TouchableOpacity, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ThemeButton from '../../Components/Themebutton';
import { useNavigation, } from "@react-navigation/native";
import { FONT_VOILET, BG_COLOR } from '../../Components/Common/Variable';
import * as axios from 'axios';
import { baseUrl } from '../../Components/Common/baseUrl';
const VerificationLogin = () => {
    const navigation = useNavigation();
    const [loader, setLoader] = useState(true)
    const [userId, setUserId] = useState("");

    const [token, setToken] = useState("");
    const [status, setStatus] = useState([]);

    //console.log(userId)
    //console.log(token)
    // console.log(status)


    const [otpData, setOtpData] = useState("")
    //console.log(otpData)
    const [validOtp, setValidOtp] = useState("")
    // console.log(validOtp)
    useEffect(() => {
        getData()
        dataCheck();
    }, [])





    const getData = async () => {
        const savedUser = await AsyncStorage.getItem("userDetails")
        const currentUser = JSON.parse(savedUser);
        //console.log(currentUser)
        setUserId(currentUser.userId)
        setToken(currentUser.token)

    }



    const dataCheck = async () => {
        setLoader(true)
        const userDetails = await AsyncStorage.getItem("userDetails")
        const currentUser = JSON.parse(userDetails);
        const status = await AsyncStorage.getItem("status")
        const statusverify = JSON.parse(status);

        //console.log(statusverify)
        if (statusverify.status !== 2) {

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

    const otpverify = () => {
        let value = ""
        //console.log(value)
        otpData.map(element => {
            //console.log(element)


            value += element

            setValidOtp(value)

        }
        )

        Keyboard.dismiss()


        axios.post(baseUrl + 'otpverify ', {

            userId: userId,
            otp: validOtp

        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        }

        ).then(async (response) => {
            if (response.data) {
                // console.log(response.data)
                if (response.data.status == 1) {
                    ToastAndroid.show(response.data.message, ToastAndroid.CENTER);

                    await AsyncStorage.setItem("status", JSON.stringify(response.data));

                    const userDetails = await AsyncStorage.getItem("userDetails")
                    const currentUser = JSON.parse(userDetails);
                    // console.log(currentUser)

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

            }
        }).catch(function (error) {
            console.log(error)
        });

        //console.log(validOtp)
    }
    const Resendotp = () => {
        ToastAndroid.show("Send OTP", ToastAndroid.CENTER);
        axios.post(baseUrl + 'resendotp  ', {
            userId: userId
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        }
        ).then(async (response) => {
            if (response.data) {
                //setStatus(response.status)
                //console.log(response.data)
                if (response.data.status == 1) {
                    navigation.reset({
                        index: 0,
                        routes: [{ name: 'Verification' }],
                    });
                } else {

                    ToastAndroid.show(response.data.message, ToastAndroid.CENTER);
                }
            }
        }).catch(function (error) {
            console.log(error)
        });


    }

    const onSubmit = async () => {

        await AsyncStorage.clear()


        navigation.reset({
            index: 0,
            routes: [{ name: 'Login' }],
        });

    }

    return (
        loader ? (<ActivityIndicator size={30} color={FONT_VOILET} style={{ flex: 1, justifyContent: "center", backgroundColor: BG_COLOR }} />) : (
            <View>


                <View>

                </View>
                <View style={{ marginTop: 200 }}>

                    <View style={{ justifyContent: "center", alignItems: "center" }}>

                        <NextTextInput
                            noOfTextInput={4}
                            textInputStyle={Style.textinput}
                            onChangeValue={setOtpData}
                        />
                    </View>
                    <View style={{ width: '83%', marginTop: 10, marginEnd: 20, marginBottom: 17 }} >

                        <ThemeButton name="Verify" styleText={Style.themebtn_text} styleButton={Style.themebtn} onPressFun={() => { otpverify() }}></ThemeButton>


                    </View>
                    <TouchableOpacity onPress={() => Resendotp()}>
                        <View style={{ alignItems: "flex-end", marginEnd: 30 }}>
                            <Text style={{ textDecorationLine: "underline", }}>
                                Resend OTP
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <View style={{ width: '83%', marginTop: 100, marginEnd: 20, marginBottom: 17 }} >
                        <ThemeButton name="Log Out" styleText={Style.themebtnlight_text} styleButton={Style.themebtnlight} onPressFun={() => { onSubmit() }}></ThemeButton>
                    </View>

                </View>
            </View>)

    );
}



export default VerificationLogin