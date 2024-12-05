import { VStack } from '@chakra-ui/react'
import Todo from './Todo'

const TodoList = ({todos, deleteTodo}) => {
    return (
        <VStack mt='30px' w='100%' gap='14px'>
            {
               todos.map((todo) => {
                    return(
                        <Todo key={todo.id} 
                        id={todo.id}
                        completed = {todo.completed}
                        todo_name={todo.todo_name} 
                        deleteTodo = {deleteTodo}
                        />
                    )
               }) 
            }  
        </VStack>
    )
}

export default TodoList