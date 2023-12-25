//import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Button, 
  TextInput, 
  ScrollView, 
  FlatList,
  Pressable
} from 'react-native';

import TodoItem from './components/TodoItem';
import TodoInput from './components/TodoInput';

export default function App() {
  
  
  const [errorText, setErrorText] = useState('');
  const [todoList, setToDoList] = useState([]);
  const [finishedTodoList, setFinishedToDoList] = useState([]);
  
  

  function addTodoHandler(inputTodoText)
  {
    isExists = false;

    if( '' == inputTodoText)
    {
      setErrorText('Empty todo');
      isExists = true;
    }

    if (!isExists)
    {
    // Check if already a todo exists.
      todoList.forEach(
        todo => {
          if( todo.text == inputTodoText)
          {
            setErrorText(inputTodoText + ' already exists');
            //return;
            isExists = true;
          }
        }
      );
    }

    //console.log(inputTodoText);
    if (!isExists)
    {
      setToDoList(
        (currentToDoList) => [
          ...currentToDoList,
          {text: inputTodoText, id: Math.random().toString()}
        ]
      );
    
    }
  };
  
  function deleteTodoHandler(id)
  {
    setToDoList(
      (currentToDoList) => {
        return currentToDoList.filter((todo) => todo.id !== id);
      }
    );
  }
  
  return (
    <View style={styles.appContainer}>
      
      <TodoInput onAddTodoHandler={addTodoHandler} onSetErrorText={setErrorText}></TodoInput>

      <View>
        <Text style={styles.errorContainer} key={errorText}>{errorText}</Text>
      </View>

      
      <View style={styles.todoContainer}>
        <Text style={styles.baseText}>Todo list</Text>
        <FlatList 
          data={todoList} 
          renderItem={
            (todoData) => {

              return (
                <TodoItem 
                  text={todoData.item.text} 
                  id={todoData.item.id}
                  onDeleteTodoHandler={deleteTodoHandler}
                >
                </TodoItem>
              );
            }
          }
          keyExtractor={(item, index) =>{
            return item.id;
          }}
          alwaysBounceVertical={false}>
        </FlatList>
      </View>

      <View style={styles.completedTodoContainer}>
        <Text style={styles.baseText}>Completed Todo list</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  appContainer:{
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20
  },
  todoContainer:{
    flex: 2
  },
  completedTodoContainer:{
    flex: 1
  },
  errorContainer:{
    color:'red'
  },
  baseText: {
    fontWeight: 'bold',
  }
});
