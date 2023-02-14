import React from 'react'
import { View, Text } from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker'
import { useState } from 'react'
import { useNavigation, } from "@react-navigation/native";
import Style from '../../Components/Common/Globle'
import ThemeButton from '../../Components/Themebutton'
var filter = [
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
const Filter = () => {
    const [open, setOpen] = useState("");
    const [value, setValue] = useState('');
    const [label, setlabel] = useState([]);
    const navigation = useNavigation();
    const [drapDownError, setDrapDownError] = useState("")

    const onSubmit = () => {
        var errorCount = 0;

        if (value == "") {

            setDrapDownError("Please Select a Company..");
            errorCount++


        }
        if (value == "") {
            setOpen(true)


        }
        if (errorCount == 0) {


            navigation.navigate("Categories View")
        }
    }
    return (
        <View>

            <View>
                <Text>

                </Text>
            </View>
            <View style={{ height: 230 }} >
                <DropDownPicker
                    placeholder="Select a Company"

                    items={filter.map((element) => ({
                        key: element.id,
                        label: element.brand,
                        value: element.id,

                    }))}

                    textStyle={Style.H2}
                    labelStyle={Style.H2}
                    open={open}
                    label={label}
                    value={value}
                    setOpen={setOpen}
                    setValue={(value) => {
                        setValue(value)
                        if (value == "") {
                            setDrapDownError("Please Select a Company...")
                        }
                        else {
                            setDrapDownError("");
                        }
                    }}
                    setlabel={setlabel}
                    style={{ borderColor: "transparent", marginHorizontal: 15, width: "90%" }}
                    inputContainerStyle={{ borderBottomColor: 'transparent' }}
                    listMode="SCROLLVIEW"

                >
                </DropDownPicker>
                <View style={{ marginStart: 15, marginTop: 5 }}>

                    <Text style={Style.red}>
                        {drapDownError}
                    </Text>
                </View>

            </View>
            <View style={{ width: "80%", marginTop: 30 }}>
                <ThemeButton name="Filter" styleText={Style.themebtn_text} styleButton={Style.themebtn} onPressFun={() => { { onSubmit() } }}></ThemeButton>
            </View>
        </View>
    )
}

export default Filter