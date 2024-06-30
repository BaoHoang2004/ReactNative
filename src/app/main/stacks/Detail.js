import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useRoute } from '@react-navigation/native';
import Section from '../../customs/Section';
import HeaderCustom from '../../customs/HeaderCustom';
import { useDispatch, useSelector } from 'react-redux';
import { DanhSachDanhMuc } from '../../reducers/CategoriesSlice';
import { DanhSachSanPhamTheoDanhMuc } from '../../reducers/ListProductsByCategorySlice';
import { LaySanPham } from '../../reducers/ListProductSlice';
import { getNumberFormatSettings } from 'react-native-localize';

const Detail = (props) => {
  const { navigation } = props;
  const dispatch = useDispatch();
  const { cateData, cateStatus } = useSelector((state) => state.categories);
  const { productByCategoryData, productByCategoryStatus } = useSelector((state) => state.productByCategory);
  const { listProductsData, listProductsStatus } = useSelector((state) => state.listProducts);
  const [data, setData] = useState([]);
  useEffect(() => {
    dispatch(DanhSachDanhMuc());
    // console.log(cateData);
  }, [dispatch])
  const [selectedCategory, setSelectedCategory] = useState('660f6556dddd1997455b7046');

  useEffect(() => {
    dispatch(LaySanPham())
  }, [dispatch])

  useEffect(() => {
    setData(Object.values(productByCategoryData));
  }, [productByCategoryStatus])
  const a = Object.values(productByCategoryData);

  const nhan = (index) => {
    setSelectedCategory(index);
    dispatch(DanhSachSanPhamTheoDanhMuc({ category: index }))

  }

  const renderCategory = ({ item }) => (
    <View style={styles.category}>
      <TouchableOpacity
        onPress={() => nhan(item._id)}
        style={[styles.btn, item._id === selectedCategory && styles.selectbtn]}
      >
        <Text style={item._id === selectedCategory && styles.text}>{item.name}</Text>
      </TouchableOpacity>
    </View>
  )



  return (
    <View style={styles.container}>
      <HeaderCustom
        lefticon={require('../../../../assets/images/ic_back.png')}
        title="CÂY TRỒNG"
        righticon={require('../../../../assets/images/ic_cart.png')} />
      <ScrollView>
        <View style={styles.categoryContainer}>
          <FlatList
            data={cateData}
            renderItem={renderCategory}
            keyExtractor={(item, index) => index.toString()}
            horizontal={true} />
        </View>
        <View style={{ marginBottom: 70 }}>
          {data.length === 0 ? <Section data={listProductsData} /> : <Section data={data} />}
        </View>
      </ScrollView>
    </View>
  )
}

export default Detail

const styles = StyleSheet.create({
  text:{
    fontSize:14,
    fontWeight:'500',
    color:'#ffffff'
  },
  categoryContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15
  },
  selectbtn: {
    backgroundColor: '#007537'
  },
  btn: {
    padding: 8,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF'
  },
  category: {
    marginHorizontal: 8,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 20,
    color: '#221F1F',
  },
  header: {
    height: 54,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  container: {
    // alignItems:'center',
    width: '100%',
  }
})