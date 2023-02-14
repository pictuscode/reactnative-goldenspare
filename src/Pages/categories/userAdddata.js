import React from 'react'
import { View, Image, Text, ScrollView, TouchableOpacity, ActivityIndicator, ToastAndroid } from 'react-native'
import { Fonts } from '../../Components/Common/Fonts'
import Style from '../../Components/Common/Globle'
import { useState, useEffect } from 'react'
import { BG_COLOR, FONT_BLACK, FONT_VOILET, FONT_WHITE } from '../../Components/Common/Variable'
import ThemeButton from '../../Components/Themebutton'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { useNavigation, } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage'
import * as axios from 'axios';
import { baseUrl, baseUrlImage } from '../../Components/Common/baseUrl'

const UserAdddata = ({ route }) => {

    const navigation = useNavigation();

    const { postId } = route.params;
    // console.log(postId)

    const [loader, setLoader] = useState(true);


    const [bids, setBids] = useState("");
    const [post, setPost] = useState([]);
    const [dirImg, SetDirImg] = useState("");
    const [dirPro, SetDirPro] = useState("");
    //console.log(bids)

    const [role, setRole] = useState('');
    const [userId, setUserId] = useState('');
    const [token, setToken] = useState("");
    //console.log(token)

    useEffect(() => {
        getData()

    }, [])
    const getData = async () => {
        setLoader(true)
        const savedUser = await AsyncStorage.getItem("userDetails")
        const currentUser = JSON.parse(savedUser);
        setUserId(currentUser.userId)
        setToken(currentUser.token)
        setRole(currentUser.role)
        await axios.post(baseUrl + 'getpostdetails', {
            postId: postId
        }

            , {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + currentUser.token
                }
            }
        )
            .then((response) => {

                SetDirPro(response.data.profileDir)
                setBids(response.data.postDetails.bids)
                setPost(response.data.postDetails)
                SetDirImg(response.data.bidDir)

                setLoader(false)

            }).catch((error) => {

                console.log(error)
                ToastAndroid.show("tryagain", ToastAndroid.CENTER)
            });


    }

    return (



        loader ? (<ActivityIndicator size={30} color={FONT_VOILET} style={{ flex: 1, justifyContent: "center", backgroundColor: BG_COLOR }} />) :
            <ScrollView>

                <View style={{ backgroundColor: FONT_WHITE, flex: 1 }}>




                    <View style={{ alignItems: 'center', }}>


                        <View >
                            <ScrollView horizontal >
                                {
                                    post.image.map((element, index) => {
                                        // console.log(baseUrlImage + dirImg + element)
                                        return (
                                            <View key={index} style={{ margin: 10 }}>


                                                <Image style={{ height: 200, width: 340 }} source={{ uri: baseUrlImage + dirImg + element }} />

                                            </View>
                                        )

                                    }



                                    )
                                }


                            </ScrollView>
                            <View >

                                <Text style={{ marginTop: 17, fontFamily: Fonts.fontmedium, color: FONT_BLACK, fontSize: 15, textAlign: 'center' }}>
                                    {post.title}
                                </Text>
                            </View>
                            <View style={{ margin: 17, }}>

                                <Text style={Style.lighttext} >
                                    {post.discription}
                                </Text>
                            </View>

                            {

                                (role == 0) &&

                                <View style={{ marginEnd: 60, marginBottom: 5 }} >

                                    <ThemeButton name="Bid" styleText={Style.themebtn_text} styleButton={Style.themebtn} onPressFun={() => { navigation.navigate("BidPage", { postId: postId }) }}></ThemeButton>

                                </View>
                            }


                            {

                                (role == 1) &&
                                <View >
                                    <View style={{ borderBottomWidth: .3, borderBottomColor: 'gray' }}>

                                    </View>

                                    <View style={{ backgroundColor: FONT_WHITE, }}>
                                        {


                                            bids.map(element => {


                                                Time = new Date(element.createdAt).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })

                                                //console.log(Time)

                                                return (



                                                    <View key={element._id}>

                                                        <TouchableOpacity onPress={() => { navigation.navigate("Chat") }}   >
                                                            <View style={{ flexDirection: 'row', }}>

                                                                <View style={{ width: "25%" }}>
                                                                    <Image style={{ height: 50, width: 50, margin: 20, borderRadius: 30, borderColor: 'gray', borderWidth: .1 }} source={element.agentId.profile != "" ? { uri: baseUrlImage + dirPro + element.agentId.profile } : { uri: "https://cdn-icons-png.flaticon.com/512/149/149071.png" }} />
                                                                </View>
                                                                <View style={{ flexDirection: "row", width: "70%", marginTop: 10, }}>

                                                                    <View style={{ width: "50%" }}>
                                                                        <Text style={Style.H2}>
                                                                            {element.agentId.companyName}
                                                                        </Text>

                                                                        <Text style={Style.H4}>


                                                                            {"$" + element.bidAmount}

                                                                        </Text>
                                                                        <Text style={[Style.H4G, {}]}>
                                                                            {element.content}
                                                                        </Text>

                                                                    </View>
                                                                    <View style={{ width: "50%", marginStart: 20 }} >


                                                                        <Text style={[Style.H4, { marginTop: 3 }]} >


                                                                            {"Call" + " : " + element.agentId.phone}

                                                                        </Text>
                                                                        <Text style={[Style.H4, { marginTop: 30, marginStart: 75 }]}>


                                                                            {Time}

                                                                        </Text>
                                                                    </View>
                                                                </View>
                                                            </View>

                                                            <View style={{ borderBottomWidth: .3, borderBottomColor: 'gray' }}>

                                                            </View>
                                                        </TouchableOpacity>

                                                    </View>


                                                )

                                            }
                                            )

                                        }

                                    </View>

                                </View>
                            }
                        </View>

                    </View>




                </View >


            </ScrollView>


    )
}

export default UserAdddata