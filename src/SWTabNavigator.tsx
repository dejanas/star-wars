import React from 'react';
import {
    createMaterialTopTabNavigator,
    createAppContainer,
  } from 'react-navigation';
import SWList from './SWList'
    
  const AppContainer = createAppContainer(createMaterialTopTabNavigator({

      People: <SWList url={"https://swapi.co/api/people"} field={"name"}/>,
      Planets: <SWList url={"https://swapi.co/api/planets"} field={"name"}/>,
      Films: <SWList url={"https://swapi.co/api/films"} field={"title"}/>,
      Species: <SWList url={"https://swapi.co/api/species"} field={"name"}/>,
      Starships: <SWList url={"https://swapi.co/api/starships"} field={"name"}/>,
      Vehicles: <SWList url={"https://swapi.co/api/vehicles"} field={"name"}/>
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

    // const TabPeopleStack = createStackNavigator({
    //   Tab: () => <SWList url={"https://swapi.co/api/people"} field={"name"}/>,
    //   Details: () => <DetailsScreen/>
    // });
    // const TabPlanetsStack = createStackNavigator({
    //   Tab: () => <SWList url={"https://swapi.co/api/planets"} field={"name"}/>,
    //   Details: () =>   <DetailsScreen/>,
    // });
    // const TabFilmsStack = createStackNavigator({
    //   Tab: () => <SWList url={"https://swapi.co/api/films"} field={"title"}/>,
    //   Details: () =>   <DetailsScreen/>,
    // });
    // const TabSpeciesStack = createStackNavigator({
    //   Tab: () =>  <SWList url={"https://swapi.co/api/species"} field={"name"}/>,
    //   Details: () =>   <DetailsScreen/>,
    // });
    // const TabStarshipsStack = createStackNavigator({
    //   Tab: () =>  <SWList url={"https://swapi.co/api/starships"} field={"name"}/>,
    //   Details: () =>   <DetailsScreen/>,
    // });
    // const TabVehiclesStack = createStackNavigator({
    //   Tab: () =>  <SWList url={"https://swapi.co/api/vehicles"} field={"name"}/>,
    //   Details: () =>  <DetailsScreen/>,
    // });

 export default class SWTabNavigator extends React.Component{
  render() {
    return <AppContainer />;
  }
}