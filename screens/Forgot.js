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

const VALID_EMAIL = "contact@react-ui-kit.com";
const VALID_PASSWORD = "subscribe";


export default class Login extends Component {
  state = {
    email: VALID_EMAIL,
    password: VALID_PASSWORD,
    errors: [],
    loading: false,
  };
  
  static navigationOptions = () => ({
    title: 'Forgot Password',
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

    // check with backend API or with some static data
    if (email !== VALID_EMAIL) {
      errors.push("email");
    }
    if (password !== VALID_PASSWORD) {
      errors.push("password");
    }

    this.setState({ errors, loading: false });

    if (!errors.length) {
      navigation.navigate("Browse");
    }
    if(errors.length)
    {
      alert("Invalid username/password combination !")
    }
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
         <Image  style= {styles.logoimage} source={require('../assets/loginicon.png')}
         />     
         <Text style= {styles.loginText} h1 center>Forgot Password ?? </Text>   
    <Text>{"\n"}</Text>
          </Block>

        <Block padding={[0, theme.sizes.base * 0.6]}>
          <Block middle>
             <Input  
              placeholder="Phone Number"
              placeholderTextColor="gray"
              error={hasErrors("phone_number")}
              style={[styles.textInput, hasErrors("phone_number")]}
              onChangeText={text => this.setState({ phone_number: text })}
            />
            <Text>{"\n"}</Text>

            <Button  style={styles.loginbutton} gradient >
              {loading ? (
                <ActivityIndicator size="small" color="white" />
              ) : (
                <Text bold white center>
                  Request Admin
                </Text>
              )}
            </Button>

           
          </Block>
        </Block>
        </Card>
        <TouchableOpacity onPress={() => navigation.navigate("AboutForgot")}>
        <Text
          gray
          caption
          center
          bold
          style={{fontSize:15,}}
          
        >
          {"\n"}
          What's all this? Help !
        </Text>
        </TouchableOpacity>
  
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
        width: width * 0.3, 
        height: width * 0.5 * 0.5,
  },

  loginbutton: {
    borderRadius: width/20,
    margin:1,
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
  

image: {
  flex: 1,
  resizeMode: "cover",
  justifyContent: "center",
},
loginText: {
  fontSize: width/20,
},

  hasErrors: {
    borderBottomColor: theme.colors.accent
  }
});
