import React, { Component } from 'react';
import { StyleSheet, Text,  View, Image, ScrollView } from 'react-native';
import StarRating from 'react-native-star-rating';

export default class hotelsScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
          starCount: 3.5
        };
      }
    
      onStarRatingPress(rating) {
        this.setState({
          starCount: rating
        });
    }
    
  render() {
      return (
          < ScrollView style={styles.container}>
              <View>
              <Text style={styles.headerTitle1}>Hotels Gallery</Text>
          </View>

<View style = { styles.scrollViewHolder }>
   <ScrollView horizontal = { true }>

      <Image style={styles.images2} source={require("./assets/hotel12.jpeg")}></Image>
      {/* <View style = { styles.separator }/> */}
      <Image style={styles.images2} source={require("./assets/hotel5.jpg")}></Image>
      <Image style={styles.images2} source={require("./assets/hotel11.jpg")}></Image>
      <Image style={styles.images2} source={require("./assets/hotel4.jpg")}></Image>
      <Image style={styles.images2} source={require("./assets/hotel5.jpg")}></Image>
      <Image style={styles.images2} source={require("./assets/hotel2.jpg")}></Image>
      <Image style={styles.images2} source={require("./assets/hotel4.jpg")}></Image>
      <Image style={styles.images2} source={require("./assets/hotel2.jpg")}></Image>
      <Image style={styles.images2} source={require("./assets/hotel6.jpg")}></Image> 
   </ScrollView>
</View>
<View style={styles.hotelContainer1}>
      <Image style={styles.image1}
       source={require("./assets/hotel7.png")} />
      <View>
        <Text style={styles.title1}>Couples Tower Isle, St. Mary, </Text>
        <Text style={styles.subtitle1}>Best Resort in Jamiaca, and cheap</Text>
        <Text style={styles.price1}>$129 Per Night</Text>
        <View style={styles.starRating}>
        <StarRating
        disabled={false}
        maxStars={5}
        starSize={10}
        rating={this.state.starCount}
        selectedStar={(rating) => this.onStarRatingPress(rating)}/>
      </View>
      </View>
    </View>

    <View>
        <Image style={styles.heroImage3} source={require("./assets/ritzcarlton.jpeg")}></Image>
    </View>


<View style = { styles.scrollViewHolder }>
   <ScrollView horizontal = { true }>

      <Image style={styles.images} source={require("./assets/hotel5.jpg")}></Image>
      <Image style={styles.images} source={require("./assets/ritzcarlton.jpeg")}></Image>
      <Image style={styles.images} source={require("./assets/chelsea.jpg")}></Image>
      <Image style={styles.images} source={require("./assets/shangrila.jpg")}></Image>
      <Image style={styles.images} source={require("./assets/fourseason.jpg")}></Image>
      <Image style={styles.images} source={require("./assets/hotel2.jpg")}></Image>
      <Image style={styles.images} source={require("./assets/hotel4.jpg")}></Image>
      <Image style={styles.images} source={require("./assets/hotel5.jpg")}></Image>
      <Image style={styles.images} source={require("./assets/hotel6.jpg")}></Image> 
   </ScrollView>
</View>
<View style={styles.hotelContainer1}>
      <Image style={styles.image1}
       source={require("./assets/hotel14.jpg")} />
      <View>
        <Text style={styles.title1}>Carlton  Hotel</Text>
        <Text style={styles.subtitle1}>Best Hotel in North America</Text>
        <Text style={styles.price1}>$299 Per Night</Text>
        <View style={styles.starRating}>
        <StarRating
        disabled={false}
        maxStars={5}
        starSize={10}
        rating={this.state.starCount}
        selectedStar={(rating) => this.onStarRatingPress(rating)}/>
      </View>
      </View>
    </View>
</ScrollView>
     );

  }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    scrollViewHolder: {
        // flex: 1,
        // top: 5,
    },
    headerTitle1: {
        justifyContent: "center",
        alignItems: "center",
        fontSize: 24,
        color: 'red',
        fontWeight: "800",
        marginBottom: 2,
        paddingHorizontal: 0,
        paddingVertical: 5,
        position: 'relative',
        top: 50,
        paddingLeft: 120,
        // backgroundColor: "#f2f2f2",
        // shadowOpacity: 3,
        bottom: 20,
      },
      images: {
        width: 180,
        height: 180,
        // justifyContent: 'center',
        margin: 10,
        borderRadius: 110,
        // top: 30,
        bottom: 10,
        marginTop: 20,
    },
    images2: {
        width: 180,
        height: 180,
        // justifyContent: 'center',
        margin: 10,
        borderRadius: 90,
        // top: 30,
        bottom: 10,
        marginTop: 60,
    },
    heroImage1: {
        backgroundColor: 'transparent',
        height: 200,
        width: null,
        justifyContent: "center",
        alignItems: "center",
        // position: 'relative',
        borderRadius: 2,
        // margin: 5,
      },
      heroImage3: {
        backgroundColor: 'transparent',
        height: 200,
        width: null,
        justifyContent: "center",
        alignItems: "center",
        position: 'relative',
        marginTop: 0,
        borderRadius: 3,
        margin: 5
      },
      heroImage4: {
        backgroundColor: 'transparent',
        height: 200,
        width: null,
        // justifyContent: "center",
        // alignItems: "center",
        position: 'relative',
        marginTop: 30
      },

      hotelContainer1: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        flexDirection: 'column',
        flex: 2,
        backgroundColor: "#f2f2f2",
        borderRadius: 5,
        padding: 10,
        // margin: 10,
        shadowOpacity: 0.4,
        top: 5,
    
      },
    
    title1: {
        fontSize: 24,
        fontWeight: "500",
        marginBottom: 4,
        paddingHorizontal: 20,
        paddingVertical: 5,
        justifyContent: "center",
        alignItems: "center",
        position: 'relative',
      },
      subtitle1: {
        fontSize: 18,
        fontWeight: '500',
        marginBottom: 12,
        paddingHorizontal: 20,
        justifyContent: "center",
        alignItems: "center",
      },
      description1: {
        fontSize: 22,
        color: 'purple',
        fontWeight: "800",
        marginBottom: 2,
        paddingHorizontal: 65,
        paddingVertical: 5,
        justifyContent: "center",
        alignItems: "center",
        position: 'absolute',
        top: 60,
      },
      image1: {
        width: 380,
        height: 200,
        borderRadius: 3,
        paddingLeft: 0,
      },
      price1: {
        color: 'green',
        fontSize: 20,
        paddingHorizontal: 20,
      },
      starRating: {
          width: 180,
          height: 80,
          paddingLeft: 22,
          top: 20,
      },
    
});