/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useRef} from 'react';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import debounce from 'lodash/debounce';

import {StyleSheet, Text, View, Dimensions, Button} from 'react-native';

const colors = ['tomato', 'thistle', 'skyblue', 'teal'];

const App = props => {
  const swiperRef = useRef(null);

  const handleNextClick = () => {
    const currentIndex = swiperRef.current.getCurrentIndex();

    if (currentIndex < colors.length - 1) {
      swiperRef.current.scrollToIndex({
        index: currentIndex + 1,
        animated: true,
      });
    }
  };

  return (
    <View style={styles.container}>
      <SwiperFlatList
        ref={swiperRef}
        e2eID="swiper"
        paginationStyleItem={styles.dotStyle}
        paginationStyleItemActive={styles.activeDotStyle}
        paginationStyle={styles.paginationStyle}
        showPagination
        data={colors}
        renderItem={({item, index: listItemIndex}) => {
          return (
            <View testID={item} style={[styles.child, {backgroundColor: item}]}>
              <Text style={styles.text}>{item}</Text>
              <Button
                testID={`button-${listItemIndex}`}
                style={styles.button}
                onPress={debounce(handleNextClick, 500)}
                title="Next"
              />
            </View>
          );
        }}
        {...props}
      />
    </View>
  );
};

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  dotStyle: {height: 3, width: 3, borderRadius: 1.5, marginHorizontal: 4},
  activeDotStyle: {height: 3, width: 16, borderRadius: 2},
  paginationStyle: {bottom: 124},
  container: {flex: 1, backgroundColor: 'white'},
  child: {width, justifyContent: 'center'},
  text: {fontSize: 12, textAlign: 'center'},
  button: {
    marginTop: 20,
    padding: 20,
    fontSize: 36,
    color: 'black',
  },
});

export default App;
