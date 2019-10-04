import React, { Component } from 'react';
import { StyleSheet, Text,  View, Image, ScrollView } from 'react-native';


export default class aboutScreen extends Component {
    
  render() {
      return (
          < ScrollView style={styles.container}>
              <View>
              <Text style={styles.headerTitle1}>Hotels Gallery</Text>
          </View>

<View style = { styles.scrollViewHolder }>
   <ScrollView horizontal = { true } showsHorizontalScrollIndicator = { false }>

      <Image style={styles.images2} source={require("./assets/hotel1.jpg")}></Image>
      {/* <View style = { styles.separator }/> */}
      <Image style={styles.images2} source={require("./assets/hotel6.jpg")}></Image>
      <Image style={styles.images2} source={require("./assets/hotel3.jpg")}></Image>
      <Image style={styles.images2} source={require("./assets/hotel4.jpg")}></Image>
      <Image style={styles.images2} source={require("./assets/hotel5.jpg")}></Image>
      <Image style={styles.images2} source={require("./assets/hotel2.jpg")}></Image>
      <Image style={styles.images2} source={require("./assets/hotel4.jpg")}></Image>
      <Image style={styles.images2} source={require("./assets/hotel5.jpg")}></Image>
      <Image style={styles.images2} source={require("./assets/hotel6.jpg")}></Image> 
   </ScrollView>
</View>

    <View>
        <Image style={styles.heroImage3} source={require("./assets/ritzcarlton.jpeg")}></Image>
        <Image style={styles.heroImage3} source={require("./assets/ritzcarlton.jpeg")}></Image>
    </View>



<View style = { styles.scrollViewHolder }>
   <ScrollView horizontal = { true } showsHorizontalScrollIndicator = { false }>

      <Image style={styles.images} source={require("./assets/hotel1.jpg")}></Image>
      {/* <View style = { styles.separator }/> */}
      <Image style={styles.images} source={require("./assets/hotel6.jpg")}></Image>
      <Image style={styles.images} source={require("./assets/hotel3.jpg")}></Image>
      <Image style={styles.images} source={require("./assets/hotel4.jpg")}></Image>
      <Image style={styles.images} source={require("./assets/hotel5.jpg")}></Image>
      <Image style={styles.images} source={require("./assets/hotel2.jpg")}></Image>
      <Image style={styles.images} source={require("./assets/hotel4.jpg")}></Image>
      <Image style={styles.images} source={require("./assets/hotel5.jpg")}></Image>
      <Image style={styles.images} source={require("./assets/hotel6.jpg")}></Image> 
   </ScrollView>
</View>

<View>
        <Image style={styles.heroImage3} source={require("./assets/ritzcarlton.jpeg")}></Image>
        <Image style={styles.heroImage3} source={require("./assets/ritzcarlton.jpeg")}></Image>
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
        width: 200,
        height: 200,
        // justifyContent: 'center',
        margin: 10,
        borderRadius: 70,
        // top: 30,
        bottom: 10,
        marginTop: 60,
    },
    images2: {
        width: 200,
        height: 200,
        // justifyContent: 'center',
        margin: 10,
        borderRadius: 100,
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
        margin: 5,
      },
      heroImage3: {
        backgroundColor: 'transparent',
        height: 200,
        width: null,
        justifyContent: "center",
        alignItems: "center",
        position: 'relative',
        marginTop: 30,
        borderRadius: 3,
        margin: 5
      },
});