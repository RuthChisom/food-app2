import { View, Image } from 'react-native'
import React from 'react'

const ImageItem = () => {
  return (
    <View>
        <Image
        source={require('../assets/images/cheese.jpg')}
        style={{width:'100%',height:300, borderRadius:30, marginTop:20}}
        />
        <View style={{position:'absolute', flexDirection:'row', marginTop:30, padding:10}}>
          <View style={{borderRadius:10, backgroundColor:'white', width:30, height:30, marginRight:270, justifyContent:'center'}}>
            <Image
            source={require('../assets/icons/arrow.png')}
            style={{width:15,height:15, margin:7}}
            />
          </View>
          <View style={{borderRadius:10, backgroundColor:'white', width:30, height:30, justifyContent:'center'}}>
            <Image
            source={require('../assets/icons/bag.png')}
            style={{width:15,height:15, margin:7}}
            />
          </View>
        </View>
      </View>
  )
}

export default ImageItem