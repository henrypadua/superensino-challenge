import {
   Accordion,
   AccordionButton,
   AccordionIcon,
   AccordionItem,
   AccordionPanel,
   Box,
   Button,
   SimpleGrid
} from '@chakra-ui/react'

import { CategoryQuestionProps } from '../../types'

export function CategoryQuestion({
   data,
   setQuestionNumber
}: CategoryQuestionProps) {
   return (
      <Accordion allowToggle defaultIndex={[0]}>
         <AccordionItem sx={{ border: 'none' }}>
            <h2>
               <AccordionButton
                  bgColor={'blue.300'}
                  sx={{
                     transition: '0.3s',
                     _hover: { filter: 'brightness(0.8)' }
                  }}
               >
                  <Box flex="1" textAlign="left">
                     Acentuação Gráfica
                  </Box>
                  <AccordionIcon />
               </AccordionButton>
            </h2>

            <AccordionPanel pb={4}>
               <Box flex="1" textAlign="left" mt={3} mb={5}>
                  Uso dos porquês
               </Box>
               <SimpleGrid columns={4} spacing={3}>
                  {data?.map((question, i) => (
                     <Button
                        key={i}
                        variant={'outline'}
                        colorScheme="blue"
                        onClick={() => {
                           setQuestionNumber(i)
                        }}
                     >
                        Exercício {i + 1}
                     </Button>
                  ))}
               </SimpleGrid>
            </AccordionPanel>
         </AccordionItem>
      </Accordion>
   )
}
