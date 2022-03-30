import type { ReactNode } from 'react'

import { Box, Flex } from '@chakra-ui/react'

import { Footer } from './Footer'
import { Header } from './Header'

type LayoutProps = {
   children: ReactNode
}

export function Layout({ children }: LayoutProps) {
   return (
      <Box margin="0 auto" maxWidth={800} transition="0.5s ease-out">
         <Flex wrap="wrap" margin="8" minHeight="90vh">
            <Header />
            <Box width="full" as="main" marginY={22}>
               {children}
            </Box>
            <Footer />
         </Flex>
      </Box>
   )
}
