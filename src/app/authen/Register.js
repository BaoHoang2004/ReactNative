import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View, ToastAndroid, Alert } from 'react-native'
import React, { useState } from 'react'
import ApiAxios from '../helpers/ApiAxios';

const Register = (props) => {
  const { navigation } = props;

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [phone, setPhone] = useState();

  const changeTextEmail = (data) => {
    setEmail(data);
  }
  const changeTextName = (data) => {
    setName(data);
  }
  const changeTextPhone = (data) => {
    setPhone(data);
  }
  const changeTextPass = (data) => {
    setPassword(data);
  }

  const onPressRegister = async () => {
    try {
      // bắt lỗi xài regex
      // kiểm tra password và retype có giống nhau hay không
      const body = {
        email: email,
        password: password,
        name: name,
        phone: phone,
      }
      const response = await ApiAxios()
        .post('/users/register', body);
      if (response.status === 'success') {
        ToastAndroid.showWithGravityAndOffset(
          'Đăng ký thành công',
          ToastAndroid.LONG,
          ToastAndroid.BOTTOM,
          25,
          50,
        )
        // Điều hướng quay lại trang đăng nhập
        navigation.navigate('Login');
      }
      else if (response.status === 'email trung') {
        ToastAndroid.showWithGravityAndOffset(
          'Email trùng',
          ToastAndroid.LONG,
          ToastAndroid.BOTTOM,
          25,
          50,
        )

      }
    } catch (error) {
      console.log("lỗi đăng ký", error);
    }
  }


  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../../../assets/images/logo3.png')} />
      <Text style={styles.text1}>Đăng ký</Text>
      <Text style={styles.text2}>Tạo tài khoản</Text>
      <View style={styles.inputHoTenContainer}>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={(data) => changeTextName(data)}
          placeholder='Họ tên'></TextInput>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={(data) => changeTextEmail(data)}
          placeholder='Email'></TextInput>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={phone}
          onChangeText={(data) => changeTextPhone(data)}
          placeholder='Số điện thoại'></TextInput>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={(data) => changeTextPass(data)}
          placeholder='Mật khẩu'></TextInput>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text3}>Để đăng ký tài khoản, bạn đồng ý <Text
          style={styles.text4}>Terms & Conditions</Text> and <Text
            style={styles.text4}>Privacy Policy</Text>
        </Text>
      </View>
      <View style={styles.btnDangKyContainer}>
        <TouchableOpacity style={styles.btnDangKy}
          onPress={() => onPressRegister()}>
          <Text style={styles.textDK}>Đăng ký</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.textHoacContainer}>
        <View style={styles.line} />
        <Text style={styles.textHoac}>Hoặc</Text>
        <View style={styles.line} />
      </View>
      <View style={styles.btnIconDKContainer}>
        <TouchableOpacity>
          <Image
            style={styles.iconGG}
            source={require('../../../assets/images/ic_gg.png')} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.iconFB}
            source={require('../../../assets/images/ic_fb.png')} />
        </TouchableOpacity>
      </View>
      <View style={styles.taoTKContainer}>
        <Text style={styles.text5}>Tôi đã có tài khoản</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.textTaoTK}>Đăng nhập</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Register

const styles = StyleSheet.create({
  textTaoTK: {
    fontSize: 14,
    fontWeight: '400',
    fontStyle: 'normal',
    color: '#009245',
    marginLeft: 8
  },
  text5: {
    fontSize: 14,
    fontWeight: '400',
    fontStyle: 'normal',
    color: '#000'
  },
  taoTKContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  },
  btnIconDKContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 35,
  },
  iconGG: {
    width: 32,
    height: 32,
    marginRight: 30
  },
  line: {
    width: 120,
    height: 1.5,
    backgroundColor: '#4CAF50',
  },
  textHoacContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  },
  textHoac: {
    marginHorizontal: 5,
    fontSize: 16,
    fontWeight: '500',
    color: '#000'
  },
  textDK: {
    fontSize: 20,
    fontWeight: 'bold',
    fontStyle: 'normal',
    color: '#FFF'
  },
  btnDangKyContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  },
  btnDangKy: {
    width: 300,
    height: 50,
    borderRadius: 15,
    backgroundColor: '#007537',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text4: {
    fontSize: 14,
    fontWeight: '500',
    color: '#009245',
    textDecorationLine: 'underline'
  },
  text3: {
    textAlign: 'center',
    width: 311,
    fontSize: 14,
    fontWeight: '400',
    color: '#000000'
  },
  textContainer: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputContainer: {
    width: '100%',
    marginTop: 10,
    alignItems: 'center'
  },
  inputHoTenContainer: {
    width: '100%',
    marginTop: 12,
    alignItems: 'center'
  },
  input: {
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
  text2: {
    fontSize: 18,
    color: '#000000',
    textAlign: 'center',
    marginTop: 13
  },
  text1: {
    fontSize: 30,
    fontWeight: '700',
    color: '#000000',
    textAlign: 'center'
  },
  logo: {
    width: '100%',
    height: 220
  },
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
  },
})