import { ScrollView, StyleSheet, Text, View, FlatList, Image, TouchableOpacity, ImageBackground } from 'react-native'
import React, { useContext, useEffect } from 'react'
import Section from '../../customs/Section'
import { AppContext } from '../../AppContext'
import { getNumberFormatSettings } from 'react-native-localize';
import { useDispatch, useSelector } from 'react-redux';
import { LaySanPham } from '../../reducers/ListProductSlice';


const Home = (props) => {
  const { navigation } = props;
  const dispatch = useDispatch();
  const { listProductsData, listProductsStatus } = useSelector((state) => state.listProducts);
  useEffect(()=>{
    dispatch(LaySanPham());
  },[dispatch])
  const dataProducts = listProductsData.slice(0,4);

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Image
            style={styles.logo}
            source={require('../../../../assets/images/logo_home.png')}></Image>
          <View style={styles.titleContainer}>
            <View style={styles.title}>
              <Text style={styles.textTtitle}>Planta - toả sáng không gian nhà bạn</Text>
              <View style={styles.cart}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Cart')}>
                  <Image
                    source={require('../../../../assets/images/ic_cart.png')} />
                </TouchableOpacity>
              </View>
            </View>
            <TouchableOpacity style={styles.next}>
              <Text style={styles.textNext}>Xem sản phẩm mới về</Text>
              <Image
                source={require('../../../../assets/images/ic_next.png')} />
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <Section title="Cây trồng" data={dataProducts} seemore="Xem thêm cây trồng" />
          <Section title="Chậu cây trồng" data={listProductsData} seemore="Xem thêm chậu cây trồng" />
          <Section title="Phụ kiện" data={listProductsData} seemore="Xem thêm phụ kiện" />
        </View>

        <View style={styles.footter}>
          <Text style={styles.text1}>Combo chăm sóc (mới)</Text>
          <View style={styles.chamsoc}>
            <View style={styles.textChamSocContainer}>
              <Text
                numberOfLines={1}
                style={styles.text2}>Lemon Balm Grow Kit</Text>
              <Text
                style={styles.text3}
                numberOfLines={3}>Gồm: hạt giống Lemon Balm, gói đất hữu cơ, chậu Planta, marker đánh dấu...</Text>
            </View>
            <Image
              style={styles.imgChamSoc}
              source={require('../../../../assets/images/chamsoc.png')}></Image>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  textChamSocContainer: {
    padding: 24
  },
  imgChamSoc: {
    width: 108,
    height: 134,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8
  },
  chamsoc: {
    width: 325,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F6F6F6',
    borderRadius: 8,
    marginVertical: 15
  },
  text3: {
    width: 176,
    height: 62,
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 20,
    color: '#7D7B7B'
  },
  text2: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 22,
    color: '#221F1F'
  },
  footter: {
    alignItems: 'center',
    marginTop: 32
  },
  text1: {
    width: 325,
    fontSize: 24,
    fontWeight: '500',
    lineHeight: 34,
    color: '#221F1F',
  },
  header: {
    backgroundColor: '#F6F6F6'
  },
  textNext: {
    color: '#009245'
  },
  next: {
    flexDirection: 'row',
    marginTop: 7
  },
  title: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  logo: {
    width: '100%',
    height: 205,
    marginTop: 70,
  },
  cart: {
    width: 48,
    height: 46,
    borderRadius: 100,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 65
  },
  titleContainer: {
    position: 'absolute',
    left: 25

  },
  textTtitle: {
    width: 223,
    height: 77,
    fontSize: 24,
    fontWeight: '500',
    lineHeight: 37,
    color: '#221F1F',
    marginTop: 31

  },
  item: {
    margin: 10
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
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
})