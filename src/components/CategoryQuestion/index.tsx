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

export function CategoryQuestion({ data }: CategoryQuestionProps) {
   return (
      <Accordion allowToggle>
         <AccordionItem sx={{ borderColor: 'red', border: 'none' }}>
            <h2>
               <AccordionButton>
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
                        borderColor={'telegram.500'}
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
