import React, { Component } from "react";
import { TextInput } from 'react-native';
import {
  ActivityIndicator,
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
  View,
  TouchableOpacity,
} from "react-native";
const { width } = Dimensions.get("window");


import { Card } from "../components";
import { Button, Block, Input, Text } from "../components";
import { theme } from "../constants";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const VALID_EMAIL = "contact@react-ui-kit.com";
const VALID_PASSWORD = "subscribe";


export default class Login extends Component {
  state = {
    email: VALID_EMAIL,
    password: VALID_PASSWORD,
    errors: [],
    loading: false
  };
  
  static navigationOptions=({navigation}) => ({
    title: 'Feedback',
    headerTintColor: 'black',
    headerStyle: {
      backgroundColor: 'white'
    },
 
  });
  handleLogin() {
    const { navigation } = this.props;
    const { email, password } = this.state;
    const errors = [];

    Keyboard.dismiss();
    this.setState({ loading: true });


    this.setState({ errors, loading: false });


  }

  render() {
    const { navigation } = this.props;
    const { loading, errors } = this.state;
    const hasErrors = key => (errors.includes(key) ? styles.s : null);
    

    return (
      <ScrollView style={{ marginVertical: theme.sizes.padding }} >


        <View style={styles.Container}>
          <Image
        style={{ width: width/3, height: width/3 }}
        source={require("../assets/images/feedback.png")} 
         />
                <Text center style={{fontSize:14,padding:20,textAlign: 'justify',paddingBottom:width/15}}>
          Feel free to give us feedback regarding our services.
        </Text>
  
        </View>
        

      <KeyboardAvoidingView style={styles.login} >
      

   

        <Block padding={20} paddingTop={1}>
          <Block middle>
            <Input  
              placeholder="  Subject"
              placeholderTextColor="gray"
            />
  
          <View style={styles.textAreaContainer} >
            <TextInput
              style={styles.textArea}
              placeholder="  Write Something..."
              placeholderTextColor="gray"
              numberOfLines={6}
              multiline={true}
            />
          </View>

            <Text>{"\n"}</Text>

            <Button  style={styles.loginbutton} gradient onPress={() => alert("Thank you for your response")}>
              {loading ? (
                <ActivityIndicator size="small" color="white" />
              ) : (
                <Text bold white center>
                  Submit
                </Text>
              )}
            </Button>

           
          </Block>
        </Block>
      

       
      </KeyboardAvoidingView>
        </ScrollView>

    );
  }
}




const styles = StyleSheet.create({
  Container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop:5,
    
  },
  login: {
    flex: 1,
    justifyContent: "center"
  },
  logoblock: {
    justifyContent: 'center',
        alignItems: 'center', 
        
  },
  logoimage: {
        width: width * 0.1, 
        height: width * 0.5 * 0.2,
        
  },
 

  loginbutton: {
  
    borderRadius: 25,
    margin:1,
  },
  
  textInput: {
    flex: 1,
    paddingLeft: 10,
    borderRadius: 25,
    backgroundColor:'#F2F2F2',

   },

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
  elgyan:
  {
    fontSize:17,
    margin:50,
  },
  textAreaContainer: {
    padding: 3
  },
  textArea: {
    flex: 1,
    height: 120,
    justifyContent: "flex-start",
    backgroundColor:'#F2F2F2',
    borderRadius: 15,
    flex: 1,
    borderWidth: 0.2,
  },
  

image: {
  flex: 1,
  resizeMode: "cover",
  justifyContent: "center",
},
pageheader:{
  fontSize: width/23,
},


  hasErrors: {
    borderBottomColor: theme.colors.accent
  }
});
