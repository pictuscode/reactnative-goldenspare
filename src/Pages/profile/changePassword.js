import React from 'react'
import { View, Image, ScrollView, Text, TextInput, ToastAndroid, Keyboard } from 'react-native'
import { useState, useRef } from 'react'
import { FONT_WHITE } from '../../Components/Common/Variable'
import Style from '../../Components/Common/Globle'
import ThemeButton from '../../Components/Themebutton'
import Profilestyle from './profileStyle'
import { useNavigation, } from "@react-navigation/native";
import * as axios from 'axios';
import { baseUrl } from '../../Components/Common/baseUrl'
const ChangePassword = ({ route }) => {
    const navigation = useNavigation();
    const [loader, setLoader] = useState(true)
    const { userId } = route.params;
    const { token } = route.params;



    const [currentPasswordError, setCurrentPasswordError] = useState("")
    const [newPasswordError, setNewPasswordError] = useState("")
    const [conformPasswordError, setConformPasswordError] = useState("")



    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [conformPassword, setConformPassword] = useState('');



    const currentPasswordRef = useRef();
    const newPasswordRef = useRef();
    const conformPasswordRef = useRef();

    const onSubmit = () => {


        setCurrentPasswordError("");
        setNewPasswordError("");

        setConformPasswordError("");
        var errorCount = 0;
        if (currentPassword == "") {

            setCurrentPasswordError("Please enter CurrentPassword..");
            errorCount++


        }
        if (newPassword == "") {

            setNewPasswordError("Please enter NewPassword..");
            errorCount++


        }
        if (conformPassword == "") {

            setConformPasswordError("Please re enter new password..");
            errorCount++


        }











        if (currentPassword == "") {
            currentPasswordRef.current.focus();

        }

        else if (newPassword == "") {
            newPasswordRef.current.focus();


        }
        else if (conformPassword == "") {
            conformPasswordRef.current.focus();


        }





        if (errorCount == 0) {

            updatePassword(), Keyboard.dismiss()

        }


    }


    const updatePassword = async () => {



        axios.post(baseUrl + 'changepassword', {

            userId: userId,
            currentPassword: currentPassword,
            newPassword: newPassword,
            confirmPassword: conformPassword
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
                    navigation.navigate('Account')
                    ToastAndroid.show(response.data.message, ToastAndroid.CENTER);
                }

                if (response.data.status == 0) {
                    ToastAndroid.show(response.data.message, ToastAndroid.CENTER);
                }


            }
        }).catch(function (error) {
            console.log(error)
        });

        setLoader(false)
    }



    return (
        <View style={{ backgroundColor: FONT_WHITE, flex: 1 }} >
            <ScrollView keyboardDismissMode="on-drag"
                keyboardShouldPersistTaps="always" >


                <View style={{ marginStart: 20 }}>


                    <TextInput
                        secureTextEntry={true}
                        style={Profilestyle.textinput}
                        placeholder='Current Password'
                        keyboardType='default'
                        value={currentPassword}
                        ref={currentPasswordRef}
                        onChangeText={(value) => {
                            setCurrentPassword(value)
                            if (value == "") {
                                setCurrentPasswordError("Please enter Current Password...")
                            }
                            else {
                                setCurrentPasswordError("");
                            }
                        }}

                    >
                    </TextInput>
                    <Text style={Style.red}>
                        {currentPasswordError}
                    </Text>


                    <TextInput
                        secureTextEntry={true}
                        style={Profilestyle.textinput}
                        placeholder='New Password'
                        keyboardType='default'
                        value={newPassword}
                        ref={newPasswordRef}
                        onChangeText={(value) => {
                            setNewPassword(value)
                            if (value == "") {
                                setNewPasswordError("Please enter NewPassword...")
                            }
                            else {
                                setNewPasswordError("");
                            }
                        }}

                    >
                    </TextInput>
                    <Text style={Style.red}>
                        {newPasswordError}
                    </Text>


                    <TextInput
                        secureTextEntry={true}
                        style={Profilestyle.textinput}
                        placeholder=' Enter conform password'
                        keyboardType='default'
                        value={conformPassword}
                        ref={conformPasswordRef}
                        onChangeText={(value) => {
                            setConformPassword(value)
                            if (value == "") {
                                setConformPasswordError("Please re enter new password..")
                            }
                            else {
                                setConformPasswordError("");
                            }
                        }}

                    >
                    </TextInput>
                    <Text style={Style.red}>
                        {conformPasswordError}
                    </Text>











                    <View style={{ width: '80%', marginTop: 10, marginEnd: 20, marginBottom: 17 }} >

                        <ThemeButton name="Save" styleText={Style.themebtn_text} styleButton={Style.themebtn} onPressFun={() => { onSubmit() }}></ThemeButton>

                    </View>

                </View >
            </ScrollView >
        </View>
    )
}

export default ChangePassword