import React, { Component } from "react";
import {
  StyleSheet,
  ScrollView,
  Dimensions,
} from "react-native";
const { width } = Dimensions.get("window");


import { Button, Block, Input, Text } from "../components";
import { theme } from "../constants";




export default class AboutApp extends Component {
  state = {

  };
  static navigationOptions = () => ({
    title: 'About the App',
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
         About Us
         {"\n"}
        </Text>

        <Text
         caption
         gray
         height={24}
         style={{ marginBottom: theme.sizes.base }}
         style={styles.aboutForgotPassword}
         >
         Most mobile devices are sold with several apps bundled as pre-installed software, such as a web browser, email client, calendar, mapping program, and an app for buying music, other media, or more apps. Some pre-installed apps can be removed by an ordinary uninstall process, thus leaving more storage space for desired ones. Where the software does not allow this, some devices can be rooted to eliminate the undesired apps.

Apps that are not preinstalled are usually available through distribution platforms called app stores. They began appearing in 2008 and are typically operated by the owner of the mobile operating system, such as the Apple App Store, Google Play, Windows Phone Store, and BlackBerry App World. However, there are independent app stores, such as Cydia, GetJar and F-Droid. Some apps are free, while others must be bought. Usually, they are downloaded from the platform to a target device, but sometimes they can be downloaded to laptops or desktop computers. For apps with a price, generally a percentage, 20-30%, goes to the distribution provider (such as iTunes), and the rest goes to the producer of the app.[3] The same app can, therefore, cost a different price depending on the mobile platform.

Apps can also be installed manually, for example by running an Android application package on Android devices.
         </Text>

       
         
       

        <Block middle padding={[theme.sizes.base / 2, 0]}>
            <Button style={styles.shadow}
              gradient
              onPress={() => this.props.navigation.goBack()}
            >
              
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
