import React, { Component } from "react";
import {
  ActivityIndicator,
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
  View,
} from "react-native";
const { width } = Dimensions.get("window");
import Toast, {DURATION} from 'react-native-easy-toast';







import { Card } from "../components";
import { Button, Block, Input, Text } from "../components";
import { theme } from "../constants";



export default class Register extends Component {
  
  state = {
  
    loading: false
  };

  static navigationOptions = () => ({
    title: 'Register User',
    headerTintColor: '#FC4A1A',
    headerStyle: {
      backgroundColor: 'white'
    },
  });
  

  handleRegister = async () => {
    const { navigation } = this.props;
    const { fullname,email,phone, password,c_password } = this.state;

    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if(fullname.length<4)
    {
      this.refs.toast.show("Invalid fullname length !",2000);
      return;

    }

    if(email.length<4||!email.match(mailformat))
    {
      this.refs.toast.show("Please use the valid email !",2000);
      return;

    }
    if(phone.length<5)
    {
      this.refs.toast.show("Please use the valid phone number !",2000);
      return;

    }

    if(password.length<7)
    {
      this.refs.toast.show("The length of password must be greater than 6 !",2000);
      return;

    }
    if(password!=c_password)
    {
      this.refs.toast.show("The password and Re-password did not match !",2000);
      return;

    }

    Keyboard.dismiss();
    this.setState({ loading: true });

    let response= await fetch('https://foodapp.elscript.com/api/register', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              name: fullname,
              phone: phone,
              email: email,
              status: 1,
              password: password,
              c_password: c_password,
              position: 'buyer',
            })
        })

        .then((response) => response.json())
        .then((responseData) => {
            if(responseData.code==200)
            { 
              alert("Registration successful. Please login to proceed !");
              
              this.setState({  loading: false });

              navigation.navigate("Login")
            }
            else if(responseData.code==401)
            {
              this.refs.toast.show(responseData.message,2000);
              this.setState({  loading: false });

            }
            else{
              this.refs.toast.show(responseData.message,2000);
              this.setState({  loading: false });
            }

  })
  .catch((error) =>{
    console.error(error);
  }) 



  }



  render() {
    const { navigation } = this.props;
    const { loading, errors } = this.state;
    const hasErrors = key => (errors.includes(key) ? styles.s : null);
    

    return (
      <Block style={{backgroundColor :"#F6EEEE"}}>
      <ScrollView style={{ marginVertical: theme.sizes.padding,backgroundColor: "#F6EEEE" }} >
      <KeyboardAvoidingView style={styles.login} >
        


         
        <Card style={styles.cardstyle}>  

           
             <Toast
                    ref="toast"
                    style={{backgroundColor:'red',borderRadius: width/20}}
                    position='bottom'
                    positionValue={200}
                    fadeInDuration={200}
                    fadeOutDuration={500}
                    opacity={0.8}
                    textStyle={{color:'white'}}
                />




        <Block style= {styles.logoblock}> 
         <Image  style= {styles.logoimage} source={require('../assets/logo.jpg')}
         />     
          </Block>

        <Block padding={[0, theme.sizes.base * 0.6]}>
          <Block middle>
            <Input  
              placeholder="Fullname"
              placeholderTextColor="#7D3C3C"
              style={[styles.textInput]}
              onChangeText={text => this.setState({ fullname: text })}
            />

            <Input  
              placeholder="Email Address"
              placeholderTextColor="#7D3C3C"
              style={[styles.textInput]}
              onChangeText={text => this.setState({ email: text })}
            />
            <Input  
              placeholder="Phone Number"
              placeholderTextColor="#7D3C3C"
              style={[styles.textInput]}
              onChangeText={text => this.setState({ phone: text })}
            />
            <Input 
              placeholder="Password"
              placeholderTextColor="#7D3C3C"
              secureTextEntry={true}
              style={[styles.textInput,]}
              onChangeText={text => this.setState({ password: text })}
            />

            <Input 
              placeholder="Re-Type Password"
              placeholderTextColor="#7D3C3C"
              secureTextEntry={true}
              style={[styles.textInput]}
              onChangeText={text => this.setState({ c_password: text })}
            />
            <Text>{"\n"}</Text>

            <Button  style={styles.loginbutton} gradient onPress={() => this.handleRegister()}>
              {loading ? (
                <ActivityIndicator size="small" color="white" />
              ) : (
                <Text bold white center>
                  Register
                </Text>
              )}
            </Button>

           
          </Block>
        </Block>
        </Card>
      

      

      
      </KeyboardAvoidingView>
        </ScrollView>
        </Block>

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
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
  },

  loginbutton: {
  
    borderRadius: width/20,
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
