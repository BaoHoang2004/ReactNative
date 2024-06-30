import { FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View, } from 'react-native'
import React, { useEffect, useState } from 'react'
import HeaderCustom from '../../customs/HeaderCustom'
import { useDispatch, useSelector } from 'react-redux';
import { TimKiem } from '../../reducers/SearchSlice';

const Search = (props) => {
  const { navigation } = props;
  const [name, setName] = useState();
  const dispatch = useDispatch();
  const { searchData, searchStatus } = useSelector((state) => state.search); // Sửa từ cartData thành products


  useEffect(() => {
    if (name) {
      dispatch(TimKiem({ name: name }))
    }
  }, [name])

  const renderItem = ({ item }) => {
    return (
      // <View style={styles.itemContainer}>
      //   <View style={styles.img}>
      //     {
      //       <Image
      //         style={styles.img}
      //         source={require('../../../../assets/images/cay1.png')} />
      //     }
      //   </View>

      //   <View style={styles.tt}>
      //     <View>
      //       <TouchableOpacity
      //         onPress={() => navigation.navigate('Product', { _id: item._id })}>
      //         <View style={styles.nameContainer}>
      //           <Text style={styles.type}>{item.name}<Text> | </Text></Text>
      //           <Text style={styles.type}>Ua bong</Text>
      //         </View>
      //         <View>
      //           <Text style={styles.type}>{item.price}</Text>
      //           <Text style={styles.soLuong}>Còn {item.status} sản phẩm</Text>
      //         </View>
      //       </TouchableOpacity>
      //     </View>
      //   </View>
      // </View>
      <TouchableOpacity
        style={styles.itemContainer}
        onPress={() => navigation.navigate('Product', { _id: item._id })}
      >
        <View style={styles.imageContainer}>
          {
            item.image ? <Image
              style={styles.image}
              source={{ uri: item.image[0] }}
            /> : <Image
              style={styles.image}
              source={require('../../../../assets/images/cay1.png')}
            />

          }

        </View>
        <View style={styles.textContainer}>
          <Text style={styles.name}>{item.name}</Text>
          {/* <Text style={styles.type}>Ua bong</Text> */}
          <Text style={styles.price}>{item.price}</Text>
          <Text style={styles.status}>Còn {item.status} sản phẩm</Text>
        </View>
      </TouchableOpacity>
    )


  }


  return (
    <View style={styles.container}>
      <HeaderCustom lefticon={require('../../../../assets/images/ic_back.png')}
        title="Tìm kiếm" />
      <View style={styles.inputContainer}>
        <View style={styles.TextInputContainer}>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={(text) => setName(text)}
            placeholder='Họ tên' />
          <Image
            style={styles.icon}
            source={require('../../../../assets/images/ic_search.png')} />
        </View>
      </View>

      {/* <View style={styles.itemContainer}>
        <Image
          style={styles.img}
          source={require('../../../../assets/images/cay1.png')} />
        <View style={styles.tt}>
          <View>
            <TouchableOpacity
              onPress={() => navigation.navigate('Product', { id: 1 })}>
              <View style={styles.nameContainer}>
                <Text style={styles.type}>Hoa hong<Text> | </Text></Text>
                <Text style={styles.type}>Ua bong</Text>
              </View>
              <View>
                <Text style={styles.type}>200.000đ</Text>
                <Text style={styles.soLuong}>Còn 160 sản phẩm</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View> */}
      {searchData && <FlatList
        data={searchData}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()} />}

    </View>
  )
}

export default Search

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#EAEAEA',
    marginHorizontal: 50
  },
  imageContainer: {
    marginRight: 20,
  },
  image: {
    width: 77,
    height: 77,
    borderRadius: 8,
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000000',
    marginBottom: 5,
  },
  type: {
    fontSize: 14,
    fontWeight: '400',
    color: '#7D7B7B',
    marginBottom: 5,
  },
  price: {
    fontSize: 16,
    fontWeight: '500',
    color: '#007537',
    marginBottom: 5,
  },
  status: {
    fontSize: 14,
    fontWeight: '400',
    color: '#7D7B7B',
  },
  type: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 22,
    color: '#000000'
  },
  soLuong: {
    fontSize: 14,
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
  icon: {
    position: 'absolute',
    top: 10,
    right: 10
  },
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center'
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
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  }
})