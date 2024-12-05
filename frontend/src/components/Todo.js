import { Flex, HStack, Text, Checkbox, IconButton,Button, useDisclosure, Input } from '@chakra-ui/react'
import { MdEditNote } from "react-icons/md";
import { FaTrashAlt } from "react-icons/fa";

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    
    ModalCloseButton,
  } from '@chakra-ui/react'

import { useState } from 'react'
import { update_todo } from '../api/endpoints';
const Todo = ({id,todo_name, completed, deleteTodo}) => {

    const [clientCompleted, setClientCompleted] = useState(completed)

    const [clientTodoName, setClientTodoName] = useState(todo_name)

    const handleCompleted = async () => {
        await update_todo(id,{'completed':!clientCompleted})
        setClientCompleted(!clientCompleted)
    }

    const handleDelete = async () => {
        await deleteTodo(id)
    }

    const handleUpdate = async (name) => {
        await update_todo(id, {'todo_name': name})
        setClientTodoName(name)
        
    }

    return (
        <Flex bg='white' w='100%' border='1px solid' 
        borderRadius='8px' 
        borderColor='gray.300' 
        p='20px 20px'>

            <HStack w='100%' justifyContent='space-between' gap='20px'>
                <Checkbox onChange={handleCompleted}
                isChecked={clientCompleted}
                />
                <Text>
                    {clientTodoName}
                </Text>
                <HStack gap='18px'>
                    <TodoUpdate todo_name={clientTodoName} handleUpdate={handleUpdate} />
                    <IconButton onClick={handleDelete} icon={<FaTrashAlt />}/>
                </HStack>
            </HStack>
        </Flex>
    );
}

const TodoUpdate = ({todo_name , handleUpdate}) =>  {

    const [inputName, setInputName] = useState(todo_name)

    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
        <IconButton onClick={onOpen} icon={<MdEditNote />}/>
        <Modal isCentered={true}  isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <Input value={inputName} onChange={(e) => setInputName(e.target.value)} ></Input>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={(name) => handleUpdate(inputName)}>
                Update
              </Button>
              <Button variant='ghost' onClick={onClose}>Close</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

export default Todo