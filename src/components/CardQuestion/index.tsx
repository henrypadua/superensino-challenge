import { Box, Flex, Heading, Button } from '@chakra-ui/react'

import type { CardQuestionProps } from '@/types'

export function CardQuestion({
   questions,
   callback,
   category,
   totalQuestions,
   questionNumber
}: CardQuestionProps) {
   return (
      <>
         <Box w="100%">
            <Box mb={6} fontSize="md" fontWeight="bold">
               Exercício: {questionNumber}/{totalQuestions}
            </Box>
            <Box fontSize="sm" mb={1}>
               {category}
            </Box>
            <Heading as="h1" size="lg">
               <Box mb={6}>{questions.question}</Box>
            </Heading>

            <Flex direction="column">
               {questions.answers.map((answer: string, index: number) => (
                  <Box w="100%" mb={4} key={index}>
                     <Button
                        colorScheme="blue"
                        variant="outline"
                        onClick={callback}
                        value="True"
                        width="full"
                     >
                        {answer}
                     </Button>
                  </Box>
               ))}
            </Flex>
         </Box>
      </>
   )
}
