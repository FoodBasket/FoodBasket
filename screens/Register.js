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


export default class Register extends Component {
  state = {
    email: VALID_EMAIL,
    password: VALID_PASSWORD,
    errors: [],
    loading: false
  };
  static navigationOptions = {
    headerShown: false
  };

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
      <ScrollView style={{ marginVertical: theme.sizes.padding,backgroundColor: "#F6EEEE" }} >
      <KeyboardAvoidingView style={styles.login} >
        
          <Text h1 center bold>
          {"\n"}
        
          </Text>
          

         
        <Card style={styles.cardstyle}>  

        <Block style= {styles.logoblock}> 
         <Image  style= {styles.logoimage} source={require('../assets/logo.jpg')}
         />     
    <Text>{"\n"}</Text>
          </Block>

        <Block padding={[0, theme.sizes.base * 0.6]}>
          <Block middle>
            <Input  
              placeholder="Fullname"
              placeholderTextColor="#7D3C3C"
              error={hasErrors("email")}
              style={[styles.textInput, hasErrors("email")]}
              onChangeText={text => this.setState({ email: text })}
            />

            <Input  
              placeholder="Email Address"
              placeholderTextColor="#7D3C3C"
              error={hasErrors("email")}
              style={[styles.textInput, hasErrors("email")]}
              onChangeText={text => this.setState({ email: text })}
            />
            <Input  
              placeholder="Phone Number"
              placeholderTextColor="#7D3C3C"
              error={hasErrors("email")}
              style={[styles.textInput, hasErrors("email")]}
              onChangeText={text => this.setState({ email: text })}
            />
            <Input 
              placeholder="Password"
              placeholderTextColor="gray"
              secureTextEntry={true}
              error={hasErrors("password")}
              style={[styles.textInput, hasErrors("password")]}
              defaultValue={this.state.password}
              onChangeText={text => this.setState({ password: text })}
            />

<Input 
              placeholder="Re-Type Password"
              placeholderTextColor="gray"
              secureTextEntry={true}
              error={hasErrors("password")}
              style={[styles.textInput, hasErrors("password")]}
              defaultValue={this.state.password}
              onChangeText={text => this.setState({ password: text })}
            />
            <Text>{"\n"}</Text>

            <Button  style={styles.loginbutton} gradient onPress={() => this.handleLogin()}>
              {loading ? (
                <ActivityIndicator size="small" color="white" />
              ) : (
                <Text bold white center>
                  Login
                </Text>
              )}
            </Button>

           
          </Block>
        </Block>
        </Card>
      

      

        <Text 
        style={styles.elgyan} center h2 light>
          
            Powered By Elscript Technology Pvt. Ltd.
          </Text>
       
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
        width: width * 0.5, 
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
    margin:20,
    shadowColor: 'black',
    shadowOpacity: 3,
    elevation:9,
    shadowRadius: 15 ,
    shadowOffset : { width: 25, height: 13},
    borderRadius: 15,
  },
  elgyan:
  {
    fontSize:width/29,
    margin:width/10,
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
