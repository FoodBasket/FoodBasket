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
  View,
  AsyncStorage
} from "react-native";
const { width } = Dimensions.get("window");


import { Card } from "../components";
import { Button, Block, Input, Text } from "../components";
import { theme } from "../constants";
import Toast, {DURATION} from 'react-native-easy-toast';



export default class Login extends Component {

  state = {
    loading: false
  };

  static navigationOptions = {
    headerShown: false,
    gestureEnabled: false

    
  };





 handleLogin = async () => {


    const { navigation } = this.props;
    const { email, password } = this.state;
  
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

 if(email.length<2||password.length<2){

  this.refs.toast.show("Please fill input field properly",2000);
  return;
   

 }   
    if(!email.match(mailformat))
{
      this.refs.toast.show("The email format is invalid",2000);
      return;

}



    Keyboard.dismiss();
    this.setState({ loading: true });

  
  

let response= await fetch('https://foodapp.elscript.com/api/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              email: email,
              password: password,
              position: 'buyer',
            })
        })

            .then((response) => response.json())
            .then((responseData) => {
                if(responseData.code==200)
                {
                  
                  this.setState({  loading: false });
                   
                  try {
                   AsyncStorage.setItem('access_token',responseData.data.access_token); 
                   AsyncStorage.setItem('isLoggedIn','1'); 
                  } catch (error) {
                    // Error saving data
                  }

                  navigation.navigate("Home")
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
    const { loading } = this.state;

    

    return (
      <Block style={{backgroundColor :"#F6EEEE"}}>



      <ScrollView style={{ marginVertical: theme.sizes.padding }} >
      <KeyboardAvoidingView style={styles.login} >
        
          <Text h1 center bold>
          {"\n"}
        
          </Text>
          
         
        <Card style={styles.cardstyle}>  

        <Toast
                    ref="toast"
                    style={{backgroundColor:'red',borderRadius: width/20}}
                    position='top'
                    positionValue={500}
                    fadeInDuration={200}
                    fadeOutDuration={500}
                    opacity={1}
                    textStyle={{color:'white'}}
         />
       
        <Block style= {styles.logoblock}> 
         <Image  style= {styles.logoimage} source={require('../assets/logo.jpg')}
         />     
         <Text style= {styles.loginText} h1 center>Login to Proceed !</Text>   
    <Text>{"\n"}</Text>
          </Block>

        <Block padding={[0, theme.sizes.base * 0.6]}>
          <Block middle>
            <Input  
              placeholder="Email"
              placeholderTextColor="#7D3C3C"
              style={[styles.textInput, ]}
              defaultValue='paras@elscript.com'
              Value="paras@elscript.com"
              onChangeText={text => this.setState({ email: text })}
            />
            <Input 
              placeholder="Password"
              placeholderTextColor="#7D3C3C"
              style={[styles.textInput]}
              defaultValue='paras123'
              Value="paras123"
              secureTextEntry={true}
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
        <TouchableOpacity onPress={() => navigation.navigate("Forgot")}>

              <Text
                caption
                center
                style={{fontSize:width/29,}}
                
              >
                Forgot your password?
                {"\n"}{"\n"}
              </Text>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
        <Text
                caption
                center
                gray
                style={{fontSize:width/29,}}
                
              >
                Don't have an account? 
                <Text style={{color:'#FF6600'}}> Click Here</Text> 
                   
         </Text>
         </TouchableOpacity>
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

  loginbutton: {
  
    borderRadius: width/20,
    margin:1,
  },
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
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
