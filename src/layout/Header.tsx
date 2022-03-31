import { Box, Flex, Heading } from '@chakra-ui/react'

import { ThemeToggle } from './ThemeToggle'

export function Header() {
   return (
      <Flex
         as="header"
         width="full"
         align="center"
         alignSelf="flex-start"
         justifyContent="center"
         gridGap={2}
      >
         <div>
            <Heading as="h1" size="lg">
               SuperEnsino Challenge
            </Heading>
         </div>

         <Box marginLeft="auto">
            <ThemeToggle />
         </Box>
      </Flex>
   )
}
