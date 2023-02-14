
import React from 'react'
import { TouchableOpacity, View, Text, Image, } from 'react-native';

const CategoriesIndex = ({ onPress, categoryname, categorynamestyle, imgsrc, suppliers, suppliersStyle }) => {

    return (

        <TouchableOpacity onPress={onPress} style={{ backgroundColor: '#fff', marginHorizontal: 10, borderRadius: 10, marginVertical: 5 }}   >
            <View >
                <View >
                    <Image source={imgsrc} style={{ width: 140, height: 130, marginHorizontal: 10, borderRadius: 10, marginVertical: 10 }} />
                </View>
                <View style={{ alignItems: 'center', }}>
                    <Text style={categorynamestyle}>{categoryname}</Text>

                </View>

                <View style={{ alignItems: 'center' }}>

                    <Text style={suppliersStyle}>
                        {suppliers}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default CategoriesIndex

