import React from 'react'

import { ChakraProvider, CSSReset } from '@chakra-ui/react'
import ReactDOM from 'react-dom'

import { App } from './App'
import { theme } from './styles/theme'

ReactDOM.render(
   <React.StrictMode>
      <ChakraProvider theme={theme}>
         <CSSReset />
         <App />
      </ChakraProvider>
   </React.StrictMode>,
   document.getElementById('root')
)
