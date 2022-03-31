import { useEffect, useState } from 'react'

import { Box, Center } from '@chakra-ui/react'

import { CardQuestion } from '@/components/CardQuestion'
import { CategoryQuestion } from '@/components/CategoryQuestion'
import { Loader } from '@/components/Loader'
import { totalQuestions } from '@/constants'
import { api } from '@/services/api'
import type { AnswerObject, QuestionResponse } from '@/types'
import { shuffleArray } from '@/utils'

export function Home() {
   const [questions, setQuestions] = useState<any[]>([])
   const [userAnswer, setUserAnswer] = useState<AnswerObject[]>([])
   const [isLoading, setIsLoading] = useState(true)
   const [questionNumber, setQuestionNumber] = useState(-1)

   useEffect(() => {
      async function getQuestions() {
         setIsLoading(true)

         await api
            .get<QuestionResponse>(
               `https://opentdb.com/api.php?amount=${totalQuestions}&category=23&difficulty=easy&type=multiple`
            )
            .then((response) => {
               return setQuestions(
                  response?.data?.results.map((question) => ({
                     ...question,
                     answers: shuffleArray([
                        ...question.incorrect_answers,
                        question.correct_answer
                     ])
                  }))
               )
            })
            .finally(() => setIsLoading(false))
      }

      getQuestions()
   }, [])

   const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>): void => {
      const choosedAnswer = e.currentTarget.innerText

      const correct =
         questions[questionNumber]?.correct_answer === choosedAnswer

      const answerObject = {
         index: questionNumber,
         question: questions[questionNumber]?.question,
         answer: choosedAnswer,
         correct,
         correctAnswer: questions[questionNumber]?.correct_answer
      }

      const filterAnswer = userAnswer.filter(
         (answer) => answerObject.index !== answer.index
      )

      const orderAnswer = [...filterAnswer, answerObject].sort((a, b) => {
         return a.index - b.index
      })

      setUserAnswer(orderAnswer)
   }

   const nextQuestion = (): void => {
      const nextQuestion = questionNumber + 1
      setQuestionNumber(nextQuestion)
   }

   const prevQuestion = (): void => {
      const prevQuestion = questionNumber - 1
      setQuestionNumber(prevQuestion)
   }

   return (
      <Box>
         {isLoading && (
            <Center h="100px" color="white">
               <Loader
                  speed="0.85s"
                  emptyColor="gray.200"
                  color="blue.500"
                  size="xl"
                  thickness="4px"
               />
            </Center>
         )}
         {!isLoading && (
            <Box p="6" rounded="md">
               {questionNumber < 0 ? (
                  <CategoryQuestion
                     data={questions}
                     setQuestionNumber={setQuestionNumber}
                  />
               ) : (
                  <CardQuestion
                     questions={questions[questionNumber]}
                     category={questions[questionNumber].category}
                     callback={(e) => checkAnswer(e)}
                     totalQuestions={totalQuestions}
                     questionNumber={questionNumber}
                     userAnswer={userAnswer[questionNumber]}
                     prevQuestion={prevQuestion}
                     nextQuestion={nextQuestion}
                     handleBackToCategory={() => setQuestionNumber(-1)}
                  />
               )}
            </Box>
         )}
      </Box>
   )
}
