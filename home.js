import React from 'react';
import { StyleSheet, Text,  View, Image, ScrollView, SafeAreaView } from 'react-native';
import StarRating from 'react-native-star-rating';


export default class App extends React.Component {

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
  return <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
   <ScrollView style={styles.container}>
  <View style={styles.detailsContainer}>
  <View>
  <Text style={styles.headerTitle}> Please Book your Next Hotel Here</Text>
  <Text style={styles.subtitle}></Text>
  </View>
  <View>
  <Image style={styles.heroImage} source={require("./assets/toronto.jpg")}>
  </Image>
  </View>
  </View>
  <View style = { styles.scrollViewHolder }>
  <ScrollView horizontal = { true } showsHorizontalScrollIndicator = { false }>
  <Image style={styles.img} source={require("./assets/hotel1.jpg")}></Image>
        <Image style={styles.img} source={require("./assets/hotel6.jpg")}></Image>
        <Image style={styles.img} source={require("./assets/hotel3.jpg")}></Image>
        <Image style={styles.img} source={require("./assets/hotel4.jpg")}></Image>
        <Image style={styles.img} source={require("./assets/hotel5.jpg")}></Image>
        <Image style={styles.img} source={require("./assets/hotel2.jpg")}></Image>
        <Image style={styles.img} source={require("./assets/hotel4.jpg")}></Image>
        <Image style={styles.img} source={require("./assets/hotel5.jpg")}></Image>
        <Image style={styles.img} source={require("./assets/hotel6.jpg")}></Image>
</ScrollView>
</View>
      <View style={styles.hotelsContainer} >
      <Text style={styles.hotelsTitle}>Best Hotels in Toronto</Text>
      </View>

<View style={styles.hotelContainer}>
        <Image style={styles.image}
        source={require("./assets/chelsea.jpg")} />
    <View>
    <Text style={styles.title}>Chelsea Hotel</Text>
    <Text style={styles.subtitle}>Best Hotel in Toronto</Text>
    <Text style={styles.price}>$159 Per Night</Text>
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
<View style={styles.hotelContainer}>
<Image style={styles.image}
source={require("./assets/fourseason.jpg")} />
<View>
<Text style={styles.title}>Four Seasons</Text>
<Text style={styles.subtitle}>60 Yorkville Ave, Toronto</Text>
<Text style={styles.price}>$279 Per Night</Text>
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
<View style={styles.hotelContainer}>
<Image style={styles.image}
source={require("./assets/ritzcarlton.jpeg")} />
<View>
    <Text style={styles.title}>The Ritz-Carlton</Text>
    <Text style={styles.subtitle}>181 Wellington St Toronto</Text>
    <Text style={styles.price}>$229 Per Night</Text>
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
<View style={styles.hotelContainer}>
<Image style={styles.image}
source={require("./assets/shangrila.jpg")} />
<View>
<Text style={styles.title}>Shangri-La Hotel</Text>
<Text style={styles.subtitle}>188 University Ave, Toronto</Text>
<Text style={styles.price}>$199 Per Night</Text>
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
</SafeAreaView>
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  detailsContainer: {
    flex: 2,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "grey",
    backgroundColor: 'transparent',
    position: 'relative',
  },
  headerTitle: {
    justifyContent: "center",
    alignItems: "center",
    fontSize: 22,
    color: 'blue',
    fontWeight: "800",
    marginBottom: 2,
    paddingHorizontal: 0,
    paddingVertical: 5,
    position: 'relative',
    top: 20,
    paddingLeft: 30,
    // backgroundColor: "#f2f2f2",
    // shadowOpacity: 3,
    bottom: 20,
  },
  subtitle: {
    fontSize: 22,
    fontWeight: '500',
    marginBottom: 12,
    paddingHorizontal: 40,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    top: 10,
  },
  heroImage: {
    backgroundColor: 'transparent',
    height: 200,
    width: null,
    justifyContent: "center",
    alignItems: "center",
    position: 'relative',
    marginTop: 20
  },
// HORIZONTAL SCROLLVIEW IMAGES
img: {
  width: 160,
  height: 160,
  justifyContent: 'center',
  margin: 10,
  borderRadius: 10,
},
// BEST HOTELS TITLE
hotelsTitle: {
  alignContent: "center",
  fontSize: 28,
  justifyContent: "center",
  alignItems: "center",
  paddingLeft: 40,
  fontWeight: '600',
  marginTop: 20,
  marginBottom: 20,
},
hotelsSection:{
  borderColor: "blue",
  flex: 1
},
hotelContainer: {
  paddingVertical: 20,
  paddingHorizontal: 20,
  flexDirection: 'row',
  backgroundColor: "#f2f2f2",
  borderRadius: 5,
  padding: 10,
  margin: 10,
  shadowOpacity: 3,
},
title: {
  fontSize: 24,
  fontWeight: "500",
  marginBottom: 4,
  paddingHorizontal: 20,
  paddingVertical: 5,
  justifyContent: "center",
  alignItems: "center",
  position: 'relative',
},
subtitle: {
  fontSize: 16,
  fontWeight: '500',
  marginBottom: 12,
  paddingHorizontal: 20,
  justifyContent: "center",
  alignItems: "center",
},
description: {
  fontSize: 22,
  color: 'purple',
  fontWeight: "800",
  marginBottom: 2,
  paddingHorizontal: 65,
  paddingVertical: 5,
  justifyContent: "center",
  alignItems: "center",
  position: 'absolute',
  top: 260,
},
image: {
  width: 150,
  height: 150,
  borderRadius: 3
},
price: {
  color: 'red',
  fontSize: 20,
  paddingHorizontal: 20,
},
starRating: {
  width: 100,
  height: 60,
  paddingLeft: 22,
  top: 20,
},
});
