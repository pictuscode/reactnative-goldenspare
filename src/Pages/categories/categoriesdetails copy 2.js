

import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View, Animated, Text, TouchableOpacity, Image } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { useState } from 'react';
import { Fonts } from '../../Components/Common/Fonts';
import { FONT_WHITE, FONT_BLACK } from '../../Components/Common/Variable';
import ThemeButton from '../../Components/Themebutton';
import Style from '../../Components/Common/Globle';
const Categoriesdetail = () => {
    const Details = () => (

        <ScrollView>

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
        { key: 'first', title: ' Details', },
        { key: 'second', title: 'Brands' },
        { key: 'three', title: 'Categories' },


    ]);

    return (
        <>
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
                    <View style={{ margin: 17, }}>

                        <Text style={Style.lighttext} >
                            Red Wing has a decades-long history of providing    premium-quality footwear, workwear, safety glasses, work gloves and more
                        </Text>
                    </View>
                </View>
                <View style={{ width: '85%' }}>
                    <ThemeButton name="Contact Supplier" styleText={Style.themebtn_text} styleButton={Style.themebtn} onPressFun={() => { navigation.navigate("Contact Supliers") }}></ThemeButton>
                </View>
            </View >


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

        </>
    )

};

export default Categoriesdetail;
