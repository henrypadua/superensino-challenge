import { Flex, Link, Text } from '@chakra-ui/react'

export function Footer() {
   return (
      <Flex
         as="footer"
         width="full"
         align="center"
         alignSelf="flex-end"
         justifyContent="center"
      >
         <Text fontSize="sm">
            {new Date().getFullYear()} -{' '}
            <Link href="https://github.com/henrypadua" isExternal>
               Henry Padua
            </Link>
         </Text>
      </Flex>
   )
}
