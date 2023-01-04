import { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Modal, Image } from 'react-native';

import Logo from '../assets/images/goal.png'


export default function GoalInput(props) {
  const [enteredText, setEnteredText] = useState('');
  const [button, setButton] = useState(true);

    const goalInputHandler = (enterText) => {
        setEnteredText(enterText)
        if(enteredText.length >= 0) {
            setButton(false)
            }
        else 
           setButton(true);
        
      }
    
    const onGoalHandler = () => {
        props.goalHandler(enteredText)
        setEnteredText('');
        setButton(true);
    }

  return (
    <Modal visible={props.isVisible} animationType='slide' >
        <View style={styles.inputContainer}>
            <Image style={styles.image} source={Logo} />
          <TextInput 
          placeholder='Add your Goals here' 
          style={styles.goalInput}
          value={enteredText}
          onChangeText={goalInputHandler}
          />
          <View style={styles.buttonContainer}>
            <Button style={styles.button} color='#b180f0' title='Submit' onPress={onGoalHandler} disabled={button} />
            <Button style={styles.button} color='#f31282' title='Cancel' onPress={props.onCancel} />
          </View>
        </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
    goalInput: {
        borderWidth: 1,
        width: '100%',
        fontSize: 25,
        color: '#000',
        padding: 10,
        marginBottom: 30,
        borderRadius: 6,
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',

      },
      inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        width: '100%',
        backgroundColor: '#311b6b',
      },
      buttonContainer: {
        flex: .15,
        justifyContent: 'space-between',
        width: '100%'
      },
      image: {
        height: 100,
        width: 100,
        margin: 20
      },    
      button: {
        marginBottom: 20,
      }
})
