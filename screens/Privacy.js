import React, { Component } from "react";
import {
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  View,
} from "react-native";
const { width } = Dimensions.get("window");



import { Card } from "../components";
import { Button, Block, Text } from "../components";
import StarRating from '../components/StarRating';
import { theme } from "../constants";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';



export default class Privacy extends Component {
  state = {
    
  };

  static navigationOptions=({navigation}) => ({
    title: 'Privacy Policy',
    headerTintColor: 'black',
    headerStyle: {
      backgroundColor: 'white'
    },
  
  });



  render() {
    const { navigation } = this.props;
    const { loading, errors } = this.state;
    const hasErrors = key => (errors.includes(key) ? styles.s : null);
    

    return (
        <Block
        padding={[ theme.sizes.padding]}
        space="between"
      >
       
        <ScrollView style={{ marginVertical: theme.sizes.padding }}>
          <Text
            caption
            gray
            height={24}
            style={{ marginBottom: theme.sizes.base }}
          >
            1. Welcome to the Homeseek website/app. If you continue to browse and use our website
                as well as app, you are to concur with and be bound by the following terms and
                conditions of use, which automatically implies that you acknowledge, understand and
                agree to all our policies. If you disagree with any part of these terms and conditions,
                please do not use our website. The term ‘Homeseekfood.com’ or ‘us’ or ‘we’ refers to
                the owner of this website. The terms ‘you’ or &#39;our customers&#39; or &#39;website users&#39; refers to
                the user or viewer of our website. Homeseek may change or modify its Terms and
                Policies in the future and for any or no reason by posting revisions here. Your continued
                use of the site constitutes your acceptance of the revised Terms. You should visit this
                page and review the Terms and policies recurrently.
          </Text>
          <Text
            caption
            gray
            height={24}
            style={{ marginBottom: theme.sizes.base }}
          >
            2. Homeseekfood.com is owned and operated by RAA Pvt. Ltd. Our services are limited to
              enable home based cooks to sell food to their customers. We are in no way responsible
              for the quality of the foods and their packaging as offered by the home chefs. Please
              note that at any given time and with or without notice, we may offer any kind of
              incentives or promotions, shorten or extend the duration of any incentive or promotion
              program and/or terminate or modify any incentive or promotion programs.
          </Text>
          <Text
            caption
            gray
            height={24}
            style={{ marginBottom: theme.sizes.base }}
          >
            3. The information regarding price, product specifications and availability included in this
                site is directly provided by us and Homeseek has every right to influence on the pricing
                scheme. The prices charged by us cover the production cost and a marginal profit. The
                prices listed on the website are the final prices for the customers, unless mentioned
                otherwise.
          </Text>
          <Text
            caption
            gray
            height={24}
            style={{ marginBottom: theme.sizes.base }}
          >
            4. All ordering is performed online or via telephone. Buyers can pay with cash on delivery
                or pay fully via the payment gateway if any. Homeseek provides you with a separate
                online bill at the time of ordering. Homeseek shall not in any manner be considered the
                seller of the food but merely a platform.
          </Text>
          <Text
            caption
            gray
            height={24}
            style={{ marginBottom: theme.sizes.base }}
          >
            5. Homeseek takes customer satisfaction very seriously. In the case of problems with your
                food order, please contact us. In appropriate cases, Homeseek will issue full or partial
                refunds. For example: if you did not receive your order or received an incorrect order,
                you may be issued a full refund; if part of your order is missing, we may issue a partial
                refund. In every event, we will do our best to ensure your satisfaction.
          </Text>
          <Text
            caption
            gray
            height={24}
            style={{ marginBottom: theme.sizes.base }}
          >
            6. The site and its content are Homeseek property and are protected by copyright, patent,
                trademark and other intellectual property laws. Except as expressly authorized herein,
                you may not reproduce, transmit, sell, display, publish, broadcast, distribute, circulate,
                modify, disseminate or commercially exploit this site or its content in any manner
                (including electronic, print or other media now known or hereafter developed) without
                our written consent. If you have any questions about any material posted on this site,
                we urge you to contact a Homeseekfood.com representative.
          </Text>
          <Text
            caption
            gray
            height={24}
            style={{ marginBottom: theme.sizes.base }}
          >
            7. You acknowledge that from time to time, we may record certain telephone calls used
                for customer service and/or related purposes, and to the extent that any such recording
                occurs involving you, you consent to such recordings.
          </Text>
          <Text
            caption
            gray
            height={24}
            style={{ marginBottom: theme.sizes.base }}
          >
            8. We employ the use of cookies. By accessing Homeseekfood, you agreed to use cookies
                in agreement with the Homeseek&#39;s Privacy Policy. Most interactive websites use cookies
                to let us retrieve the user’s details for each visit. Cookies are used by our website to
                enable the functionality of certain areas to make it easier for people visiting our
                website. Some of our affiliate/advertising partners may also use cookies.
          </Text>
          <Text
            caption
            gray
            height={24}
            style={{ marginBottom: theme.sizes.base }}
          >
            9. Unless otherwise stated, Homeseek and/or its licensors own the intellectual property
              rights for all material on Homeseekfood. All intellectual property rights are reserved.
              You may access this from Homeseekfood for your own personal use subjected to
              restrictions set in these terms and conditions.
              {"\n"}{"\n"}
              You must not:
              {"\n"}
              Republish material from Homeseekfood
              {"\n"}
              Sell, rent or sub-license material from Homeseekfood
              {"\n"}
              Reproduce, duplicate or copy material from Homeseekfood
              {"\n"}
              Redistribute content from Homeseekfood
              {"\n"}
              This Agreement shall begin on the date hereof.
              {"\n"}
              Parts of this website offer an opportunity for users to post and exchange opinions and
              information in certain areas of the website. Homeseek does not filter, edit, publish or
              review Comments prior to their presence on the website. Comments do not reflect the
              views and opinions of Homeseek,its agents and/or affiliates. Comments reflect the
              views and opinions of the person who post their views and opinions. To the extent
              permitted by applicable laws, Homeseek shall not be liable for the Comments or for any
              liability, damages or expenses caused and/or suffered as a result of any use of and/or
              posting of and/or appearance of the Comments on this website.
              {"\n"}
              Homeseek reserves the right to monitor all Comments and to remove any Comments
              which can be considered inappropriate, offensive or causes breach of these Terms and
              Conditions.
              {"\n"}
              You warrant and represent that:
              {"\n"}
              You are entitled to post the Comments on our website and have all necessary licenses
              and consents to do so;
              {"\n"}
              The Comments do not invade any intellectual property right, including without
              limitation copyright, patent or trademark of any third party;
              {"\n"}
              The Comments do not contain any defamatory, libelous, offensive, indecent or
              otherwise unlawful material which is an invasion of privacy
              {"\n"}
              The Comments will not be used to solicit or promote business or custom or present
              commercial activities or unlawful activity.
              {"\n"}
              You hereby grant Homeseek a non-exclusive license to use, reproduce, edit and
              authorize others to use, reproduce and edit any of your Comments in any and all forms,
              formats or media.

          </Text>
          <Text
            caption
            gray
            height={24}
            style={{ marginBottom: theme.sizes.base }}
          >
            10. IN NO EVENT SHALL FOODMANDU OR ITS DIRECTORS, MEMBERS, EMPLOYEES, OR
                AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY INDIRECT, CONSEQUENTIAL,
                EXEMPLARY, INCIDENTAL, SPECIAL OR PUNITIVE DAMAGES, INCLUDING LOST PROFIT
                DAMAGES ARISING FROM YOUR USE OF THE WEBSITE OR FOODMANDU SERVICES, EVEN
                IF FOODMANDU HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
                NOTWITHSTANDING ANYTHING TO THE CONTRARY CONTAINED HEREIN,
                FOODMANDU&#39;S LIABILITY TO YOU FOR ANY CAUSE WHATSOEVER AND REGARDLESS OF
                THE FORM OF THE ACTION, WILL AT ALL TIMES BE LIMITED TO THE AMOUNT PAID, IF
                ANY, BY YOU TO FOODMANDU FOR FOODMANDU SERVICES DURING THE PERIOD OF 1
                MONTH PRIOR TO ANY CAUSE OF ACTION ARISING.
          </Text>
        </ScrollView>
      </Block>
    );
  }
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    sliderContainer: {
      height: 200,
      width: '90%',
      marginTop: 10,
      justifyContent: 'center',
      alignSelf: 'center',
      borderRadius: 8,
    },
  
    wrapper: {},
  
    slide: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: 'transparent',
      borderRadius: 8,
    },
    sliderImage: {
      height: '100%',
      width: '100%',
      alignSelf: 'center',
      borderRadius: 8,
    },
    categoryContainer: {
      flexDirection: 'row',
      width: '90%',
      alignSelf: 'center',
      marginTop: 25,
      marginBottom: 10,
    },
    categoryBtn: {
      flex: 1,
      width: '30%',
      marginHorizontal: 0,
      alignSelf: 'center',
    },
    categoryIcon: {
      borderWidth: 0,
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'center',
      width: 70,
      height: 70,
      backgroundColor: '#fdeae7' /* '#FF6347' */,
      borderRadius: 50,
    },
    categoryBtnTxt: {
      alignSelf: 'center',
      marginTop: 5,
      color: '#de4f35',
    },
    cardsWrapper: {
      marginTop: 20,
      width: '90%',
      alignSelf: 'center',
    },
    card: {
      height: 100,
      marginVertical: 10,
      flexDirection: 'row',
      shadowColor: '#999',
      shadowOffset: {width: 0, height: 1},
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 5,
    },
    cardImgWrapper: {
      flex: 1,
    },
    cardImg: {
      height: '100%',
      width: '100%',
      alignSelf: 'center',
      borderRadius: 8,
      borderBottomRightRadius: 0,
      borderTopRightRadius: 0,
    },
    cardInfo: {
      flex: 2,
      paddingLeft: 5,
      borderColor: '#ccc',
      borderWidth: 1,
      borderLeftWidth: 0,
      borderBottomRightRadius: 8,
      borderTopRightRadius: 8,
      backgroundColor: '#fff',
    },
    cardTitle: {
      fontWeight: 'bold',
    },
    cardDetails: {
      fontSize: 12,
      color: '#444',
    },
  });