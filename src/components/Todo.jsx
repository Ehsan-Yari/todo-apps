import { HStack, IconButton, Input, Spacer, Text } from "@chakra-ui/react";
import { FaCheck, FaPen, FaTimes, FaTrash } from "react-icons/fa";
import { useContext, useState } from "react";
import { todoContext } from "../context/todoContext";

const Todo = ({ title, id, completed }) => {
    const { deleteTodo, completeTodo, updateTodo } = useContext(todoContext);
    const [edit, setEdit] = useState(false);
    return (
        <HStack>
            {edit ? (
                <Input
                    value={title}
                    onChange={(event) => {
                        updateTodo(event.target.value, id);
                    }}
                />
            ) : (
                <Text fontSize="lg" fontWeight="semibold">
                    {title}
                </Text>
            )}
            <Spacer />
            <IconButton
                aria-label="complete-todo"
                icon={<FaPen />}
                isRound
                colorScheme="green"
                onClick={() => {
                    setEdit(!edit);
                }}
            />
            {edit ? null : (
                <>
                    <IconButton
                        aria-label="delete-todo"
                        icon={<FaTrash />}
                        isRound
                        colorScheme="red"
                        onClick={() => {
                            deleteTodo(id);
                        }}
                    />
                    <IconButton
                        aria-label="complete-todo"
                        icon={completed ? <FaTimes /> : <FaCheck />}
                        isRound
                        colorScheme={completed ? "yellow" : "blue"}
                        onClick={() => {
                            completeTodo(id);
                        }}
                    />
                </>
            )}
        </HStack>
    );
};

export default Todo;