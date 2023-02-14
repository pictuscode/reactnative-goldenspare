
import React from 'react'
import { TouchableOpacity, View, Text, Image, } from 'react-native';

const UserAddDetails = ({ onPress, discriptionStyle, imgsource, TitleStyle, Title, imgsrc, rateStyle, discription, name, rate, nameStyle }) => {
    return (

        <TouchableOpacity onPress={onPress} style={{ backgroundColor: '#fff', marginHorizontal: 10, marginEnd: 5, borderRadius: 10, }}   >

            <View >
                <Image source={imgsrc} style={{ width: 142, height: 130, marginVertical: 11, borderRadius: 10, marginHorizontal: 11 }} />
            </View>
            <View style={{ marginHorizontal: 15, }}>
                <Text style={TitleStyle}>{Title}</Text>
                <Text style={discriptionStyle}>{discription}</Text>

            </View>



            <View style={{ flexDirection: 'row', }}>
                <View style={{ marginStart: 15 }}>
                    <Image source={imgsource} style={{ width: 25, height: 25, marginVertical: 5, borderRadius: 30, }} />

                </View>
                <View style={{ marginTop: 5, marginStart: 5 }}>
                    <Text style={nameStyle} >{name}</Text>
                </View>

            </View>







        </TouchableOpacity>
    )
}

export default UserAddDetails

