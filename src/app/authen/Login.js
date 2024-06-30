import { Image, StyleSheet, Text, View, StatusBar, TextInput, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useContext, useState, useEffect } from 'react'
import { AppContext, AppProvider } from '../AppContext';
import { user_login } from '../helpers/user_api';
import ApiAxios from '../helpers/ApiAxios';

const Login = (props) => {
  const { navigation } = props;
  const { setIsLogin } = useContext(AppContext);
  const { user, setUser } = useContext(AppContext);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("")
  const [passwordError, setPasswordError] = useState("")
  const [textError, setTextError] = useState("")



  //
  const changeTextEmail = (data) => {
    setEmail(data);
    setTextError("")
  }
  const changeTextPass = (data) => {
    setPassword(data);
    setTextError("")
  }
  const dangNhap = async () => {
    if (email == "" || password == "") {
      setTextError("Bạn cần nhập đầy đủ thông tin");
      return;
    }
    try {
      const body = {
        email: email,
        password: password,
      }
      const response = await ApiAxios().post('/users/login', body);
      if (response) {
        setIsLogin(true);
        setUser(response);
        ToastAndroid.show("Đăng nhập thành công", ToastAndroid.SHORT);
      } else {
        ToastAndroid.show("Email hoặc mật khẩu không khớp", ToastAndroid.SHORT);
      }
    } catch (error) {
      console.log("Đăng nhập lỗi", error);
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar translucent
        backgroundColor="rgba(0,0,0,0)"></StatusBar>
      <Image
        style={styles.img}
        source={require('../../../assets/images/logo.png')}></Image>
      <Text style={styles.text1}>Chào mừng bạn</Text>
      <Text style={styles.text2}>Đăng nhập tài khoản</Text>
      <View style={styles.inputEmailContainer}>
        <TextInput
          style={styles.input}
          onChangeText={(data) => changeTextEmail(data)}
          placeholder='Nhập email hoặc số điện thoại'></TextInput>
      </View>
      <View style={styles.inputPassContainer}>
        <TextInput
          style={styles.input}
          onChangeText={(data) => changeTextPass(data)}
          placeholder='Mật khẩu'></TextInput>
        <TouchableOpacity
          style={styles.iconEye}>
          <Image
            source={require('../../../assets/images/ic_eye.png')} />
        </TouchableOpacity>
        {!!textError && <Text style={styles.textError}>{textError}</Text>}
      </View>
      <View style={styles.ghinhoContainer}>
        <TouchableOpacity style={styles.btnGhiNho}>
          <Image
            source={require('../../../assets/images/ic_ghinho.png')} />
          <Text style={styles.ghinho}>Nhớ tài khoản</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.btnDangNhapContainer}>
        <TouchableOpacity style={styles.btnDangNhap}
          onPress={() => dangNhap()}>
          <Text style={styles.textDN}>Đăng nhập</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.textHoacContainer}>
        <View style={styles.line} />
        <Text style={styles.textHoac}>Hoặc</Text>
        <View style={styles.line} />
      </View>
      <View style={styles.btnIconDNContainer}>
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
        <Text style={styles.text3}>Bạn không có tài khoản</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('Register')}
        >
          <Text style={styles.textTaoTK}>Tạo tài khoản</Text>
        </TouchableOpacity>

      </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  textTaoTK: {
    fontSize: 14,
    fontWeight: '400',
    fontStyle: 'normal',
    color: '#009245',
    marginLeft: 8
  },
  text3: {
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
  btnIconDNContainer: {
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
  textDN: {
    fontSize: 20,
    fontWeight: 'bold',
    fontStyle: 'normal',
    color: '#FFF'
  },
  btnDangNhapContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25
  },
  btnDangNhap: {
    width: 300,
    height: 50,
    borderRadius: 15,
    backgroundColor: '#007537',
    justifyContent: 'center',
    alignItems: 'center'
  },
  forgotPassword: {
    fontSize: 14,
    fontWeight: '500',
    fontStyle: 'normal',
    color: '#009245',
  },
  ghinho: {
    fontSize: 14,
    fontWeight: '500',
    fontStyle: 'normal',
    color: '#949090',
    marginLeft: 5
  },
  btnGhiNho: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  ghinhoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 15
  },
  iconEye: {
    position: 'absolute',
    top: 10,
    right: 60
  },
  inputPassContainer: {
    width: '100%',
    marginTop: 10,
    alignItems: 'center'
  },
  textError: {
    color: 'red',
    width: 300
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
  inputError: {
    width: 300,
    height: 46,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'red',
    padding: 14,
    color: '#000000',
    fontSize: 16,
    fontWeight: '400'
  },
  inputEmailContainer: {
    width: '100%',
    marginTop: 20,
    alignItems: 'center'
  },
  text2: {
    fontSize: 18,
    color: '#000000',
    textAlign: 'center'
  },
  text1: {
    fontSize: 30,
    fontWeight: '700',
    color: '#000000',
    textAlign: 'center'
  },
  img: {
    width: '100%',
    height: 340
  },
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    // alignItems: 'center',
  },
})