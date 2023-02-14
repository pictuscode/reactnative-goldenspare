import React from 'react'
import { View, Text, Image, TouchableWithoutFeedback, TouchableOpacity, ScrollView } from 'react-native'
import { useNavigation, } from "@react-navigation/native";
import Style from '../../Components/Common/Globle'
import { Fonts } from '../../Components/Common/Fonts';
const ContactSupliers = () => {
    const navigation = useNavigation();
    return (
        <ScrollView>


            <View>



                <View style={{ marginStart: 15 }}>
                    <View style={{ marginTop: 10 }}>
                        <Text style={Style.H1}>
                            Red Wing Shoe Company, Inc. Americas
                        </Text>
                    </View>
                    <View style={{ marginTop: 10 }}>

                        <Text style={Style.detailstext}>
                            Red Wing, Minnesota, United States
                        </Text>
                    </View>
                    <View style={{ marginTop: 10 }}>

                        <Text style={Style.detailstext}>
                            Red Wing has a decades-long history of providing premium-quality footwear, workwear, safety glasses, work gloves and more.
                        </Text>
                    </View>
                    <View style={{ marginTop: 10, flexDirection: 'row' }}>

                        <Text style={Style.H2}>
                            Email:
                        </Text>
                        <Text style={{ color: "#73C3E7", fontFamily: Fonts.fontlight, marginStart: 5 }}>
                            chip.cavanaugh@redwingshoes.com
                        </Text>
                    </View>
                    <View style={{ marginTop: 10 }}>

                        <Text style={Style.H2}>
                            TNID: 65900
                        </Text>
                    </View>
                    <View style={{ marginTop: 10 }}>

                        <Text style={Style.detailstext}>
                            314 Main Street, -, Red Wing, Minnesota, 55066, United States
                        </Text>
                    </View>

                    <View style={{ marginTop: 10 }}>

                        <Text style={Style.H2}>
                            Phone: +1 713 (830) 3990
                        </Text>
                    </View>

                    <View style={{ marginTop: 10, flexDirection: 'row' }}>

                        <Text style={Style.H2}>
                            Website:
                        </Text>
                        <Text style={{ color: "#73C3E7", fontFamily: Fonts.fontlight, marginStart: 5 }}>
                            http://www.redwingsafety.com
                        </Text>
                    </View>
                    <View style={{ marginTop: 10 }}>

                        <Text style={Style.H2}>
                            Fax:
                            +1 (713) 830 3990
                        </Text>
                    </View>

                </View>
                {/*  <View>
                    <Image style={{ height: 450, marginTop: 10 }} source={{ uri: "http://oobrien.com/wordpress/wp-content/uploads/2016/07/googlemaps_july2016.jpg" }} />


                </View>
 */}
            </View>
        </ScrollView>
    )
}

export default ContactSupliers