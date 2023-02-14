import React from 'react'
import { View, Text, TouchableOpacity, Image, TextInput, ScrollView, ToastAndroid, Keyboard } from 'react-native'
import { useState, useEffect, useRef } from 'react';
import { launchImageLibrary } from 'react-native-image-picker';
import MultipleImagePicker from '@baronha/react-native-multiple-image-picker';
import ThemeButton from '../../Components/Themebutton';
import { useNavigation, } from "@react-navigation/native";
import Style from '../../Components/Common/Globle';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as axios from 'axios';
import { baseUrl, baseUrlImage } from '../../Components/Common/baseUrl';
const Add = () => {
    const navigation = useNavigation();

    const [titleError, setTitleError] = useState("")
    const [descriptionError, setDescriptionError] = useState("")
    const [imageError, setImageError] = useState("")

    const imageRef = useRef();
    const titleRef = useRef();
    const descriptionRef = useRef();








    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    //console.log(title)
    const [images, setImages] = useState("");
    //console.log(images)
    useEffect(() => {
        getData();
    }, [])

    const [userId, setUserId] = useState('');
    const [token, setToken] = useState("");

    const getData = async () => {
        const savedUser = await AsyncStorage.getItem("userDetails")
        const currentUser = JSON.parse(savedUser);
        setUserId(currentUser.userId)
        setToken(currentUser.token)

    }
    // console.log(userId)

    const openPicker = async () => {
        try {
            const response = await MultipleImagePicker.openPicker({
                isExportThumbnail: true,
                maxSelectedAssets: 5,
                mediaType: "image",
                usedCameraButton: false,
                isCrop: true,
                isCropCircle: true,
            });
            // console.log( response);
            var tempArray = []
            response.map(image => {
                tempArray.push({ "uri": image.path, "type": image.mime, "name": image.fileName })
            });
            setImages(tempArray);

        } catch (e) {
            console.log(e.code, e.message);
        }
    };


    const postbid = async () => {

        const formData = new FormData();

        formData.append('userId', userId);
        formData.append('title', title);
        formData.append('discription', description);



        //console.log(img)
        // formData.append("image", images);

        images.map(image => {
            formData.append("image", image);
        });
        //console.log(formData)
        axios.post(baseUrl + 'postbid ',

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


                    // console.log(baseUrl + response.data.profileDir + response.data.profile)
                    //setFilePath(baseUrlImage + response.data.profileDir + response.data.profile);
                    if (response.data.status == 1) {
                        //ToastAndroid.show(response.data.message, ToastAndroid.CENTER);

                        navigation.navigate("home")
                        alert("Successfully Posted")
                    }

                }
            }).catch((error) => {

                console.log(error)
                ToastAndroid.show("tryagain", ToastAndroid.CENTER)
            });

    }

    const onSubmit = () => {


        setTitleError("");
        setDescriptionError("");
        var errorCount = 0;


        if (images == "") {
            alert("please upload image");
            errorCount++


        }
        if (title == "") {

            setTitleError("Please enter title..");
            errorCount++


        }

        if (description == "") {

            setDescriptionError("Please enter description..");
            errorCount++


        }



        if (images == "") {
            imageRef.current.focus();

        }
        else if (title == "") {
            titleRef.current.focus();

        }

        else if (description == "") {
            descriptionRef.current.focus();


        }



        if (errorCount == 0) {

            postbid(), Keyboard.dismiss()
        }


    }
    return (
        <ScrollView keyboardDismissMode="on-drag"
            keyboardShouldPersistTaps="always">

            <View>


                <View style={{ width: '80%', marginTop: 10, marginEnd: 20, marginBottom: 17 }} ref={imageRef} >

                    <ThemeButton name="upload Image" styleText={Style.themebtn_text} styleButton={Style.themebtn} onPressFun={() => { openPicker() }}></ThemeButton>
                    <View style={{ marginStart: 20 }}>
                        <Text style={Style.red}>
                            {imageError}
                        </Text>
                    </View>


                </View>

            </View>
            <View>
                <View style={{ flexDirection: 'row', marginStart: 20 }} >
                    <Text style={Style.contanttext}>
                        Enter Title
                        <Text style={Style.red}>
                            *
                        </Text>
                    </Text>

                </View>
                <View style={{ margin: 10 }}>

                    <TextInput
                        style={Style.textinput}
                        keyboardType='default'
                        value={title}
                        ref={titleRef}
                        onChangeText={(value) => {
                            setTitle(value)
                            if (value == "") {
                                setTitleError("Please enter title..")
                            }
                            else {
                                setTitleError("");
                            }
                        }}

                    >
                    </TextInput>
                    <Text style={Style.red}>
                        {titleError}
                    </Text>
                </View>

            </View>
            <View>
                <View style={{ flexDirection: 'row', marginStart: 20 }} >
                    <Text style={Style.contanttext}>
                        Issue Description
                        <Text style={Style.red}>
                            *
                        </Text>
                    </Text>

                </View>
                <View style={{ margin: 10 }}>

                    <TextInput
                        style={Style.textinput}
                        keyboardType='default'
                        value={description}
                        ref={descriptionRef}
                        multiline={true}
                        onChangeText={(value) => {
                            setDescription(value)
                            if (value == "") {
                                setDescriptionError("Please enter description...")
                            }
                            else {
                                setDescriptionError("");
                            }
                        }}

                    >
                    </TextInput>
                    <Text style={Style.red}>
                        {descriptionError}
                    </Text>
                </View>

            </View>

            <View style={{ width: '85%', marginEnd: 20, marginBottom: 17 }} >

                <ThemeButton name="upload " styleText={Style.themebtn_text} styleButton={Style.themebtn} onPressFun={() => { onSubmit() }}></ThemeButton>

            </View>

        </ScrollView>
    )
}

export default Add