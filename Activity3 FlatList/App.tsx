import React from 'react';
import {View, FlatList, StyleSheet, Text, StatusBar} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const DATA = [
  {
    id: '1',
    title: 'Morning',
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
  {
    id: '9',
    title: 'Afternoon',
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
  {
    id: '17',
    title: 'Evening',
  },
  {
    id: '19',
    title: 'Eating Dinner',
  },
  {
    id: '20',
    title: 'Playing Mobile Games',
  },
  {
    id: '21',
    title: 'Watching Anime',
  },
  {
    id: '22',
    title: 'Washing Dishes',
  },
  {
    id: '23',
    title: 'ToothBrush',
  },
  {
    id: '24',
    title: 'Social Media',
  },
  {
    id: '25',
    title: 'Sleep',
  },
]
type ItemProps = {title: string};

const Item = ({title}: ItemProps) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const App = () => (
  <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
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
    textAlign: 'center' ,
  },
  
});

export default App;