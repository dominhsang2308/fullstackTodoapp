import { Input, Button, HStack } from '@chakra-ui/react'
import { IoAdd } from "react-icons/io5";
import { useState } from 'react'
const AddTodo = ({addTodo}) => {

    const [todo_name, setTodoName] = useState('')
    const handleAdd = () => {
        addTodo(todo_name)
        console.log(todo_name)
    }

    return(
        <HStack  w='100%' mt='30px' gap='5'>
            <Input onChange={(e) => setTodoName(e.target.value)} bg='white' border='1px solid' placeholder='Adding new item' />
            <Button  onClick={handleAdd} border='1px solid' borderColor='gray.300'><IoAdd /></Button>
        </HStack>
    )
}

export default AddTodo