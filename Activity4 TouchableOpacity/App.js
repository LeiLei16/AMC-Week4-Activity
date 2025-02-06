import React from 'react';
import {View, FlatList, StyleSheet, Text, StatusBar, TouchableOpacity, ScrollView} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const DATA = [
  {
    id: '1',
    title: 'Waking Up',
  },
  {
    id: '2',
    title: 'Eating Breakfast',
  },
  {
    id: '3',
    title: 'Taking Bath',
  },
  {
    id: '4',
    title: 'Tooth Brush',
  },
  {
    id: '5',
    title: 'Watching Netflix',
  },
  {
    id: '6',
    title: 'Cleaning',
  },
  {
    id: '7',
    title: 'Eating Lunch',
  },
  {
    id: '8',
    title: 'Washing Dishes',
  },
];
const DATA1 = [
  {
    id: '9',
    title: 'Eating Snacks',
  },
  {
    id: '10',
    title: 'Playing',
  },
  {
    id: '11',
    title: 'Sleeping',
  },
  {
    id: '12',
    title: 'Eating Meryenda',
  },
  {
    id: '13',
    title: 'Riding Bike',
  },
  {
    id: '14',
    title: 'Watching Tv',
  },
  {
    id: '15',
    title: 'Playing Online Games',
  },
  {
    id: '16',
    title: 'Nothing',
  },
];
const DATA2 = [
  {
    id: '17',
    title: 'Reading',
  },
  {
    id: '18',
    title: 'Eating Dinner',
  },
  {
    id: '19',
    title: 'Playing Mobile Games',
  },
  {
    id: '20',
    title: 'Watching Anime',
  },
  {
    id: '21',
    title: 'Washing Dishes',
  },
  {
    id: '22',
    title: 'ToothBrush',
  },
  {
    id: '23',
    title: 'Social Media',
  },
  {
    id: '24',
    title: 'Sleep',
  },
];
type ItemProps = {title: string};

const Item = ({title}: ItemProps) => (
  <View style={styles.item}>
  <TouchableOpacity>
    <Text style={styles.title}>{title}</Text>
  </TouchableOpacity>
  </View>
);

const App = () => (
  <SafeAreaProvider>
    <ScrollView>
      <SafeAreaView style={styles.container}>
      <Text style = {{fontSize: 50, textAlign: 'center'}}> <b> Morning </b> </Text>
        <FlatList
          data={DATA}
          renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
        />
        <Text style = {{fontSize: 50, textAlign: 'center'}}> <b> Afternoon </b> </Text>
        <FlatList
          data={DATA1}
          renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
        />
        <Text style = {{fontSize: 50, textAlign: 'center'}}> <b> Evening </b> </Text>
        <FlatList
          data={DATA2}
          renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
        />
      </SafeAreaView>
      </ScrollView>
  </SafeAreaProvider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: 'cyan',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  
});

export default App;