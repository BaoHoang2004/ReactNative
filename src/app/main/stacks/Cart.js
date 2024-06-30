import { Image, StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import HeaderCustom from '../../customs/HeaderCustom'
import { AppContext } from '../../AppContext';
import { useDispatch, useSelector } from 'react-redux';
import { GioHang } from '../../reducers/CartSlice';
import { ThongTinSanPham } from '../../reducers/DetailProductSlice';


const Cart = (props) => {
  const { navigation } = props;
  const [id, setid] = useState()
  const { user, setUser } = useContext(AppContext);
  const dispatch = useDispatch();
  const { products, cartStatus } = useSelector((state) => state.cart);
  const { detailProductData, detailProductStatus } = useSelector((state) => state.detailProduct);
  // console.log(user);
  useEffect(() => {
    dispatch(GioHang({ client: user._id }))
  }, [dispatch])


  // useEffect(() => {
  //   dispatch(ThongTinSanPham({ id: products.productId }));
  // }, [dispatch])



  return (
    <View style={styles.container}>
      <HeaderCustom
        lefticon={require('../../../../assets/images/ic_back.png')}
        title="Giỏ hàng"
        righticon={require('../../../../assets/images/ic_delete.png')} />
      <View style={styles.content}>
        <ScrollView>
          {/* {console.log(products)} */}
          {products && products.length > 0 && products.map((productItem, index) => (
            <View key={index} style={styles.itemContainer}>
              <Image
                style={styles.check}
                source={require('../../../../assets/images/check.png')} />
              <View style={styles.tt}>
                <Image
                  style={styles.img}
                  source={require('../../../../assets/images/cay1.png')} />
                <View>

                  <Text style={styles.name}>{productItem.productId}</Text>

                  <Text style={styles.type}>{productItem.qty}</Text>

                  <View>
                    <Text style={styles.gia}>30000Đ</Text>
                  </View>
                  <View style={styles.xoaContainer}>
                    <View style={styles.soloungContainer}>
                      <TouchableOpacity>
                        <Image
                          style={styles.sizeic}
                          source={require('../../../../assets/images/ic_giam.png')} />
                      </TouchableOpacity>
                      <Text style={styles.textSL}>1</Text>
                      <TouchableOpacity>
                        <Image
                          style={styles.sizeic}
                          source={require('../../../../assets/images/ic_giam.png')} />
                      </TouchableOpacity>
                    </View>
                    <Text style={styles.xoa}>Xóa</Text>
                  </View>
                </View>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
      <View style={styles.btnContainer}>
        <View style={styles.tamtinhContainer}>
          <Text style={styles.tamtinh}>Tạm tính</Text>
          <Text style={styles.tongtien}>50000Đ</Text>
        </View>
        <TouchableOpacity
          style={styles.btnThanhToan}
          onPress={() => navigation.navigate('Payment')}>
          <Text style={styles.textbtn}>Tiến hành thanh toán</Text>
          <Image
            source={require('../../../../assets/images/ic_chonmua.png')} />
        </TouchableOpacity>
      </View>
    </View>
  )
}


export default Cart

const styles = StyleSheet.create({
  textbtn: {
    fontSize: 18,
    fontWeight: '500',
    lineHeight: 20,
    color: '#FFFFFF'
  },
  tongtien: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 22,
    color: '#000000'
  },
  tamtinh: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 20,
    color: '#000000'
  },
  tamtinhContainer: {
    width: 326,
    height: 43,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  content: {
    flex: 1
  },
  btnContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 20
  },
  btnThanhToan: {
    width: 326,
    height: 50,
    backgroundColor: '#007537',
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: 'center',
    paddingHorizontal: 30
  },
  type: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 20,
    color: '#7D7B7B'
  },
  name: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 22,
    color: '#000000'
  },
  xoaContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 13
  },
  xoa: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 20,
    color: '#000000',
    marginLeft: 38
  },
  sizeic: {
    width: 20,
    height: 20
  },
  textSL: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 20,
    color: '#000000'
  },
  soloungContainer: {
    width: 86,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  gia: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '500',
    color: '#007537'
  },
  tt: {
    flexDirection: 'row'
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  img: {
    width: 77,
    height: 77,
    backgroundColor: '#F6F6F6',
    borderRadius: 8,
    marginRight: 15
  },
  check: {
    width: 20,
    height: 20,
    backgroundColor: '#000000',
    marginRight: 28
  },
  itemContainer: {
    width: '100%',
    height: 107,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  }
})