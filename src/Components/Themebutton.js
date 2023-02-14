import React from 'react'
import { TouchableOpacity, Text, Keyboard } from 'react-native'

const ThemeButton = ({ onPressFun, name, styleButton, styleText }) => {
    return (
        <TouchableOpacity style={styleButton} onPress={onPressFun}><Text style={styleText}>{name}</Text></TouchableOpacity>
    )
}

export default ThemeButton