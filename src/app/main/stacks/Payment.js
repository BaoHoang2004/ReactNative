import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import HeaderCustom from '../../customs/HeaderCustom'

const Payment = () => {
  return (
    <View style={styles.container}>
      <HeaderCustom
        lefticon={require('../../../../assets/images/ic_back.png')}
        title="Thanh toán" />
      <View style={styles.body}>
        <View style={styles.tC1}>
          <Text style={styles.title}>Thông tin khách hàng</Text>
        </View>
        <View style={styles.TextInputContainer}>
          <TextInput
            style={styles.input}
            placeholder='Họ tên' />
        </View>
        <View style={styles.TextInputContainer}>
          <TextInput
            style={styles.input}
            keyboardType='email-address'
            placeholder='Email' />
        </View>
        <View style={styles.TextInputContainer}>
          <TextInput
            style={styles.input}
            placeholder='Địa chỉ' />
        </View>
        <View style={styles.TextInputContainer}>
          <TextInput
            style={styles.input}
            keyboardType='phone-pad'
            placeholder='Số điện thoại' />
        </View>
        <View style={styles.tC2}>
          <Text style={styles.title}>Phương thức giao hàng</Text>
        </View>
        <View>
          <TouchableOpacity style={styles.giaoHang}>
            <View style={styles.GHNhanh}>
              <Text style={styles.giaGHNhanhChon}>Giao hàng Nhanh - 15.000đ</Text>
              <Text style={styles.ngayGHNhanh}>Dự kiến giao hàng 5-7/9</Text>
            </View>
            <Image
              source={require('../../../../assets/images/check.png')} />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.giaoHang}>
            <View style={styles.GHNhanh}>
              <Text style={styles.giaGHNhanh}>Giao hàng COD - 20.000đ</Text>
              <Text style={styles.ngayGHNhanh}>Dự kiến giao hàng 4-8/9</Text>
            </View>
            {/* <Image
              source={require('../../../../assets/images/check.png')} /> */}
          </TouchableOpacity>
        </View>
        <View style={styles.tC2}>
          <Text style={styles.title}>Hình thức thanh toán</Text>
        </View>
        <View>
          <TouchableOpacity style={styles.giaoHang}>
            <View style={styles.GHNhanh}>
              <Text style={styles.giaGHNhanhChon}>Thẻ VISA/MASTERCARD</Text>
            </View>
            <Image
              source={require('../../../../assets/images/check.png')} />
          </TouchableOpacity>
        </View>
        <View style={styles.tongTienContainer}>
          <View style={styles.priceContainer}>
            <Text style={styles.textPrice}>Tạm tính</Text>
            <Text style={styles.textPrice}>500000đ</Text>
          </View>
          <View style={styles.priceContainer}>
            <Text style={styles.textPrice}>Phí vận chuyển</Text>
            <Text style={styles.textPrice}>15000đ</Text>
          </View>
          <View style={styles.priceContainer}>
            <Text style={styles.textTotal}>Tạm tính</Text>
            <Text style={styles.total}>500000đ</Text>
          </View>
          <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.btnTiepTuc}>
              <Text style={styles.textbtn}>Tiếp tục</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}

export default Payment

const styles = StyleSheet.create({
  btnContainer: {
    marginTop: 10
  },
  textbtn: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 20,
    color: '#FFFFFF'
  },
  btnTiepTuc: {
    width: 326,
    height: 50,
    borderRadius: 8,
    backgroundColor: '#007537',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textTotal: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 22,
    color: '#000000'
  },
  total: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 22,
    color: '#007537'
  },
  textPrice: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 20,
    color: '#000000'
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  tongTienContainer: {
    width: 326,
    height: 85,
    marginTop: 24
  },
  giaGHNhanh: {
    fontSize: 14,
    fontWeight: '400',
    color: '#221F1F',
    lineHeight: 20
  },
  ngayGHNhanh: {
    fontSize: 14,
    fontWeight: '400',
    color: '#7D7B7B',
    lineHeight: 20
  },
  giaGHNhanhChon: {
    fontSize: 14,
    fontWeight: '400',
    color: '#007537',
    lineHeight: 20
  },
  GHNhanh: {
    width: 200
  },
  giaoHang: {
    width: 279,
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: '#7D7B7B',
    borderBottomWidth: 0.55,
    marginTop: 15
  },
  tC2: {
    width: 279,
    height: 22,
    marginTop: 30,
    borderBottomColor: '#221F1F',
    borderBottomWidth: 0.55
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
  body: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 22,
    color: '#221F1F'
  },
  tC1: {
    width: 279,
    height: 22,
    marginTop: 15,
    borderBottomColor: '#221F1F',
    borderBottomWidth: 0.55
  },
  container: {
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
})