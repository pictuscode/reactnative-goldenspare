import React from 'react'
import { View, ToastAndroid, ActivityIndicator, Text, TextInput, Keyboard } from 'react-native'
import { useState, useEffect, useRef } from 'react';
import { FONT_VOILET, BG_COLOR } from '../../Components/Common/Variable';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Style from '../../Components/Common/Globle';
import ThemeButton from '../../Components/Themebutton';
import * as axios from 'axios';
import { baseUrl } from '../../Components/Common/baseUrl';
import { useNavigation } from '@react-navigation/native';
const BidPage = ({ route }) => {
    const navigation = useNavigation();
    const { postId } = route.params;
    //console.log(postId)
    const [loader, setLoader] = useState(false);
    //console.log(dirImg)

    const [userId, setUserId] = useState('');
    const [token, setToken] = useState("");
    //console.log(token)
    const [bidAmountError, setBidAmountError] = useState("")
    const [contentError, setContentError] = useState("")

    const [bidAmount, setBidAmount] = useState('');
    const [content, setContent] = useState('');

    const bidAmountRef = useRef();
    const contentRef = useRef();

    useEffect(() => {
        getData()

    }, [])
    const getData = async () => {
        setLoader(true)
        const savedUser = await AsyncStorage.getItem("userDetails")
        const currentUser = JSON.parse(savedUser);
        setUserId(currentUser.userId)
        setToken(currentUser.token)
        setLoader(false)
    }
    const bidonpost = async () => {
        await axios.post(baseUrl + 'bidonpost  ', {
            postId: postId,
            userId: userId,
            bidAmount: bidAmount,
            content: content
        }

            , {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                }
            }
        )
            .then((response) => {
                //console.log(response.data)


                ToastAndroid.show(response.data.message, ToastAndroid.CENTER)
                setLoader(false)
                navigation.navigate("UserAddData", { postId: postId })

            }).catch((error) => {

                console.log(error)
                ToastAndroid.show("tryagain", ToastAndroid.CENTER)
            });
    }
    const onSubmit = () => {


        setBidAmountError("");
        setContentError("");

        var errorCount = 0;
        if (bidAmount == "") {

            setBidAmountError("Please enter Bid Amount..");
            errorCount++


        }
        if (content == "") {

            setContentError("Please enter your Content..");
            errorCount++


        }




        if (bidAmount == "") {
            bidAmountRef.current.focus();

        }

        else if (content == "") {
            contentRef.current.focus();


        }



        if (errorCount == 0) {

            bidonpost(), Keyboard.dismiss()
        }


    }
    return (
        loader ? (<ActivityIndicator size={30} color={FONT_VOILET} style={{ flex: 1, justifyContent: "center", backgroundColor: BG_COLOR }} />) :
            <View style={{ marginTop: 100 }}>
                <View style={{ marginHorizontal: 20 }}>

                    <View style={{ flexDirection: 'row' }} >
                        <Text style={Style.contanttext}>
                            BidAmount
                            <Text style={Style.red}>
                                *
                            </Text>
                        </Text>

                    </View>

                    <TextInput
                        style={Style.textinput}
                        placeholder='Enter your Bid Amount'
                        keyboardType='number-pad'
                        value={bidAmount}

                        ref={bidAmountRef}
                        onChangeText={(value) => {
                            setBidAmount(value)
                            if (value == "") {
                                setBidAmountError("Please enter Bid Amount...")
                            }
                            else {
                                setBidAmountError("");
                            }
                        }}

                    >
                    </TextInput>
                    <Text style={Style.red}>
                        {bidAmountError}
                    </Text>
                    <View style={{ flexDirection: 'row' }} >
                        <Text style={Style.contanttext}>
                            content
                            <Text style={Style.red}>
                                *
                            </Text>
                        </Text>

                    </View>

                    <TextInput
                        style={Style.textinput}
                        placeholder='Enter your Content'
                        keyboardType='default'
                        value={content}
                        ref={contentRef}
                        onChangeText={(value) => {
                            setContent(value)
                            if (value == "") {
                                setContentError("Please enter your Content...")
                            }
                            else {
                                setContentError("");
                            }
                        }}

                    >
                    </TextInput>
                    <Text style={Style.red}>
                        {contentError}
                    </Text>
                </View>
                <View style={{ width: '80%', marginEnd: 20, marginBottom: 5, marginTop: 20 }} >

                    <ThemeButton name="Bid Post" styleText={Style.themebtn_text} styleButton={Style.themebtn} onPressFun={() => { onSubmit() }}></ThemeButton>

                </View>
            </View>
    )
}

export default BidPage