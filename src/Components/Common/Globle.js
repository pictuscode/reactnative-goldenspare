
import { StyleSheet, } from 'react-native';
import { Fonts } from './Fonts';

import { FONT_BLACK, FONT_GREY, FONT_VOILET, THEME_COLOR, FONT_WHITE, BG_COLOR } from './Variable';

const Style = StyleSheet.create({
    H1: {
        fontFamily: Fonts.fontbold,
        fontSize: 20,
        color: FONT_BLACK
    },

    H2: {
        fontFamily: Fonts.fontsemibold,
        fontSize: 15,
        color: FONT_BLACK
    },

    H3: {
        fontFamily: Fonts.fontmedium,
        fontSize: 20,
        color: FONT_BLACK,




    },
    H4: {
        fontFamily: Fonts.fontmedium,
        fontSize: 13,
        color: FONT_BLACK,

        textAlign: 'justify'


    },
    H4G: {
        fontFamily: Fonts.fontmedium,
        fontSize: 13,
        color: FONT_GREY,
        textAlign: 'justify',
        marginBottom: 5


    },
    description: {
        fontFamily: Fonts.fontmedium,
        fontSize: 13,
        color: FONT_BLACK,
        height: 50,
        textAlign: 'justify'


    },
    homedescription: {
        fontFamily: Fonts.fontmedium,
        fontSize: 13,
        color: FONT_BLACK,
        width: 135,
        height: 50,
        textAlign: 'justify'


    },

    lighttext: {
        fontFamily: Fonts.fontlight,
        fontSize: 15,
        color: FONT_GREY,
        textAlign: "center",
        lineHeight: 20

    },
    detailstext: {
        fontFamily: Fonts.fontlight,
        fontSize: 15,
        color: FONT_BLACK,
        lineHeight: 20

    },
    contanttext: {
        fontFamily: Fonts.fontmedium,
        fontSize: 15,
        color: FONT_BLACK
    },
    heading: {
        fontFamily: Fonts.fontbold,
        fontSize: 30,
        color: FONT_VOILET
    },
    themebtn: {
        width: "100%",
        marginTop: 5,
        backgroundColor: FONT_VOILET,
        paddingVertical: 14,
        borderRadius: 30,
        marginHorizontal: 30,
        alignItems: 'center',
    },
    themebtnsml: {
        width: "100%",
        marginTop: 5,
        backgroundColor: FONT_VOILET,
        paddingVertical: 5,
        borderRadius: 30,
        marginHorizontal: 10,
        alignItems: 'center',
    },
    themebtnlight: {
        width: "100%",
        marginTop: 5,
        borderWidth: 1,
        backgroundColor: FONT_WHITE,
        borderColor: FONT_VOILET,
        paddingVertical: 14,
        borderRadius: 30,
        marginHorizontal: 30,
        alignItems: 'center',
    },
    themebtn_text: {
        fontFamily: Fonts.fontmedium,
        fontSize: 15,
        marginBottom: 3,
        color: FONT_WHITE,
    },
    themebtnlight_text: {
        fontFamily: Fonts.fontmedium,
        fontSize: 15,
        marginBottom: 3,
        color: FONT_BLACK,
    },
    textinput: {
        borderRadius: 10,
        marginTop: 10,
        color: FONT_BLACK,
        borderColor: "#CED6DD",
        borderWidth: 1,
        padding: 10,
        fontFamily: Fonts.fontlight,
        fontSize: 15,
        backgroundColor: "#fff",

    },
    textinputchat: {
        marginTop: 10,
        color: FONT_BLACK,
        borderColor: "#CED6DD",
        borderTopWidth: 1,
        padding: 10,
        fontFamily: Fonts.fontlight,
        fontSize: 15,
        backgroundColor: "#fff",

    },
    countrytextinput: {
        borderRadius: 10,
        borderBottomLeftRadius: 0,
        borderTopLeftRadius: 0,
        borderLeftWidth: 0,
        marginTop: 10,
        color: FONT_BLACK,
        borderColor: "#CED6DD",
        width: "80%",
        borderWidth: 1,
        borderStartColor: "transparent",
        padding: 10,
        fontFamily: Fonts.fontlight,
        fontSize: 15,
        backgroundColor: "#fff",

    },
    dailtextinput: {
        borderRadius: 10,
        marginTop: 10,
        borderBottomRightRadius: 0,
        borderTopRightRadius: 0,
        borderRightWidth: 0,
        color: FONT_BLACK,
        borderColor: "#CED6DD",
        width: "20%",
        borderWidth: 1,
        padding: 10,
        fontFamily: Fonts.fontlight,
        fontSize: 15,
        backgroundColor: "#fff",

    },
    textinputOtp: {
        borderRadius: 10,
        width: 50,
        marginTop: 10,
        color: FONT_BLACK,
        borderColor: "#CED6DD",
        borderWidth: 1,
        padding: 10,
        fontFamily: Fonts.fontlight,
        fontSize: 15,
        backgroundColor: "#fff",

    },
    SearchButton: {
        display: "flex",
        flexDirection: 'row',
        borderColor: "white",
        borderRadius: 10,
        height: 50,
        padding: 15,
        backgroundColor: "#FFFFFF",
        marginEnd: 15,
        fontFamily: Fonts.fontlight,
    },

    red: {
        color: '#FF0000',
        fontFamily: Fonts.fontmedium
    },
    dropdownlable: {
        fontFamily: Fonts.fontmedium,
        fontSize: 18,
        color: FONT_BLACK,

    },
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        left: 0,
        right: 0,
    },

    chatFrom: {
        backgroundColor: BG_COLOR,
        margin: 5,
        width: "75%",
        padding: 12,
        borderRadius: 12,
    },
    chatTo: {
        backgroundColor: "pink",
        margin: 5,
        width: "75%",
        padding: 12,
        borderRadius: 12,
    }
});



export default Style;