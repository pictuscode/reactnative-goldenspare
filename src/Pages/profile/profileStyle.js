
import { StyleSheet, } from 'react-native';


import { FONT_GREY, FONT_WHITE, FONT_BLACK, FONT_VOILET } from '../../Components/Common/Variable';
import { Fonts } from '../../Components/Common/Fonts';
const Profilestyle = StyleSheet.create({


    mainToch: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        borderBottomColor: FONT_GREY,
        borderBottomWidth: .5,
    },
    textinput: {

        color: FONT_BLACK,
        borderBottomColor: "#CED6DD",
        borderBottomWidth: 1,
        padding: 10,
        fontFamily: Fonts.fontlight,
        fontSize: 15,
        backgroundColor: "#fff",

    },
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    titleText: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingVertical: 20,
    },
    textStyle: {
        padding: 10,
        color: 'black',
        textAlign: 'center',
    },
    buttonStyle: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 5,
        marginVertical: 10,
        width: 250,
    },
    imageStyle: {
        width: 200,
        height: 200,
        margin: 5,
    },
    themebtn: {
        width: "40%",
        backgroundColor: FONT_VOILET,
        paddingVertical: 6,

        borderRadius: 30,
        marginHorizontal: 28,
        alignItems: 'center',
    },
    themebtn_text: {
        fontFamily: Fonts.fontmedium,
        marginBottom: 3,
        fontSize: 15,
        color: FONT_WHITE,
    },

});



export default Profilestyle;