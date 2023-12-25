import { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Modal} from 'react-native';

function TodoInput(props)
{
    const [inputTodoText, setInputTodoText] = useState('');

    function todoInputHandler(inputText)
    {
        // On every character change, this method will be invoked.
        // Store it in a state, so that on button click, it can be used.
        //console.log(inputText);
        setInputTodoText(inputText);
        props.onSetErrorText('');
    };

    function addTodoHandler()
    {
        props.onAddTodoHandler(inputTodoText);
        setInputTodoText('');
    };

    return (
        <View style={styles.inputContainer}>
            <TextInput 
                style={styles.textInput} 
                placeholder='Your todo' 
                onChangeText={todoInputHandler}
                value={inputTodoText}
            >
            </TextInput>

            <Button title="Add Todo" onPress={addTodoHandler}></Button>
        </View>
        
    );
}

export default TodoInput;

const styles = StyleSheet.create({
    inputContainer:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: 'grey'
      },
      textInput:{
        borderWidth: 1,
        borderColor: '#2F71E2',
        width: '70%',
        marginRight: 5,
        padding: 5
      },
});