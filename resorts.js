import React, { Component } from 'react';
import { StyleSheet, Text,  View, Image, ScrollView, SafeAreaView } from 'react-native';
import StarRating from 'react-native-star-rating';


export default class resortsScreen extends Component {

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
      <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <ScrollView style={styles.container1}>
      <View style={styles.resortsTitleContainer}>
      <Text style={styles.resortsTitle}>Best Caribbean Resorts</Text>
      </View>
      <View style={styles.hotelContainer1}>
      <Image style={styles.image1}
      source={require("./assets/resort1.jpg")} />
      <View>
      <Text style={styles.title1}>Jade Mountain, St. Lucia</Text>
      <Text style={styles.subtitle1}>Best Caribbean Resorts</Text>
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

      <View style={styles.hotelContainer1}>
      <Image style={styles.image1}
      source={require("./assets/resort2.jpg")} />
      <View>
      <Text style={styles.title1}>Reefs Resort  Club, Bermuda</Text>
      <Text style={styles.subtitle1}>Best Resort in Bermuda </Text>
      <Text style={styles.price1}>$129 Per Night</Text>
      </View>
      </View>

      <View style={styles.hotelContainer1}>
      <Image style={styles.image1}
      source={require("./assets/resort3.jpg")} />
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

      <View style={styles.hotelContainer1}>
      <Image style={styles.image1}
      source={require("./assets/resort4.jpg")} />
      <View>
      <Text style={styles.title1}>Nisbet Plantation Beach Club</Text>
      <Text style={styles.subtitle1}>The Best West Indies island of Nevis</Text>
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

      <View style={styles.hotelContainer1}>
      <Image style={styles.image1}
      source={require("./assets/resort5.jpg")} />
      <View>
      <Text style={styles.title1}>Ladera Resort, St. Lucia</Text>
      <Text style={styles.subtitle1}>Best Resort in St. Lucia</Text>
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
      </ScrollView>
      </SafeAreaView>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  hotelContainer1: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    flexDirection: 'column',
    flex: 2,
    backgroundColor: "#f2f2f2",
    borderRadius: 5,
    padding: 10,
    margin: 10,
    shadowOpacity: 0.4,
    top: 60, 
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
    width: 360,
    height: 150,
    borderRadius: 3
  },
  price1: {
    color: 'green',
    fontSize: 20,
    paddingHorizontal: 20,
  },
  starRating: {
    width: 140,
    height: 60,
    paddingLeft: 22,
    top: 20,
  },
  resortsTitleContainer: {
    flex: 1,
    top: 20,
    shadowColor: "lightgrey",
  },
  resortsTitle: {
    color: "blue",
    top: 20,
    fontSize: 24,
    paddingHorizontal: 65,
    paddingVertical: 1,
    fontWeight: "600",
  }
});