import "@fontsource/inter";
import "@fontsource/poppins";
import "@/locales/i18n.js";
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import { myTheme } from '@/styles/theme';
import { FirebaseApp } from "./utils/firebase";
FirebaseApp.init();
ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider theme={myTheme} >
    <ColorModeScript initialColorMode={myTheme.config.initialColorMode} />
   <App/>
  </ChakraProvider>
   
  
)
