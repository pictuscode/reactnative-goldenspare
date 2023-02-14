import React from 'react'
import { View, TouchableOpacity, Image, Text, ScrollView, ActivityIndicator } from 'react-native'
import { Fonts } from '../../Components/Common/Fonts'
import { BG_COLOR, FONT_BLACK, FONT_VOILET } from '../../Components/Common/Variable'
import ThemeButton from '../../Components/Themebutton'
import { useNavigation, } from "@react-navigation/native";
import CategoriesStyle from './categoriesStyle'
import Profilestyle from '../profile/profileStyle'
import Style from '../../Components/Common/Globle'
import { Svg, G, Path, Circle } from 'react-native-svg'
import { useState, useEffect } from 'react'
import { baseUrl } from '../../Components/Common/baseUrl'
import * as axios from 'axios';
const CategoriesView = ({ route }) => {

    const [loader, setLoader] = useState(true);
    const categoryId = route.params;
    //console.log(categoryId.categoryId)
    const navigation = useNavigation();

    const [categorySupplier, setCategorySupplier] = useState("")
    // console.log(categorySupplier)
    useEffect(() => {

        getcategorysuppliers()
    }, [])

    const getcategorysuppliers = () => {

        setLoader(true)

        axios.post(baseUrl + 'getcategorysuppliers', {
            categoryId: categoryId.categoryId

        }, {
            headers: {
                'Content-Type': 'application/json',

            }
        }
        ).then(async (response) => {
            if (response.data) {


                setCategorySupplier(response.data.supplierList)


                //console.log(response.data.categoryList)
                setLoader(false)

            }

        }
        )


    }













    return (

        loader ? (<ActivityIndicator size={30} color={FONT_VOILET} style={{ flex: 1, justifyContent: "center", backgroundColor: BG_COLOR }} />) :
            <ScrollView>
                {/*   <TouchableOpacity onPress={() => { navigation.navigate("Filter") }} >
                <View style={{ backgroundColor: "#f6f9fb" }}>

                    <View style={{ alignItems: "center", marginVertical: 10, }}>

                        <Text style={Style.H2} >
                            FILTER
                        </Text>

                    </View>
                </View>
            </TouchableOpacity> */}
                <View>
                    {


                        categorySupplier.map(element => {

                            //console.log(element._id)
                            return (



                                <View key={element._id}>

                                    <TouchableOpacity onPress={() => { navigation.navigate("Categoriesdetails", { toId: element._id }) }}   >
                                        <View style={{ flexDirection: 'row', }}>
                                            <View>
                                                <Image style={{ height: 80, width: 80, margin: 20, borderRadius: 10, borderColor: 'gray', borderWidth: .1 }} source={{ uri: "https://www.pictuscode.com/pictuscode1.png" }} />

                                            </View>

                                            <View style={{ flexDirection: 'column' }}>
                                                <Text style={{ marginTop: 17, width: 100, fontFamily: Fonts.fontmedium, color: FONT_BLACK, fontSize: 15 }}>
                                                    {element.companyName}
                                                </Text>
                                                <View style={{ flexDirection: 'row', marginTop: 3 }}    >

                                                    < Image style={CategoriesStyle.star} source={require('../../assets/Images/star.png')} />
                                                    < Image style={CategoriesStyle.star} source={require('../../assets/Images/star.png')} />
                                                    < Image style={CategoriesStyle.star} source={require('../../assets/Images/star.png')} />
                                                    < Image style={CategoriesStyle.star} source={require('../../assets/Images/star.png')} />
                                                    < Image style={CategoriesStyle.star} source={require('../../assets/Images/star.png')} />
                                                </View>
                                                <Text style={{ fontSize: 12, fontFamily: Fonts.fontmedium, }}>
                                                    0 Reviews
                                                </Text>
                                                <View style={{ flexDirection: 'row', marginTop: 5 }}>

                                                    <View style={{ marginTop: 2 }}>
                                                        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27.7 45.36" height={15} width={15}>
                                                            <G id="Layer_2" data-name="Layer 2">
                                                                <G id="Layer_1-2" data-name="Layer 1">
                                                                    <Path
                                                                        d="M14.28,45.36s23.87-31.5,7.94-42.75A14.88,14.88,0,0,0,5.81,2.33C-.78,6.72-5.8,17.75,14.28,45.36Z"
                                                                        style={{
                                                                            fill: "#000",
                                                                        }}
                                                                    />
                                                                    <Circle
                                                                        cx={14.22}
                                                                        cy={11.14}
                                                                        r={5.5}
                                                                        style={{
                                                                            fill: "#fff",
                                                                        }}
                                                                    />
                                                                </G>
                                                            </G>
                                                        </Svg>
                                                    </View>
                                                    <View>
                                                        <Text style={Style.H4}>
                                                            {element.country}
                                                        </Text>
                                                    </View>

                                                </View>
                                            </View>
                                            <View style={{ marginStart: 10, width: 200 }}>
                                                <View style={{ flexDirection: 'row', margin: 20, }}>
                                                    <View style={{ marginTop: 2, marginStart: 12 }}>
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
                                                            21 ports
                                                        </Text>
                                                    </View>
                                                </View>

                                                <View style={{ marginBottom: 5 }}>

                                                    <ThemeButton name="View" styleText={Profilestyle.themebtn_text} styleButton={Profilestyle.themebtn} onPressFun={() => { navigation.navigate("Categoriesdetails", { Id: element._id }) }}></ThemeButton>
                                                </View>

                                            </View>

                                        </View>
                                    </TouchableOpacity>
                                    <View style={{ borderBottomWidth: .3, borderBottomColor: 'gray' }}>

                                    </View>

                                </View>


                            )

                        }
                        )

                    }

                </View>

            </ScrollView>
    )
}

export default CategoriesView