import { View, Text ,Image} from 'react-native'
import React from 'react'

const FoodItem = (food) => {
    return (
    <View
        style={{
            backgroundColor: 'white',
            margin: 10,
            padding:10,
            borderRadius: 12,
            height: 180
        }}
    >
        <View>
            <Image
            source={food.food.image}
            style={{width:180, height:100, borderRadius:12}}
            resizeMode='cover'
            />
            {/* rating */}
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: 'space-between',
                    backgroundColor:'white',
                    position:'absolute',
                    borderRadius:10,
                    margin:5,
                    padding:5,
                    right:2
                }}
            >
                <Image
                    source={require('../assets/icons/star.png')}
                    style={{width:15, height: 15}}

                />
                <Text style={{fontWeight:'bold', fontSize:12}}>{food.food.rating}</Text>

            </View>
        </View>
        <View style={{padding:12}}>
            <Text style={{fontSize:15, fontWeight: 700}}>{food.food.shorttitle?food.food.shorttitle:food.food.title}</Text>
            <Text style={{color:'#00BFFF', fontWeight: 600}}>${food.food.price}</Text>
        </View>
      
    </View>
  )
}

export default FoodItem