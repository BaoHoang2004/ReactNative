import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import HeaderCustom from '../../customs/HeaderCustom'

const History = () => {
  return (
    <View style={styles.container}>
      <HeaderCustom lefticon={require('../../../../assets/images/ic_back.png')}
        title="Lịch sử giao dịch" />
      <View style={styles.content}>
        <View style={styles.tC2}>
          <Text style={styles.date}>Thứ tư, 03/09/2021</Text>
        </View>
        <ScrollView>
          <View style={styles.itemContainer}>
            <Image
              style={styles.img}
              source={require('../../../../assets/images/cay1.png')} />
            <View style={styles.tt}>
              <View>
                <Text style={styles.trangThai}>Đặt hàng thành công</Text>
                <View style={styles.nameContainer}>
                  <Text style={styles.name}>Hoa hong<Text> | </Text></Text>
                  <Text style={styles.type}>Ua bong</Text>
                </View>
                <View>
                  <Text style={styles.soLuong}>2</Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  )
}

export default History

const styles = StyleSheet.create({
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
  date: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 22,
    color: '#221F1F'
  },
  tC2: {
    width: 279,
    height: 22,
    marginTop: 30,
    borderBottomColor: '#7D7B7B',
    borderBottomWidth: 0.55,
    marginBottom: 15
  },
  soLuong: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 20,
    color: '#000000'
  },
  trangThai: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 22,
    color: '#007537'
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
  itemContainer: {
    width: 279,
    height: 107,
    flexDirection: 'row',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    alignItems: 'center'
  },
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  }
})