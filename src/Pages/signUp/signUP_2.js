import React, { Component } from 'react'
import { View, Text, TextInput, ScrollView, ToastAndroid, Keyboard, Image } from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker';
import { useState } from 'react';
import Style from '../../Components/Common/Globle'
import { Fonts } from '../../Components/Common/Fonts';
import { FONT_BLACK, FONT_WHITE, THEME_COLOR } from '../../Components/Common/Variable';
import ThemeButton from '../../Components/Themebutton';
import * as axios from 'axios';
import { useEffect, useRef } from 'react';
import { useNavigation, } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { baseUrl } from '../../Components/Common/baseUrl';
const SignUP_2 = ({ route }) => {
    const navigation = useNavigation();

    const { firstName } = route.params;
    const { lastName } = route.params;
    const { email } = route.params;
    const { password } = route.params;

    const [interestopen, setInterestOpen] = useState('');
    const [interestvalue, setInterestValue] = useState('');
    const [interestitems, setInterestItems] = useState([{ label: 'Sourcing', value: "Sourcing" }, { label: 'Trade', value: "Trade" },]);
    const [open, setOpen] = useState('');
    const [value1, setValue] = useState('');
    const [items, setItems] = useState([{ label: '1-10', value: '1-10' }, { label: '10-50', value: '10-50' }, { label: '>50', value: '>50' },]);






    const [userId, setUserId] = useState("");
    const [token, setToken] = useState("");
    const [status, setStatus] = useState([]);

    // console.log(userId)
    // console.log(token)
    // console.log(status)


    const postSignUp = () => {
        axios.post(baseUrl + 'registeruser', {
            firstName: firstName,
            lastName: lastName,
            companyName: companyName,
            email: email,
            password: password,
            interest: interestvalue,
            vessels: value1,
        }, {
            headers: { 'Content-Type': 'application/json' }
        }
        ).then(async (response) => {
            if (response.data) {
                //setStatus(response.status)
                //console.log(response)
                if (response.data.status == 1) {
                    {
                        await AsyncStorage.setItem("userDetails", JSON.stringify(response.data));
                    }


                    const savedUser = await AsyncStorage.getItem("userDetails")
                    const currentUser = JSON.parse(savedUser);
                    // console.log(currentUser)
                    setUserId(currentUser.userId)
                    setToken(currentUser.token)


                    navigation.reset({
                        index: 0,
                        routes: [{ name: 'Verification', userId: userId, token: token }],
                    });
                } else {

                    ToastAndroid.show(response.data.message, ToastAndroid.CENTER);
                }
            }
        }).catch(function (error) {
            console.log(error)
        });


    }





    const [isSelected, setSelection] = useState(false);

    const [companyNameError, setCompanyNameError] = useState("")



    const [interestError, setInterestError] = useState("")
    const [drapDownError, setDropDownError] = useState("")




    const [companyName, setCompanyName] = useState('');





    const companyNameRef = useRef();







    const onSubmit = () => {



        var errorCount = 0;


        if (companyName == "") {

            setCompanyNameError("Please enter company name..");
            errorCount++


        }
        if (interestvalue == "") {

            setInterestError("Please choose ..");
            errorCount++


        }
        if (value1 == "") {

            setDropDownError("Please enter your business email..");
            errorCount++


        }






        if (companyName == "") {
            companyNameRef.current.focus();


        }
        else if (interestvalue == "") {
            setInterestOpen(true)


        }


        else if (value1 == "") {
            setOpen(true)


        }







        if (errorCount == 0) {
            postSignUp(), Keyboard.dismiss()


        }

    }



    return (
        <ScrollView keyboardDismissMode="on-drag"
            keyboardShouldPersistTaps="always" style={{ backgroundColor: FONT_WHITE, flex: 1 }}  >
            <View style={{ marginHorizontal: 20, }}>
                <View>
                    <Image style={{ height: 100, }} source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpEX0k-P1pPC3fkMG6KeOg4o3qCGLa64mSzscO8NKt28di-4wsW3ZwBi5HKdabt2nOlNw&usqp=CAU" }} />


                </View>
                <View style={{ flexDirection: 'row' }} >
                    <Text style={Style.contanttext}>
                        Company Name
                        <Text style={Style.red}>
                            *
                        </Text>
                    </Text>

                </View>

                <TextInput
                    style={Style.textinput}
                    placeholder='Enter Company Name'
                    keyboardType='default'
                    value={companyName}
                    ref={companyNameRef}
                    onChangeText={(value) => {
                        setCompanyName(value)
                        if (value == "") {
                            setCompanyNameError("Please enter company name...")
                        }
                        else {
                            setCompanyNameError("");
                        }
                    }}

                >
                </TextInput>
                <Text style={Style.red}>
                    {companyNameError}
                </Text>

                <View style={{ flexDirection: 'row' }} >
                    <Text style={Style.contanttext}>
                        What are you interested in ?
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
                            setInterestError("Please enter location...")
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
                <View style={{ flexDirection: 'row', marginTop: 10 }} >
                    <Text style={Style.contanttext}>
                        How many vessels does your company own or manage?
                        <Text style={Style.red}>
                            *
                        </Text>
                    </Text>

                </View>
                <DropDownPicker
                    placeholder="Select on option"
                    textStyle={{
                        fontFamily: Fonts.fontmedium,
                        fontSize: 18,
                        color: FONT_BLACK
                    }}
                    labelStyle={Style.H4}
                    open={open}
                    label={value1}
                    items={items}
                    setOpen={setOpen}
                    setValue={(value1) => {
                        setValue(value1)
                        if (value1 == "") {
                            setDropDownError("Please enter location...")
                        }
                        else {
                            setDropDownError("");
                        }
                    }}
                    setItems={setItems}
                    style={Style.textinput}
                    inputContainerStyle={{ borderBottomColor: 'transparent' }}
                    listMode="SCROLLVIEW"



                >

                </DropDownPicker>
                <Text style={Style.red}>
                    {drapDownError}
                </Text>





                <View >
                    {/* <View style={{ marginTop: 10, flexDirection: 'row' }}>

                        <View >
                            <CheckBox
                                value={isSelected}
                                onValueChange={setSelection}
                            />

                        </View>
                        <View>
                            <Text style={Style.contanttext}>
                                Would you like to subscribe to our newsletter?
                            </Text>
                        </View>

                    </View>
 */}



                </View>


                <View style={{ width: '80%', marginEnd: 20, marginBottom: 17, marginTop: 80 }} >

                    <ThemeButton name="sign up" styleText={Style.themebtn_text} styleButton={Style.themebtn} onPressFun={() => { onSubmit() }}></ThemeButton>

                </View>

            </View >
        </ScrollView >
    )


}




export default SignUP_2