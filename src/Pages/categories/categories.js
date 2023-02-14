import React from 'react'
import { View, Image, ScrollView, ActivityIndicator } from 'react-native'
import Style from '../../Components/Common/Globle'
import CategoriesIndex from './categoriesIndex'
import { useNavigation, } from "@react-navigation/native";
import { useState, useEffect } from 'react';
import { FONT_VOILET, BG_COLOR } from '../../Components/Common/Variable';
import { baseUrl, baseUrlImage } from '../../Components/Common/baseUrl';
import * as axios from 'axios';
const Categories = () => {
    const navigation = useNavigation();

    const [loader, setLoader] = useState(true);
    var array = [
        {
            "id": 1,
            "category": "Marine Safety",
            "image": "https://images.ctfassets.net/1xfre2u0d1lr/7rKZQwCIrah925dhyygpRB/0d0dce0475af446e3ce87c4e5c16be86/marine-safety.jpg",
        },
        {
            "id": 2,
            "category": "Pumps",
            "image": "https://images.ctfassets.net/1xfre2u0d1lr/4iKtYfYf0TjdMPi7QOUV4r/e3360adb1fda36079c779a384db540dc/pumps.jpg",
        },
        {
            "id": 3,
            "category": "Valvs",
            "image": "https://www.neles.com/contentassets/be6c3b9d08bd427fbea76101558613cb/neles-valve-controllers2.jpg?preset=og-image",
        },
        {
            "id": 4,
            "category": "Chandlery",
            "image": "https://images.ctfassets.net/1xfre2u0d1lr/5ypI0ZScfafix7vbEBJCfZ/74a3939dc8d5f0b9eba3038582f2a755/chandlers.jpg",
        },
        {
            "id": 5,
            "category": "Provisions",
            "image": "https://images.ctfassets.net/1xfre2u0d1lr/72jLuzifxNSOI27QDGAlXr/b5aa0a143c307881214f981d5147bb27/provisions.jpg",
        },


        {
            "id": 6,
            "category": "Marine Services",
            "image": "https://images.ctfassets.net/1xfre2u0d1lr/12zRocoZZBb3PePEXzcBPh/451f6d8263a7a3bdcffb68d813d02f15/marine-services.jpg",
        },
        {
            "id": 7,
            "category": "Industrial Suppliers",
            "image": "https://images.ctfassets.net/1xfre2u0d1lr/6N4TnIFW3P69R2q39BUnGv/7652977d68a9bc11addd117e3ae54933/industrial-suppliers.jpg",
        },
        {
            "id": 8,
            "category": "Deck Spares",
            "image": "https://images.ctfassets.net/1xfre2u0d1lr/6eL247j02ddclgcibmMp7F/5ef57c53dece85e45c6bcb8d8bdc4688/deck-spares.jpg",
        },
        {
            "id": 9,
            "category": "Welding Supplies ",
            "image": "https://images.ctfassets.net/1xfre2u0d1lr/7H5wtggBA1geNnKEcwMBOt/0be612ef92436c459710eae826238a63/welding-supplies.jpg",
        },
        {
            "id": 10,
            "category": "Compressors",
            "image": "https://images.ctfassets.net/1xfre2u0d1lr/5KCbTFRDCHz0YjP8zjIKlw/9cb1a78d848c5b6ef6e366cee36acfb4/compressors.jpg",
        },

    ]

    const [categoryList, setCategoryList] = useState("")
    const [imgDir, setImageDir] = useState("")
    //console.log(categoryList)
    useEffect(() => {
        PopularService()
    }, [])

    const PopularService = () => {

        setLoader(true)

        axios.post(baseUrl + 'popularservice', {


        }, {
            headers: {
                'Content-Type': 'application/json',

            }
        }
        ).then(async (response) => {
            if (response.data) {

                setImageDir(response.data.catDir)
                setCategoryList(response.data.serviceList)

                setLoader(false)
                //console.log(response.data.categoryList)

            }

        }
        )


    }
    return (
        loader ? (<ActivityIndicator size={30} color={FONT_VOILET} style={{ flex: 1, justifyContent: "center", backgroundColor: BG_COLOR }} />) :
            <ScrollView>

                <View style={{ flexDirection: 'row', flexWrap: "wrap" }}>
                    {


                        categoryList.map(element => {

                            return (




                                <View style={{ flexDirection: 'column', borderEndWidth: .3, borderEndColor: 'gray', width: '50%' }} key={element._id} >

                                    <CategoriesIndex onPress={() => { navigation.navigate("Categories View", { categoryId: element._id }) }} categoryname={element.categoryName} categorynamestyle={Style.H2}
                                        imgsrc={{ uri: baseUrlImage + imgDir + element.image }}

                                        suppliers={element.suppliers + "-Suppliers"} suppliersStyle={Style.H4G}

                                    >
                                    </CategoriesIndex>

                                    <View style={{ borderBottomWidth: .3, borderBottomColor: 'gray', }}>

                                    </View>

                                </View>



                            );




                        }
                        )

                    }


                </View>
            </ScrollView>

    )
}

export default Categories
