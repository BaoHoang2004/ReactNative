import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import HeaderCustom from '../../customs/HeaderCustom'
import { AppContext } from '../../AppContext'

const Person = (props) => {
  const { navigation } = props;
  const { setIsLogin } = useContext(AppContext);
  const { user, setUser } = useContext(AppContext);
  const [name, setName] = useState();
  const [email, setEmail] = useState();

  useEffect(() => {
    setName(user.name);
    setEmail(user.email);
  }, [user]); // Khi user state thay đổi, useEffect sẽ được gọi lại

  return (
    <View style={styles.container}>
      <HeaderCustom title="Profile" />
      <View style={styles.profileContainer}>
        <Image
          style={styles.img}
          source={require('../../../../assets/images/ic_profile.png')} />
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.email}>{email}</Text>
        </View>
      </View>
      <View style={styles.titleContainer}>
        <View style={styles.tC2}>
          <Text style={styles.title}>Chung</Text>
        </View>
      </View>
      <View style={styles.textContainer}>
        <TouchableOpacity style={styles.btn}
          onPress={() => navigation.navigate('ChangeInfo')}>
          <Text style={styles.text}>Chỉnh sửa thông tin</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.text}>Cẩm nang trồng cây</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.text}>Lịch sử giao dịch</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}
          onPress={() => navigation.navigate('QA')}>
          <Text style={styles.text}>Q & A</Text>
        </TouchableOpacity>

      </View>
      <View style={styles.titleContainer2}>
        <View style={styles.tC2}>
          <Text style={styles.title}>Bảo mật và điều khoản</Text>
        </View>
      </View>
      <View style={styles.textContainer}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.text}>Điều khoản và điều kiện</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.text}>Chính sách quyền riêng tư</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}
          onPress={() => setIsLogin(false)}>
          <Text style={styles.text2}>Đăng xuất</Text>
        </TouchableOpacity>

      </View>
    </View>
  )
}

export default Person

const styles = StyleSheet.create({
  btn: {
    marginTop: 17.41
  },
  text2: {
    width: 279,
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 22,
    color: '#FF0000',
  },
  titleContainer2: {
    alignItems: 'center',
    marginTop: 31,
  },
  text: {
    width: 279,
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 22,
    color: '#000000',
  },
  textContainer: {
    alignItems: 'center',
  },
  titleContainer: {
    alignItems: 'center',
    marginTop: 28,
  },
  tC2: {
    width: 279,
    height: 22,
    borderBottomColor: '#221F1F',
    borderBottomWidth: 0.55,
  },
  email: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 20,
    color: '#7F7F7F'
  },
  name: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 22,
    color: '#000000'
  },
  img: {
    width: 39,
    height: 39,
    marginRight: 26
  },
  profileContainer: {
    flexDirection: 'row',
    marginHorizontal: 48,
    height: 72,
    alignItems: 'center'
  },
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  }
})