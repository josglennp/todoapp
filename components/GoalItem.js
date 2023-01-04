import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
        <Pressable android_ripple={{color:'#dddddd'}} onPress={props.onDeleteItem.bind(this, props.id)}>
          <Text style={styles.goalItemText}>{props.text}</Text>
        </Pressable>
      </View>
    
  )
}


const styles = StyleSheet.create({
    goalItem: {
        flexDirection:'column-reverse',
        margin: 8,
        borderRadius: 6,
        backgroundColor: "#5e0acc",
      },
      goalItemText: {
        color: '#FFF',
        fontWeight: '800',
        padding: 8,
      }
})