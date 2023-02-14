import React from 'react'
import { View, ScrollView, Text, TextInput, } from 'react-native'
import Style from '../../Components/Common/Globle'
import { useState } from 'react'
import ThemeButton from '../../Components/Themebutton'
import { BG_COLOR } from '../../Components/Common/Variable'
var allBrands = [
    {

        "id": 1,
        "brand": "Wenaas Workwear"

    },
    {
        "id": 2,
        "brand": "Weldas Europe"
    },
    {
        "id": 3,
        "brand": "Viking Life-Saving"
    },
    {
        "id": 4,
        "brand": "Uvex"
    },
    {
        "id": 5,
        "brand": "Uline Shipping Supply"
    },


    {
        "id": 6,
        "brand": "Uline"
    },
    {
        "id": 7,
        "brand": "Showa Kinzoku"
    },
    {
        "id": 8,
        "brand": "Showa Industrial"
    },
    {
        "id": 9,
        "brand": "SHOWA"
    },
    {
        "id": 10,
        "brand": "Roots Coveralls"
    },
    {
        "id": 11,
        "brand": "RESPIREX"

    },
    {
        "id": 12,
        "brand": "Pyramex Safety Products"
    },
    {
        "id": 13,
        "brand": "Pelican"
    },
    {
        "id": 14,
        "brand": "Peli"
    },
    {
        "id": 15,
        "brand": "Occunomix"
    },


    {
        "id": 16,
        "brand": "North Safety"
    },
    {
        "id": 17,
        "brand": "MSA, Mine Safety Appliances"
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
const AllBrands = () => {

    return (
        <>
            <View style={{ marginStart: 15, marginTop: 15 }}>
                <TextInput placeholder="Search..."
                    style={Style.SearchButton}
                    dataDetectorTypes='all'
                    keyboardType='default'
                ></TextInput>

            </View>
            <View style={{ borderColor: BG_COLOR, borderWidth: 1, marginTop: 10 }}>

            </View>

            <ScrollView >
                {
                    allBrands.map(element => {
                        return (
                            <View key={element.id} >

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

export default AllBrands
