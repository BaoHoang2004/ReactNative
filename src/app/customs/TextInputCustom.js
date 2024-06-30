import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const TextInputCustom = ({ holder,textError }) => {
    return (
        <View>
            <View>
                <TextInput
                    style={styles.input_normal}
                    placeholder={holder}></TextInput>
                <Text style={styles.textErr}>{textError}</Text>
            </View>
        </View>
    )
}

export default TextInputCustom

const styles = StyleSheet.create({
    textErr:{
        fontSize:12,
        fontWeight:'400',
        color:'red'
    },
    input_normal: {
        width: 300,
        height: 46,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#8B8B8B',
        padding: 14,
        color: '#000000',
        fontSize: 16,
        fontWeight: '400'
    },
    input_err: {
        width: 300,
        height: 46,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#8B8B8B',
        padding: 14,
        color: '#000000',
        fontSize: 16,
        fontWeight: '400'
    },
})