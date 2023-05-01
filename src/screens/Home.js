import { View, Text, ImageBackground, FlatList} from 'react-native'
import React from 'react'

import Header from '../components/Header';
import Section from '../components/Section';
import FoodItem from '../components/FoodItem';
import {categories} from '../external_data/categories';
import Single from '../components/Single';

const Home = () => {

  return (
    <View style={{flex:1}}>
      <ImageBackground
        source={require("../assets/images/imgBG.jpg")}
        resizeMode="cover"
        style = {{width:'100%', height:'100%'}}
        // style = {{flex:1}}
        >
          {/* first section */}
            <Header/>

          {/* categories section */}
          <View 
            style={{
              // flex:1,
              // backgroundColor:'red',
              backgroundColor:'#f8f8f8',
              borderTopLeftRadius: 25,
              borderTopRightRadius: 25
            }}>

              <Section title="Recommended"/>

              {/* <FoodItem/> */}
              {/* list of food items */}
              <FlatList
                data={categories}
                horizontal
                keyExtractor={(item) => item.id}
                renderItem={({item}) => {
                  // console.log("==============");
                  console.log("items", item);
                  return <FoodItem food={item}/>
                }}
              />

              <Section title="Near You"/>

              <Single/>

            </View>

      </ImageBackground>

    

    </View>

  )
}

export default Home