import React from 'react';
import CardList from "react-native-card-animated-modal";
import { View, Text } from "react-native";

const now = new Date();
const CARDS = [
  {
    image: {
      uri:
        "http://www.gamespersecond.com/media/2011/07/battlefield-3-poster.jpg"
    },
    height: 300,
    renderItem: ({ item, index }) => (
      <View>
        <Text>Customizable Content</Text>
      </View>
    )
  }
];

const Card1 = () => (
  <CardList
    listProps={{
      ListHeaderComponent: () => (
        <View style={{ padding: 30, paddingBottom: 0 }}>
          {/* <Text
            style={{
              fontSize: 13,
              color: "rgba(0, 0, 0, 0.5)"
            }}
          >
            {now.toDateString()}
          </Text> */}
          <Text style={{ fontSize: 32, fontWeight: "bold" }}>Featured</Text>
        </View>
      )
    }}
    data={CARDS}
    renderItem={({ item, index }) => {
      /* Render card per item */
      if (item.renderItem) return item.renderItem({ item, index });

      /* Default card when not specified */
      return (
        <View>
          <Text>Default Content</Text>
        </View>
      );
    }}
    renderDetails={({ item, index }) => (
      /* You can also provide custom content per item */
      <View style={{ paddingVertical: 30, paddingHorizontal: 16 }}>
        <Text style={{ color: "rgba(0, 0, 0, 0.7)", fontSize: 18 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </View>
    )}
  />
);

export default (Card1);