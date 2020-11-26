import React, { Component } from "react";
import { TextInput } from 'react-native';
import {
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
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


export default class Login extends Component {

  state = {
    subject: '0',
    feedback: '1',
  };

  
  static navigationOptions=({navigation}) => ({
    title: 'Feedback',
    headerTintColor: 'black',
    headerStyle: {
      backgroundColor: 'white'
    },
 
  });
  submitFeedback = async () => {
    const { subject,feedback } = this.state;

  if(subject.length>200||subject.length<4)
  {
    this.refs.toast.show("Please enter the valid subject length !",2000);
      return;
    
  }
  if(feedback.length>200||feedback.length<4)
  {
    this.refs.toast.show("Please enter the valid feedback length !",2000);
    return;
    
  }


  let response= await fetch('https://foodapp.elscript.com/api/ratings', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization':'Bearer '+token
    },
    body: JSON.stringify({
      title: subject,
      feedback: feedback,
    })
})
.then((response) => response.json())
.then((responseData) => {
    if(responseData.code==200)
    { 
      alert(responseData.message);
      this.subject.clear();
      this.feedback.clear();
      return;

    }
    else if(responseData.code==401)
    {
      this.refs.toast.show(responseData.message,2000);

    }
    else{
      this.refs.toast.show(responseData.message,2000);
    }

})






  }

  render() {
    const { navigation } = this.props;

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

               <Toast
                    ref="toast"
                    style={{backgroundColor:'red',borderRadius: width/20}}
                    position='top'
                    positionValue={200}
                    fadeInDuration={200}
                    fadeOutDuration={500}
                    opacity={0.8}
                    textStyle={{color:'white'}}
               />

          <Block middle>
            <TextInput 
              style={styles.smalltextArea} 
              placeholder="  Subject"
              placeholderTextColor="gray"
              onChangeText={text => this.setState({ subject: text })}
              ref={input => { this.subject = input }}

            />
            <Text>{"\n"}</Text>
  
          <View style={styles.textAreaContainer} >
            <TextInput
              style={styles.textArea}
              placeholder="  Write Something..."
              placeholderTextColor="gray"
              numberOfLines={6}
              multiline={true}
              onChangeText={text => this.setState({ feedback: text })}
              ref={input => { this.feedback = input }}

            />
          </View>

            <Text>{"\n"}</Text>

            <Button  style={styles.loginbutton} gradient onPress={() => this.submitFeedback()}>
              
                <Text bold white center>
                  Submit
                </Text>
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
  smalltextArea: {
    flex: 1,
    height: 50,
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
