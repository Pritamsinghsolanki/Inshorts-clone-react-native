import React from "react";
import {
  Dimensions,
  Image,
  ImageBackground,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const SingleNews = ({ item, index, darkTheme }) => {
  return (
     //1 View
    <View
      style={{
        height: windowHeight,
        width: windowWidth,
        transform: [{ scaleY: -1 }],
        // to do upside down
      }}
    > 
    {/* 1.1 */}
      <Image
        source={{ uri: item.urlToImage }}
        style={{ height: "45%", resizeMode: "cover", width: windowWidth }}
      />
      
      {/* 1.2 */}
          {/* View2 */}
      <View
        style={{
          ...styles.description,
          backgroundColor: darkTheme ? "#282C35" : "white",
        }}
      >

         {/* 1.2.1 */}
        <Text style={{ ...styles.title, color: darkTheme ? "white" : "black" }}>
          {item.title}
        </Text>

        {/* 1.2.2 */}
        <Text
          style={{ ...styles.content, color: darkTheme ? "white" : "black" }}
        >
          {item.description}
        </Text>

         {/* 1.2.3 */}
        <Text style={{ color: darkTheme ? "white" : "black" }}>
          Short by
          {/* 1.2.3.1 */}
          <Text style={{ fontWeight: "bold" }}>
            {" "}
            {item.author ?? "unknown"}
          </Text>
        </Text>

      </View>
           {/* View 2end */}

       {/* 1.3 */}
      <ImageBackground
        blurRadius={30}
        style={styles.footer}
        source={{ uri: item.urlToImage }}
      >
             {/* 1.3.1 */}
            <TouchableOpacity onPress={() => Linking.openURL(item.url)}>
                       {/* 1.3.2 */}
                     <Text style={{ fontSize: 15, color: "white" }}>
                     '{item?.content?.slice(0, 45)}...'
                     </Text>
                      {/* 1.3.3 */}
                     <Text style={{ fontSize: 17, fontWeight: "bold", color: "white" }}>
                         Read More
                     </Text>
            </TouchableOpacity>
       </ImageBackground>



    </View>
    // View1 end
  );
};

export default SingleNews;

const styles = StyleSheet.create({
  description: {
    padding: 15,
    flex: 1,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    paddingBottom: 10,
  },
  content: { fontSize: 18, paddingBottom: 10 },
  footer: {
    height: 80,
    width: windowWidth,
    position: "absolute",
    bottom: 0,
    backgroundColor: "#d7be69",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
});
