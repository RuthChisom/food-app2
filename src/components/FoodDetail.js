import { View, Text, Image } from 'react-native'
import React, {useState} from 'react'

const FoodDetail = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <View style={{padding:10}}>
        <View style={{flexDirection:'row'}}>
          <Text style={{fontWeight:'bold', fontSize:18, paddingRight:60}}>Grilled Cheese Salad {`\n`} with Cream</Text>
          <View style={{flexDirection:'row',width:80, height: 35, borderRadius:10, backgroundColor:'#f8f8f8',margin:10, padding:10, justifyContent:'space-between'}}>
            <Image
              source={require('../assets/icons/add.png')}
              style={{width:15, height:15, tintColor:'orange'}}
            />
            <Text style={{fontWeight:'bold'}}>{quantity}</Text>
            <Image
              source={require('../assets/icons/add.png')}
              style={{width:15, height:15, tintColor:'orange'}}
            />
          </View>
        </View>

        <View style={{flexDirection:'row', justifyContent:'space-between', paddingTop:10}}>
          <View style={{flexDirection:'row',}}>
          <Image
            source={require('../assets/icons/pin.png')}
            style={{width:15, height:15, tintColor:'orange'}}
          />
          <Text style={{color:'grey'}}> 2.3Km</Text>
          </View>
          <View style={{flexDirection:'row',right:12}}>
            <Image
              source={require('../assets/icons/star.png')}
              style={{width:15, height:15, tintColor:'orange'}}
            />
            <Text style={{color:'grey'}}> 4.7 Ratings</Text>
          </View>
          <View style={{flexDirection:'row',right:12}}>
            <Image
              source={require('../assets/icons/triangle.png')}
              style={{width:15, height:15, tintColor:'orange'}}
            />
            <Text style={{color:'grey'}}> 20-24 Min</Text>
          </View>
        </View>

        <View style={{paddingTop:15}}>
          <Text style={{fontWeight:'bold', paddingBottom:8}}>Description</Text>
          <Text style={{color:'grey'}}>
            Originating from Cyprus, semisoft and slightly nutty halloumi cheese resists melting when heated, so you can luxuriate {' '}
            <Text
              style={{color:'#00BFFF', fontWeight:'bold'}}
              onPress={() => {
                ('https://github.com/ruthchisom');
              }}>
              Read More ...
            </Text>
          </Text>
        </View>

        <View style={{padding:10}}>
          <Image
            source={require('../assets/images/map.png')}
            style={{width:'100%', height:150, borderRadius:15}}
          />
          <View style={{flexDirection:'row', position:'absolute', bottom:10}}>
            <View
              style={{borderColor:'orange', borderRadius: 20, borderWidth:2, padding:10, width: '45%', flexDirection:'row', justifyContent:'center', marginLeft:11}}
            >
              <Image
                source={require('../assets/icons/chat.png')}
                style={{width:20, height:20, tintColor:'orange', marginRight:10}}
              />
              <Text >Chat</Text>
            </View>
            <View
              style={{backgroundColor:'orange', borderRadius: 20, padding:10, width: '45%', marginLeft:25}}
            >
              <Text style={{color:'white', textAlign:'center'}}>Add Cart</Text>
            </View>
          </View>
        </View>

      </View>
  )
}

export default FoodDetail