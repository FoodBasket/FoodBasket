import React, { Component } from "react";
import {
  Animated,
  Dimensions,
  Image,
  FlatList,
  Modal,
  StyleSheet,
  ScrollView,
  ImageBackground,
} from "react-native";

import { Button, Block, Text } from "../components";
import { theme } from "../constants";

const { width, height } = Dimensions.get("window");

class Welcome extends Component {
  static navigationOptions = {
    headerShown: false
  };

  scrollX = new Animated.Value(0);

  state = {
    showTerms: false
  };

  

  renderTermsService() {
    return (
      <Modal
        animationType="slide"
        visible={this.state.showTerms}
        onRequestClose={() => this.setState({ showTerms: false })}
      >
        <Block
          padding={[theme.sizes.padding * 2, theme.sizes.padding]}
          space="between"
        >
          <Text h2 center light>
            Terms of Service
          </Text>

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

          <Block middle padding={[theme.sizes.base / 2, 0]}>
            <Button style={styles.shadow}
              gradient
              onPress={() => this.setState({ showTerms: false })}
            >
              <Text center white>
                I  UNDERSTAND
              </Text>
            </Button>
          </Block>
        </Block>
      </Modal>
    );
  }

  renderIllustrations() {
    const { illustrations } = this.props;

    return (
      <FlatList
        horizontal
        pagingEnabled
        scrollEnabled
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        snapToAlignment="center"
        data={illustrations}
        extraDate={this.state}
        keyExtractor={(item, index) => `${item.id}`}
        renderItem={({ item }) => (
          <Image
            source={item.source}
            resizeMode="contain"
            style={{ width, height: height / 3, overflow: "visible" }}
          />
        )}
        onScroll={Animated.event([
          {
            nativeEvent: { contentOffset: { x: this.scrollX } }
          }
        ])}
      />
    );
  }

  renderSteps() {
    const { illustrations } = this.props;
    const stepPosition = Animated.divide(this.scrollX, width);
    return (
      <Block row center middle style={styles.stepsContainer}>
        {illustrations.map((item, index) => {
          const opacity = stepPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [0.4, 1, 0.4],
            extrapolate: "clamp"
          });

          return (
            <Block
              animated
              flex={false}
              key={`step-${index}`}
              color="gray"
              style={[styles.steps, { opacity }]}
            />
          );
        })}
      </Block>
    );
  }

  render() {
    const { navigation } = this.props;

    return (
      <Block style={{backgroundColor :"#F6EEEE"}}>
      
        <Block center middle>
        <Text h1 center>{"\n"}</Text>  
        <Text h2 center light>
            Welcome{"\n"}
          </Text>  
 
          {this.renderIllustrations()}
        </Block>
        <Block middle flex={0.5} margin={[0, theme.sizes.padding * 1.5]}>
          <Button style={styles.button} gradient onPress={() => navigation.navigate("Login")}>
          <Text
                 white
                caption
                center
                style={{fontSize:width/30,}}
              >
             Let's Get Started &gt;
            </Text>
          </Button>
          <Button style={styles.button} onPress={() => this.setState({ showTerms: true })}>
          <Text
                gray
                caption
                center
                style={{fontSize:width/30,}}
                
              >
              Terms Of Service
            </Text>
          </Button>
        </Block>
        {this.renderTermsService()}
      </Block>
    );
  }
}

Welcome.defaultProps = {
  illustrations: [
    { id: 1, source: require("../assets/images/tutorial1.png") }
    
  ]
};

export default Welcome;

const styles = StyleSheet.create({

  
  stepsContainer: {
    position: "absolute",
    bottom: theme.sizes.base * 3,
    right: 0,
    left: 0
  },
  steps: {
    width: 5,
    height: 5,
    borderRadius: 5,
    marginHorizontal: 2.5
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  button: {
  
    borderRadius: width/10,
    shadowOpacity: 1,
    elevation:2,
  },

  
});
