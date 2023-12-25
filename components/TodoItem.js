import { StyleSheet, Text, View, Pressable } from 'react-native';

function TodoItem(props)
{
    function deleteToDoItem()
    {
        props.onDeleteTodoHandler(props.id);
    }

    return (
        <View style={styles.todoItems}>
            <Pressable 
                onPress={deleteToDoItem}
                android_ripple={{color: 'red'}}
                style={({pressed}) => pressed && styles.pressedItem}
            >
            
                <Text style={styles.todoText}>
                {props.text}
                </Text>
            
            </Pressable>
        </View>
    );
};

export default TodoItem;

const styles = StyleSheet.create({
    todoItems:{
        margin: 1,
        padding: 10,
        borderRadius: 6,
        backgroundColor: '#2F71E2'
    },
    todoText:{
        color: 'white'
    },
    pressedItem:{
        opacity: 0.5
    }
});