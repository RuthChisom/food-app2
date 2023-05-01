import { View, Text, Image } from 'react-native'
import React from 'react'

const Single = () => {
  return (
    <View
        style={{
            height:120,
            borderRadius: 20,
            backgroundColor: 'white',
            padding:20,
            margin:25,
            flexDirection: 'row'
        }}
    >
        <Image
        source={require('../assets/images/biggie.jpg')}
        style={{width:70, height:70, justifyContent: 'space-between', borderRadius:15}}
        />
        <View style={{padding:10, marginRight:30}}>
            <Text style={{fontWeight:'bold'}}>Big Fried Chicken</Text>
            <Text style={{color:'gray', fontWeight:200}}>Gaminbar . 9.2Km</Text>
            <View style={{flexDirection:'row'}}>
                <Image
                    source={require('../assets/icons/star.png')}
                    style={{width:10, height:10, marginTop:5, marginRight:5}}
                />
                <Text style={{fontWeight:'bold'}}>4.4</Text>
            </View>
        </View>
        <Text style={{fontWeight:'bold', color:'green', padding:10}}>$4.2</Text>
    </View>
  )
}

export default Single