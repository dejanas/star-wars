import * as React from 'react';
import {
    createMaterialTopTabNavigator,
    createStackNavigator,
    createAppContainer,
  } from 'react-navigation';
import SWDetail from './SWDetail'
import SWList from './SWList'
  
const ListScreen: React.FunctionComponent = (url, field) => (
    <SWList url = {url} field={field}/>
);

const DetailsScreen: React.FunctionComponent = () => (
  <SWDetail/>
);

    const TabPeopleStack = createStackNavigator({
      Tab: () => <ListScreen url={"https://swapi.co/api/people"} field={"name"}/>,
      Details: () => <DetailsScreen/>
    });
    const TabPlanetsStack = createStackNavigator({
      Tab: () => <ListScreen url={"https://swapi.co/api/planets"} field={"name"}/>,
      Details: () =>   <DetailsScreen/>,
    });
    const TabFilmsStack = createStackNavigator({
      Tab: () => <ListScreen url={"https://swapi.co/api/films"} field={"title"}/>,
      Details: () =>   <DetailsScreen/>,
    });
    const TabSpeciesStack = createStackNavigator({
      Tab: () =>  <ListScreen url={"https://swapi.co/api/species"} field={"name"}/>,
      Details: () =>   <DetailsScreen/>,
    });
    const TabStarshipsStack = createStackNavigator({
      Tab: () =>  <ListScreen url={"https://swapi.co/api/starships"} field={"name"}/>,
      Details: () =>   <DetailsScreen/>,
    });
    const TabVehiclesStack = createStackNavigator({
      Tab: () =>  <ListScreen url={"https://swapi.co/api/vehicles"} field={"name"}/>,
      Details: () =>  <DetailsScreen/>,
    });
    
  const AppContainer = createAppContainer(createMaterialTopTabNavigator({

      People: TabPeopleStack,
      Planets: TabPlanetsStack,
      Films: TabFilmsStack,
      Species: TabSpeciesStack,
      Starships: TabStarshipsStack,
      Vehicles: TabVehiclesStack
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

 export default class SWTabNavigator extends React.Component{
  render() {
    return <AppContainer />;
  }
}