import React, { Component } from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  BackHandler,
  View
} from "react-native";


import { Card, Badge, Button, Block, Text } from "../components";
import { theme, mocks } from "../constants";

const { width, height } = Dimensions.get("window");

class Browse extends Component {
  state = {
    active: "Products",
    categories: []
  };

  handleTab = tab => {
    const { categories } = this.props;
    const filtered = categories.filter(category =>
      category.tags.includes(tab.toLowerCase())
    );

    this.setState({ active: tab, categories: filtered });
  };


  static navigationOptions = () => ({
    title: 'Home',
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: '#2BDA8E'
    },
    headerLeft:null,
  });



  render() {
    const { profile, navigation } = this.props;

    return (
      
      <Block>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ paddingVertical: theme.sizes.base * 2 }}
        >
          <View style={styles.Container}>

          <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
            <Image
              source={require("../assets/elements/profile-pic.jpg")} 
              style={styles.circleImageLayout}
            />
         </TouchableOpacity>

            <Text style={styles.text}>Robert Downey Jr.</Text>
          </View>
         

          <Block flex={false} row space="between" style={styles.categories}>
                           
              <TouchableOpacity onPress={() => navigation.navigate("Attendance")}>

                <Card center middle shadow style={styles.category}>
               
                    <Image style={styles.category_image} source={require('../assets/elements/attendance.png')} />
                  <Text  height={20}>
                    Attendance
                  </Text>
                </Card>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate("Notification")}>

                <Card center middle shadow style={styles.category}>
               
                    <Image  source={require('../assets/elements/notification.png')} />
                  <Text  height={20}>
                    Notification
                  </Text>
                </Card>
              </TouchableOpacity>
              
              <TouchableOpacity onPress={() => navigation.navigate("ClassRoutine")}>
                <Card center middle shadow style={styles.category}>
                    <Image source={require('../assets/elements/routine.png')} />
                  <Text  height={20}>
                    Class Routine
                  </Text>
                </Card>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate("Homework")}>
                  <Card center middle shadow style={styles.category}>
                      <Image source={require('../assets/elements/homework.png')} />
                    <Text  height={20}>
                      Daily Homework
                    </Text>
                  </Card>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate("ExamRoutine")}>
                <Card center middle shadow style={styles.category}>        
                    <Image source={require('../assets/elements/exam.png')} />
                  <Text  height={20}>
                    Exam Routine
                  </Text>
                </Card>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate("Results")}>
                <Card center middle shadow style={styles.category}>
               
                    <Image source={require('../assets/elements/progress.png')} />
                  <Text  height={20}>
                    Results
                  </Text>
                </Card>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate("ProjectWork")}>
                <Card center middle shadow style={styles.category}>          
                    <Image source={require('../assets/elements/project.png')} />
                   <Text  height={20}>
                    Project Work
                  </Text>
                </Card>
              </TouchableOpacity>

             {/*  <TouchableOpacity>
                <Card center middle shadow style={styles.category}>
                  
                    <Image source={require('../assets/elements/leave.png')} />
                  <Text  height={20}>
                    Absent Reo 
                  </Text>
                </Card>
             </TouchableOpacity> */}

              <TouchableOpacity onPress={() => navigation.navigate("Library")}>
                <Card center middle shadow style={styles.category}>
              
                    <Image source={require('../assets/elements/library.png')} />
                  <Text  height={20}>
                    Library
                  </Text>
                </Card>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate("Suggestion")}>
                <Card center middle shadow style={styles.category}>         
                    <Image source={require('../assets/elements/feedback.png')} />
                  <Text  height={20}>
                    Suggestion
                  </Text>
                </Card>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate("SchoolDetails")}>
                <Card center middle shadow style={styles.category}>
               
                    <Image source={require('../assets/elements/school.png')} />
                  <Text  height={20}>
                    School
                  </Text>
                </Card>
              </TouchableOpacity>

              <TouchableOpacity>
                <Card center middle shadow style={styles.category}>
              
                    <Image source={require('../assets/elements/language.png')} />
                  <Text  height={20}>
                    Language
                  </Text>
                </Card>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate("DueDetails")}>
                <Card center middle shadow style={styles.category}>
                    <Image source={require('../assets/elements/dues.png')} />
                  <Text  height={20}>
                    Dues
                  </Text>
                </Card>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate("BusDetails")}>
                <Card center middle shadow style={styles.category}>
               
                    <Image source={require('../assets/elements/bus.png')} />
                  <Text  height={20}>
                    Bus
                  </Text>
                </Card>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
                <Card  center middle shadow style={styles.category}>    
                    <Image source={require('../assets/elements/profile.png')} />
                  <Text  height={20}>
                    Profile
                  </Text>
                </Card>
              </TouchableOpacity>
              
        
          </Block>
        </ScrollView>
      </Block>
    );
  }
}

Browse.defaultProps = {
  profile: mocks.profile,
  categories: mocks.categories
};

export default Browse;


const styles = StyleSheet.create({
  Container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    margin: 10,

  },

  circleImageLayout: {
    width: width/5,
    height: width/5,
    borderRadius: 200 / 2,
  },

  lineStyle:{
    borderWidth: 0.2,
    borderColor:'black',
    margin:10,
    
  },

  avatar: {
    height: theme.sizes.base * 2.2,
    width: theme.sizes.base * 2.2
  },


  active: {
    borderBottomColor: theme.colors.secondary,
    borderBottomWidth: 3
  },
  categories: {
    flexWrap: "wrap",
    paddingHorizontal: theme.sizes.base * 2,
    marginBottom: theme.sizes.base * 3.5
    
  },
  text: {
    fontSize: width/30,
    textAlign: 'center',
    margin: 10
  },
  category_image:{
   height:width/9,
  },
  

  category: {
    // this should be dynamic based on screen width
    minWidth: (width - theme.sizes.padding * 2.4 - theme.sizes.base) / 2,
    maxWidth: (width - theme.sizes.padding * 2.4 - theme.sizes.base) / 2,
    maxHeight: (width - theme.sizes.padding *2.4 - theme.sizes.base) / 2,
    height:width/4,
    
  }
});
