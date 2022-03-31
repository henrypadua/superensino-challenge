import { Question } from './Question'

export type CategoryQuestionProps = {
   data: Question[] | null
   setQuestionNumber: (number: number) => void
}
