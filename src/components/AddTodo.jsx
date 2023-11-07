import { useContext, useState } from "react";
import { Button, Input, useToast, HStack } from "@chakra-ui/react";
import { todoContext } from "../context/todoContext";

const AddTodo = () => {
    const [inputValue, setInputValue] = useState("");
    const { addTodo } = useContext(todoContext);
    const toast = useToast();

    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();
                if (inputValue.trim().length) {
                    addTodo(inputValue);
                    setInputValue("");
                } else {
                    toast({
                        title: "Please enter a todo text",
                        status: "error",
                        duration: 1000,
                        isClosable: true,
                    });
                    setInputValue("");
                }
            }}
        >
            <HStack m={8}>
                <Input
                    variant="filled"
                    placeholder="Add a Todo..."
                    autoComplete="off"
                    value={inputValue}
                    onChange={(event) => {
                        setInputValue(event.target.value);
                    }}
                />
                <Button colorScheme="pink" px={8} type="submit">
                    Add Todo
                </Button>
            </HStack>
        </form>
    );
};

export default AddTodo;