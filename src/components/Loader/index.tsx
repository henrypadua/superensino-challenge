import { Spinner } from '@chakra-ui/react'

import type { LoaderProps } from '@/types'

export function Loader({
   thickness,
   speed,
   color,
   emptyColor,
   size
}: LoaderProps) {
   return (
      <>
         <Spinner
            thickness={thickness}
            speed={speed}
            color={color}
            size={size}
            emptyColor={emptyColor}
         />
      </>
   )
}
