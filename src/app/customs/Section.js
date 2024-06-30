import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { getNumberFormatSettings } from 'react-native-localize';


const Section = ({ title, data, seemore }) => {
    const navigation = useNavigation();

    const currencyFormatter = (value) => {
        const { decimalSeparator, groupingSeparator } = getNumberFormatSettings();
        return new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND',
            currencyDisplay: 'symbol',
            minimumFractionDigits: 0,
        }).format(value);
    };
    const formattedAmount = currencyFormatter(1000);

    const renderItem = ({ item }) => (
        <View style={styles.item}>
            <TouchableOpacity
                onPress={() => navigation.navigate('Product', { _id: item._id })}
            >
                <Image
                    style={styles.anh}
                    source={{ uri: item.image[0] }} />

                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.loai}></Text>
                <Text style={styles.gia}>{currencyFormatter(item.price)}</Text>
            </TouchableOpacity>
        </View>
    )


    return (
        <View style={styles.container}>
            {!!title && <Text style={styles.title}>{title}</Text>}
            {/* {renderItem(data)} */}
            <FlatList
                scrollEnabled={false}
                data={data}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
                numColumns={2} />
            {!!seemore && <TouchableOpacity
                onPress={() => navigation.navigate('Detail')}>
                <Text
                    style={styles.seemore}>{seemore}</Text>
            </TouchableOpacity>}

        </View>
    )
}

export default Section

const styles = StyleSheet.create({
    seemore: {
        width: 325,
        fontSize: 16,
        fontWeight: '500',
        lineHeight: 20,
        textDecorationLine: 'underline',
        textAlign: 'right',
        color: '#221F1F',
        marginTop: 17.5
    },
    title: {
        width: 325,
        fontSize: 24,
        fontWeight: '500',
        lineHeight: 34,
        color: '#221F1F',
        marginTop: 32.5,
    },
    item: {
        padding: 15
    },
    gia: {
        fontSize: 16,
        lineHeight: 22,
        fontWeight: '500',
        color: '#007537'
    },
    loai: {
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 20,
        color: '#7D7B7B'
    },
    name: {
        fontSize: 16,
        lineHeight: 22,
        fontWeight: '500',
        color: '#221F1F'
    },
    anh: {
        width: 155,
        height: 134,
        borderRadius: 8,
        backgroundColor: '#F6F6F6'
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    }
})