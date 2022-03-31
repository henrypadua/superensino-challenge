import { theme } from '@chakra-ui/react'
import styled from '@emotion/styled'

import type { ButtonWrapperProps } from '@/types'

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
   width: 100%;
   margin-bottom: 10px;
   transition: all 0.3s ease;
   :hover {
      opacity: 0.8;
   }
   button {
      cursor: pointer;
      user-select: none;
      background: ${({ userClicked }) =>
         userClicked ? theme.colors.orange[300] : ''};
      color: ${({ userClicked }) =>
         userClicked ? theme.colors.black : ''} !important;
   }
`
