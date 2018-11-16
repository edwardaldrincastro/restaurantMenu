
import { createMaterialTopTabNavigator } from 'react-navigation';
import RestaurantsList from "../screens/Nearby/RestaurantsList";
import RestaurantsMap from "../screens/Nearby/RestaurantsMap";

const NearbyTabNavigator = createMaterialTopTabNavigator({
  RestaurantsList: RestaurantsList,
  RestaurantsMap: RestaurantsMap,
},
  {
    tabBarOptions: {
      activeTintColor: '#00BD57',
      inactiveTintColor: '#000',
      labelStyle: {
        fontSize: 12,
      },
      style: {
        backgroundColor: '#fff',
        paddingBottom: 10,
      },
    }
  },
  {
    initialRouteName: 'LIST'
  },
);



export default NearbyTabNavigator;
