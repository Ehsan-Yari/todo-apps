import { VStack } from "@chakra-ui/react";
import AddTodo from "./components/AddTodo.jsx";
import { Heading, IconButton, useColorMode } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";
import TodoList from "./components/TodoList.jsx";
const App = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <VStack p={4}>
      <IconButton
        aria-label="toggle-dark-mode"
        icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
        onClick={toggleColorMode}
        isRound
        size="lg"
        alignSelf="flex-end"
      />
      <Heading
        fontWeight="extrabold"
        size="2xl"
        bgGradient="linear(to-r, pink.500, pink.300, blue.500)"
        bgClip="text"
      >
        Todo Application
      </Heading>
      <AddTodo />
      <TodoList />
    </VStack>
  );
};

export default App;
