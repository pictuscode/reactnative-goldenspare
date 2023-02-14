import React, { Component } from 'react'
import { View, Text, TextInput, ScrollView, Image, ActivityIndicator, Keyboard, ToastAndroid, StyleSheet } from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker';
import { useState } from 'react';
import Style from '../../Components/Common/Globle'
import { BG_COLOR, FONT_BLACK, FONT_VOILET, FONT_WHITE, THEME_COLOR } from '../../Components/Common/Variable';
import ThemeButton from '../../Components/Themebutton'
import { useEffect, useRef } from 'react';
import { useNavigation, } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as axios from 'axios';
import { Dropdown } from 'react-native-element-dropdown';
import SelectList from 'react-native-dropdown-select-list'
import { baseUrl } from '../../Components/Common/baseUrl';

const AgencyDetails_1 = () => {
    const navigation = useNavigation();
    const [loader, setLoader] = useState(true)
    const [countryList, setCountryList] = useState("")
    const [value, setValue] = useState("");

    const [newData, setNewData] = useState([]);
    const [dailCode, setDailCode] = useState("");
    //console.log(value)

    const [userId, setUserId] = useState("true")
    const [token, setToken] = useState("");
    //console.log(userId)
    const [companyNameError, setCompanyNameError] = useState("")
    const [phoneNumberError, setPhoneNumberError] = useState("")
    const [cityError, setCityError] = useState("")
    const [addressError, setAddressError] = useState("")
    const [countryError, setCountryError] = useState("")




    const [companyName, setCompanyName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('');
    const [city, setCity] = useState('');
    const [address, setAddress] = useState('');

    const companyNameRef = useRef();
    const phoneNumberRef = useRef();
    const cityRef = useRef();
    const addressRef = useRef();


    const onSubmit = () => {


        setCompanyNameError("");

        setPhoneNumberError("");
        setCityError("");
        var errorCount = 0;
        if (companyName == "") {

            setCompanyNameError("Please enter your company name..");
            errorCount++


        }

        if (value == "") {

            setCountryError("Please choose country...");

            errorCount++

        }


        if (phoneNumber == "") {

            setPhoneNumberError("Please enter your phone number..");
            errorCount++


        }
        if (city == "") {

            setCityError("Please enter City..");
            errorCount++


        }

        if (address == "") {

            setAddressError("Please enter your address..");
            errorCount++


        }








        if (companyName == "") {
            companyNameRef.current.focus();

        }


        else if (value == "") {
            setOpen(true);
        }

        else if (phoneNumber == "") {
            phoneNumberRef.current.focus();

        }
        else if (city == "") {
            cityRef.current.focus();


        }
        else if (address == "") {
            addressRef.current.focus();


        }


        if (errorCount == 0) {

            Registersteptwo(), Keyboard.dismiss()
        }


    }
    useEffect(() => {
        getCountryList()
        getUserId()
    }, [])
    const getCountryList = () => {
        setLoader(true)

        axios.post(baseUrl + 'getcountrylist', {

        }, {
            headers: { 'Content-Type': 'application/json' }
        }
        ).then(async (response) => {
            if (response.data) {
                var tempArray = [];
                response.data.country.map((value) => {
                    tempArray.push({ "label": value.name, "value": value._id + "~" + value.dial_code })
                })

                setNewData(tempArray);

                setLoader(false)


            }

        }).catch(function (error) {
            console.log(error)
        });


    }
    const Registersteptwo = () => {
        setLoader(true)

        axios.post(baseUrl + 'registersteptwo', {
            companyName: companyName,
            address: address,
            countryId: value,
            city: city,
            userId: userId,
            phoneNumber: dailCode + phoneNumber

        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        }
        ).then(async (response) => {
            if (response.data) {
                //console.log(response.data)
                if (response.data) {
                    //console.log(response.data)
                    await AsyncStorage.setItem("AgencyDetails", JSON.stringify(response.data));
                    const AgencyDetails = await AsyncStorage.getItem("AgencyDetails")
                    const Agency = JSON.parse(AgencyDetails);
                    if (Agency.data !== null) {
                        ToastAndroid.show(response.data.message, ToastAndroid.CENTER)
                        navigation.reset({
                            index: 0,
                            routes: [{ name: 'AgencyDetails_2' }],
                        });
                    }
                }

            }
        }).catch(function (error) {
            console.log(error)
        });


    }

    const getUserId = async () => {
        const userDetails = await AsyncStorage.getItem("userDetails")
        const currentUser = JSON.parse(userDetails);
        setUserId(currentUser.userId)
        setToken(currentUser.token)

    }
    /*  useEffect(() => {
         dataCheck();
     }, []) */


    /*  const dataCheck = async () => {
         setLoader(true)
         const AgencyDetails = await AsyncStorage.getItem("AgencyDetails")
         const Agency = JSON.parse(AgencyDetails);
         //console.log(Agency)
         if (Agency !== null) {
 
             navigation.reset({
                 index: 0,
                 routes: [{ name: 'MyTabs' }],
             });
 
 
 
         }
 
 
 
     } */
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
                            Company Name
                            <Text style={Style.red}>
                                *
                            </Text>
                        </Text>

                    </View>

                    <TextInput
                        style={Style.textinput}
                        placeholder='Enter your company name'
                        keyboardType='default'
                        value={companyName}
                        ref={companyNameRef}
                        onChangeText={(value) => {


                            setCompanyName(value)
                            if (value == "") {
                                setCompanyNameError("Please enter your name...")
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
                            Country
                            <Text style={Style.red}>
                                *
                            </Text>
                        </Text>

                    </View>
                    {/*   <DropDownPicker
                        placeholder="Select a Country"
                        items={countryList.map((option) => ({
                            key: option._id,
                            label: option.name,
                            value: option._id
                            
                        }))}

                        textStyle={Style.H3}
                        labelStyle={Style.H3}
                        open={open}
                        label={label}
                        value={value}
                        setOpen={setOpen}
                        setValue={(value) => {
                            setValue(value)

                            if (value == "") {
                                setCountryError("Please choose country ")
                            }
                            else {
                                setCountryError("");
                            }
                        }}

                        setlabel={setlabel}
                        style={Style.textinput}
                        inputContainerStyle={{ borderBottomColor: 'transparent' }}
                        listMode="SCROLLVIEW"
                        onChangeItem={() => { alert() }}



                    >

                    </DropDownPicker> */}

                    {/* <View style={{ marginTop: 10, width: "100%" }}>
                        <SelectList

                            onSelect={(karthi1) => {
                                setLoader(true)
                                setValue(value)

                                if (karthi1 == "") {
                                    setCountryError("Please choose country ")
                                }
                                else {
                                    setCountryError("");
                                }
                                setLoader(false)
                            }}

                            setSelected={setValue}
                            setSelectedDail={setDailCode}
                            data={countryList}
                            search={true}
                            style={Style.textinput}
                            textStyle={Style.H3}
                            placeholder="Select a Country"
                        />
                    </View> */}
                    <Dropdown
                        style={Style.textinput}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={Style.H2}
                        inputSearchStyle={Style.H2}
                        iconStyle={styles.iconStyle}
                        data={newData}
                        search={true}
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder="Select item"
                        searchPlaceholder="Search..."
                        value={value}
                        onChange={item => {
                            setValue(item.value);
                            var countrySplit = item.value.split(" ");



                        }}

                    />
                    {/*  <View>
                            <Text>
                                {dailCode}
                            </Text>
                            <Text>
                                {value}
                            </Text>

                        </View> */}


                    <Text style={Style.red}>
                        {countryError}
                    </Text>
                    <View style={{ flexDirection: 'row' }} >
                        <Text style={Style.contanttext}>
                            PhoneNumber
                            <Text style={Style.red}>
                                *
                            </Text>
                        </Text>

                    </View>

                    <View style={{ flexDirection: "row" }}>
                        <TextInput
                            style={Style.dailtextinput}
                            value={dailCode}
                            editable={false}
                            placeholder='Code'
                        >

                        </TextInput>
                        <TextInput
                            style={Style.countrytextinput}
                            placeholder='Enter your phone number'
                            keyboardType='phone-pad'
                            maxLength={10}
                            value={phoneNumber}
                            ref={phoneNumberRef}
                            onChangeText={(value) => {
                                setPhoneNumber(value)
                                if (value == "") {
                                    setPhoneNumberError("Please enter phone number...")
                                }
                                else {
                                    setPhoneNumberError("");
                                }
                            }}

                        >
                        </TextInput>

                    </View>


                    <Text style={Style.red}>
                        {phoneNumberError}
                    </Text>
                    <View style={{ flexDirection: 'row' }} >
                        <Text style={Style.contanttext}>

                            City
                            <Text style={Style.red}>
                                *
                            </Text>
                        </Text>

                    </View>

                    <TextInput

                        style={Style.textinput}
                        placeholder='Enter your city '
                        keyboardType='default'
                        value={city}
                        ref={cityRef}
                        onChangeText={(value) => {
                            setCity(value)
                            if (value == "") {
                                setCityError("Please enter your city...")
                            }
                            else {
                                setCityError("");
                            }
                        }}

                    >
                    </TextInput>
                    <Text style={Style.red}>
                        {cityError}
                    </Text>
                    <View style={{ flexDirection: 'row' }} >
                        <Text style={Style.contanttext}>

                            Address
                            <Text style={Style.red}>
                                *
                            </Text>
                        </Text>

                    </View>

                    <TextInput

                        style={Style.textinput}

                        numberOfLines={10}
                        keyboardType='default'
                        value={address}
                        ref={addressRef}
                        onChangeText={(value) => {
                            setAddress(value)
                            if (value == "") {
                                setAddressError("Please enter your address...")
                            }
                            else {
                                setAddressError("");
                            }
                        }}

                    >
                    </TextInput>
                    <Text style={Style.red}>
                        {addressError}
                    </Text>

                    <View style={{ width: '80%', marginEnd: 20, marginBottom: 5 }} >

                        <ThemeButton name="Register" styleText={Style.themebtn_text} styleButton={Style.themebtn} onPressFun={() => { onSubmit() }}></ThemeButton>

                    </View>


                </View >
            </ScrollView >)
    )


}




export default AgencyDetails_1
const styles = StyleSheet.create({
    dropdown: {
        margin: 16,
        height: 50,
        borderBottomColor: 'gray',
        borderBottomWidth: 0.5,
    },
    icon: {
        marginRight: 5,
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
});
{/*   <DropDownPicker
                        placeholder="Select a Country"
                        items={countryList.map((option) => ({
                            key: option._id,
                            label: option.name,
                            value: option._id,



                        }))}

                        textStyle={Style.H3}
                        labelStyle={Style.H3}
                        open={open}
                        label={label}
                        set animationDuration={0}
                        value={value}
                        setOpen={setOpen}
                        setValue={(value) => {
                            setValue(value)
                            if (value == "") {
                                setCountryError("Please choose country ")
                            }
                            else {
                                setCountryError("");
                            }
                        }}
                        setlabel={setlabel}
                        style={Style.textinput}
                        inputContainerStyle={{ borderBottomColor: 'transparent' }}
                        listMode="SCROLLVIEW"




                    >

                    </DropDownPicker> */}




/* 


import React, { Component } from 'react'
import { View, Text, TextInput, ScrollView, Image, ActivityIndicator, Keyboard, ToastAndroid, StyleSheet } from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker';
import { useState } from 'react';
import Style from '../../Components/Common/Globle'
import { BG_COLOR, FONT_BLACK, FONT_VOILET, FONT_WHITE, THEME_COLOR } from '../../Components/Common/Variable';
import ThemeButton from '../../Components/Themebutton'
import { useEffect, useRef } from 'react';
import { useNavigation, } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as axios from 'axios';
import { Dropdown } from 'react-native-element-dropdown';
import SelectList from 'react-native-dropdown-select-list'

const AgencyDetails_1 = () => {
    const navigation = useNavigation();
    const [loader, setLoader] = useState(true)

    const [value, setValue] = useState("");

    const [dailCode, setDailCode] = useState("");
    const [countryId, setCountryId] = useState("");
    const [newCountryList, setNewCountryList] = useState([]);
    //console.log(value)

    const [userId, setUserId] = useState("true")
    const [token, setToken] = useState("");
    //console.log(userId)
    const [companyNameError, setCompanyNameError] = useState("")
    const [phoneNumberError, setPhoneNumberError] = useState("")
    const [cityError, setCityError] = useState("")
    const [addressError, setAddressError] = useState("")
    const [countryError, setCountryError] = useState("")




    const [companyName, setCompanyName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('');
    const [city, setCity] = useState('');
    const [address, setAddress] = useState('');

    const companyNameRef = useRef();
    const phoneNumberRef = useRef();
    const cityRef = useRef();
    const addressRef = useRef();


    const onSubmit = () => {


        setCompanyNameError("");

        setPhoneNumberError("");
        setCityError("");
        var errorCount = 0;
        if (companyName == "") {

            setCompanyNameError("Please enter your company name..");
            errorCount++


        }

        if (value == "") {

            setCountryError("Please choose country...");

            errorCount++

        }


        if (phoneNumber == "") {

            setPhoneNumberError("Please enter your phone number..");
            errorCount++


        }
        if (city == "") {

            setCityError("Please enter City..");
            errorCount++


        }

        if (address == "") {

            setAddressError("Please enter your address..");
            errorCount++


        }








        if (companyName == "") {
            companyNameRef.current.focus();

        }


        else if (value == "") {
            setOpen(true);
        }

        else if (phoneNumber == "") {
            phoneNumberRef.current.focus();

        }
        else if (city == "") {
            cityRef.current.focus();


        }
        else if (address == "") {
            addressRef.current.focus();


        }


        if (errorCount == 0) {

            Registersteptwo(), Keyboard.dismiss()
        }


    }
    useEffect(() => {
        getCountryList()
        getUserId()
    }, [])
    const getCountryList = () => {
        setLoader(true)

        axios.post(baseUrl+'/getcountrylist', {

        }, {
            headers: { 'Content-Type': 'application/json' }
        }
        ).then(async (response) => {
            if (response.data) {
                var tempArray = [];
                response.data.country.map((value) => {
                    tempArray.push({ "label": value.name, "value": value._id + " " + value.dial_code })
                })

                setNewCountryList(tempArray);

                setLoader(false)


            }

        }).catch(function (error) {
            console.log(error)
        });


    }
    const Registersteptwo = () => {
        setLoader(true)

        axios.post(baseUrl+'registersteptwo', {
            companyName: companyName,
            address: address,
            countryId: countryId,
            city: city,
            userId: userId,
            phoneNumber: dailCode + phoneNumber

        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        }
        ).then(async (response) => {
            if (response.data) {
                //console.log(response.data)
                if (response.data) {
                    //console.log(response.data)
                    await AsyncStorage.setItem("AgencyDetails", JSON.stringify(response.data));
                    const AgencyDetails = await AsyncStorage.getItem("AgencyDetails")
                    const Agency = JSON.parse(AgencyDetails);
                    if (Agency.data !== null) {
                        ToastAndroid.show(response.data.message, ToastAndroid.CENTER)
                        navigation.reset({
                            index: 0,
                            routes: [{ name: 'AgencyDetails_2' }],
                        });
                    }
                }

            }
        }).catch(function (error) {
            console.log(error)
        });


    }

    const getUserId = async () => {
        const userDetails = await AsyncStorage.getItem("userDetails")
        const currentUser = JSON.parse(userDetails);
        setUserId(currentUser.userId)
        setToken(currentUser.token)

    }
    useEffect(() => {
        dataCheck();
    }, [])


    const dataCheck = async () => {
        setLoader(true)
        const AgencyDetails = await AsyncStorage.getItem("AgencyDetails")
        const Agency = JSON.parse(AgencyDetails);
        //console.log(Agency)
        if (Agency !== null) {

            navigation.reset({
                index: 0,
                routes: [{ name: 'MyTabs' }],
            });



        }



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
                            Company Name
                            <Text style={Style.red}>
                                *
                            </Text>
                        </Text>

                    </View>

                    <TextInput
                        style={Style.textinput}
                        placeholder='Enter your company name'
                        keyboardType='default'
                        value={companyName}
                        ref={companyNameRef}
                        onChangeText={(value) => {


                            setCompanyName(value)
                            if (value == "") {
                                setCompanyNameError("Please enter your name...")
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
                            Country
                            <Text style={Style.red}>
                                *
                            </Text>
                        </Text>

                    </View>


                    <Dropdown
                        style={Style.textinput}
                        selectedTextStyle={Style.H2}
                        inputSearchStyle={Style.H2}
                        placeholderStyle={Style.H2}
                        itemContainerStyle={Style.H2}
                        itemTextStyle={Style.H2}
                        data={newCountryList}
                        search={true}
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder="Select Country"
                        searchPlaceholder="Search..."
                        value={value}
                        onChange={item => {
                            setValue(item.value);
                            var countrySplit = item.value.split(" ");
                            setDailCode(countrySplit[1]);
                            setCountryId(countrySplit[0]);


                        }}

                    />
                    <Text style={Style.red}>
                        {countryError}
                    </Text>
                    <View style={{ flexDirection: 'row' }} >
                        <Text style={Style.contanttext}>
                            PhoneNumber
                            <Text style={Style.red}>
                                *
                            </Text>
                        </Text>

                    </View>

                    <View style={{ flexDirection: "row" }}>
                        <TextInput
                            style={Style.dailtextinput}
                            value={dailCode}
                            editable={false}
                            placeholder='Code'
                        >

                        </TextInput>
                        <TextInput
                            style={Style.countrytextinput}
                            placeholder='Enter your phone number'
                            keyboardType='phone-pad'
                            maxLength={10}
                            value={phoneNumber}
                            ref={phoneNumberRef}
                            onChangeText={(value) => {
                                setPhoneNumber(value)
                                if (value == "") {
                                    setPhoneNumberError("Please enter phone number...")
                                }
                                else {
                                    setPhoneNumberError("");
                                }
                            }}

                        >
                        </TextInput>

                    </View>


                    <Text style={Style.red}>
                        {phoneNumberError}
                    </Text>
                    <View style={{ flexDirection: 'row' }} >
                        <Text style={Style.contanttext}>

                            City
                            <Text style={Style.red}>
                                *
                            </Text>
                        </Text>

                    </View>

                    <TextInput

                        style={Style.textinput}
                        placeholder='Enter your city '
                        keyboardType='default'
                        value={city}
                        ref={cityRef}
                        onChangeText={(value) => {
                            setCity(value)
                            if (value == "") {
                                setCityError("Please enter your city...")
                            }
                            else {
                                setCityError("");
                            }
                        }}

                    >
                    </TextInput>
                    <Text style={Style.red}>
                        {cityError}
                    </Text>
                    <View style={{ flexDirection: 'row' }} >
                        <Text style={Style.contanttext}>

                            Address
                            <Text style={Style.red}>
                                *
                            </Text>
                        </Text>

                    </View>

                    <TextInput

                        style={Style.textinput}

                        numberOfLines={10}
                        keyboardType='default'
                        value={address}
                        ref={addressRef}
                        onChangeText={(value) => {
                            setAddress(value)
                            if (value == "") {
                                setAddressError("Please enter your address...")
                            }
                            else {
                                setAddressError("");
                            }
                        }}

                    >
                    </TextInput>
                    <Text style={Style.red}>
                        {addressError}
                    </Text>

                    <View style={{ width: '80%', marginEnd: 20, marginBottom: 5 }} >

                        <ThemeButton name="Register" styleText={Style.themebtn_text} styleButton={Style.themebtn} onPressFun={() => { onSubmit() }}></ThemeButton>

                    </View>


                </View >
            </ScrollView >)
    )


}




export default AgencyDetails_1 */
/* var array = [
       {
           "id": 1,
           "category": "Apple iphone 12 128",
           "name": "karthi",
           "time": "Description",
           "image": "https://images.unsplash.com/photo-1552207802-77bcb0d13122?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2hpcHxlbnwwfHwwfHw%3D&w=1000&q=80",
           "profileimg": "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGVuc3xlbnwwfHwwfHw%3D&w=1000&q=80"
       },
       {
           "id": 2,
           "category": "Ship Model 128",
           "name": "karthi",
           "time": "Description",
           "image": "https://www.marineinsight.com/wp-content/uploads/2019/08/Cruise-ships-1.png",
           "profileimg": "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGVuc3xlbnwwfHwwfHw%3D&w=1000&q=80"
       },
       {
           "id": 3,
           "category": "Apple iphone 12 128",
           "name": "karthi",
           "time": "Description",
           "image": "https://images.theconversation.com/files/92281/original/image-20150818-12436-1y2qfys.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=900.0&fit=crop",
           "profileimg": "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGVuc3xlbnwwfHwwfHw%3D&w=1000&q=80"
       },
       {
           "id": 4,
           "category": "Ship Model 128",
           "name": "karthi",
           "time": "Description",
           "image": "https://cdn.britannica.com/78/196578-131-B0FC5325/harbor-Pirate-Ship-way-campaign-marines-oceans.jpg?q=60",
           "profileimg": "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGVuc3xlbnwwfHwwfHw%3D&w=1000&q=80"
       },
       {
           "id": 5,
           "category": "Apple iphone 12 128",
           "name": "karthi",
           "time": "Description",
           "image": "https://static.dw.com/image/54315019_403.jpg",
           "profileimg": "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGVuc3xlbnwwfHwwfHw%3D&w=1000&q=80"
       },


       {
           "id": 6,
           "category": "Ship Model 128",
           "name": "karthi",
           "time": "Description",
           "image": "https://images.unsplash.com/photo-1580698543091-88c76b323ff1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmlnJTIwc2hpcHxlbnwwfHwwfHw%3D&w=1000&q=80",
           "profileimg": "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGVuc3xlbnwwfHwwfHw%3D&w=1000&q=80"
       },
       {
           "id": 7,
           "category": "Apple iphone 12 128",
           "name": "karthi",
           "time": "Description",
           "image": "http://cdn.cnn.com/cnnnext/dam/assets/220212144422-01-wonder-of-the-seas-royal-caribbean.jpg",
           "profileimg": "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGVuc3xlbnwwfHwwfHw%3D&w=1000&q=80"
       },
       {
           "id": 8,
           "category": "Ship Model 128",
           "name": "karthi",
           "time": "Description",
           "image": "https://media.istockphoto.com/photos/cruise-ship-with-wonderful-tropical-beach-picture-id480197161?k=20&m=480197161&s=612x612&w=0&h=DH2CPp4VqBNXsdFIODl3-kyOLLfsqsHWnFtscmKS2cI=",
           "profileimg": "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGVuc3xlbnwwfHwwfHw%3D&w=1000&q=80"
       },
       {
           "id": 9,
           "category": "Apple iphone 12 128",
           "name": "karthi",
           "time": "Description",
           "image": "https://www.seatrade-cruise.com/sites/seatrade-cruise.com/files/CRUISE_Charming.jpg",
           "profileimg": "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGVuc3xlbnwwfHwwfHw%3D&w=1000&q=80"
       },
       {
           "id": 10,
           "category": "Ship Model 128",
           "name": "karthi",
           "time": "Description",
           "image": "https://assets.thehansindia.com/h-upload/2022/06/08/1296696-cruise-ship.webp",
           "profileimg": "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGVuc3xlbnwwfHwwfHw%3D&w=1000&q=80"
       },

   ] */