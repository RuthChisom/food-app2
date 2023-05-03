import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Section = ({onPress, title, myStyle}) => {
  return (
    <View>
        {/* header */}
        <View
            style={{
                flexDirection:'row',
                justifyContent:'space-between',
                marginHorizontal: 20,
                marginTop: 25,
                marginBottom: 5,
                ...myStyle
            }}
        >
            <View style={{justifyContent:'center'}}>
                <Text style={{fontSize:18, fontWeight: 500, color:'black'}}>
                    {title}
                </Text>
            </View>
            <TouchableOpacity
                style={{marginRight: 4, justifyContent:'center'}}
                onPress={onPress}
            >
                <Text style={{color:'#00BFFF', fontSize:12}}>See All</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default Section