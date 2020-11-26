import React, { Component } from "react";
import {
  Animated,
  Dimensions,
  Image,
  FlatList,
  StyleSheet,
  ScrollView,
  View,
  TouchableOpacity,
} from "react-native";
import { Block, Text } from "../components";
import { theme } from "../constants";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import StarRating from '../components/StarRating';
import { Alert, BackHandler } from "react-native";



const { width, height } = Dimensions.get("window");



const url = 'https://foodapp.elscript.com/';
let response=  fetch(url+'api/categories', {
            method: 'GET',
        })

            .then((response) => response.json())
            .then((responseData) => {
              categoryData=responseData.categoryData;
                

      })
      .catch((error) =>{
        console.error(error);
      }) 

  let slideresponse=  fetch(url+'api/slide', {
        method: 'GET',
    })

        .then((slideresponse) => slideresponse.json())
        .then((responseData) => {
          SlideData=responseData.SlideData;
          
  })
  .catch((error) =>{
    console.error(error);
  }) 

 




let itemresponse=  fetch(url+'api/items', {
      method: 'GET',
  })

      .then((itemresponse) => itemresponse.json())
      .then((responseData) => {
        global.ItemData=responseData.ItemData;
        
})
.catch((error) =>{
  console.error(error);
})


class Home extends Component {

  constructor(props) {

    super(props);

    this.back_Button_Press = this.back_Button_Press.bind(this);

  }

  componentWillMount() {

    BackHandler.addEventListener('hardwareBackPress', this.back_Button_Press);
  }
  componentWillUnmount() {
 
    BackHandler.removeEventListener('hardwareBackPress', this.back_Button_Press);
  }

  
back_Button_Press = () => {

  // Put your own code here, which you want to exexute on back button press.
  if(this.props.navigation.isFocused()){
  Alert.alert(
    ' Exit From App ',
    ' Do you want to exit From App ?',
    [
      { text: 'Yes', onPress: () => BackHandler.exitApp() },
      { text: 'No', onPress: () => console.log('NO Pressed') }
    ],
    { cancelable: false },
  );

  // Return true to enable back button over ride.
  return true;
  }
}

 
  static navigationOptions=({navigation}) => ({

    title: "Homeseek"
    ,
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
       {/*  <TouchableOpacity onPress={() => navigation.navigate("Location")}>
        <MaterialIcons middle style={{padding:10,paddingTop:15}} name="location-on" size={25} color="#FF6347" />
        </TouchableOpacity>
      */}
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

  renderIllustrations(SlideData) {

    return (
      <FlatList
        horizontal
        pagingEnabled
        scrollEnabled
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        snapToAlignment="center"
        data={SlideData}
        extraDate={this.state}
        style={{ width, height: height / 3.5, overflow: "visible" }}
        keyExtractor={(item, index) => `${item.id}`}
        renderItem={({ item }) => (
          <Image
            source={{uri: url+item.image_name}}
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

  renderSteps(SlideData) {
    const stepPosition = Animated.divide(this.scrollX, width);
    return (
      <Block row  middle style={styles.stepsContainer}>
        {SlideData.map((item, index) => {
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


        

      
      <Block style={{backgroundColor:'white'}}>

       <ScrollView
          showsVerticalScrollIndicator={false}
        >

        

        <Block style={{height: width / 2 }} center middle>
          {this.renderIllustrations(SlideData)}
          {this.renderSteps(SlideData)}
          
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

        {categoryData.map((category, index) => (
          <View style={styles.Container}>
          <TouchableOpacity onPress={() => navigation.navigate("ItemList",{category_name: category.category_name,ItemData: ItemData})}>
          <Image
              source={{
                uri: url+category.image,
              }}
              style={styles.circleImageLayout}
            />
         </TouchableOpacity>

        <Text style={styles.text}>{category.category_name}</Text>
          </View>

   ))}

         </Block>
         </ScrollView>
        <Text h3 center light>
           {"\n"}
           Our Special
       </Text>
       <ScrollView
          showsVerticalScrollIndicator={false}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16}
        >
       <Block row space="between"> 

       {ItemData.map((item, index) => (
       (item.featured=="recommend" ? 
       <TouchableOpacity onPress={() => navigation.navigate("Overview",{ItemDetails: item})}>
       <View style={{ padding:width/25,paddingLeft:0,paddingRight:10, }}>
                      
       <View style={{ width: width / 2.3, height: width / 1.7,elevation:1, borderWidth: 1, borderColor: '#dddddd' }}>
                <View style={{ flex: 1 }}>
                    <Image
                        style={{ flex: 1, width: null, resizeMode: 'cover' }}
                        source={{
                          uri: url+item.image_name,
                        }}
                         />
                </View>
                <View style={{  padding: width/40 }}>
                <Text bold >
                      {item.item_name}
                    </Text>
                    <Text bold style={{fontSize:12,color:'#FC4A1A'}}>
                      {item.item_element}
                    </Text>
                    <StarRating ratings={4}  />
                    <Text bold style={{fontSize:13,paddingTop:10,}}>
                      Rs {item.price}
                    </Text>
                   
                </View>
            </View>

        </View>
        </TouchableOpacity>
        : null
        )

        ))}

        
       
        </Block>   
        </ScrollView>
  





          
      

       {categoryData.map((category, index) => (
         (category.category_name=="Drinks" ? 
        <Block>
        <Text h3 center light>
           {"\n"}
           {category.category_name}
       </Text>
          <ScrollView
          showsVerticalScrollIndicator={false}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16}
        >
      {ItemData.map((item, index) => (
       (item.category==category.category_name ? 

        
       <TouchableOpacity onPress={() => navigation.navigate("Overview",{ItemDetails: item})}>
       <View style={{ padding:width/25,paddingLeft:0,paddingRight:10, }}>
                      
       <View style={{ width: width / 2.3, height: width / 1.5,elevation:1, borderWidth: 1, borderColor: '#dddddd' }}>
                <View style={{ flex: 1 }}>
                    <Image
                        style={{ flex: 1, width: null, resizeMode: 'cover' }}
                        source={{
                          uri: url+item.image_name,
                        }}
                         />
                </View>
                <View style={{  padding: width/40 }}>
                <Text bold >
                      {item.item_name}
                    </Text>
                    <Text bold style={{fontSize:12,color:'#FC4A1A'}}>
                      {item.item_element}
                    </Text>
                    <StarRating ratings={4}  />
                    <Text bold style={{fontSize:13,paddingTop:10,}}>
                      Rs {item.price}
                    </Text>
                   
                </View>
            </View>

        </View>
        </TouchableOpacity>
        
        : null
        )
        

        ))}
         
          </ScrollView>
  <Block
  style={{
    borderBottomColor: '#E7E3E3',
    borderBottomWidth: 1,
    padding:10
  }}
/>
          </Block>
          : null
          )


           ))}

         





    

<Text h3 center light>
           {"\n"}
           Best on Time
           {"\n"}
    </Text>

    {ItemData.map((item, index) => (
       (item.time1!=null&&item.time2!=null ? 

  <View style={styles.Container}>
  <TouchableOpacity onPress={() => navigation.navigate("Overview",{ItemDetails: item})}>
          <Image
        style={{ width: width, height: width/1.9 }}
        source={{
          uri: url+item.image_name,
        }}
        resizeMode="contain"
         />
         <View style={styles.botstyle}>
           <Text style={{fontSize:16}}>
              {item.item_name}
            </Text>
            <Text  style={{fontSize:13,color:'gray'}}>
              {item.item_element}
            </Text>
            <Text bold style={{fontSize:13,paddingTop:7,color:'gray'}}>
              Time: {item.time1} to {item.time2}
            </Text>
            <Text bold style={{fontSize:14,paddingTop:10,}}>
                  Rs {item.price}
            </Text>
           </View>
  </TouchableOpacity>
  
  <View
   style={{
     borderBottomColor: '#E7E3E3',
     borderBottomWidth: 1,
     padding:10
   }}
 >
   </View>
   <Text>{"\n"}</Text>
   </View>
  
  : null
        )
        
    ))}
   








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
