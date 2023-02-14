import React from 'react'
import { View, ToastAndroid, ActivityIndicator, ScrollView } from 'react-native'
import { useState, useEffect } from 'react';
import * as axios from 'axios';
import { baseUrl, baseUrlImage } from '../../Components/Common/baseUrl';
import { BG_COLOR, FONT_VOILET } from '../../Components/Common/Variable';
import AsyncStorage from '@react-native-async-storage/async-storage';
import UserAddDetails from '../home/userAddDetails';
import Style from '../../Components/Common/Globle';

const VesselPost = () => {

    const [loader, setLoader] = useState(true);

    const [post, SetPost] = useState("");
    const [dirImg, SetDirImg] = useState("");
    const [dirPro, SetDirPro] = useState("");

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        setLoader(true)

        const savedUser = await AsyncStorage.getItem("userDetails")
        const currentUser = JSON.parse(savedUser);


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
                //console.log(response.data)
                // setChatDetails(response.data)
                ToastAndroid.show("Ok", ToastAndroid.CENTER)

                SetPost(response.data.postDetails)
                SetDirPro(response.data.profileDir)
                SetDirImg(response.data.bidDir)

                setLoader(false)

            }).catch((error) => {

                console.log(error)
                ToastAndroid.show("Tryagain", ToastAndroid.CENTER)

            });






    }


    return (
        loader ? (<ActivityIndicator size={30} color={FONT_VOILET} style={{ flex: 1, justifyContent: "center", backgroundColor: BG_COLOR }} />) :
            <View>



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


            </View>


    )
}

export default VesselPost