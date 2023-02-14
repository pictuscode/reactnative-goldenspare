/* import React from 'react'
import { View, ToastAndroid, ScrollView, ActivityIndicator } from 'react-native'
import { baseUrl, baseUrlImage } from '../../Components/Common/baseUrl';
import { useState, useEffect } from 'react';
import * as axios from 'axios';
import Style from '../../Components/Common/Globle';
import AsyncStorage from '@react-native-async-storage/async-storage';
import UserAddDetails from '../home/userAddDetails';
import { BG_COLOR, FONT_VOILET } from '../../Components/Common/Variable';
import { useNavigation, } from "@react-navigation/native";
const DashBoard = () => {

    const navigation = useNavigation();
    const [loader, setLoader] = useState(true);

    //console.log(bidpost)




    const [bidPostId, setBidPostId] = useState('');
    //console.log(bidPostId)

    const [post, SetPost] = useState("");
    const [role, setRole] = useState("");
    const [dirImg, SetDirImg] = useState("");
    const [dirPro, setDirPro] = useState("");


    const [imgDir, SetImgDir] = useState("");
    const [ProDir, setProDir] = useState("");
    const [bidpost, SetBidPost] = useState("");



    //console.log(bidpost)

    useEffect(() => {
        getData()

    }, [])

    const getData = async () => {

        setLoader(true)
        const savedUser = await AsyncStorage.getItem("userDetails")
        const currentUser = JSON.parse(savedUser);
        setRole(currentUser.role)



        if (currentUser.role == 1) {
            setLoader(true)


            axios.post(baseUrl + "userpostlist", {
                userId: currentUser.userId

            }

                , {
                    headers: {

                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + currentUser.token
                    }
                }
            )
                .then((response) => {
                    //console.log(response.data.postDetails)
                    // setChatDetails(response.data)

                    SetPost(response.data.postDetails)
                    setDirPro(response.data.profileDir)
                    SetDirImg(response.data.bidDir)

                    //console.log(response.data.bidDir)
                    setLoader(false)

                }).catch((error) => {

                    console.log(error)
                    ToastAndroid.show("Tryagain", ToastAndroid.CENTER)

                });
        }
        else {


            setLoader(true)
            axios.post(baseUrl + "vesselpost", {


            }

                , {
                    headers: {

                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + currentUser.token
                    }
                }
            )
                .then((response) => {
                    SetBidPost(response.data.postDetails)
                    // setChatDetails(response.data)
                    //console.log((response.data.profileDir))

                    setProDir(response.data.profileDir)
                    SetImgDir(response.data.bidDir)


                }).catch((error) => {

                    console.log(error)
                    ToastAndroid.show("Tryagain", ToastAndroid.CENTER)

                });


            axios.post(baseUrl + 'getuserdata', {

                userId: currentUser.userId,


            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + (currentUser.token)

                }
            }
            ).then(async (response) => {
                if (response.data) {

                    setBidPostId(response.data.userDetails.bidPostId)
                    //setServiceId(response.data.userDetails.serviceId)
                    setLoader(false)

                }

            }).catch(function (error) {

                console.log(error)
            });

        }

    }



    return (

        loader ? (<ActivityIndicator size={30} color={FONT_VOILET} style={{ flex: 1, justifyContent: "center", backgroundColor: BG_COLOR }} />) :



            <View>


                {

                    (role == 1) ? (

                        <View>

                            {




                                <ScrollView showsVerticalScrollIndicator={false}>


                                    <View>
                                        <View style={{ flexDirection: 'row', flexWrap: "wrap", }}>
                                            {
                                                post.map(element => {

                                                    return (

                                                        <View style={{ marginTop: 10, width: '50%' }} key={element._id} >

                                                            <UserAddDetails onPress={() => { navigation.navigate("UserAddData", { postId: element._id }) }}
                                                                imgsrc={{ uri: baseUrlImage + dirImg + element.image[0] }}
                                                                Title={element.title} TitleStyle={Style.contanttext}
                                                                discription={element.discription} discriptionStyle={Style.description}
                                                                imgsource={element.userId.profile != "" ? { uri: baseUrlImage + dirPro + element.userId.profile } : { uri: "https://cdn-icons-png.flaticon.com/512/149/149071.png" }}
                                                                name={element.userId.companyName} nameStyle={Style.contanttext}

                                                            >
                                                            </UserAddDetails>

                                                        </View>



                                                    );




                                                }
                                                )
                                            }



                                        </View>

                                    </View>
                                </ScrollView>
                            }



                        </View>) : (
                        <View>

                            {(bidpost !== "") ? (
                                <ScrollView showsVerticalScrollIndicator={false}>

                                    <View style={{ backgroundColor: 'pink', }}>
                                        {
                                            bidpost.map(element => {
                                                return (
                                                    <View key={element._id}>

                                                        {


                                                            bidPostId.map(e => {



                                                                return (
                                                                    (element._id == e) &&

                                                                    <View key={e} style={{ marginTop: 10, width: '50%', flexWrap: "wrap", flexDirection: 'row', marginStart: 90 }} >

                                                                        <UserAddDetails onPress={() => { navigation.navigate("UserAddData", { postId: element._id }) }}
                                                                            imgsrc={{ uri: baseUrlImage + imgDir + element.image[0] }}
                                                                            Title={element.title} TitleStyle={Style.contanttext}
                                                                            discription={element.discription} discriptionStyle={Style.description}
                                                                            imgsource={element.userId.profile != "" ? { uri: baseUrlImage + ProDir + element.userId.profile } : { uri: "https://cdn-icons-png.flaticon.com/512/149/149071.png" }}
                                                                            name={element.userId.companyName} nameStyle={Style.contanttext}

                                                                        >
                                                                        </UserAddDetails>
                                                                    </View>
                                                                )
                                                            })



                                                        }


                                                    </View>


                                                );




                                            }
                                            )
                                        }



                                    </View>
                                </ScrollView>) : (<View style={{ backgroundColor: "pink", flex: 1 }}>
                                </View>)
                            }
                        </View>)
                }
            </View>

    )
}

export default DashBoard */
import React from 'react'
import { View, ToastAndroid, ScrollView, ActivityIndicator, Switch } from 'react-native'
import { baseUrl, baseUrlImage } from '../../Components/Common/baseUrl';
import { useState, useEffect } from 'react';
import * as axios from 'axios';
import Style from '../../Components/Common/Globle';
import AsyncStorage from '@react-native-async-storage/async-storage';
import UserAddDetails from '../home/userAddDetails';
import { BG_COLOR, FONT_VOILET } from '../../Components/Common/Variable';
import { useNavigation, } from "@react-navigation/native";
import UserAddDetails_2 from '../home/userAddDetails_2';

const DashBoard = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    // console.log(isEnabled)

    const navigation = useNavigation();
    const [loader, setLoader] = useState(true);

    //console.log(bidpost)




    const [bidPostId, setBidPostId] = useState('');
    //console.log(bidPostId)

    const [post, SetPost] = useState("");
    const [role, setRole] = useState("");
    const [dirImg, SetDirImg] = useState("");
    const [dirPro, setDirPro] = useState("");

    // console.log(role)
    const [imgDir, SetImgDir] = useState("");
    const [ProDir, setProDir] = useState("");
    const [bidpost, SetBidPost] = useState("");



    //console.log(bidpost)

    useEffect(() => {
        getData()

    }, [])

    const getData = async () => {

        setLoader(true)
        const savedUser = await AsyncStorage.getItem("userDetails")
        const currentUser = JSON.parse(savedUser);
        setRole(currentUser.role)



        if (currentUser.role == 1) {
            setLoader(true)


            axios.post(baseUrl + "userpostlist", {
                userId: currentUser.userId

            }

                , {
                    headers: {

                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + currentUser.token
                    }
                }
            )
                .then((response) => {
                    //console.log(response.data.postDetails)
                    // setChatDetails(response.data)

                    SetPost(response.data.postDetails)
                    setDirPro(response.data.profileDir)
                    SetDirImg(response.data.bidDir)

                    //console.log(response.data.bidDir)
                    setLoader(false)

                }).catch((error) => {

                    console.log(error)
                    ToastAndroid.show("Tryagain", ToastAndroid.CENTER)

                });
        }
        else {


            setLoader(true)
            axios.post(baseUrl + "vesselpost", {


            }

                , {
                    headers: {

                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + currentUser.token
                    }
                }
            )
                .then((response) => {
                    SetBidPost(response.data.postDetails)
                    // setChatDetails(response.data)
                    //console.log((response.data.profileDir))

                    setProDir(response.data.profileDir)
                    SetImgDir(response.data.bidDir)


                }).catch((error) => {

                    console.log(error)
                    ToastAndroid.show("Tryagain", ToastAndroid.CENTER)

                });


            axios.post(baseUrl + 'getuserdata', {

                userId: currentUser.userId,


            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + (currentUser.token)

                }
            }
            ).then(async (response) => {
                if (response.data) {

                    setBidPostId(response.data.userDetails.bidPostId)
                    //setServiceId(response.data.userDetails.serviceId)
                    setLoader(false)

                }

            }).catch(function (error) {

                console.log(error)
            });

        }

    }


    return (
        <View style={{ flex: 1 }}>

            {
                (role == 0) &&
                <View >
                    <Switch
                        trackColor={{ false: FONT_VOILET, true: "red" }}
                        thumbColor={isEnabled ? FONT_VOILET : "red"}
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                </View>
            }

            <View>
                {
                    (isEnabled == false) ? (loader ? (<ActivityIndicator size={30} color={FONT_VOILET} style={{ flex: 1, justifyContent: "center", backgroundColor: BG_COLOR }} />) :



                        <View>


                            {

                                (role == 1) ? (

                                    <View>

                                        {




                                            <ScrollView showsVerticalScrollIndicator={false}>


                                                <View>
                                                    <View style={{ flexDirection: 'row', flexWrap: "wrap", }}>
                                                        {
                                                            post.map(element => {

                                                                return (

                                                                    <View style={{ marginTop: 10, width: '50%' }} key={element._id} >

                                                                        <UserAddDetails onPress={() => { navigation.navigate("UserAddData", { postId: element._id }) }}
                                                                            imgsrc={{ uri: baseUrlImage + dirImg + element.image[0] }}
                                                                            Title={element.title} TitleStyle={Style.contanttext}
                                                                            discription={element.discription} discriptionStyle={Style.description}
                                                                            imgsource={element.userId.profile != "" ? { uri: baseUrlImage + dirPro + element.userId.profile } : { uri: "https://cdn-icons-png.flaticon.com/512/149/149071.png" }}
                                                                            name={element.userId.companyName} nameStyle={Style.contanttext}

                                                                        >
                                                                        </UserAddDetails>

                                                                    </View>



                                                                );




                                                            }
                                                            )
                                                        }



                                                    </View>

                                                </View>
                                            </ScrollView>
                                        }



                                    </View>) : (
                                    <View>

                                        {(bidpost !== "") ? (
                                            <ScrollView showsVerticalScrollIndicator={false}>

                                                <View style={{ backgroundColor: BG_COLOR, flexWrap: "wrap", flexDirection: 'row', }}>
                                                    {
                                                        bidpost.map(element => {
                                                            return (
                                                                <View key={element._id} style={{ marginTop: 10, width: '50%', }}>

                                                                    {


                                                                        bidPostId.map(e => {
                                                                            return (
                                                                                (element._id == e) &&

                                                                                <View key={e}  >

                                                                                    <UserAddDetails onPress={() => { navigation.navigate("UserAddData", { postId: element._id }) }}
                                                                                        imgsrc={{ uri: baseUrlImage + imgDir + element.image[0] }}
                                                                                        Title={element.title} TitleStyle={Style.contanttext}
                                                                                        discription={element.discription} discriptionStyle={Style.description}
                                                                                        imgsource={element.userId.profile != "" ? { uri: baseUrlImage + ProDir + element.userId.profile } : { uri: "https://cdn-icons-png.flaticon.com/512/149/149071.png" }}
                                                                                        name={element.userId.companyName} nameStyle={Style.contanttext}

                                                                                    >
                                                                                    </UserAddDetails>
                                                                                </View>

                                                                            )
                                                                        })



                                                                    }


                                                                </View>


                                                            );




                                                        }
                                                        )
                                                    }



                                                </View>
                                            </ScrollView>) : (<View style={{ backgroundColor: "pink", flex: 1 }}>
                                            </View>)
                                        }
                                    </View>)
                            }
                        </View>
                    ) : (loader ? (<ActivityIndicator size={30} color={FONT_VOILET} style={{ flex: 1, justifyContent: "center", backgroundColor: BG_COLOR }} />) :



                        <View>


                            {

                                (role == 1) ? (

                                    <View>

                                        {




                                            <ScrollView showsVerticalScrollIndicator={false}>


                                                <View>
                                                    <View style={{ flexDirection: 'row', flexWrap: "wrap", }}>
                                                        {
                                                            post.map(element => {

                                                                return (

                                                                    <View style={{ marginTop: 10, width: '50%' }} key={element._id} >

                                                                        <UserAddDetails onPress={() => { navigation.navigate("UserAddData", { postId: element._id }) }}
                                                                            imgsrc={{ uri: baseUrlImage + dirImg + element.image[0] }}
                                                                            Title={element.title} TitleStyle={Style.contanttext}
                                                                            discription={element.discription} discriptionStyle={Style.description}
                                                                            imgsource={element.userId.profile != "" ? { uri: baseUrlImage + dirPro + element.userId.profile } : { uri: "https://cdn-icons-png.flaticon.com/512/149/149071.png" }}
                                                                            name={element.userId.companyName} nameStyle={Style.contanttext}

                                                                        >
                                                                        </UserAddDetails>

                                                                    </View>



                                                                );




                                                            }
                                                            )
                                                        }



                                                    </View>

                                                </View>
                                            </ScrollView>
                                        }



                                    </View>) : (
                                    <View>

                                        {(bidpost !== "") ? (
                                            <ScrollView showsVerticalScrollIndicator={false}>

                                                <View style={{ backgroundColor: BG_COLOR, }}>
                                                    {
                                                        bidpost.map(element => {
                                                            return (
                                                                <View key={element._id}>

                                                                    {


                                                                        bidPostId.map(e => {



                                                                            return (
                                                                                (element._id == e) &&

                                                                                <View key={e} style={{ marginTop: 10, }} >

                                                                                    <UserAddDetails_2 onPress={() => { navigation.navigate("UserAddData", { postId: element._id }) }}
                                                                                        imgsrc={{ uri: baseUrlImage + imgDir + element.image[0] }}
                                                                                        Title={element.title} TitleStyle={Style.contanttext}
                                                                                        discription={element.discription} discriptionStyle={Style.description}
                                                                                        imgsource={element.userId.profile != "" ? { uri: baseUrlImage + ProDir + element.userId.profile } : { uri: "https://cdn-icons-png.flaticon.com/512/149/149071.png" }}
                                                                                        name={element.userId.companyName} nameStyle={Style.contanttext}

                                                                                    >
                                                                                    </UserAddDetails_2>
                                                                                </View>
                                                                            )
                                                                        })



                                                                    }


                                                                </View>


                                                            );




                                                        }
                                                        )
                                                    }



                                                </View>
                                            </ScrollView>) : (<View style={{ backgroundColor: "pink", flex: 1 }}>
                                            </View>)
                                        }
                                    </View>)
                            }
                        </View>

                    )
                }
            </View>
        </View>


    );
}

export default DashBoard


/* 
import React from 'react'
import { View } from 'react-native'
import DuoToggleSwitch from 'react-native-duo-toggle-switch'
const Search = () => {
    return (
        <View>
            <DuoToggleSwitch
                primaryText="Map"
                secondaryText="List"
                onPrimaryPress={() => { }}
                onSecondaryPress={() => { }}
            />
        </View>

    )
}

export default Search */