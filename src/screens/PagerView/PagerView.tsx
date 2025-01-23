import React, { useState } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import PagerView from 'react-native-pager-view';

const PagerViewComponent: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageSelected = (e: any) => {
    setCurrentPage(e.nativeEvent.position);
  };

  return (
    <View style={styles.main}>
      <PagerView
        style={styles.pagerView}
        initialPage={0}
        onPageSelected={handlePageSelected}
      >
        <View key="1" style={styles.page}>
          <Image source={require('../../assets/Images/first.png')} style={styles.image} />
        </View>
        <View key="2" style={styles.page}>
          <Image source={require('../../assets/Images/2nd.png')} style={styles.image} />
        </View>
        <View key="3" style={styles.page}>
          <Image source={require('../../assets/Images/3rd.png')} style={styles.image} />
        </View>
      </PagerView>

      <View style={styles.pageIndicatorContainer}>
        {[0, 1, 2].map((_, index) => (
          <View
            key={index}
            style={[
              styles.pageIndicator,
              currentPage === index && styles.activeIndicator,
            ]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#7b68ee',
  },
  pagerView: {
    flex: 1,
  },
  page: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 250,
    width: '70%',
    borderRadius: 10,
  },
  pageIndicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 20,
    width: '100%',
  },
  pageIndicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'white',
    marginHorizontal: 5,
    opacity: 0.5,
  },
  activeIndicator: {
    backgroundColor: '#000',
    opacity: 1,
  },
});

export default PagerViewComponent;
