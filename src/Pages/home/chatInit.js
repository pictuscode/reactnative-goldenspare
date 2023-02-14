import React, { useState, useEffect } from 'react'
import { View, TextInput, ScrollView, Text, TouchableOpacity, ActivityIndicator, ToastAndroid } from 'react-native'
import Style from '../../Components/Common/Globle'
import { FONT_WHITE, FONT_VOILET, BG_COLOR, FONT_BLACK } from '../../Components/Common/Variable'
import { Svg, Polygon, G } from 'react-native-svg'
import * as axios from 'axios';
import { baseUrl } from '../../Components/Common/baseUrl'
import AsyncStorage from '@react-native-async-storage/async-storage'
const ChatInit = ({ route }) => {
    const Id = route.params;
    //console.log(Id.Id)
    const [loader, setLoader] = useState(true);
    const [message, setMessage] = useState("")
    const [chatDetails, setChatDetails] = useState("")

    const [messageError, setMessageError] = useState("")
    //console.log(message)



    submitText = () => {
        setMessageError("");
        var errorCount = 0;
        if (message == "") {

            setMessageError("Please enter your message..");
            errorCount++


        }
        if (errorCount == 0) {

            sendmessage()
            setMessage("")
        }


    }


    const [userId, setUserId] = useState('');
    const [token, setToken] = useState("");
    //console.log(userId)
    useEffect(() => {
        getData()
    }, [])
    const getData = async () => {
        setLoader(true)

        const savedUser = await AsyncStorage.getItem("userDetails")
        const currentUser = JSON.parse(savedUser);
        setUserId(currentUser.userId)
        setToken(currentUser.token)

        axios.post(baseUrl + "gotochat", {
            userId: currentUser.userId,
            chatUserId: Id.Id
        }

            , {
                headers: {

                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + currentUser.token
                }
            }
        )
            .then((response) => {
                //console.log(response.data.chatDetails.message)
                setChatDetails(response.data.chatDetails)

                setLoader(false)

            }).catch((error) => {

                console.log(error)
                ToastAndroid.show("Tryagain", ToastAndroid.CENTER)

            });

    }







    const sendmessage = () => {
        setLoader(true)
        axios.post(baseUrl + 'sendmessage', {

            fromId: userId,
            toId: Id.Id,
            message: message

        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        }
        ).then(async (response) => {
            if (response.data) {

                //console.log(response.data)


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
        loader ? (<ActivityIndicator size={30} color={FONT_VOILET} style={{ flex: 1, justifyContent: "center", backgroundColor: BG_COLOR }} />) :
            <View style={{ flex: 1, backgroundColor: FONT_WHITE }}>
                <View style={{ backgroundColor: FONT_WHITE, flex: 1, marginBottom: 70 }}>
                    <ScrollView >
                        <View>


                            {chatDetails.message.map(element => {




                                const timeString12hr = new Date(element.createdAt)
                                    .toLocaleTimeString('en-US',
                                        { timeZone: 'UTC', hour12: true, hour: 'numeric', minute: 'numeric' }
                                    );
                                //console.log(timeString12hr)

                                return (


                                    <View key={element._id}>

                                        <View >
                                            {
                                                (element.from == userId) ?
                                                    (<View style={{ flexDirection: "row" }}>

                                                        <View style={{ width: "20%" }}>
                                                        </View>
                                                        <View style={Style.chatFrom}>
                                                            <Text style={Style.H4} >{element.msg}</Text>
                                                            <Text style={Style.H4} >{timeString12hr}</Text>
                                                        </View>
                                                    </View>) :
                                                    (<View style={Style.chatTo}>
                                                        <Text style={Style.H4} >{element.msg}</Text>
                                                        <Text style={Style.H4} >{timeString12hr}</Text>
                                                    </View>)

                                            }
                                        </View>





                                    </View>
                                )
                            })

                            }

                        </View>
                        <View style={{ flexDirection: "row" }}>
                            <View style={{ width: "20%" }}>

                            </View>


                            <View style={message == "" ? (Style.FONT_WHITE) : (Style.chatFrom)}>
                                <Text >
                                    {message}
                                </Text>
                            </View>
                        </View>


                    </ScrollView>
                </View>
                <View style={{ position: 'absolute', bottom: 0, width: "100%", flexDirection: "row" }}>
                    <View style={{ width: "85%" }}>

                        <TextInput
                            style={Style.textinputchat}
                            placeholder='Type a message.....'
                            keyboardType='default'
                            value={message}
                            onChangeText={(value) => {
                                setMessage(value)
                                if (value == "") {
                                    setMessageError("Please enter your message...")
                                }
                                else {
                                    setMessageError("");
                                }
                            }}

                        >
                        </TextInput>
                        <View style={{ marginStart: 10 }}>

                            <Text style={Style.red}>
                                {messageError}
                            </Text>
                        </View>
                    </View>

                    <TouchableOpacity style={[Style.textinputchat, { width: "15%" }]} onPress={() => submitText()}>
                        <View style={{ marginTop: 5 }}>
                            <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 53.92 46.53" height={20} width={20}>
                                <G id="Layer_2" data-name="Layer 2">
                                    <G id="Layer_1-2" data-name="Layer 1">
                                        <Polygon points="0 0 0 17.73 38.41 22.9 0 28.07 0 46.53 53.92 22.9 0 0" style={{

                                            fill: "#000",
                                            stroke: "#000",

                                        }} />
                                    </G>
                                </G>
                            </Svg>
                        </View>

                    </TouchableOpacity>
                </View>
            </View>
    )
}

export default ChatInit 