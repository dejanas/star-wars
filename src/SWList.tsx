import React from 'react';
import { FlatList, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator
 } from 'react-native'
import { createStackNavigator, NavigationContainer, NavigationScreenProps } from 'react-navigation';
import SWDetail from './SWDetail';

 export default class  SWList extends React.Component<NavigationScreenProps, any>{
  listStack: NavigationContainer | undefined
  constructor(props: NavigationScreenProps){
    super(props)
    this.state = {
      dataSource : []
  };
  }

    renderItem = (item: any) => {
      return<TouchableWithoutFeedback onPress={ () => this.actionOnRow(item)}>
            <View style={styles.item}>
                    <View style={styles.details}>
                      <Text style={styles.name}>{item[this.props.navigation.getParam('field')]}</Text>
                    </View>
                    </View>
              </TouchableWithoutFeedback>
    }
  
    actionOnRow(item: any) {
      this.props.navigation.navigate('Details', {category: 'people', id:1, title:item[this.props.navigation.getParam('field')]})
      console.log('Selected Item :',item);
   }
  
    ItemSeparator = () => <View style={styles.separator} />;
  
    componentDidMount(){
       fetch(this.props.navigation.getParam('url'))
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          loading: false,
          dataSource: responseJson.results,
        });
      })
      .catch(error => console.log(error)); 
  }
  
    render() {
      if (this.state.loading) {
      return (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color="#0c9" />
        </View>
      );
    }
      return (
        <FlatList
          data={this.state.dataSource }
          keyExtractor={(_, i) => String(i)}
          renderItem={this.renderItem}
          navigation={this.props.navigation}
          ItemSeparatorComponent={this.ItemSeparator}
        />
      );
    }
  }

  const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
  },
  letter: {
    color: 'white',
    fontWeight: 'bold',
  },
  details: {
    margin: 8,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 14,
    color: 'black',
  },
  separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: 'rgba(0, 0, 0, .08)',
  },
});
