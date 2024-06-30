import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const HeaderCustom = ({ lefticon, title, righticon }) => {
    const navigation = useNavigation();
  return (  
    <View style={styles.container}>
            <View style={styles.a}>
                <TouchableOpacity
                onPress={()=> navigation.goBack()}>
                {!!lefticon &&
                    <Image
                        style={styles.siizeIcon}
                        source={lefticon} />
                }
                </TouchableOpacity>
                
            </View>
            <View>
                <Text style={styles.title}>{title}</Text>
            </View>
            <View style={styles.a}>
                <TouchableOpacity
                onPress={()=> navigation.navigate('Cart')}>
                {!!righticon &&
                    <Image
                        style={styles.siizeIcon}
                        source={righticon} />
                }
                </TouchableOpacity>
            </View>
        </View>
  )
}

export default HeaderCustom

const styles = StyleSheet.create({
    a: {
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 20,
    color: '#221F1F',
    textTransform:'uppercase'
    },
    siizeIcon: {
        width: 24,
        height: 24
    },
    container: {
        width: '100%',
        height:54,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal:24,
        alignItems:'center'
    }
})