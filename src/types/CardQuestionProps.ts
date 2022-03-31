import { AnswerObject } from './Answer'
import { Question } from './Question'

export type CardQuestionProps = {
   questions: Question
   category: string
   totalQuestions?: number
   questionNumber: number
   userAnswer: AnswerObject | undefined
   callback: (e: React.MouseEvent<HTMLButtonElement>) => void
   prevQuestion: () => void
   nextQuestion: () => void
   handleBackToCategory: () => void
}
