import React, { Component } from "react";
import {
  ActivityIndicator,
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
const { width } = Dimensions.get("window");


import { Card } from "../components";
import { Button, Block, Input, Text } from "../components";
import { theme } from "../constants";




export default class Login extends Component {
  state = {

  };
  static navigationOptions = () => ({
    title: ' Forgot Password',
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: '#2BDA8E'
    },
  });


  render() {
    const { navigation } = this.props;
    const { loading, errors } = this.state;
    const hasErrors = key => (errors.includes(key) ? styles.s : null);
    

    return (
        <ScrollView style={{ marginVertical: theme.sizes.padding }}>
        <Block
        padding={[theme.sizes.padding * 1, theme.sizes.padding]}
        space="between"
      >
        <Text h2 center light>
         How to reset password?
         {"\n"}
        </Text>

        <Text
         caption
         gray
         height={24}
         style={{ marginBottom: theme.sizes.base }}
         style={styles.aboutForgotPassword}
         >
         The username and password of this app is provided by the administration of the school. {"\n"}
         Usually the student's guardian are provided  with the username and password to access the app after verifying the details.
         </Text>

         <Text
         caption
         gray
         height={24}
         style={{ marginBottom: theme.sizes.base }}
         style={styles.aboutForgotPassword}
         >
         In case if any guardian forgot the password of the app, they are requested to provide their previous phone number 
         so that the school can verify the parents identity and provide with the new credential to access the app.
         </Text>
         
       

        <Block middle padding={[theme.sizes.base / 2, 0]}>
            <Button style={styles.shadow}
              gradient
              onPress={() => this.props.navigation.goBack()}
            >
              <Text center white>
                I  UNDERSTAND
              </Text>
            </Button>
          </Block>

       
      </Block>
      </ScrollView>


    );
  }
}




const styles = StyleSheet.create({



  input: {
    borderBottomColor: theme.colors.gray2,
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  cardstyle: {
    margin:24,
    shadowColor: 'black',
    shadowOpacity: 3,
    elevation:9,
    shadowRadius: 15 ,
    shadowOffset : { width: 25, height: 13},
    borderRadius: 15,
  },
  aboutForgotPassword:{
    margin:13,
    fontSize:17,
    textAlign: 'justify',
  },

  

});
