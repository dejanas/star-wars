import React from 'react';
import { StyleSheet} from 'react-native';
import SWTabNavigator from './SWTabNavigator';

const styles = StyleSheet.create({
  // eslint-disable-next-line react-native/no-color-literals
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

const App: React.FunctionComponent = () => (
  <SWTabNavigator/>
);

export default App;