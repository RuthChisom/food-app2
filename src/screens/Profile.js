import { View } from 'react-native'
import ImageItem from '../components/ImageItem'
import FoodDetail from '../components/FoodDetail'

const Profile = () => {

  return (
    <View style={{padding:5, backgroundColor:'white'}}>
      {/* banner */}
      <ImageItem/>

      {/* description */}
      <FoodDetail/>

    </View>
  )
}

export default Profile