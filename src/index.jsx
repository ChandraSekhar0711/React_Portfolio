import "@fontsource/inter";
import "@fontsource/poppins"
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { ChakraProvider } from '@chakra-ui/react';
import { myTheme } from '@/styles/theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider theme={myTheme} >
   <App/>
  </ChakraProvider>
   
  
)
