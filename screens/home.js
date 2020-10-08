import React, { Component } from "react";
import {
  Animated,
  Dimensions,
  Image,
  FlatList,
  Modal,
  StyleSheet,
  ScrollView,
  View,
  TouchableOpacity,
} from "react-native";
import { Card,Block, Text } from "../components";
import { theme } from "../constants";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const { width, height } = Dimensions.get("window");



class Home extends Component {
 
  static navigationOptions=({navigation}) => ({

    title: 'Homeseek',
    headerTitleStyle: { alignSelf: 'center' },
    headerTintColor: 'black',
    headerStyle: {
      backgroundColor: 'white',
    },
    headerLeft:
    ( 
    <MaterialIcons middle style={{padding:10,paddingTop:15}} name="menu" size={25} color="black" onPress={()=>navigation.openDrawer()}/>

    ),
    headerRight: (
      <Block middle  row space="between"> 
         <TouchableOpacity onPress={() => navigation.navigate("Location")}>
        <MaterialIcons middle style={{padding:10,paddingTop:15}} name="location-on" size={25} color="#FF6347" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Notification")}>
        <MaterialIcons   style={{padding:10,paddingTop:15}} name="notifications"  size={25} color="#FF6347" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
        <MaterialIcons   style={{padding:10,paddingTop:15}} name="shopping-cart"  size={25} color="#FF6347" />
        </TouchableOpacity>
      </Block>
    ),
  });
  scrollX = new Animated.Value(0);

  state = {
    showTerms: false
  };

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
        style={{ width, height: height / 3.5, overflow: "visible" }}
        keyExtractor={(item, index) => `${item.id}`}
        renderItem={({ item }) => (
          <Image
            source={item.source}
            resizeMode="contain"
            style={{ width, height: height / 3.5, overflow: "visible" }}
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
      <Block row  middle style={styles.stepsContainer}>
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


        

      
      <Block>

       <ScrollView
          showsVerticalScrollIndicator={false}
        >

        

        <Block style={{height: width / 2 }} center middle>
          {this.renderIllustrations()}
          {this.renderSteps()}
          
        </Block>
        <Text h3 center light>
          
           Category
           
       </Text>
        <ScrollView
          showsVerticalScrollIndicator={false}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16}
        >
          
        <Block style={{paddingTop:10}} flex={false} row space="between" >
          <View style={styles.Container}>

          <TouchableOpacity onPress={() => navigation.navigate("ItemList")}>
            <Image
              source={require("../assets/foodimage/category1.jpg")} 
              style={styles.circleImageLayout}
            />
         </TouchableOpacity>

            <Text style={styles.text}>Khaja</Text>
          </View>
          <View style={styles.Container}>

          <TouchableOpacity onPress={() => navigation.navigate("ItemList")}>
          <Image
              source={require("../assets/foodimage/category2.jpg")} 
              style={styles.circleImageLayout}
            />
         </TouchableOpacity>

            <Text style={styles.text}>Khana</Text>
          </View>
          <View style={styles.Container}>

          <TouchableOpacity onPress={() => navigation.navigate("ItemList")}>
          <Image
              source={require("../assets/foodimage/category3.jpg")} 
              style={styles.circleImageLayout}
            />
         </TouchableOpacity>

            <Text style={styles.text}>Lunch</Text>
          </View>
          <View style={styles.Container}>

          <TouchableOpacity onPress={() => navigation.navigate("ItemList")}>
          <Image
              source={require("../assets/foodimage/category4.jpg")} 
              style={styles.circleImageLayout}
            />
         </TouchableOpacity>

            <Text style={styles.text}>Drinks</Text>
          </View>
          <View style={styles.Container}>

          <TouchableOpacity onPress={() => navigation.navigate("ItemList")}>
          <Image
              source={require("../assets/foodimage/category5.jpg")} 
              style={styles.circleImageLayout}
            />
         </TouchableOpacity>

            <Text style={styles.text}>Ice Cream</Text>
          </View>
         </Block>
         </ScrollView>
        <Text h3 center light>
           {"\n"}
           Our Special
           {"\n"}
       </Text>
  


       <Block flex={false} row space="between" style={styles.categories}>
         
               <TouchableOpacity onPress={() => navigation.navigate("Overview")}>

                <Card  shadow style={styles.category}>
               
                    <Image style={styles.category_image} source={require('../assets/foodimage/food1.jpg')} />
                    <Text bold height={20}>
                      Chicken Piece
                    </Text>
                    <Text bold style={{fontSize:10,color:'#FC4A1A'}}>
                      Fried and Boiled
                    </Text>
                    <Text bold style={{fontSize:13,paddingTop:10,}}>
                      Rs 100
                    </Text>
                </Card>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate("Overview")}>
                <Card  shadow style={styles.category}>
               
                <Image style={styles.category_image} source={require('../assets/foodimage/food2.jpg')} />
                <Text bold height={20}>
                  Burger
                </Text>
                <Text bold style={{fontSize:10,color:'#FC4A1A'}}>
                  Double Layered Cheese
                </Text>
                <Text bold style={{fontSize:13,paddingTop:10,}}>
                  Rs 200
                </Text>
                </Card>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate("Overview")}>
                <Card  shadow style={styles.category}>
               
                <Image style={styles.category_image} source={require('../assets/foodimage/food3.jpg')} />
                <Text bold height={20}>
                  Spring Roll
                </Text>
                <Text bold style={{fontSize:10,color:'#FC4A1A'}}>
                  Crispy and Tasty
                </Text>
                <Text bold style={{fontSize:13,paddingTop:10,}}>
                  Rs 150
                </Text>
                </Card>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate("Overview")}>
                <Card shadow style={styles.category}>
               
                <Image style={styles.category_image} source={require('../assets/foodimage/food4.jpg')} />
                <Text bold height={20}>
                  Desert
                </Text>
                <Text bold style={{fontSize:10,color:'#FC4A1A'}}>
                  Sweet Creamy
                </Text>
                <Text bold style={{fontSize:13,paddingTop:10,}}>
                  Rs 320
                </Text>
                </Card>
                
              </TouchableOpacity>


        </Block>

<Block
  style={{
    borderBottomColor: '#E7E3E3',
    borderBottomWidth: 3,
    padding:10
  }}
/>


<Text h3 center light>
           {"\n"}
           Instant Foods
           {"\n"}
    </Text>

        


<Block flex={false} row space="between" style={styles.categories}>
         
         <TouchableOpacity onPress={() => navigation.navigate("Overview")}>

          <Card  shadow style={styles.category}>
         
              <Image style={styles.category_image} source={require('../assets/foodimage/food9.jpg')} />
              <Text bold height={20}>
              Pizza
            </Text>
            <Text bold style={{fontSize:10,color:'#FC4A1A'}}>
              Double Cheese Crispy
            </Text>
            <Text bold style={{fontSize:13,paddingTop:10,}}>
              Rs 80
            </Text>
          </Card>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Overview")}>
          <Card  shadow style={styles.category}>
         
          <Image style={styles.category_image} source={require('../assets/foodimage/food10.jpg')} />
          <Text bold height={20}>
              Pizza
            </Text>
            <Text bold style={{fontSize:10,color:'#FC4A1A'}}>
              Double Cheese Crispy
            </Text>
            <Text bold style={{fontSize:13,paddingTop:10,}}>
              Rs 160
            </Text>
          </Card>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Overview")}>
          <Card  shadow style={styles.category}>
         
          <Image style={styles.category_image} source={require('../assets/foodimage/food11.jpg')} />
          <Text bold height={20}>
              Pizza
            </Text>
            <Text bold style={{fontSize:10,color:'#FC4A1A'}}>
              Double Cheese Crispy
            </Text>
            <Text bold style={{fontSize:13,paddingTop:10,}}>
              Rs 220
            </Text>
          </Card>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Overview")}>
          <Card shadow style={styles.category}>
         
          <Image style={styles.category_image} source={require('../assets/foodimage/food12.jpg')} />
          <Text bold height={20}>
              Pizza
            </Text>
            <Text bold style={{fontSize:10,color:'#FC4A1A'}}>
              Double Cheese Crispy
            </Text>
            <Text bold style={{fontSize:13,paddingTop:10,}}>
              Rs 30
            </Text>
          </Card>
        </TouchableOpacity>

  </Block>

  <Block
  style={{
    borderBottomColor: '#E7E3E3',
    borderBottomWidth: 3,
    padding:10
  }}
/>
<Text h3 center light>
           {"\n"}
           Best on Time
           {"\n"}
    </Text>

  <View style={styles.Container}>
  <TouchableOpacity onPress={() => navigation.navigate("Overview")}>
          <Image
        style={{ width: width, height: width/1.9 }}
        source={require("../assets/foodimage/food5.jpg")} 
        resizeMode="contain"
         />
         <View style={styles.botstyle}>
           <Text style={{fontSize:16}}>
              Chinese Food Combination & soup
            </Text>
            <Text  style={{fontSize:13,color:'gray'}}>
              Double Cheese Crispy
            </Text>
            <Text bold style={{fontSize:13,paddingTop:7,color:'gray'}}>
              Time: 13:00 to 17:00
            </Text>
            <Text bold style={{fontSize:14,paddingTop:10,}}>
                  Rs 200
            </Text>
           </View>
  </TouchableOpacity>
   </View>

   <Block
  style={{
    borderBottomColor: '#E7E3E3',
    borderBottomWidth: 1,
    padding:10
  }}
/>
<Text>{"\n"}</Text>

<View style={styles.Container}>
<TouchableOpacity onPress={() => navigation.navigate("Overview")}>
          <Image
        style={{ width: width, height: width/1.9 }}
        source={require("../assets/foodimage/food6.jpg")} 
        resizeMode="contain"
         />
         <View style={styles.botstyle}>
           <Text style={{fontSize:16}}>
              Vegetable Salad 
            </Text>
            <Text  style={{fontSize:13,color:'gray'}}>
              From Fresh Vegetable
            </Text>
            <Text bold style={{fontSize:13,paddingTop:7,color:'gray'}}>
              Time: 13:00 to 17:00
            </Text>
            <Text bold style={{fontSize:14,paddingTop:10,}}>
                  Rs 200
            </Text>
           </View>
  </TouchableOpacity>
   </View>

   <Block
  style={{
    borderBottomColor: '#E7E3E3',
    borderBottomWidth: 1,
    padding:10
  }}
/>

<Text>{"\n"}</Text>

<View style={styles.Container}>
<TouchableOpacity onPress={() => navigation.navigate("Overview")}>

          <Image
        style={{ width: width, height: width/1.9 }}
        source={require("../assets/foodimage/food7.jpg")} 
        resizeMode="contain"
         />
         <View style={styles.botstyle}>
           <Text style={{fontSize:16}}>
              Krishpy Fried Chicken
            </Text>
            <Text  style={{fontSize:13,color:'gray'}}>
              Chicken wings and legs 
            </Text>
            <Text bold style={{fontSize:13,paddingTop:7,color:'gray'}}>
              Time: 13:00 to 17:00
            </Text>
            <Text bold style={{fontSize:14,paddingTop:10,}}>
                  Rs 200
            </Text>
           </View>
  </TouchableOpacity>
   </View>

   <Block
  style={{
    borderBottomColor: '#E7E3E3',
    borderBottomWidth: 1,
    padding:10
  }}
/>

<Text>{"\n"}</Text>

<View style={styles.Container}>
<TouchableOpacity onPress={() => navigation.navigate("Overview")}>
          <Image
        style={{ width: width, height: width/1.9 }}
        source={require("../assets/foodimage/food8.jpg")} 
        resizeMode="contain"
         />
         <View style={styles.botstyle}>
           <Text style={{fontSize:16}}>
              Complete Thai Food Set
            </Text>
            <Text  style={{fontSize:13,color:'gray'}}>
              Freshly made with vegetable
            </Text>
            <Text bold style={{fontSize:13,paddingTop:7,color:'gray'}}>
              Time: 13:00 to 17:00
            </Text>
            <Text bold style={{fontSize:14,paddingTop:10,}}>
                  Rs 200
            </Text>
           </View>
  </TouchableOpacity>
   </View>

   <Block
  style={{
    borderBottomColor: '#E7E3E3',
    borderBottomWidth: 1,
    padding:10
  }}
/>
<Text>{"\n"}</Text>
<Text>{"\n"}</Text>

   

        
       
        
         </ScrollView>
      </Block>
    );
  }
}

Home.defaultProps = {
  illustrations: [
    { id: 1, source: require("../assets/images/illustration_1.png") },
    { id: 2, source: require("../assets/images/illustration_2.png") },
    { id: 3, source: require("../assets/images/illustration_3.png") }
  ]
};

export default Home;

const styles = StyleSheet.create({
  stepsContainer: {
    
    right: 0,
    left: 0,
    bottom:15,
  },
  botstyle:{
    left:20
  },
  steps: {
    width: 5,
    height: 5,
    borderRadius: 5,
    marginHorizontal: 2.5
  },

   Container: {
    paddingLeft: 5,
    paddingRight: 5,
    

  },

  circleImageLayout: {
    
    height: width/4,
    borderRadius: 200 / 2,
    width: width/4,
  },

  lineStyle:{
    borderWidth: 0.2,
    borderColor:'black',
    margin:10,
    
  },

  avatar: {
    height: theme.sizes.base * 2.2,
    width: theme.sizes.base * 2.2
  },


  active: {
    borderBottomColor: theme.colors.secondary,
    borderBottomWidth: 3
  },
  categories: {
    flexWrap: "wrap",
    paddingHorizontal: theme.sizes.base * 1,
    marginBottom: theme.sizes.base * 0.1,
    
  },
  text: {
    fontSize: width/30,
    textAlign: 'center',
    
  },
  category_image:{
    height:width/3,
    width:width/2.8,
   },

  

  category: {
    // this should be dynamic based on screen width
    minWidth: (width - theme.sizes.padding * 2.4 - theme.sizes.base) / 2.5,
    maxWidth: (width - theme.sizes.padding * 2.4 - theme.sizes.base) / 1.8,
    maxHeight: (width - theme.sizes.padding *2.4 - theme.sizes.base) /0.2,
    height:width/1.7,
    width:width/2,
    
  }
});
