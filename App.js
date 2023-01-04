import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoal, setCourseGoal] = useState([]);

  const goalHandler = (enteredText) => {
    setCourseGoal( currentCourseGoal =>[...currentCourseGoal, {text:enteredText, id: Math.random().toString() } ]);
    setModalIsVisible(!modalIsVisible);
  }

  const addModalHandler = () => {
    setModalIsVisible(!modalIsVisible);
  }

  const onDeleteItem = (id) => {
    setCourseGoal(currentCourseGoal => {
      return currentCourseGoal.filter((goal) => goal.id !== id)
    }
    )
  }

  return (
    <>
    <StatusBar style='auto' />
    <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>TO DO APPLICATION</Text>
        </View>
        <Button title="Add New Goal" color="#5e0acc" onPress={addModalHandler} />
        <GoalInput isVisible={modalIsVisible} goalHandler={goalHandler} onCancel={addModalHandler} />
        <View style={styles.listContainer}>
          <Text style={styles.title}>List of Goals</Text>
          <FlatList 
          style={styles.flatlist} 
          data={courseGoal} 
          renderItem={(itemData) => {
            return (
              <GoalItem text={itemData.item.text} id={itemData.item.id} onDeleteItem={onDeleteItem} />
            )
          }} 
          keyExtractor= {(key, index) => {
            return key.id
          }}
          alwaysBounceVertical={false} />
              
        </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 50,
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    color: '#311b6b',
  },
  titleContainer: {
    flex: .1,
  },
  listContainer: {
    flex: .7,
    alignItems:'center'
  },
  flatlist: {
    flex: 1,
    borderTopWidth: 1,
    borderColor: 'grey',
    width: '100%'
  },

});
