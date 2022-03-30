import { Question } from './Question'

export type CardQuestionProps = {
   questions: Question
   category: string
   totalQuestions?: number
   questionNumber?: number
   callback: () => void
}
