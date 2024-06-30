import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import HeaderCustom from '../../customs/HeaderCustom'

const QA = (props) => {
    const [question, setQuestion] = useState("");

    const a = (id) => {
        if (question) {
            setQuestion("");
        } else {
            setQuestion(id);
        }
    }


    return (
        <View>
            <HeaderCustom lefticon={require('../../../../assets/images/ic_back.png')}
                title="Q & A" />
            <ScrollView>

                <View style={styles.textContainer}>
                    <Text style={styles.text}>Tôi trộn các chất dinh dưỡng theo thứ tự nào?</Text>
                    <TouchableOpacity
                        onPress={() => a(1)}>
                        {
                            question === 1 ?
                                <Image
                                    style={styles.img}
                                    source={require('../../../../assets/images/ic_up.png')} /> :
                                <Image
                                    style={styles.img}
                                    source={require('../../../../assets/images/ic_down.png')} />
                        }

                    </TouchableOpacity>
                </View>
                {
                    question === 1 &&
                    <View style={styles.aContainer}>
                        <Text style={styles.a}>A, B, C, D,F rồi line E Root Igniter. Nên pha vào xô và cho máy sục oxy vào thì khơi pha dd sẽ tan đều.</Text>
                    </View>
                }

                <View style={styles.textContainer}>
                    <Text style={styles.text}>Tôi có thể giữ dung dịch dinh dưỡng hỗn hợp trong bao lâu?</Text>
                    <TouchableOpacity
                        onPress={() => a(2)}>
                        {
                            question === 2 ?
                                <Image
                                    style={styles.img}
                                    source={require('../../../../assets/images/ic_up.png')} /> :
                                <Image
                                    style={styles.img}
                                    source={require('../../../../assets/images/ic_down.png')} />
                        }
                    </TouchableOpacity>
                </View>
                {
                    question === 2 &&
                    <View style={styles.aContainer}>
                        <Text style={styles.a}>A, B, C, D,F rồi line E Root Igniter. Nên pha vào xô và cho máy sục oxy vào thì khơi pha dd sẽ tan đều.</Text>
                    </View>
                }
                <View style={styles.textContainer}>
                    <Text style={styles.text}>Khi nào tôi thêm bộ điều chỉnh pH?</Text>
                    <TouchableOpacity
                        onPress={() => a(3)}>
                        {
                            question === 3 ?
                                <Image
                                    style={styles.img}
                                    source={require('../../../../assets/images/ic_up.png')} /> :
                                <Image
                                    style={styles.img}
                                    source={require('../../../../assets/images/ic_down.png')} />
                        }
                    </TouchableOpacity>
                </View>
                {
                    question === 3 &&
                    <View style={styles.aContainer}>
                        <Text style={styles.a}>A, B, C, D,F rồi line E Root Igniter. Nên pha vào xô và cho máy sục oxy vào thì khơi pha dd sẽ tan đều.</Text>
                    </View>
                }
                <View style={styles.textContainer}>
                    <Text style={styles.text}>Các chất điều chỉnh tăng trưởng có được sử dụng trong các sản phẩm Planta không?</Text>
                    <TouchableOpacity
                        onPress={() => a(4)}>
                        {
                            question === 4 ?
                                <Image
                                    style={styles.img}
                                    source={require('../../../../assets/images/ic_up.png')} /> :
                                <Image
                                    style={styles.img}
                                    source={require('../../../../assets/images/ic_down.png')} />
                        }
                    </TouchableOpacity>
                </View>
                {
                    question === 4 &&
                    <View style={styles.aContainer}>
                        <Text style={styles.a}>A, B, C, D,F rồi line E Root Igniter. Nên pha vào xô và cho máy sục oxy vào thì khơi pha dd sẽ tan đều.</Text>
                    </View>
                }
                <View style={styles.textContainer}>
                    <Text style={styles.text}>Các sản phẩm Planta có phải là hữu cơ không?</Text>
                    <TouchableOpacity
                        onPress={() => a(5)}>
                        {
                            question === 5 ?
                                <Image
                                    style={styles.img}
                                    source={require('../../../../assets/images/ic_up.png')} /> :
                                <Image
                                    style={styles.img}
                                    source={require('../../../../assets/images/ic_down.png')} />
                        }
                    </TouchableOpacity>
                </View>
                {
                    question === 5 &&
                    <View style={styles.aContainer}>
                        <Text style={styles.a}>A, B, C, D,F rồi line E Root Igniter. Nên pha vào xô và cho máy sục oxy vào thì khơi pha dd sẽ tan đều.</Text>
                    </View>
                }
            </ScrollView>
        </View>
    )
}

export default QA

const styles = StyleSheet.create({
    a: {
        width: 279,
        fontSize: 16,
        fontWeight: '400',
        lineHeight: 20,
        color: '#7D7B7B'
    },
    aContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        width: 245,
        fontSize: 16,
        fontWeight: '500',
        lineHeight: 22,
        color: '#000000'
    },
    img: {
        marginLeft: 10
    },
    textContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 15
    }
})