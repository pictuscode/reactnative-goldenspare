
import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View, Animated, Text, TouchableOpacity, Image } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { useState } from 'react';
import { Fonts } from '../../Components/Common/Fonts';
import { FONT_WHITE, FONT_BLACK } from '../../Components/Common/Variable';
import ThemeButton from '../../Components/Themebutton';
import Style from '../../Components/Common/Globle';
import { Svg, G, Path } from 'react-native-svg';
const Categoriesdetail = () => {
    const Details = () => (

        <ScrollView
            style={{ backgroundColor: FONT_WHITE, flex: 1, }} entThrottle={16}
            onScroll={Animated.event(
                [{
                    nativeEvent: {
                        contentOffset: { y: AnimatedHeaderValue }
                    }
                }],
                { useNativeDriver: false }
            )}>
            <View style={{ margin: 17, }}>

                <Text style={Style.lighttext} >
                    Red Wing has a decades-long history of providing    premium-quality footwear, workwear, safety glasses, work gloves and more
                </Text>
            </View>
            <View style={{ marginHorizontal: 15, marginTop: 10 }} >
                <Text style={Style.detailstext}>
                    We are TULLP, your separation and filtration team. For years we have been your one-stop supplier for all your separation and filtration requirements. TULLP focuses on the production and distribution of alternative spare parts for separators, triple screw low-pressure pumps, back flushing filters, plate heat exchangers and fresh water generators. As we are an independent Dutch brand, we ensure that our customers receive outstanding, unparalleled quality.
                </Text>

            </View>
            <View style={{ marginHorizontal: 15, marginVertical: 10 }}>

                <Text style={Style.detailstext}>
                    All TULLP Second Life parts are fully checked, tested and are shipped with a certificate. They have the same warranty as new parts at a reduced price.
                    Combining our Second Life parts with the best possible service by our MaxAssist programme.
                </Text>

            </View>
            <View style={{ marginHorizontal: 15, marginVertical: 10 }}>

                <Text style={Style.detailstext}>
                    At TULLP we strongly believe in a sustainable future. We are always looking for new ways to lower our ecological footprint as a company and doing our part to achieve a greener and more responsible working environment.With this in mind we have created a new spare part segment called “TULLP Second Life parts”
                    This segment contains used parts that we have repaired and verified to comply with the high quality standard we have at TULLP.

                </Text>

            </View>
            <View style={{ marginHorizontal: 15, marginVertical: 10 }}>

                <Text style={Style.detailstext}>
                    This unique combination of knowledge, unprecedented reversed engineering and our fully automated in-house supply chain enables us to supply high-quality products, specific maintenance and reliable solutions that will help you increase the running hours between scheduled maintenance and reduce operational costs, improving your bottom line.
                </Text>

            </View>
            <View style={{ marginHorizontal: 15, marginTop: 10 }} >
                <Text style={Style.detailstext}>
                    We are TULLP, your separation and filtration team. For years we have been your one-stop supplier for all your separation and filtration requirements. TULLP focuses on the production and distribution of alternative spare parts for separators, triple screw low-pressure pumps, back flushing filters, plate heat exchangers and fresh water generators. As we are an independent Dutch brand, we ensure that our customers receive outstanding, unparalleled quality.
                </Text>

            </View>
            <View style={{ marginHorizontal: 15, marginVertical: 10 }}>

                <Text style={Style.detailstext}>
                    All TULLP Second Life parts are fully checked, tested and are shipped with a certificate. They have the same warranty as new parts at a reduced price.
                    Combining our Second Life parts with the best possible service by our MaxAssist programme.
                </Text>

            </View>
            <View style={{ marginHorizontal: 15, marginVertical: 10 }}>

                <Text style={Style.detailstext}>
                    At TULLP we strongly believe in a sustainable future. We are always looking for new ways to lower our ecological footprint as a company and doing our part to achieve a greener and more responsible working environment.With this in mind we have created a new spare part segment called “TULLP Second Life parts”
                    This segment contains used parts that we have repaired and verified to comply with the high quality standard we have at TULLP.

                </Text>

            </View>
            <View style={{ marginHorizontal: 15, marginVertical: 10 }}>

                <Text style={Style.detailstext}>
                    This unique combination of knowledge, unprecedented reversed engineering and our fully automated in-house supply chain enables us to supply high-quality products, specific maintenance and reliable solutions that will help you increase the running hours between scheduled maintenance and reduce operational costs, improving your bottom line.
                </Text>

            </View>
        </ScrollView>
    );

    const Brands = () => (

        <View style={{ backgroundColor: FONT_WHITE, flex: 1 }}>
            <View style={{ marginTop: 20, flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 15 }}>
                <View style={{}}>

                    <Text style={Style.H1}>
                        Brands
                    </Text>
                </View>
                <View style={{ marginTop: 2 }}>
                    <TouchableOpacity onPress={() => { navigation.navigate('All Brands') }} style={{ flexDirection: 'row' }}>

                        <Text style={Style.H4}>
                            View All Brands
                        </Text>

                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ marginStart: 15, marginTop: 10 }}>
                <View style={{ marginTop: 10 }}>

                    <Text style={Style.H4}>
                        SWEP
                    </Text>
                </View>


                <View style={{ marginTop: 10 }}>
                    <Text style={Style.H4}>
                        GEA
                    </Text>

                </View>

                <View style={{ marginTop: 10 }}>
                    <Text style={Style.H4}>
                        Alfa Laval
                    </Text>

                </View>


            </View>
        </View>


    );

    const Categories = () => (

        <View style={{ backgroundColor: FONT_WHITE, flex: 1 }}>
            <View style={{ marginTop: 20, flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 15 }}>
                <View style={{}}>

                    <Text style={Style.H1}>
                        Categories
                    </Text>
                </View>
                <View style={{ marginTop: 2 }}>
                    <TouchableOpacity onPress={() => { navigation.navigate('All Categories') }} style={{ flexDirection: 'row' }}>

                        <Text style={Style.H4}>
                            View All Categories
                        </Text>

                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ marginStart: 15, marginTop: 10 }}>
                <View style={{ marginTop: 10 }}>

                    <Text style={Style.H4}>
                        Filters
                    </Text>
                </View>


                <View style={{ marginTop: 10 }}>
                    <Text style={Style.H4}>
                        Heat Exchangers
                    </Text>

                </View>

                <View style={{ marginTop: 10 }}>
                    <Text style={Style.H4}>
                        Inspection Services
                    </Text>

                </View>
                <View style={{ marginTop: 10 }}>
                    <Text style={Style.H4}>
                        Pumps
                    </Text>

                </View>
                <View style={{ marginTop: 10 }}>
                    <Text style={Style.H4}>
                        Purifiers & Separators
                    </Text>

                </View>


            </View>
        </View>
    );
    const renderScene = SceneMap({
        first: Details,
        second: Brands,
        three: Categories
    });

    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'first', title: ' About', },
        { key: 'second', title: 'Brands' },
        { key: 'three', title: 'Categories' },


    ]);

    let AnimatedHeaderValue = new Animated.Value(0);
    const Header_Maximum_Height = 275;
    const Header_Minimum_Height = 0;


    const animateHeaderHeight =
        AnimatedHeaderValue.interpolate({
            inputRange: [0, Header_Maximum_Height],
            outputRange: [Header_Maximum_Height, Header_Minimum_Height],
            extrapolate: 'clamp',
        });

    return (



        <View style={{ flex: 1 }} >

            <Animated.View
                style={[{ height: animateHeaderHeight, },]}>
                <View style={{ backgroundColor: FONT_WHITE, }}>
                    <View style={{ alignItems: 'center', marginTop: 20, }}>
                        <View>


                            <Image style={{ height: 120, width: 120, borderRadius: 80, borderColor: "pink", borderWidth: 4 }} source={{ uri: "https://e7.pngegg.com/pngimages/798/436/png-clipart-computer-icons-user-profile-avatar-profile-heroes-black-thumbnail.png" }} />
                        </View>
                        <View >

                            <Text style={{ marginTop: 17, width: 100, fontFamily: Fonts.fontmedium, color: FONT_BLACK, fontSize: 15, textAlign: 'center' }}>
                                Red Wing Shoe Company
                            </Text>
                        </View>
                        <View style={{ marginTop: 5, marginBottom: 5 }}>
                            <View style={{ flexDirection: 'row', }}>
                                <View style={{ marginTop: 2, }}>
                                    <Svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={15}
                                        height={15}
                                        viewBox="0 0 512.000000 512.000000"
                                        preserveAspectRatio="xMidYMid meet"

                                    >
                                        <G
                                            transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                                            fill="#000000"
                                            stroke="none"
                                        >
                                            <Path d="M2485 4900 c-206 -32 -360 -191 -397 -407 -30 -177 52 -363 201 -459 l60 -39 0 -77 1 -78 -220 0 -219 0 -16 29 c-22 44 -77 73 -150 78 -99 8 -151 -3 -196 -44 -49 -45 -59 -80 -59 -223 0 -143 10 -178 59 -223 45 -41 97 -52 196 -44 73 5 128 34 150 78 l16 29 220 0 219 0 -2 -1122 -3 -1123 -24 -52 c-59 -132 -202 -181 -404 -138 -136 28 -498 188 -611 269 -129 92 -214 224 -254 391 -11 44 -19 81 -18 82 1 1 48 9 105 18 57 8 111 20 121 25 23 12 34 44 23 65 -18 31 -468 405 -488 405 -11 0 -25 -4 -31 -8 -7 -4 -85 -121 -174 -260 -121 -190 -161 -259 -158 -279 5 -44 26 -49 145 -31 59 8 109 15 110 14 2 -2 10 -40 18 -87 76 -408 268 -660 640 -839 55 -27 213 -93 351 -148 387 -155 591 -265 753 -407 91 -80 105 -89 130 -75 11 6 51 38 88 71 165 146 353 248 781 420 399 161 513 224 657 360 160 153 260 352 310 618 8 47 16 85 18 87 1 1 51 -6 110 -14 119 -18 140 -13 145 31 2 20 -37 89 -159 279 -88 139 -166 256 -173 260 -6 4 -20 8 -31 8 -20 0 -471 -375 -488 -406 -11 -19 0 -52 21 -63 9 -5 64 -16 121 -25 58 -9 106 -17 107 -19 8 -10 -45 -178 -76 -243 -84 -174 -198 -259 -545 -407 -178 -75 -254 -97 -360 -104 -126 -8 -194 12 -255 75 -80 83 -74 -6 -78 1250 l-2 1122 219 0 219 0 20 -34 c27 -45 72 -67 148 -74 98 -7 150 4 195 45 49 45 59 80 59 223 0 143 -10 178 -59 223 -45 41 -97 52 -195 45 -76 -7 -121 -29 -148 -74 l-20 -34 -219 0 -219 0 0 78 0 77 35 19 c106 57 204 207 226 344 41 253 -142 501 -401 542 -72 11 -73 11 -145 0z m153 -276 c47 -19 88 -58 114 -108 30 -59 22 -151 -18 -208 -96 -138 -305 -118 -369 34 -71 173 103 353 273 282z" />
                                        </G>
                                    </Svg>
                                </View>
                                <View style={{ marginStart: 5 }}>

                                    <Text style={Style.H4}>
                                        21 ports Globally
                                    </Text>
                                </View>
                            </View>


                        </View>

                    </View>

                    <View style={{ width: '85%' }}>
                        <ThemeButton name="Contact Supplier" styleText={Style.themebtn_text} styleButton={Style.themebtn} onPressFun={() => { navigation.navigate("Contact Supliers") }}></ThemeButton>
                    </View>
                </View >

            </Animated.View>


            <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                renderTabBar={props => <TabBar {...props} style={{ backgroundColor: 'white', }}
                    pressColor={'transparent'}

                    indicatorStyle={{ backgroundColor: 'red', borderTopStartRadius: 10, borderTopEndRadius: 10, width: 80, height: 3, marginHorizontal: 20 }}
                    labelStyle={{ color: 'black', fontFamily: Fonts.fontmedium, fontSize: 12, marginTop: 20 }}
                    renderLabel={({ focused, route }) => {
                        return (
                            <Text style={Style.H2}>
                                {route.title}
                            </Text>
                        );
                    }}
                />}

            />


        </View>

    );
};

export default Categoriesdetail;



