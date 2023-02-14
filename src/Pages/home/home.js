import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView, SafeAreaView, TouchableOpacity, Image, TextInput, ActivityIndicator, StatusBar, ToastAndroid } from 'react-native'
import HomeStyle from '.'
import { Svg, G, Path, Ellipse, Line, Polyline } from 'react-native-svg'
import Style from '../../Components/Common/Globle'
import { BG_COLOR, FONT_BLACK, FONT_VOILET } from '../../Components/Common/Variable'
import UserAddDetails from './userAddDetails'
import { useNavigation, } from "@react-navigation/native";
import * as axios from 'axios';
import { Fonts } from '../../Components/Common/Fonts'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { baseUrl, baseUrlImage } from '../../Components/Common/baseUrl'
import { io, } from 'socket.io-client';

const Home = () => {
    const navigation = useNavigation();

    const [loader, setLoader] = useState(true);


    const [post, SetPost] = useState("");
    const [dirImg, SetDirImg] = useState("");
    const [dirPro, SetDirPro] = useState("");
     //console.log(post)

    const [role, setRole] = useState('');
    const [userId, setUserId] = useState('');
    const [token, setToken] = useState("");
    //console.log(token)
    const [categoryList, setCategoryList] = useState("")
    const [imgDir, setImageDir] = useState("")
    //console.log(categoryList)
    useEffect(() => {
        getData()
        PopularService()
    }, [])



    const socket = io("ws://192.168.0.121:5005", {
        reconnectionDelayMax: 10000,

    });
    socket.emit("forceDisconnect", userId, () => {
        console.log(socket.connected)
    });


    const PopularService = () => {

        setLoader(true)

        axios.post(baseUrl + 'popularservice', {


        }, {
            headers: {
                'Content-Type': 'application/json',

            }
        }
        ).then(async (response) => {
            if (response.data) {

                setImageDir(response.data.catDir)
                setCategoryList(response.data.serviceList)


                //console.log(response.data.categoryList)

            }

        }
        )


    }
    const getData = async () => {

        const savedUser = await AsyncStorage.getItem("userDetails")
        const currentUser = JSON.parse(savedUser);
        setUserId(currentUser.userId)
        setRole(currentUser.role)
        //console.log(currentUser)
        setToken(currentUser.token)

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
                // console.log(response.data.postDetails)

                SetPost(response.data.postDetails)
                SetDirPro(response.data.profileDir)
                SetDirImg(response.data.bidDir)
                setLoader(false)

            }).catch((error) => {

                console.log(error)
                ToastAndroid.show("tryagain", ToastAndroid.CENTER)
            });


    }


    return (

        loader ? (<ActivityIndicator size={30} color={FONT_VOILET} style={{ flex: 1, justifyContent: "center", backgroundColor: BG_COLOR }} />) :

            <SafeAreaView>
                <StatusBar backgroundColor="#F2F6FF" barStyle="dark-content" />
                <ScrollView >
                    <View style={{ height: 180, width: "100%", backgroundColor: BG_COLOR }}>
                        <View style={{ marginStart: 15 }}>
                            <View style={{ flexDirection: 'row', marginTop: 20, justifyContent: 'space-between' }}>

                                <View >

                                    <Text style={Style.H1}>
                                        Bangalure
                                    </Text>
                                </View>

                                <View style={{ flexDirection: "row", marginTop: -8 }}>
                                    <TouchableOpacity onPress={() => { navigation.navigate("Notification") }}>
                                        <View style={{ marginTop: 12, marginEnd: 10 }}>

                                            <Svg
                                                width={20}
                                                height={20}
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink"


                                            >
                                                <G
                                                    id="Iconly/Light-Outline/Notification"
                                                    style={{
                                                        fill: FONT_BLACK,
                                                        stroke: "none",

                                                    }}

                                                >
                                                    <G
                                                        id="Notification"
                                                        transform="translate(3.000000, 1.000000)"

                                                    >
                                                        <Path
                                                            d="M7.3243,19.106 C7.8423,19.683 8.5073,20 9.1973,20 L9.1983,20 C9.8913,20 10.5593,19.683 11.0783,19.105 C11.3563,18.798 11.8303,18.773 12.1373,19.05 C12.4453,19.327 12.4703,19.802 12.1933,20.109 C11.3853,21.006 10.3223,21.5 9.1983,21.5 L9.1963,21.5 C8.0753,21.499 7.0143,21.005 6.2093,20.108 C5.9323,19.801 5.9573,19.326 6.2653,19.05 C6.5733,18.772 7.0473,18.797 7.3243,19.106 Z M9.2471,0 C13.6921,0 16.6781,3.462 16.6781,6.695 C16.6781,8.358 17.1011,9.063 17.5501,9.811 C17.9941,10.549 18.4971,11.387 18.4971,12.971 C18.1481,17.018 13.9231,17.348 9.2471,17.348 C4.5711,17.348 0.3451,17.018 8.66453236e-05,13.035 C-0.0029,11.387 0.5001,10.549 0.9441,9.811 L1.10084456,9.54715551 C1.48677474,8.88385813 1.8161,8.16235294 1.8161,6.695 C1.8161,3.462 4.8021,0 9.2471,0 Z M9.2471,1.5 C5.7521,1.5 3.3161,4.238 3.3161,6.695 C3.3161,8.774 2.7391,9.735 2.2291,10.583 C1.8201,11.264 1.4971,11.802 1.4971,12.971 C1.6641,14.857 2.9091,15.848 9.2471,15.848 C15.5501,15.848 16.8341,14.813 17.0001,12.906 C16.9971,11.802 16.6741,11.264 16.2651,10.583 C15.7551,9.735 15.1781,8.774 15.1781,6.695 C15.1781,4.238 12.7421,1.5 9.2471,1.5 Z"
                                                            id="Combined-Shape"
                                                        />
                                                    </G>
                                                </G>
                                            </Svg>

                                        </View>


                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => { }}>

                                        <View style={{ marginTop: 10, marginEnd: 25 }}>
                                            <Svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 511.32 511.39"
                                                height={25}
                                                width={25}
                                                style={{
                                                    fill: FONT_BLACK,
                                                    stroke: FONT_BLACK,

                                                }}
                                            >
                                                <G id="Layer_2" data-name="Layer 2">
                                                    <G id="Layer_1-2" data-name="Layer 1">
                                                        <Path d="M279.2.57a255.9,255.9,0,0,1,157.1,74c40.4,40.4,65.1,90.6,73.4,149.5,1.9,14,1.6,51.5-.6,66-4.3,28.6-11.5,52.2-23.6,77.2l-7.8,16.2,16.3,50.7c9,28,16.7,52.6,17.1,54.7,2,12.4-9.9,24.3-22.3,22.3-2.1-.4-26.7-8.1-54.7-17.1l-50.7-16.3-16.2,7.8c-25,12.1-48.6,19.3-77.2,23.6-14.5,2.2-52,2.5-66,.6q-88.35-12.45-149.3-73.2c-39.7-39.7-64-88.2-72.9-146-2.4-16.1-2.4-53.9,0-70,8.9-57.7,33-105.9,72.7-145.8,39.4-39.5,88.5-64.1,145-72.7C232,.17,266.3-.63,279.2.57Zm-43.8,40c-33,3.3-69.4,15.6-94.3,32-44.5,29.1-75,68.1-90.5,115.6-11.9,36.4-14.1,71.1-7,108.9,4.5,23.5,16.7,54.4,28.9,72.9,28.8,43.9,67.5,74.5,114.2,90.1,60.7,20.3,122.6,13.5,180.8-19.7,11.2-6.4,11.4-6.3,55.5,8,20.3,6.6,37.1,12,37.2,11.9s-5.3-16.9-11.9-37.2c-14.9-45.7-14.7-43.7-6.1-59,18.4-32.7,27.4-64,29-101,4-94.5-57.6-182.7-148.3-212.4C293.6,41.07,264.3,37.77,235.4,40.57Z" />
                                                        <Path d="M364.3,232.27a27.05,27.05,0,0,1,8.6,5.9c10,10,10,24.8,0,34.8s-24.8,10-34.8,0C319.3,254.27,339.2,223.37,364.3,232.27Z" />
                                                        <Path d="M264.3,232.27a27.05,27.05,0,0,1,8.6,5.9c10,10,10,24.8,0,34.8s-24.8,10-34.8,0C219.3,254.27,239.2,223.37,264.3,232.27Z" />
                                                        <Path d="M164.3,232.27a27.05,27.05,0,0,1,8.6,5.9c10,10,10,24.8,0,34.8s-24.8,10-34.8,0C119.3,254.27,139.2,223.37,164.3,232.27Z" />
                                                    </G>
                                                </G>
                                            </Svg>
                                        </View>
                                    </TouchableOpacity>
                                </View>


                            </View>
                            <View style={{ marginTop: 20 }}>
                                <Text style={Style.heading}>
                                    Holo
                                </Text>

                            </View>
                            <View>
                                <Text style={Style.H3}>
                                    Buy and sell Stuff
                                </Text>
                            </View>
                        </View>
                    </View>

                    <View style={{ marginTop: -15, marginStart: 15, }}>

                        <View>

                            <View style={{
                                position: 'absolute',
                                left: 10,
                                top: 16,
                                zIndex: 1
                            }}>
                                {/* <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 266 267" height={20} width={20}> */}
                                <G id="Layer_2" data-name="Layer 2">
                                    <G id="Layer_3" data-name="Layer 3">
                                        <G id="Layer_2-2" data-name="Layer 2">
                                            <G id="Layer_1-2" data-name="Layer 1-2">
                                                <G id="Layer_2-2-2" data-name="Layer 2-2">
                                                    <G id="Layer_6" data-name="Layer 6">
                                                        <Ellipse
                                                            cx={118.97}
                                                            cy={117.19}
                                                            rx={108.97}
                                                            ry={107.19}
                                                            style={{
                                                                fill: "none",
                                                                stroke: FONT_BLACK,
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                strokeWidth: 20,
                                                            }}

                                                        />
                                                        <Line
                                                            x1={199.08}
                                                            y1={199.73}
                                                            x2={256}
                                                            y2={257}
                                                            style={{
                                                                fill: "none",
                                                                stroke: FONT_BLACK,
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                strokeWidth: 20,
                                                            }}
                                                        />
                                                    </G>
                                                </G>
                                            </G>
                                        </G>
                                    </G>
                                </G>
                                {/* </Svg> */}
                            </View>
                            <TextInput placeholder="Try pumps in spain..."
                                style={Style.SearchButton}

                            ></TextInput>

                        </View>



                    </View>



                    <View style={{ marginTop: 20, flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 15 }}>
                        <View style={{}}>

                            <Text style={Style.H1}>
                                What are you looking for ?
                            </Text>
                        </View>
                        <View style={{ marginTop: 2 }}>
                            <TouchableOpacity onPress={() => { navigation.navigate('Categories') }} style={{ flexDirection: 'row' }}>

                                <Text style={{ color: '#2db67e', fontFamily: Fonts.fontmedium, fontSize: 15 }}>
                                    See All
                                </Text>
                                <View style={{ marginStart: -10, marginTop: -1 }}>
                                    <Svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 268.11 120.04"
                                        height={25}
                                        width={25}
                                    >
                                        <G id="Layer_2" data-name="Layer 2">
                                            <G id="Layer_1-2" data-name="Layer 1">

                                                <G id="Layer_2-2" data-name="Layer 2">
                                                    <G id="Layer_4" data-name="Layer 4">
                                                        <G id="Layer_2-2-2" data-name="Layer 2-2">
                                                            <G id="Layer_1-2-2" data-name="Layer 1-2">
                                                                <G id="Layer_2-2-2-2" data-name="Layer 2-2-2">
                                                                    <G id="Layer_1-2-2-2" data-name="Layer 1-2-2">
                                                                        <G id="Layer_2-2-2-2-2" data-name="Layer 2-2-2-2">
                                                                            <G id="Layer_6" data-name="Layer 6">
                                                                                <Polyline
                                                                                    points="183.3 10 258.11 60.63 181.82 110.04"
                                                                                    style={{
                                                                                        fill: "none",
                                                                                        stroke: "#2db67e",
                                                                                        strokeLinecap: "round",
                                                                                        strokeLinejoin: "round",
                                                                                        strokeWidth: 20,
                                                                                    }}
                                                                                />
                                                                            </G>
                                                                        </G>
                                                                    </G>
                                                                </G>
                                                            </G>
                                                        </G>
                                                    </G>
                                                </G>
                                            </G>
                                        </G>
                                    </Svg>
                                </View>
                            </TouchableOpacity>
                        </View>


                    </View>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>

                        <View style={{ flexDirection: 'row', marginTop: 10 }}>

                            {

                                categoryList.slice(0, 6).map(element => {

                                    return (
                                        <TouchableOpacity key={element._id} onPress={() => { navigation.navigate("Categories View", { categoryId: element._id }) }}
                                        >
                                            <View key={element._id} style={{ margin: 10 }} >
                                                <Image source={{ uri: baseUrlImage + imgDir + element.image }} style={{ width: 80, height: 80, borderRadius: 50 }} />


                                                <View style={{ alignItems: 'center' }}>

                                                    <Text style={Style.H2}>
                                                        {element.categoryName}
                                                    </Text>
                                                </View>
                                                <View style={{ alignItems: 'center' }}>

                                                    <Text style={Style.H4G}>
                                                        {element.suppliers + "-Suppliers"}
                                                    </Text>
                                                </View>

                                            </View>
                                        </TouchableOpacity>
                                    );

                                })



                            }
                        </View>
                    </ScrollView>

                    {

                        // (role == 0) &&

                        <View>

                            <View style={{ flexDirection: "row", justifyContent: 'space-between', marginHorizontal: 15 }}>
                                <View >

                                    <Text style={Style.H1}>
                                        New Recommentations
                                    </Text>
                                </View>
                                <View style={{ marginTop: 2 }}>
                                    <TouchableOpacity onPress={() => { navigation.navigate('AddItem', { post: post, dirPro: dirPro, dirImg: dirImg }) }} style={{ flexDirection: 'row' }}>

                                        <Text style={{ color: '#2db67e', fontFamily: Fonts.fontmedium, fontSize: 15 }}>
                                            See All
                                        </Text>
                                        <View style={{ marginStart: -10, marginTop: -1 }}>
                                            <Svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 268.11 120.04"
                                                height={25}
                                                width={25}
                                            >
                                                <G id="Layer_2" data-name="Layer 2">
                                                    <G id="Layer_1-2" data-name="Layer 1">

                                                        <G id="Layer_2-2" data-name="Layer 2">
                                                            <G id="Layer_4" data-name="Layer 4">
                                                                <G id="Layer_2-2-2" data-name="Layer 2-2">
                                                                    <G id="Layer_1-2-2" data-name="Layer 1-2">
                                                                        <G id="Layer_2-2-2-2" data-name="Layer 2-2-2">
                                                                            <G id="Layer_1-2-2-2" data-name="Layer 1-2-2">
                                                                                <G id="Layer_2-2-2-2-2" data-name="Layer 2-2-2-2">
                                                                                    <G id="Layer_6" data-name="Layer 6">
                                                                                        <Polyline
                                                                                            points="183.3 10 258.11 60.63 181.82 110.04"
                                                                                            style={{
                                                                                                fill: "none",
                                                                                                stroke: "#2db67e",
                                                                                                strokeLinecap: "round",
                                                                                                strokeLinejoin: "round",
                                                                                                strokeWidth: 20,
                                                                                            }}
                                                                                        />
                                                                                    </G>
                                                                                </G>
                                                                            </G>
                                                                        </G>
                                                                    </G>
                                                                </G>
                                                            </G>
                                                        </G>
                                                    </G>
                                                </G>
                                            </Svg>
                                        </View>
                                    </TouchableOpacity>
                                </View>


                            </View>

                            <ScrollView horizontal showsHorizontalScrollIndicator={false}>

                                <View style={{ width: '50%', flexDirection: 'row', marginVertical: 10, }}>
                                    { 
                                        post.slice(0, 6).map(element => {

                                            return (

                                                <View style={{ marginTop: 10, }} key={element._id} >
                                                    <TouchableOpacity>
                                                        <UserAddDetails onPress={() => { navigation.navigate("UserAddData", { postId: element._id }) }}
                                                            imgsrc={{ uri: baseUrlImage + dirImg + element.image[0] }}
                                                            Title={element.title} TitleStyle={Style.contanttext}
                                                            discription={element.discription} discriptionStyle={Style.homedescription}
                                                            imgsource={element.userId.profile != "" ? { uri: baseUrlImage + dirPro + element.userId.profile } : { uri: "https://cdn-icons-png.flaticon.com/512/149/149071.png" }}
                                                            name={element.userId.companyName} nameStyle={Style.contanttext}
                                                        >
                                                        </UserAddDetails>
                                                    </TouchableOpacity>

                                                </View>

                                            );
                                        }
                                        )
                                    }
                                </View>

                            </ScrollView>
                        </View>
                    }
                </ScrollView>
            </SafeAreaView>

    )
}

export default Home