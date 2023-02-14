import React from 'react'
import { ScrollView, View } from 'react-native'
import UserAddDetails from './userAddDetails'
import Style from '../../Components/Common/Globle'
import { SceneView } from 'react-navigation'
import { useNavigation, } from "@react-navigation/native";
import { baseUrlImage } from '../../Components/Common/baseUrl'
const AddRecom = ({ route }) => {
    const navigation = useNavigation();

    const { post } = route.params;
    const { dirImg } = route.params;
    const { dirPro } = route.params;
    //console.log(dirImg)


    return (

        <View>


            <ScrollView showsVerticalScrollIndicator={false}>


                <View>
                    <View style={{ flexDirection: 'row', flexWrap: "wrap", }}>
                        {
                            post.map(element => {

                                return (




                                    <View style={{ marginTop: 10, width: '50%' }} key={element._id} >

                                        <UserAddDetails onPress={() => { navigation.navigate("UserAddData", { postId: element._id }) }}
                                            imgsrc={{ uri: baseUrlImage + dirImg + element.image[0] }}
                                            Title={element.title} TitleStyle={Style.contanttext}
                                            discription={element.discription} discriptionStyle={Style.description}
                                            imgsource={element.userId.profile != "" ? { uri: baseUrlImage + dirPro + element.userId.profile } : { uri: "https://cdn-icons-png.flaticon.com/512/149/149071.png" }}
                                            name={element.userId.companyName} nameStyle={Style.contanttext}

                                        >
                                        </UserAddDetails>



                                    </View>



                                );




                            }
                            )
                        }



                    </View>

                </View>
            </ScrollView>


        </View>
    )
}

export default AddRecom