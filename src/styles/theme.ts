import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

const fonts = { body: 'Poppins, sans serif', heading: 'Poppins, sans serif' }

const breakpoints = createBreakpoints({
   sm: '40em',
   md: '52em',
   lg: '64em',
   xl: '80em'
})

const colors = {
   primary: '#0070f3',
   brand: {
      900: '#1a365d',
      800: '#153e75',
      700: '#2a69ac'
   }
}

export const theme = extendTheme({ colors, fonts, breakpoints })
