import { Image, StyleSheet, Text, View, TextInput, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import HeaderCustom from '../../customs/HeaderCustom'
import { AppContext } from '../../AppContext';
import { useDispatch, useSelector } from 'react-redux';
import { DangKyTaiKhoan } from '../reducers/RegisterSlice';
import { ThayDoiThongTin } from '../../reducers/ChangUserSlice';


const ChangeInfo = (props) => {
    const { navigation } = props;
    const { user, setUser } = useContext(AppContext);
    const dispatch = useDispatch();
    const { changeUserData, changeUserStatus } = useSelector((state) => state.changeUser);
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [address, setAddress] = useState();
    const [phone, setPhone] = useState();

    useEffect(() => {
        setName(user.name);
        setAddress('618 Quang Trung');
        setPhone(user.phone);
        setEmail(user.email);
    }, [user]);

    useEffect(() => {
        if (changeUserStatus === 'successed') {
            if (changeUserData.status === 'success') {
                setUser({...changeUserData.user});
            }
        }
    }, [changeUserData])
    // console.log(name);

    const thayDoi = () => {
        dispatch(ThayDoiThongTin({ email: email, newName: name, newPhone: phone }));
        // console.log(changeUserData.user);
        navigation.goBack();
        ToastAndroid.show("Thành công", ToastAndroid.SHORT);
    }


    return (
        <View style={styles.container}>
            <HeaderCustom lefticon={require('../../../../assets/images/ic_back.png')}
                title="Chỉnh sửa thông tin" />
            <View style={styles.conten}>
                <View style={styles.imgContainer}>
                    <Image
                        style={styles.img}
                        source={require('../../../../assets/images/ic_profile.png')} />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>Thông tin sẽ được lưu cho lần mua kế tiếp.</Text>
                    <Text style={styles.text}>Bấm vào thông tin chi tiết để chỉnh sửa.</Text>
                </View>
                <View style={styles.inputContainer}>
                    <View style={styles.TextInputContainer}>
                        <TextInput
                            style={styles.input}
                            value={name}
                            onChangeText={(text) => setName(text)}
                            placeholder='Họ tên' />
                    </View>
                    <View style={styles.TextInputContainer}>
                        <TextInput
                            style={styles.input}
                            value={email}
                            onChangeText={(text) => setEmail(text)}
                            keyboardType='email-address'
                            placeholder='Email' />
                    </View>
                    <View style={styles.TextInputContainer}>
                        <TextInput
                            style={styles.input}
                            value={address}
                            onChangeText={(text) => setAddress(text)}
                            placeholder='Địa chỉ' />
                    </View>
                    <View style={styles.TextInputContainer}>
                        <TextInput
                            style={styles.input}
                            value={phone}
                            onChangeText={(text) => setPhone(text)}
                            keyboardType='phone-pad'
                            placeholder='Số điện thoại' />
                    </View>
                </View>
                <View style={styles.btnContainer}>
                    <TouchableOpacity style={styles.btnTiepTuc}
                        onPress={() => thayDoi()}>
                        <Text style={styles.textbtn}>Lưu thông tin</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )
}

export default ChangeInfo

const styles = StyleSheet.create({
    btnContainer: {
        height: 80,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 150
    },
    textbtn: {
        fontSize: 16,
        fontWeight: '500',
        lineHeight: 20,
        color: '#FFFFFF',
        textTransform: 'uppercase'
    },
    btnTiepTuc: {
        width: 326,
        height: 50,
        borderRadius: 8,
        backgroundColor: '#007537',
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputContainer: {
        alignItems: 'center',
        marginTop: 20
    },
    input: {
        width: 279,
        color: '#7D7B7B',
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 20,
        borderBottomColor: '#7D7B7B',
        borderBottomWidth: 0.55,
        paddingBottom: 4.5
    },
    TextInputContainer: {
        width: 279,
        marginTop: 15
    },
    textContainer: {
        height: 70,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 25
    },
    text: {
        width: 279,
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 20,
        color: '#221F1F'
    },
    img: {
        width: 90,
        height: 90
    },
    imgContainer: {
        alignItems: 'center',
        marginTop: 24
    },
    conten: {
        flex: 1
    },
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    }
})