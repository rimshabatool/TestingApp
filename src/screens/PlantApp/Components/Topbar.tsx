import React, {useState, useRef, useEffect} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Animated,
  Dimensions,
} from 'react-native';
import colors from '../../../helpers/colors/colors';
import Recomended from '../Tabs/Recomended';
import Indoor from '../Tabs/Indoor';
import OutDoor from '../Tabs/OutDoor';
import Pot from '../Tabs/Pot';

export default function TabsScreen() {
  const [selectedTab, setSelectedTab] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const tabWidth = Dimensions.get('window').width / 4;

  const tabs = [
    {name: 'Recomended', component: <Recomended />},
    {name: 'Indoor', component: <Indoor />},
    {name: 'OutDoor', component: <OutDoor />},
    {name: 'Pot', component: <Pot />},
    {name: 'Recomended', component: <Recomended />},
  ];

  useEffect(() => {
    Animated.spring(scrollX, {
      toValue: selectedTab * tabWidth,
      useNativeDriver: true,
    }).start();
  }, [selectedTab]);

  const renderTabContent = () => {
    return tabs[selectedTab]?.component;
  };

  return (
    <View style={styles.container}>
      <View style={styles.tabsContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {tabs.map((tab, index) => (
            <TouchableOpacity
              key={index}
              style={[styles.tabButton, {width: tabWidth}]}
              onPress={() => setSelectedTab(index)}>
              <Text style={styles.tabText}>{tab.name}</Text>
            </TouchableOpacity>
          ))}
          <Animated.View
            style={[ styles.selectedLine,{   transform: [ {translateX: Animated.add(scrollX, tabWidth * 0.25)},], width: tabWidth * 0.5,}, ]} />
        </ScrollView>
      </View>

      <View style={styles.contentContainer}>{renderTabContent()}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  tabsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 45,
  },
  tabButton: {
    paddingVertical: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedLine: {
    position: 'absolute',
    bottom: 0,
    height: 2,
    backgroundColor: colors.green,
    borderRadius: 5,
  },
  tabText: {
    fontSize: 14,
    color: 'black',
    fontFamily: 'SF-Pro-Display-Bold',
  },
  contentContainer: {
    flex: 1,
  },
  contentText: {
    fontSize: 18,
    color: 'black',
  },
});
