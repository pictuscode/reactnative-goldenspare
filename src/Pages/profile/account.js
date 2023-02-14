import React from 'react'
import { View, Text, ScrollView, StatusBar, TouchableOpacity } from 'react-native'
import { Svg, G, Polyline } from 'react-native-svg'
import Style from '../../Components/Common/Globle'
import { FONT_WHITE } from '../../Components/Common/Variable'
import Profilestyle from './profileStyle'
import { useNavigation, } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useState, useEffect } from 'react'
import { baseUrl } from '../../Components/Common/baseUrl'
import * as axios from 'axios';
const Account = () => {
    const navigation = useNavigation();
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        getData();
    }, [])

    const [serviceId, setServiceId] = useState('');
    const [userId, setUserId] = useState('');
    const [token, setToken] = useState("");
    const [role, setRole] = useState("");


    //console.log(serviceId)
    const getData = async () => {
        const savedUser = await AsyncStorage.getItem("userDetails")
        const currentUser = JSON.parse(savedUser);
        setUserId(currentUser.userId)
        setToken(currentUser.token)
        setRole(currentUser.role)


        axios.post(baseUrl + 'getuserdata', {

            userId: (currentUser.userId),


        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + (currentUser.token)

            }
        }
        ).then(async (response) => {
            if (response.data) {

                //console.log(response.data.userDetails.serviceId)
                setServiceId(response.data.userDetails.serviceId)
                setLoader(false)
            }

        }).catch(function (error) {
            setLoader(false)
            console.log(error)
        });



    }
    // console.log(userId)


    const onSubmit = async () => {

        await AsyncStorage.clear()


        navigation.reset({
            index: 0,
            routes: [{ name: 'Login' }],
        });

    }
    return (

        <ScrollView style={{ backgroundColor: FONT_WHITE }}>


            <View>


                <TouchableOpacity style={Profilestyle.mainToch} onPress={() => { navigation.navigate('Profile', { userId: userId, token: token }) }}>
                    <View>
                        <Text style={Style.contanttext}>
                            Account
                        </Text>
                    </View>

                    <View>
                        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32.16 56.69" height={15} width={15} >
                            <G id="Layer_2" data-name="Layer 2">
                                <G id="Layer_1-2" data-name="Layer 1">
                                    <G id="Layer_2-2" data-name="Layer 2">
                                        <G id="Layer_3" data-name="Layer 3">
                                            <G id="Layer_2-2-2" data-name="Layer 2-2">
                                                <G id="Layer_4" data-name="Layer 4">
                                                    <G id="Layer_2-2-2-2" data-name="Layer 2-2-2">
                                                        <G id="Layer_1-2-2" data-name="Layer 1-2">
                                                            <G id="Layer_2-2-2-2-2" data-name="Layer 2-2-2-2">
                                                                <G id="Layer_1-2-2-2" data-name="Layer 1-2-2">
                                                                    <G id="Layer_2-2-2-2-2-2" data-name="Layer 2-2-2-2-2">
                                                                        <G id="Layer_6" data-name="Layer 6">
                                                                            <Polyline
                                                                                points="2.44 2.08 30.09 28.7 2.08 54.61"
                                                                                style={{
                                                                                    fill: "none",
                                                                                    stroke: "#000",
                                                                                    strokeLinecap: "round",
                                                                                    strokeLinejoin: "round",
                                                                                    strokeWidth: "4.153238379234949px",
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
                                </G>
                            </G>
                        </Svg>
                    </View>

                </TouchableOpacity>


                {
                    (role == 0) &&
                    <TouchableOpacity style={Profilestyle.mainToch} onPress={() => { navigation.navigate('AddServices', { userId: userId, token: token, serviceId: serviceId }) }}>
                        <View>
                            <Text style={Style.contanttext}>
                                Add Services
                            </Text>
                        </View>

                        <View>
                            <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32.16 56.69" height={15} width={15} >
                                <G id="Layer_2" data-name="Layer 2">
                                    <G id="Layer_1-2" data-name="Layer 1">
                                        <G id="Layer_2-2" data-name="Layer 2">
                                            <G id="Layer_3" data-name="Layer 3">
                                                <G id="Layer_2-2-2" data-name="Layer 2-2">
                                                    <G id="Layer_4" data-name="Layer 4">
                                                        <G id="Layer_2-2-2-2" data-name="Layer 2-2-2">
                                                            <G id="Layer_1-2-2" data-name="Layer 1-2">
                                                                <G id="Layer_2-2-2-2-2" data-name="Layer 2-2-2-2">
                                                                    <G id="Layer_1-2-2-2" data-name="Layer 1-2-2">
                                                                        <G id="Layer_2-2-2-2-2-2" data-name="Layer 2-2-2-2-2">
                                                                            <G id="Layer_6" data-name="Layer 6">
                                                                                <Polyline
                                                                                    points="2.44 2.08 30.09 28.7 2.08 54.61"
                                                                                    style={{
                                                                                        fill: "none",
                                                                                        stroke: "#000",
                                                                                        strokeLinecap: "round",
                                                                                        strokeLinejoin: "round",
                                                                                        strokeWidth: "4.153238379234949px",
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
                                    </G>
                                </G>
                            </Svg>
                        </View>

                    </TouchableOpacity>
                }
                <TouchableOpacity style={Profilestyle.mainToch} onPress={() => { navigation.navigate('Change password', { userId: userId, token: token }) }}>
                    <View>
                        <Text style={Style.contanttext}>
                            Password
                        </Text>
                    </View>

                    <View>
                        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32.16 56.69" height={15} width={15} >
                            <G id="Layer_2" data-name="Layer 2">
                                <G id="Layer_1-2" data-name="Layer 1">
                                    <G id="Layer_2-2" data-name="Layer 2">
                                        <G id="Layer_3" data-name="Layer 3">
                                            <G id="Layer_2-2-2" data-name="Layer 2-2">
                                                <G id="Layer_4" data-name="Layer 4">
                                                    <G id="Layer_2-2-2-2" data-name="Layer 2-2-2">
                                                        <G id="Layer_1-2-2" data-name="Layer 1-2">
                                                            <G id="Layer_2-2-2-2-2" data-name="Layer 2-2-2-2">
                                                                <G id="Layer_1-2-2-2" data-name="Layer 1-2-2">
                                                                    <G id="Layer_2-2-2-2-2-2" data-name="Layer 2-2-2-2-2">
                                                                        <G id="Layer_6" data-name="Layer 6">
                                                                            <Polyline
                                                                                points="2.44 2.08 30.09 28.7 2.08 54.61"
                                                                                style={{
                                                                                    fill: "none",
                                                                                    stroke: "#000",
                                                                                    strokeLinecap: "round",
                                                                                    strokeLinejoin: "round",
                                                                                    strokeWidth: "4.153238379234949px",
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
                                </G>
                            </G>
                        </Svg>
                    </View>

                </TouchableOpacity>
                <TouchableOpacity style={Profilestyle.mainToch} onPress={() => { onSubmit() }}
                >
                    <View>
                        <Text style={Style.contanttext}>
                            log Out
                        </Text>
                    </View>

                    <View>
                        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32.16 56.69" height={15} width={15} >
                            <G id="Layer_2" data-name="Layer 2">
                                <G id="Layer_1-2" data-name="Layer 1">
                                    <G id="Layer_2-2" data-name="Layer 2">
                                        <G id="Layer_3" data-name="Layer 3">
                                            <G id="Layer_2-2-2" data-name="Layer 2-2">
                                                <G id="Layer_4" data-name="Layer 4">
                                                    <G id="Layer_2-2-2-2" data-name="Layer 2-2-2">
                                                        <G id="Layer_1-2-2" data-name="Layer 1-2">
                                                            <G id="Layer_2-2-2-2-2" data-name="Layer 2-2-2-2">
                                                                <G id="Layer_1-2-2-2" data-name="Layer 1-2-2">
                                                                    <G id="Layer_2-2-2-2-2-2" data-name="Layer 2-2-2-2-2">
                                                                        <G id="Layer_6" data-name="Layer 6">
                                                                            <Polyline
                                                                                points="2.44 2.08 30.09 28.7 2.08 54.61"
                                                                                style={{
                                                                                    fill: "none",
                                                                                    stroke: "#000",
                                                                                    strokeLinecap: "round",
                                                                                    strokeLinejoin: "round",
                                                                                    strokeWidth: "4.153238379234949px",
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
                                </G>
                            </G>
                        </Svg>
                    </View>

                </TouchableOpacity>
            </View>
        </ScrollView>

    )
}

export default Account