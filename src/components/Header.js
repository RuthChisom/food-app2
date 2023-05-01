import { View, Text, Image, Platform, TextInput } from 'react-native'
import React, {useState} from 'react'

const Header = () => {
  const [search, setSearch] = useState('');

  return (
    <View
            // style={{flex:0.5}}
            >
            {/* menu items */}
            <View 
            style={{
              flexDirection:'row', 
              justifyContent:'space-between', 
              marginTop:Platform.OS === 'ios' ? 60 : 40, 
              marginHorizontal:17}}>
              <View style={{justifyContent:'center', flex:1}}>
                <Image
                  source={require("../assets/icons/menu.png")}
                  style={{width:20, height: 20, tintColor: 'white'}}
                />
              </View>
              <View style={{justifyContent:'center', paddingRight:25}}>
                <Image
                  source={require("../assets/icons/bag.png")}
                  style={{width:20, height: 20, tintColor: 'white'}}
                />
              </View>
              <View style={{justifyContent:'center'}}>
                <Image
                  source={require("../assets/icons/bell.png")}
                  style={{width:20, height: 20, tintColor: 'white'}}
                />
              </View>
            </View>

            {/* header text */}
            <View style={{marginTop:30, marginLeft:15}}>
              <Text style={{color:'white', fontWeight: 600, fontSize: 25, lineHeight:30}}>
                Delicious food ready to be
                {/* Delicious food ready to be {'\n'}delivered for you */}
              </Text>
              <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                <View>
                  <Text style={{color:'white', fontWeight: 600, fontSize: 25, lineHeight:30}}>delivered for you</Text>
                </View>
                <View style={{flex:1, paddingLeft:10, justifyContent:'center'}}>
                  <Image
                    source={require('../assets/icons/ramen.png')}
                    style={{width:20, height: 20}}
                  />
                </View>
              </View>
            </View>

            {/* search bar */}
            <View
              style={{
                height:50,
                borderWidth: 0.5,
                borderColor: 'white',
                marginBottom: 15,
                marginTop: 12,
                flexDirection: "row",
                paddingHorizontal: 15,
                marginHorizontal: 30,
                borderRadius: 12,
              }}
            >
              <View style={{justifyContent:'center'}}>
                <Image
                  source={require('../assets/icons/search.png')}
                  style={{
                    width:20,
                    height:20,
                    tintColor: 'white',
                    // justifyContent:'center'

                  }}
                />
              </View>
              <TextInput
                autoFocus={false}
                onChangeText={setSearch}
                value={search}
                placeholder='Search food you would like to eat'
                placeholderTextColor={'white'}
                style={{
                  color: 'white',
                  paddingLeft: 10
                }}
              />
            </View>
          </View>
  )
}

export default Header