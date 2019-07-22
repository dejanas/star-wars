import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FlatList, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { Card, Image } from 'react-native-elements';
import { NavigationScreenProps } from 'react-navigation';

export default class  SWDetail extends React.Component<NavigationScreenProps, any>{
  itemUri: string;
  constructor(props: NavigationScreenProps){
    super(props)
    this.itemUri = "https://swapi.co/api/" + this.props.navigation.getParam('category') + "/" +this.props.navigation.getParam('id') 
    this.state = {
      dataSource: []
    }
  }

  renderItem = (item : any) => {
    return<TouchableWithoutFeedback onPress={ () => this.actionOnRow(item)}>
     <View style={styles.item}>
                    <View style={styles.details}>
                    <Text style={styles.name}>{item.key}   {item.value}</Text>
                    </View>
           </View>
           </TouchableWithoutFeedback>
  }
  
  actionOnRow(item : any) {
    console.log('Selected Item :',item);
    //TODO: further linking
 }

  ItemSeparator = () => <View style={styles.separator} />;

  componentDidMount(){
    fetch(this.itemUri)
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({ 
        dataSource: responseJson.results,
        isLoading: false
    }); 
    })
    .catch((error) => {
      console.error(error);
    });
 }

  render() {

    return (
      <View>
      {/* <Image source={this.itemUri + "/something.png"}/> */}
      <Card title={this.props.navigation.getParam('title')}>
        <View>
        <Text>
          Details
        </Text>
        <FlatList
        data={this.state.dataSource }
        keyExtractor={(_, i) => String(i)}
        renderItem={this.renderItem}
        ItemSeparatorComponent={this.ItemSeparator}
      />
      </View>
    </Card> 
    </View>
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