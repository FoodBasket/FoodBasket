import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Timeline from 'react-native-timeline-flatlist';

export default class BusRoute extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: 
        [
          {time: 'Location 1', title: 'Battisputali',icon: require('../assets/elements/bus.png'), description: 'Location 1 is Battisputali'},
          {time: 'Location 2', title: 'New Baneshwor',icon: require('../assets/elements/bus.png'), description: 'Location 2 is New Baneshwor'},
          {time: 'Location 3', title: 'Mid Baneshwor',icon: require('../assets/elements/bus.png'), description: 'Location 3 is Mid Baneshwor'},
          {time: 'Location 4', title: 'New Baneshwor',icon: require('../assets/elements/bus.png'), description: 'Location 4 is New Baneshwor'},
          {time: 'Location 5', title: 'Shantinagar',icon: require('../assets/elements/bus.png'), description: 'Location 5 is Shantinagar'},
          {time: 'Location 6', title: 'Tinkune',icon: require('../assets/elements/bus.png'), description: 'Location 5 is Tinkune'},
          {time: 'Location 7', title: 'Koteshwor',icon: require('../assets/elements/bus.png'), description: 'Location 5 is Koteshwor'},
        ]
      
    };
  

  };


  static navigationOptions = () => ({
    title: 'Bus Details',
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: '#2BDA8E'
    },
  });



  render() {
    return (
      <View style={styles.container}>
        <Timeline
        circleSize={20}
        separator={true}
        circleColor='white'
        lineColor='gray'
        timeStyle={styles.time}
        descriptionStyle={styles.description}
        style={styles.list}
        data={this.state.data}
        innerCircle={'icon'}
        />
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
		backgroundColor:'white'
  },
  list: {
    flex: 1,
    marginTop:20,
  },
  time: {
    textAlign: 'center',
    backgroundColor:'gray',
    fontSize: 12,
    color:'white', 
    padding:5, 
    borderRadius:13, 
    overflow: 'hidden'
  },
  description: {
    color: 'gray'
  }
})
