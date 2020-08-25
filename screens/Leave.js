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

const VALID_EMAIL = "contact@react-ui-kit.com";
const VALID_PASSWORD = "subscribe";


export default class Leave extends Component {
  state = {
    email: VALID_EMAIL,
    password: VALID_PASSWORD,
    errors: [],
    loading: false
  };
  
  static navigationOptions = () => ({
    title: 'Leave Details',
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: '#2BDA8E'
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
      <ScrollView style={{ marginVertical: theme.sizes.padding,backgroundColor: "#eff7f4" }} >

       

      <KeyboardAvoidingView style={styles.login} >
      
        <Card style={styles.cardstyle}>  

        <Block style= {styles.logoblock}> 
           
         <Text h1 center>Leave Detail !{"\n"}{"\n"}</Text>   
          </Block>

        <Block padding={[0, theme.sizes.base * 0.6]}>
          <Block middle>
            <Input  
              placeholder="  Subject"
              placeholderTextColor="gray"
              error={hasErrors("email")}
              style={[styles.textInput, hasErrors("email")]}
              onChangeText={text => this.setState({ email: text })}
            />
            <Text>{"\n"}</Text>
  
          <View style={styles.textAreaContainer} >
            <TextInput
              style={styles.textArea}
              placeholder="  Please mention the detail of leave......."
              placeholderTextColor="gray"
              numberOfLines={6}
              multiline={true}
            />
          </View>

            <Text>{"\n"}</Text>

            <Button  style={styles.loginbutton} gradient>
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
        </Card>
      

       
      </KeyboardAvoidingView>
        </ScrollView>

    );
  }
}




const styles = StyleSheet.create({
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
    margin:5,
  },
  
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
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


  hasErrors: {
    borderBottomColor: theme.colors.accent
  }
});
