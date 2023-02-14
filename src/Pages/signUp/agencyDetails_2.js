import React, { Component } from 'react'
import { View, Text, TextInput, ScrollView, Image, ActivityIndicator, Keyboard, ToastAndroid } from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker';
import { useState } from 'react';
import Style from '../../Components/Common/Globle'
import { BG_COLOR, FONT_VOILET, FONT_WHITE, } from '../../Components/Common/Variable';
import ThemeButton from '../../Components/Themebutton'
import { useEffect } from 'react';
import { useNavigation, } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as axios from 'axios';
import CheckBox from '@react-native-community/checkbox';
import { baseUrl, baseUrlImage } from '../../Components/Common/baseUrl';
const AgencyDetails_2 = () => {
    const navigation = useNavigation();
    const [loader, setLoader] = useState(true)

    const [checkBoxselectedList, setCheckBoxSelectedList] = useState([])
    // console.log(checkBoxselectedList)
    const [userId, setUserId] = useState("")
    const [token, setToken] = useState("");
    //console.log(userId)


    const [categoryList, setCategoryList] = useState("")
    const [imgDir, setImageDir] = useState("")

    //console.log(categoryList)


    const DisplayCategory = () => {

        setLoader(true)

        axios.post(baseUrl + 'displaycategory', {


        }, {
            headers: {
                'Content-Type': 'application/json',

            }
        }
        ).then(async (response) => {
            if (response.data) {
                await AsyncStorage.setItem("Service", JSON.stringify(response.data));
                setImageDir(response.data.catDir)
                setCategoryList(response.data.categoryList)


                //console.log(response.data.categoryList)
                setLoader(false)
            }

        }
        )


    }

    useEffect(() => {

        getUserId()
        DisplayCategory()

    }, [])



    const CheckBoxCheck = () => {
        if (checkBoxselectedList.length > 0) {
            onSubmit()
        }
        else { alert(" Please Choose Categories") }
    }


    const onSubmit = () => {
        setLoader(true)




        axios.post(baseUrl + 'addservice', {
            serviceId: checkBoxselectedList,
            userId: userId,

        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        }
        ).then(async (response) => {

            // console.log(response.data)

            if (response.data) {
                navigation.reset({
                    index: 0,
                    routes: [{ name: 'MyTabs' }],
                });
            }

        }).catch(function (error) {
            console.log(error)
        });

        setLoader(false)
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
        const SeviceDetails = await AsyncStorage.getItem("Service")
        const ServiceAgency = JSON.parse(SeviceDetails);
        if (ServiceAgency !== null) {

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
                            Categories
                            <Text style={Style.red}>
                                *
                            </Text>
                        </Text>



                    </View>

                    <View >

                        {

                            categoryList.map(element => {

                                return (
                                    <View key={element._id}>

                                        <View style={{ marginTop: 20 }}  >
                                            <View style={{ flexDirection: 'row', }}>
                                                <View style={{ marginTop: 5 }}>

                                                    <Image source={{ uri: baseUrlImage + imgDir + element.image }} style={{ height: 25, width: 25, borderRadius: 15 }} />
                                                </View>
                                                <CheckBox

                                                    value={(checkBoxselectedList.indexOf(element._id) > -1) ? true : false}
                                                    onValueChange={(e) => {
                                                        var exarrayIndex = checkBoxselectedList.indexOf(element._id)
                                                        if (exarrayIndex > -1) {
                                                            checkBoxselectedList.splice(exarrayIndex, 1)
                                                            setCheckBoxSelectedList([...checkBoxselectedList])
                                                        }
                                                        else {
                                                            setCheckBoxSelectedList([...checkBoxselectedList, element._id])
                                                        }


                                                    }}

                                                />
                                                <View style={{ marginTop: 8 }}>

                                                    <Text style={Style.H4}>{element.categoryName}  </Text>
                                                </View>

                                            </View>

                                        </View>


                                    </View>



                                )
                            })
                        }

                    </View>


                    <View style={{ width: '80%', marginEnd: 20, marginBottom: 5, }} >

                        <ThemeButton name="Register" styleText={Style.themebtn_text} styleButton={Style.themebtn} onPressFun={() => { CheckBoxCheck() }}></ThemeButton>

                    </View>
                </View >
            </ScrollView >)
    )


}




export default AgencyDetails_2 