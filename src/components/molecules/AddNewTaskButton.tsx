import { PlusCircle } from 'phosphor-react'
import { MouseEvent } from 'react'

import { Button } from '../atoms/Button'

interface AddNewTaskButtonProps {
  onClick: (event: MouseEvent<HTMLButtonElement>) => void
}

export const AddNewTaskButton = ({ onClick }: AddNewTaskButtonProps) => {
  return (
    <Button onClick={onClick}>
      Criar <PlusCircle weight="bold" size={16} />
    </Button>
  )
}
