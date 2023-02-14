import React from 'react'
import { View, ScrollView, Text, TextInput, } from 'react-native'
import Style from '../../Components/Common/Globle'
import { useState } from 'react'
import ThemeButton from '../../Components/Themebutton'
import { BG_COLOR } from '../../Components/Common/Variable'
var allCategories = [
    {
        "id": 1,
        "brand": " Flame Resistant Rainwear"

    },
    {
        "id": 2,
        "brand": "Traffic Vest"
    },
    {
        "id": 3,
        "brand": "Thermal Protection"
    },
    {
        "id": 4,
        "brand": "Socks"
    },
    {
        "id": 5,
        "brand": "Safety Harness"
    },


    {
        "id": 6,
        "brand": "Safety Goggles"
    },
    {
        "id": 7,
        "brand": "Safety Gloves"
    },
    {
        "id": 8,
        "brand": "Safety Glasses"
    },
    {
        "id": 9,
        "brand": "Safety Flashlights"
    },
    {
        "id": 10,
        "brand": "Safety"
    },
    {
        "id": 11,
        "brand": "Flame Retardant Clothing"

    },
    {
        "id": 12,
        "brand": "Rain Jacket"
    },
    {
        "id": 13,
        "brand": "Protective Eyewear"
    },
    {
        "id": 14,
        "brand": "Protective Clothing"
    },
    {
        "id": 15,
        "brand": "Personal Safety Equipment"
    },


    {
        "id": 16,
        "brand": "North Safety"
    },
    {
        "id": 17,
        "brand": "Passive Ear Muffs"
    },
    {
        "id": 18,
        "brand": "MSA"
    },
    {
        "id": 19,
        "brand": "Moldex"
    },
    {
        "id": 20,
        "brand": " Miller Safety"
    },
    {
        "id": 21,
        "brand": "Occunomix"
    },


    {
        "id": 22,
        "brand": "North Safety"
    },
    {
        "id": 23,
        "brand": "MSA, Mine Safety Appliances"
    },
    {
        "id": 24,
        "brand": "MSA"
    },
    {
        "id": 25,
        "brand": "Moldex"
    },
    {
        "id": 26,
        "brand": " Miller Safety"
    },

]
const AllCategories = () => {

    return (
        <>
            <View style={{ marginStart: 15, marginTop: 15 }}>
                <TextInput placeholder="Search..."
                    style={Style.SearchButton}
                    dataDetectorTypes='all'
                    keyboardType='default'
                ></TextInput>

            </View>


            <ScrollView >
                <View style={{ borderColor: BG_COLOR, borderWidth: 1, marginTop: 10 }}>

                </View>
                {
                    allCategories.map(element => {
                        return (
                            <View key={element.id}>

                                <View style={{ marginVertical: 10, marginStart: 15 }} >

                                    <Text style={Style.H2}>
                                        {element.brand}
                                    </Text>

                                </View>
                                <View style={{ borderColor: BG_COLOR, borderWidth: 1 }}>

                                </View>


                            </View>

                        );

                    }
                    )

                }
            </ScrollView>



        </>


    )
}

export default AllCategories
