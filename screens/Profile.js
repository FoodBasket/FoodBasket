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
  AsyncStorage
} from "react-native";
const { width } = Dimensions.get("window");
import Toast, {DURATION} from 'react-native-easy-toast';







import { Card } from "../components";
import { Button, Block, Input, Text } from "../components";
import { theme } from "../constants";




AsyncStorage.getItem("access_token").then((token) => {   //It sends the post request only after the access token is loaded
  
  let response=  fetch('https://foodapp.elscript.com/api/get-user-info', {
  method: 'POST',
  headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization':'Bearer '+token
  }
})

  .then((response) => response.json())
  .then((responseData) => {
      if(responseData.code==200)
      {
         global.userInfo=responseData.userInfo
         validName=responseData.userInfo.name;
         validEmail=responseData.userInfo.email;
         validPhone=responseData.userInfo.phone;
      }
     

})
.catch((error) =>{
console.error(error);
}) 
 });





export default class Profile extends Component {


  state = {
    name: validName,
    email: validEmail,
    phone: validPhone,
    loading: false
  };
  

  static navigationOptions = () => ({
    title: 'User Profile',
    headerTintColor: 'black',
    headerStyle: {
      backgroundColor: 'white'
    },
  });
  
  

  handleUser = async () => {
    const { navigation } = this.props;
    const { name,email,phone, password,c_password } = this.state;

   

    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if(name.length<4&&name.length<0)
    {
      this.refs.toast.show("Invalid fullname length !",2000);
      return;

    }
    if(password!=c_password)
    {
      this.refs.toast.show("Password field do not match !",2000);
      return;

    }

   
    if(phone.length<5)
    {
      this.refs.toast.show("Please use the valid phone number !",2000);
      return;

    }


    Keyboard.dismiss();
    this.setState({ loading: true });

   


    let response= await fetch('https://foodapp.elscript.com/api/update-user', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization':'Bearer '+token
            },
            body: JSON.stringify({
              name: name,
              phone: phone,
              email: email,
              password: password,
              c_password: c_password,
            })
        })

        .then((response) => response.json())
        .then((responseData) => {
            if(responseData.code==200)
            { 
              alert("User Details have been updated successfully !");
              
              this.setState({  loading: false });

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







        <Block padding={[0, theme.sizes.base * 0.6]}>
          <Block middle>
            <Input  
              placeholder="Fullname"
              placeholderTextColor="#7D3C3C"
              style={[styles.textInput]}
              onChangeText={text => this.setState({ name: text })}
              defaultValue={this.state.name}
             
            />

            <Input  
              placeholder="Email Address"
              placeholderTextColor="#7D3C3C"
              style={[styles.textInput]}
              onChangeText={text => this.setState({ email: text })}
              defaultValue={this.state.email}
              
            />
            <Input  
              placeholder="Phone Number"
              placeholderTextColor="#7D3C3C"
              style={[styles.textInput]}
              onChangeText={text => this.setState({ phone: text })}
              defaultValue={this.state.phone}
              
            />
            <Input 
              placeholder="Password"
              placeholderTextColor="#7D3C3C"
              secureTextEntry={true}
              style={[styles.textInput,]}
              onChangeText={text => this.setState({ password: text })}
            />

            <Input 
              placeholder="Change Password"
              placeholderTextColor="#7D3C3C"
              secureTextEntry={true}
              style={[styles.textInput]}
              onChangeText={text => this.setState({ c_password: text })}
            />
            <Text>{"\n"}</Text>

            <Button  style={styles.loginbutton} gradient onPress={() => this.handleUser()}>
              {loading ? (
                <ActivityIndicator size="small" color="white" />
              ) : (
                <Text bold white center>
                  UPDATE USER
                </Text>
              )}
            </Button>

           
          </Block>
        </Block>
      
                 <Toast
                    ref="toast"
                    style={{backgroundColor:'red',borderRadius: width/20}}
                    position='top'
                    positionValue={400}
                    fadeInDuration={200}
                    fadeOutDuration={500}
                    opacity={0.8}
                    textStyle={{color:'white'}}
                />
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
