import { useContext } from "react";
import { todoContext } from "../context/todoContext";
import { Badge, StackDivider, VStack } from "@chakra-ui/react";
import Todo from "./Todo";

const TodoList = () => {
  const { todos } = useContext(todoContext);

  if (!todos.length) {
    return (
      <Badge colorScheme="green" p={4} borderRadius="lg" boxShadow="md">
        Start by adding your first todo!
      </Badge>
    );
  }

  return (
    <VStack
      divider={<StackDivider />}
      borderColor="gray.100"
      borderWidth={2}
      p={4}
      borderRadius={8}
      boxShadow="md"
      w="100%"
      maxW={["90vw", "80vw", "50vw", "40vw"]}
      align="stretch"
    >
      {todos.map(({ id, title, completed }) => (
        <Todo key={id} id={id} title={title} completed={completed} />
      ))}
    </VStack>
  );
};

export default TodoList;
