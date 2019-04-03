import React from "react";
import { Text, View, StyleSheet, Image, Linking } from "react-native";
import Card from "./Card";
import Cardsection from "./Cardsection";
import Button from "./Button";

const Albumdetails = ({ album }) => {
  const { title, artist, thumbnail_image, image, url } = album;
  const { texts, imagesrc, images, textele, imagecvr } = Styles;
  return (
    <Card>
      <Cardsection>
        <View style={images}>
          <Image style={imagesrc} source={{ uri: thumbnail_image }} />
        </View>
        <View style={texts}>
          <Text style={textele}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </Cardsection>
      <Cardsection>
        <Image style={imagecvr} source={{ uri: image }} />
      </Cardsection>
      <Cardsection>
        <Button onPress={() => Linking.openURL(url)}>Buy Now</Button>
      </Cardsection>
    </Card>
  );
};
export default Albumdetails;
const Styles = StyleSheet.create({
  texts: {
    justifyContent: "space-around",
    flexDirection: "column"
  },
  imagecvr: {
    height: 300,
    flex: 1,
    width: null
  },
  textele: {
    fontSize: 18
  },
  images: {
    justifyContent: "center",
    marginLeft: 10,
    marginRight: 10,
    alignItems: "center"
  },
  imagesrc: {
    height: 50,
    width: 50
  }
});
