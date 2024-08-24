import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import "@fontsource/ubuntu";
import { theme } from './theme/index.js'
import "@fontsource/ubuntu"; // Defaults to weight 400
import "@fontsource/ubuntu/400.css"; // Specify weight
import "@fontsource/ubuntu/400-italic.css"; // Specify weight and style

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChakraProvider theme={theme} >
    <App />
    </ChakraProvider>
  </StrictMode>,
)
