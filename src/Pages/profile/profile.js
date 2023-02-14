import React from 'react'
import { View, Image, ScrollView, Text, TextInput, TouchableOpacity, ActivityIndicator, ToastAndroid } from 'react-native'
import { useState, useRef, useEffect } from 'react'
import { FONT_WHITE } from '../../Components/Common/Variable'
import Style from '../../Components/Common/Globle'
import ThemeButton from '../../Components/Themebutton'
import { FONT_VOILET, BG_COLOR } from '../../Components/Common/Variable'
import Profilestyle from './profileStyle'
import { launchImageLibrary } from 'react-native-image-picker';
import { useNavigation, } from "@react-navigation/native";
import * as axios from 'axios';
import { baseUrl, baseUrlImage } from '../../Components/Common/baseUrl'
const Profile = ({ route }) => {
    const navigation = useNavigation();

    const { userId } = route.params;

    const { token } = route.params;
    //console.log(userId)



    const [proFilePath, setProFilePath] = useState("https://cdn-icons-png.flaticon.com/512/149/149071.png");
    const [loader, setLoader] = useState(true)

    //console.log(filePath)
    const chooseFile = async (type) => {
        let options = {
            mediaType: type,
            maxWidth: 300,
            maxHeight: 550,
            quality: 1,
        };
        await launchImageLibrary(options, async (response) => {
            if (response.didCancel) {
                console.log('user cancelled image picker');
            } else if (response.error) {
                console.log('Image picker Error:', response.error);
            } else if (response.customButton) {
                console.log('User taped cutom button:', response.customButton);
            } else {

                // setFilePath(response['assets'][0]);

                await updateUserProfile(response['assets'][0])


            }


        });
    };


    const [firstNameError, setFirstNameError] = useState("")
    const [lastNameError, setLastNameError] = useState("")
    const [emailError, setEmailError] = useState("")
    const [PhoneNumberError, setPhoneNumberError] = useState("")
    const [companyNameError, setCompanyNameError] = useState("")


    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [PhoneNumber, setPhoneNumber] = useState('');
    const [companyName, setCompanyName] = useState('');

    const [profileData, setProfileData] = useState({});

    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const emailRef = useRef();
    const PhoneNumberRef = useRef();
    const companyNameRef = useRef();



    useEffect(() => {

        getuserData();


    }, [])

    const getuserData = async () => {


        setLoader(true)
        axios.post(baseUrl + 'getuserdata', {

            userId: userId,


        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token

            }
        }
        ).then(async (response) => {
            if (response.data) {

                //console.log(response.data.userDetails.serviceId)
                setProfileData(response.data.userDetails)
                setFirstName(response.data.userDetails.firstName)
                setLastName(response.data.userDetails.lastName)
                setEmail(response.data.userDetails.email)
                setPhoneNumber(response.data.userDetails.phone)
                setCompanyName(response.data.userDetails.companyName)

                if (response.data.userDetails.profile !== "") {

                    setProFilePath(baseUrlImage + response.data.profileDir + response.data.userDetails.profile)
                }
                else {
                    setProFilePath("https://cdn-icons-png.flaticon.com/512/149/149071.png")
                }
                setLoader(false)

            }
            else {
                setLoader(false)
            }
        }).catch(function (error) {
            setLoader(false)
            console.log(error)
        });


    }
    const updateUserInfo = async () => {



        axios.post(baseUrl + 'updateuserinfo', {

            userId: userId,
            firstName: firstName,
            lastName: lastName,
            companyName: companyName,
            phone: PhoneNumber,


        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        }
        ).then(async (response) => {
            if (response.data) {
                // console.log(response.data.message)
                if (response.data.status == 1) {
                    ToastAndroid.show(response.data.message, ToastAndroid.CENTER);
                }

            }
        }).catch(function (error) {
            console.log(error)
        });

        setLoader(false)
    }



    const updateUserProfile = async (selectedFile) => {

        const formData = new FormData();

        formData.append('userId', userId);
        const profile = {
            uri: selectedFile.uri,
            type: selectedFile.type,
            name: selectedFile.fileName

        }
        // console.log(profile)
        formData.append("profile", profile);
        // console.log(formData)

        axios.post(baseUrl + 'updateuserprofile',

            formData,
            {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'multipart/form-data',
                    'Authorization': 'Bearer ' + token
                }
            }
        )
            .then((response) => {
                //console.log(response.data)

                if (response.data) {

                    setProFilePath(baseUrlImage + response.data.profileDir + response.data.profile);
                    // console.log(baseUrl + response.data.profileDir + response.data.profile)
                    //setFilePath(baseUrlImage + response.data.profileDir + response.data.profile);
                    if (response.data.status == 1) {
                        ToastAndroid.show(response.data.message, ToastAndroid.CENTER);
                    }

                }
            }).catch(() => {
                ToastAndroid.show("tryagain", ToastAndroid.CENTER)
            });

    }





    // console.log(profileData)






    const onSubmit = () => {


        setFirstNameError("");
        setLastNameError("");
        setPhoneNumberError("");
        setEmailError("");
        setCompanyNameError("");
        var errorCount = 0;

        if (firstName == "") {

            setLastNameError("Please enter your first name..");
            errorCount++


        }
        if (lastName == "") {

            setLastNameError("Please enter your last name..");
            errorCount++


        }
        if (email == "") {

            setEmailError("Please enter your business email..");
            errorCount++


        }
        if (PhoneNumber == "") {

            setPhoneNumberError("Please enter your phone  number..");
            errorCount++


        }
        if (companyName == "") {

            setCompanyNameError("Please enter your Company Name..");
            errorCount++


        }










        if (firstName == "") {
            firstNameRef.current.focus();

        }

        else if (lastName == "") {
            lastNameRef.current.focus();


        }
        else if (email == "") {
            emailRef.current.focus();


        }
        else if (PhoneNumber == "") {
            PhoneNumberRef.current.focus();


        }
        else if (companyName == "") {
            companyNameRef.current.focus();


        }




        if (errorCount == 0) {

            updateUserInfo()

            navigation.navigate('Account')


        }


    }





    return (
        loader ? (<ActivityIndicator size={30} color={FONT_VOILET} style={{ flex: 1, justifyContent: "center", backgroundColor: BG_COLOR }} />) : (





            <View style={{ flex: 1 }} >
                <ScrollView keyboardDismissMode="on-drag"
                    keyboardShouldPersistTaps="always" style={{ backgroundColor: FONT_WHITE }}  >
                    <View style={{ alignItems: 'center', marginTop: 10 }}>
                        <TouchableOpacity onPress={() => chooseFile('photo')}>
                            <Image style={{ height: 120, width: 120, borderRadius: 80, }} source={{ uri: proFilePath }} />
                        </TouchableOpacity>
                    </View>

                    <View style={{ marginStart: 20 }}>
                        <View style={{ flexDirection: 'row' }} >
                            <Text style={Style.contanttext}>

                                FirstName
                            </Text>

                        </View>

                        <TextInput
                            placeholder='Enter your first name'
                            style={Profilestyle.textinput}
                            keyboardType='default'
                            value={firstName}
                            ref={firstNameRef}
                            onChangeText={(value) => {
                                setFirstName(value)
                                if (value == "") {
                                    setFirstNameError("Please enter your first name...")
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

                            </Text>

                        </View>

                        <TextInput
                            style={Profilestyle.textinput}
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
                                Your Business Email

                            </Text>

                        </View>

                        <TextInput
                            style={Profilestyle.textinput}
                            placeholder='Enter your Business Email'
                            editable={false}
                            value={email}
                            ref={emailRef}
                            onChangeText={(value) => {
                                setEmail(value)
                                if (value == "") {
                                    setEmailError("Please enter your Business Email...")
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
                                Phone Number

                            </Text>

                        </View>

                        <TextInput
                            style={Profilestyle.textinput}
                            placeholder='Enter your phone number'
                            keyboardType='phone-pad'
                            value={PhoneNumber}
                            maxLength={14}
                            ref={PhoneNumberRef}
                            onChangeText={(value) => {
                                setPhoneNumber(value)
                                if (value == "") {
                                    setPhoneNumberError("Please enter your phone number ...")
                                }
                                else {
                                    setPhoneNumberError("");
                                }
                            }}

                        >
                        </TextInput>
                        <Text style={Style.red}>
                            {PhoneNumberError}
                        </Text>

                        <View style={{ flexDirection: 'row' }} >
                            <Text style={Style.contanttext}>
                                Company Name
                            </Text>

                        </View>

                        <TextInput
                            style={Profilestyle.textinput}
                            placeholder='Enter your campany Name'
                            keyboardType='default'
                            value={companyName}

                            ref={companyNameRef}
                            onChangeText={(value) => {
                                setCompanyName(value)
                                if (value == "") {
                                    setCompanyNameError("Please enter your company Name...")
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












                        <View style={{ width: '80%', marginTop: 10, marginEnd: 20, marginBottom: 17 }} >

                            <ThemeButton name="Save" styleText={Style.themebtn_text} styleButton={Style.themebtn} onPressFun={() => { onSubmit() }}></ThemeButton>

                        </View>

                    </View >
                </ScrollView >
            </View>



        )
    )
}

export default Profile

