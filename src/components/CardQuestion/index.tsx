import { Box, Flex, Heading, Button, Stack } from '@chakra-ui/react'

import type { CardQuestionProps } from '@/types'

import { ButtonWrapper } from './style'

export function CardQuestion({
   questions,
   callback,
   category,
   totalQuestions,
   questionNumber,
   userAnswer,
   prevQuestion,
   nextQuestion,
   handleBackToCategory
}: CardQuestionProps) {
   console.log(userAnswer)
   return (
      <>
         <Box w="100%" mb={10}>
            <Box mb={6} fontSize="md" fontWeight="bold">
               Exercício: {questionNumber + 1}/{totalQuestions}
            </Box>

            <Box fontSize="sm" mb={1}>
               {category}
            </Box>

            <Heading as="h1" size="lg">
               <Box mb={6}>{questions.question}</Box>
            </Heading>

            <Flex direction="column">
               {questions.answers.map((answer: string) => (
                  <ButtonWrapper
                     key={answer}
                     userClicked={userAnswer?.answer === answer}
                  >
                     <Button
                        colorScheme="blue"
                        variant="outline"
                        onClick={(e) => callback(e)}
                        width="full"
                        value={answer}
                     >
                        <span dangerouslySetInnerHTML={{ __html: answer }} />
                     </Button>
                  </ButtonWrapper>
               ))}
            </Flex>

            <Stack justifyContent="space-between" direction="row">
               <div>
                  <Button
                     hidden={questionNumber === 0}
                     colorScheme="red"
                     variant="solid"
                     onClick={prevQuestion}
                  >
                     Exercício Anterior
                  </Button>
               </div>

               <div>
                  <Button
                     hidden={questionNumber + 1 === totalQuestions}
                     colorScheme="blue"
                     variant="solid"
                     onClick={nextQuestion}
                     mb={5}
                  >
                     Próximo Exercício
                  </Button>

                  <Button
                     hidden={questionNumber + 1 !== totalQuestions}
                     colorScheme="green"
                     variant="solid"
                     onClick={handleBackToCategory}
                     mb={5}
                  >
                     Voltar para listagem
                  </Button>
               </div>
            </Stack>
         </Box>
      </>
   )
}
