
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Image, Text } from 'react-native';
import { Svg, Path, G, Rect, Ellipse, Line, Circle } from "react-native-svg";
import { Fonts } from '../Components/Common/Fonts';
import home from '../Pages/home/home';
import fevorite from '../Pages/fevorite/fevorite';
import Search from '../Pages/search/search';
import Account from '../Pages/profile/account';
import { FONT_BLACK, FONT_VOILET, FONT_WHITE, BG_COLOR } from '../Components/Common/Variable';
import Add from '../Pages/addData/addData';
import DashBoard from '../Pages/dashBoard/dashBoard';
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Tab = createBottomTabNavigator();
const MyTabs = () => {



    const [role, setRole] = useState("");
    //console.log(role)


    useEffect(() => {
        getData()

    }, [])

    const getData = async () => {

        const savedUser = await AsyncStorage.getItem("userDetails")
        const currentUser = JSON.parse(savedUser);
        setRole(currentUser.role)

    }




    return (


        <Tab.Navigator
        >
            <Tab.Screen name="home" component={home} options={{
                tabBarHideOnKeyboard: true,
                tabBarLabel: ({ focused, color, size }) => (
                    <Text ></Text>
                ),


                headerShown: false,

                tabBarIcon: ({ focused, color, size }) => (

                    <View style={{ marginTop: 25 }}>
                        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50.61 53" height={18} width={18}>
                            <G id="Layer_2" data-name="Layer 2">
                                <G id="Layer_1-2" data-name="Layer 1">
                                    <Path
                                        d="M23.86,1.57l-22,19.92a2.67,2.67,0,0,0-.84,2V49.69A2.1,2.1,0,0,0,2.81,52H15.62a2.43,2.43,0,0,0,2.29-2.55V37.73a2.42,2.42,0,0,1,2.29-2.54h9.16a2.43,2.43,0,0,1,2.29,2.54V49.45A2.43,2.43,0,0,0,33.94,52h14a2,2,0,0,0,1.7-2.17V23.46a2.67,2.67,0,0,0-.84-2l-22-19.92A2.12,2.12,0,0,0,23.86,1.57Z"
                                        style={{
                                            fill: "none",
                                            stroke: focused ? FONT_VOILET : FONT_BLACK,
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 4,
                                        }}
                                    />
                                </G>
                            </G>
                        </Svg>
                    </View>

                ),

            }}
            />
            <Tab.Screen name="fevorite" component={fevorite} options={{
                tabBarHideOnKeyboard: true,
                tabBarLabel: ({ focused, color, size }) => (
                    <Text></Text>

                ),
                headerShown: false,
                tabBarIcon: ({ focused, color, size }) => (
                    <View style={{ marginTop: 25 }}>
                        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18.95 18.13" height={18} width={18}>
                            <G id="Layer_2" data-name="Layer 2" style={{
                                fill: "#000000",

                                stroke: "none"

                            }}>
                                <G id="Layer_1-2" data-name="Layer 1" style={{
                                    fill: focused ? FONT_VOILET : FONT_BLACK,
                                    stroke: "none",

                                }}>
                                    <Path d="M8.61.33A4.34,4.34,0,0,0,7.25,2.15C6.13,4.55,5.52,5,3.34,5.28S0,6.37,0,7.55A6.43,6.43,0,0,0,1.7,10l1.47,1.54a.78.78,0,0,1,.2.58l-.19,2.33C3,16.74,3,17.22,3.49,17.65c.72.76,1.73.63,3.94-.46l1.46-.72a1.21,1.21,0,0,1,1,0l1.46.72c2.31,1.12,3.46,1.22,4.25.37.51-.58.51-.85.24-3.13l-.27-2a1,1,0,0,1,.27-.85L17,10.43c1.91-2,2.24-2.64,1.85-3.61s-1-1.24-3.61-1.66c-1.06-.19-2-.37-2-.4s-.45-.82-.91-1.73c-.88-1.76-2-3.06-2.64-3A2.88,2.88,0,0,0,8.61.33Zm2.31,3.16a8.38,8.38,0,0,0,1.66,2.39,11.54,11.54,0,0,0,2.82.76,4.78,4.78,0,0,1,2.19.67,9.21,9.21,0,0,1-1.7,2.12l-1.21,1.28a1.54,1.54,0,0,0-.43,1.21l.15,2c.25,3.18.28,3.15-2.64,1.79a14.57,14.57,0,0,0-2.21-.91,14.36,14.36,0,0,0-2.45,1,5.86,5.86,0,0,1-2.52.82c-.24-.15-.24-.85,0-2.67l.25-1.71a1.66,1.66,0,0,0-.42-1.36l-1.2-1.3A9.11,9.11,0,0,1,1.52,7.37c0-.21.85-.52,2.21-.76A16.33,16.33,0,0,0,6.46,6,8.43,8.43,0,0,0,8,3.61,5.34,5.34,0,0,1,9.49,1.49,5.84,5.84,0,0,1,10.92,3.49Z" style={{
                                        fill: focused ? FONT_VOILET : FONT_BLACK,
                                        stroke: "none",

                                    }} />
                                </G>
                            </G>


                        </Svg>
                    </View>
                ),
            }} />

            {


                (role == 1) &&
                <Tab.Screen name="Add Data" labelStyle={{}} component={Add} options={{

                    tabBarHideOnKeyboard: true,
                    headerTitleStyle: {
                        fontSize: 18, color: FONT_BLACK, fontFamily: Fonts.fontmedium,

                    },
                    headerStyle: { backgroundColor: BG_COLOR },
                    headerTintColor: FONT_BLACK,
                    headerTitleAlign: "center",
                    tabBarLabel: ({ focused, color, size }) => (
                        <Text ></Text>
                    ),


                    tabBarIcon: ({ focused, color, size }) => (
                        <View style={{ marginTop: 25 }}>
                            <Svg
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                id="Layer_1"

                                viewBox="0 0 128 128"
                                height={28} width={28}
                                xmlSpace="preserve"

                            >
                                <Circle className="st0" cx={64} cy={64} r={64} style={{

                                    fill: "#2db67e",
                                    stroke: "none",

                                    enableBackground: "new 0 0 128 128",
                                }} />
                                <Path
                                    className="st1"


                                    d="M103,57H71V25c0-0.6-0.4-1-1-1H58c-0.6,0-1,0.4-1,1v32H25c-0.6,0-1,0.4-1,1v12c0,0.6,0.4,1,1,1h32v32  c0,0.6,0.4,1,1,1h12c0.6,0,1-0.4,1-1V71h32c0.6,0,1-0.4,1-1V58C104,57.4,103.6,57,103,57z"
                                    style={{

                                        fill: FONT_WHITE,
                                        stroke: "none",

                                        enableBackground: "new 0 0 128 128",
                                    }}
                                />
                            </Svg>
                        </View>
                    ),
                }} />
            }
            <Tab.Screen name="Search" component={Search} options={{
                headerShown: false,
                tabBarHideOnKeyboard: true,
                tabBarLabel: ({ focused, color, size }) => (
                    <Text ></Text>
                ),
                tabBarIcon: ({ focused, color, size }) => (
                    <View style={{ marginTop: 25 }} >
                        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 266 267" height={18} width={18}>
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
                                                            stroke: focused ? FONT_VOILET : FONT_BLACK,
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
                                                            stroke: focused ? FONT_VOILET : FONT_BLACK,
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
                        </Svg>
                    </View>
                ),

            }} />
            <Tab.Screen name="DashBoard" component={DashBoard} options={{
                tabBarHideOnKeyboard: true,
                headerTitleStyle: { fontSize: 20, color: FONT_BLACK, fontFamily: Fonts.fontmedium, },
                headerStyle: { backgroundColor: BG_COLOR },
                headerTintColor: FONT_BLACK,
                headerTitleAlign: "center",

                tabBarLabel: ({ focused, color, size }) => (
                    <Text ></Text>
                ),
                tabBarIcon: ({ focused, color, size }) => (
                    <View style={{ marginTop: 25 }}>
                        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 51.88 52.88" height={18} width={18}>
                            <G id="Layer_2" data-name="Layer 2">
                                <G id="Layer_1-2" data-name="Layer 1">
                                    <Rect
                                        x={1.44}
                                        y={1.44}
                                        width={49}
                                        height={50}
                                        rx={5.4}
                                        style={{
                                            fill: "#fff",
                                            stroke: focused ? FONT_VOILET : FONT_BLACK,
                                            strokeMiterlimit: 10,
                                            strokeWidth: "2.8834839410007453px",
                                        }}
                                    />
                                    <Line
                                        x1={9.44}
                                        y1={13.94}
                                        x2={42.44}
                                        y2={13.94}
                                        style={{
                                            fill: "none",
                                            stroke: focused ? FONT_VOILET : FONT_BLACK,
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: "2.883px",
                                        }}
                                    />
                                    <Line
                                        x1={8.94}
                                        y1={26.94}
                                        x2={41.94}
                                        y2={26.94}
                                        style={{
                                            fill: "none",
                                            stroke: focused ? FONT_VOILET : FONT_BLACK,
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: "2.883px",
                                        }}
                                    />
                                    <Line
                                        x1={8.94}
                                        y1={39.94}
                                        x2={41.94}
                                        y2={39.94}
                                        style={{
                                            fill: "none",
                                            stroke: focused ? FONT_VOILET : FONT_BLACK,
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: "2.883px",
                                        }}
                                    />
                                </G>
                            </G>
                        </Svg>
                    </View>
                ),

            }} />
            <Tab.Screen name="Account" component={Account} options={{
                tabBarHideOnKeyboard: true,
                headerTitleStyle: { fontSize: 20, color: FONT_BLACK, fontFamily: Fonts.fontmedium, },
                headerStyle: { backgroundColor: BG_COLOR },
                headerTintColor: FONT_BLACK,
                headerTitleAlign: "center",

                tabBarLabel: ({ focused, color, size }) => (
                    <Text ></Text>
                ),
                tabBarIcon: ({ focused, color, size }) => (
                    <View style={{ marginTop: 25 }}>
                        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 411.3 450.92" height={18} width={18}
                        >
                            <G id="Layer_2" data-name="Layer 2" style={{
                                fill: focused ? FONT_VOILET : FONT_BLACK,

                                strokeWidth: 4,

                            }}>
                                <G id="Layer_1-2" data-name="Layer 1" style={{
                                    fill: focused ? FONT_VOILET : FONT_BLACK,

                                    strokeWidth: 4,

                                }}>
                                    <Path d="M207,0C130.45,0,68.4,60.64,68.4,135.45S130.45,270.9,207,270.9s138.6-60.64,138.6-135.45S283.55,0,207,0Zm-.2,252.35c-65.61,0-118.8-52-118.8-116.1s53.19-116.1,118.8-116.1,118.8,52,118.8,116.1S272.41,252.35,206.8,252.35Z" style={{
                                        fill: focused ? FONT_VOILET : FONT_BLACK,

                                        strokeWidth: 4,

                                    }} />
                                    <Path d="M205.65,293.28C92.07,293.28,0,328.57,0,372.1s92.07,78.82,205.65,78.82S411.3,415.63,411.3,372.1,319.23,293.28,205.65,293.28Zm.9,137.82c-98.17,0-177.75-26.8-177.75-59.85s79.58-59.85,177.75-59.85S384.3,338.2,384.3,371.25,304.72,431.1,206.55,431.1Z" style={{
                                        fill: focused ? FONT_VOILET : FONT_BLACK,

                                        strokeWidth: 4,

                                    }} />
                                </G>
                            </G>
                        </Svg>
                    </View>
                ),

            }} />

        </Tab.Navigator>

    );
}
export default MyTabs