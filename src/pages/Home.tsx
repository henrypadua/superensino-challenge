import { useEffect, useState } from 'react'

import { Box, Heading, Divider, Button } from '@chakra-ui/react'

import { CardQuestion } from '@/components/CardQuestion'
import { Loader } from '@/components/Loader'
import { totalQuestions } from '@/constants'
import { api } from '@/services/api'
import type { AnswerObject, Question, QuestionResponse } from '@/types'
import { shuffleArray } from '@/utils'

export function Home() {
   const [startQuiz, setStartQuiz] = useState(false)
   const [questions, setQuestions] = useState<Question[]>([])
   const [userAnswer, setUserAnswer] = useState<AnswerObject[]>([])
   const [isLoading, setIsLoading] = useState(true)
   const [questionNumber, setQuestionNumber] = useState(0)
   const [score, setScore] = useState(0)
   const [gameOver, setGameOver] = useState(false)

   useEffect(() => {
      async function getQuestions() {
         setIsLoading(true)

         await api
            .get<QuestionResponse>(
               `https://opentdb.com/api.php?amount=${totalQuestions}&category=22&difficulty=easy&type=multiple`
            )
            .then((response) => {
               setQuestions(
                  response?.data?.results.map((question: Question) => ({
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

   const startQuizGame = (): void => {
      setStartQuiz(true)
   }

   const checkAnswer = (e: React.FormEvent<HTMLFormElement>): void => {
      e.preventDefault()

      if (gameOver) return

      const choosedAnswer = e.currentTarget.innerText

      const correct =
         questions[questionNumber]?.correct_answer === choosedAnswer

      if (correct) setScore((previous) => previous + 1)

      if (userAnswer.length != questionNumber) {
         if (!correct) setScore((previous) => previous - 1)
         const lastIndex = userAnswer.length - 1
         if (lastIndex >= 0) {
            userAnswer.splice(lastIndex, 1)
            const answerObject = {
               question: questions[questionNumber]?.question,
               answer: choosedAnswer,
               correct,
               correctAnswer: questions[questionNumber]?.correct_answer
            }
            setUserAnswer((previous) => [...previous, answerObject])
         }
         return
      }

      const answerObject = {
         question: questions[questionNumber]?.question,
         answer: choosedAnswer,
         correct,
         correctAnswer: questions[questionNumber]?.correct_answer
      }
      setUserAnswer((previous) => [...previous, answerObject])
   }

   const nextQuestion = (e: React.FormEvent<HTMLFormElement>): void => {
      e.preventDefault()
      const nextQuestion = questionNumber + 1
      if (totalQuestions === nextQuestion) {
         setGameOver(true)
      }
      setQuestionNumber(nextQuestion)
   }

   const replayQuiz = (): void => {
      setStartQuiz(false)
      setGameOver(false)
      setQuestionNumber(0)
      setScore(0)
      setUserAnswer([])
   }

   return (
      <>
         <div className="App">
            {isLoading && (
               <div className="app-spinner">
                  <Loader
                     speed="0.65s"
                     emptyColor="gray.200"
                     color="purple"
                     size="lg"
                     thickness="5px"
                  />
               </div>
            )}
            {!isLoading && (
               <Box p="6" rounded="md" maxW="560px">
                  <CardQuestion
                     questions={questions[questionNumber]}
                     category={questions[questionNumber].category}
                     callback={checkAnswer}
                     totalQuestions={totalQuestions}
                     questionNumber={questionNumber}
                  />

                  <Button
                     disabled={
                        userAnswer.length === questionNumber + 1 &&
                        questionNumber !== totalQuestions
                           ? false
                           : true
                     }
                     colorScheme="blue"
                     variant="solid"
                     onClick={nextQuestion}
                     className="next-button"
                     width="full"
                  >
                     Próximo Exercício
                  </Button>
               </Box>
            )}
            {gameOver && (
               <>
                  <Box
                     boxShadow="base"
                     p="6"
                     rounded="md"
                     bg="white"
                     maxW="560px"
                  >
                     <Box mb={4}>
                        <Box fontWeight="bold" as="h3" fontSize="4xl">
                           Game Over!
                        </Box>
                        <Box as="h3" fontSize="xl">
                           Your score is {score}/{totalQuestions}.
                        </Box>
                     </Box>
                     <Divider />
                     {userAnswer.map((answer, index) => (
                        <Box key={index}>
                           <div className="answer-list">
                              <Box fontSize="md" fontWeight="bold">
                                 Q: {answer.question}
                              </Box>
                              <ul>
                                 <li>You answered: {answer.answer}</li>
                                 <li>Correct answer: {answer.correctAnswer}</li>
                              </ul>
                           </div>
                        </Box>
                     ))}
                     <Button
                        colorScheme="purple"
                        variant="solid"
                        onClick={replayQuiz}
                        value="Replay Quiz"
                        width="full"
                     />
                  </Box>
               </>
            )}
         </div>
      </>
   )
}
