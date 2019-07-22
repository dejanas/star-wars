import React from 'react';
import {
    createMaterialTopTabNavigator,
    createAppContainer,
    createStackNavigator,
  } from 'react-navigation';
import SWList from './SWList'
import SWDetail from './SWDetail';

const TabPeopleStack = createStackNavigator({
  Tab: {screen: SWList, params: {url:'https://swapi.co/api/people', field:'name'}},
  Details: SWDetail
});
const TabPlanetsStack = createStackNavigator({
  Tab: {screen: SWList, params: {url:'https://swapi.co/api/planets', field:'name'}},
  Details: SWDetail,
});
const TabFilmsStack = createStackNavigator({
  Tab: {screen: SWList, params: {url:'https://swapi.co/api/films', field:'title'}},
  Details: SWDetail,
});
const TabSpeciesStack = createStackNavigator({
  Tab: {screen: SWList, params: {url:'https://swapi.co/api/species', field:'name'}},
  Details: SWDetail,
});
const TabStarshipsStack = createStackNavigator({
  Tab: {screen: SWList, params: {url:'https://swapi.co/api/starship', field:'name'}},
  Details: SWDetail,
});
const TabVehiclesStack = createStackNavigator({
  Tab: {screen: SWList, params: {url:'https://swapi.co/api/vehicles', field:'name'}},
  Details:SWDetail,
});
    
  export default createAppContainer(createMaterialTopTabNavigator({

      People: {screen: TabPeopleStack, params: {url:'https://swapi.co/api/people', field:'name'}},
      Planets: {screen: TabPlanetsStack, params: {url:'https://swapi.co/api/planets', field:'name'}},
      Films: {screen: TabFilmsStack, params: {url:'https://swapi.co/api/films', field:'title'}},
      Species: {screen: TabSpeciesStack, params: {url:"https://swapi.co/api/species", field:"name"}},
      Starships: {screen: TabStarshipsStack, params: {url:"https://swapi.co/api/starship", field:"name"}},
      Vehicles: {screen: TabVehiclesStack, params: {url:"https://swapi.co/api/vehicles", field:"name"}}
    },
      {
        tabBarPosition: 'top',
        swipeEnabled: true,
        animationEnabled: true,
        tabBarOptions: {
          scrollEnabled: true,
          activeTintColor: '#FFFFFF',
          inactiveTintColor: '#F8F8F8',
          style: {
            backgroundColor: '#607D8B'
          },
          labelStyle: {
            textAlign: 'center',
          },
          indicatorStyle: {
            borderBottomColor: '#FFDE00',
            // width: 2 should fix this to be auto
          },
          tabStyle: {
            width: 'auto'
        }
      }
      },
    ));
