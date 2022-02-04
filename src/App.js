import HomePage from "./modules/homePage/HomePage";
import { ChakraProvider } from '@chakra-ui/react'
import './App.css';
function App() {
  return (
    <ChakraProvider>
      <HomePage />
    </ChakraProvider>
  );
}

export default App;
