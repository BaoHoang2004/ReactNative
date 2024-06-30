import { Image, StyleSheet, Text, TouchableOpacity, View, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import HeaderCustom from '../../customs/HeaderCustom';
import { useDispatch, useSelector } from 'react-redux';
import { ThongTinSanPham } from '../../reducers/DetailProductSlice';

const Product = (props) => {
    const { _id } = props.route.params;
    const dispatch = useDispatch();
    const { detailProductData, detailProductStatus } = useSelector((state) => state.detailProduct);
    const { cartData, cartStatus } = useSelector((state) => state.cart);

    // console.log(_id);

    useEffect(() => {
        dispatch(ThongTinSanPham({ id: _id }));
    }, [dispatch])

    const renderLoai = ({ item }) => (
        <View>
            <TouchableOpacity style={styles.btnLoai}>
                <Text style={styles.textLoai}>{item}</Text>
            </TouchableOpacity>
        </View>
    )
    var gia = parseInt(detailProductData.price);
    const [soLuong, setSoLuong] = useState(1);
    const [tongTien, setTongTien] = useState();

    // console.log(soLuong);
    const nhanTang = () => {
        if (soLuong < 20) {
            setSoLuong(soLuong => soLuong + 1);
        } else {
            console.log('a');
        }
        console.log(soLuong);
    }


    // if (detailProductData) {
    return (
        <View style={styles.container}>
            <HeaderCustom
                lefticon={require('../../../../assets/images/ic_back.png')}
                // title={prduct.name}
                righticon={require('../../../../assets/images/ic_cart.png')} />
            <View style={styles.anhContainer}>
                {
                    !!detailProductData.image && <Image
                        style={styles.anh}
                        source={{ uri: detailProductData.image[0] }} />
                }

            </View>
            <View style={styles.typeContainer}>
                {/* <FlatList
                    data={prduct.loai}
                    renderItem={renderLoai}
                    keyExtractor={(item, index) => index.toString()}
                    horizontal={true}
                    scrollEnabled={false} /> */}
            </View>
            <View style={styles.giaContainer}>
                <Text style={styles.gia}>{detailProductData.price}đ</Text>
            </View>
            <View style={styles.tC1}>
                <Text style={styles.text1}>Chi tiết sản phẩm</Text>
            </View>
            <View style={styles.tC2}>
                <Text style={styles.text2}>Kích cỡ</Text>
                <Text style={styles.text2}>{detailProductData.sizetree}</Text>
            </View>
            <View style={styles.tC2}>
                <Text style={styles.text2}>Xuất xứ</Text>
                <Text style={styles.text2}>{detailProductData.origin}</Text>
            </View>
            <View style={styles.tC2}>
                <Text style={styles.text2}>Tình trạng</Text>
                <Text style={styles.text3}>Còn {detailProductData.status} cây</Text>
            </View>
            <View style={styles.tC3}>
                <View>
                    <Text>Đã chọn 1 sản phẩm</Text>
                    <View style={styles.soloungContainer}>
                        <TouchableOpacity>
                            <Image
                                source={require('../../../../assets/images/ic_giam.png')} />
                        </TouchableOpacity>
                        <Text style={styles.textSL}>1</Text>
                        <TouchableOpacity
                            onPress={() => nhanTang()}>
                            <Image
                                source={require('../../../../assets/images/ic_tang.png')} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.tongtienContainer}>
                    <Text >Tạm tính</Text>
                    <Text style={styles.texttongtien}>5000<Text>đ</Text></Text>
                </View>

            </View>

            <View style={styles.btnXNContainer}>
                <TouchableOpacity style={styles.btnXN}>
                    <Text style={styles.textXN}>Xác nhận</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
    // }
}

export default Product

const styles = StyleSheet.create({
    textXN: {
        fontSize: 16,
        fontWeight: '500',
        color: '#FFFFFF',
        textTransform: 'uppercase',
        textAlign: 'center'
    },
    btnXNContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 25
    },
    btnXN: {
        width: 327,
        height: 50,
        borderRadius: 15,
        backgroundColor: '#007537',
        justifyContent: 'center',
        alignItems: 'center'
    },
    tongtienContainer: {
        alignItems: 'flex-end'
    },
    texttongtien: {
        fontSize: 24,
        fontWeight: '500',
        lineHeight: 34,
        color: '#221F1F'
    },
    textSL: {
        fontSize: 16,
        fontWeight: '400',
        lineHeight: 20
    },
    soloungContainer: {
        width: 132,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    tC3: {
        width: 320,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 24,
        marginTop: 20
    },
    text3: {
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 20,
        color: '#007537'
    },
    tC2: {
        width: 279,
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomColor: '#ABABAB',
        borderBottomWidth: 1
    },
    text2: {
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 20,
        color: '#3A3A3A',

    },
    tC1: {
        width: 279,
        marginTop: 17,
        borderBottomColor: '#221F1F',
        borderBottomWidth: 1
    },
    text1: {
        fontSize: 16,
        fontWeight: '500',
        lineHeight: 22,
        color: '#3A3A3A',
    },
    gia: {
        fontSize: 24,
        fontWeight: '500',
        lineHeight: 34,
        color: '#007537'
    },
    giaContainer: {
        width: 279,
        marginTop: 17
    },
    textLoai: {
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 20,
        color: '#FFFFFF'
    },
    btnLoai: {
        padding: 8,
        marginRight: 8,
        backgroundColor: '#007537',
        borderRadius: 4
    },
    typeContainer: {
        width: 279,
        justifyContent: 'center',
        marginTop: 15
    },
    anhContainer: {
        width: '100%',
        height: 270,
        alignItems: 'center',
        backgroundColor: '#F6F6F6'
    },
    anh: {
        width: 337,
        height: 270,
    },
    container: {
        backgroundColor: '#FFFFFF',
        flex: 1,
        alignItems: 'center',
    },
})