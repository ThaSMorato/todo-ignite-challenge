import { Trash } from 'phosphor-react'
import { MouseEvent } from 'react'

import { Button } from '../atoms/Button'

interface DeleteTaskButtonProps {
  onClick: (event: MouseEvent<HTMLButtonElement>) => void
}

export const DeleteTaskButton = ({ onClick }: DeleteTaskButtonProps) => {
  return (
    <Button variants="delete" onClick={onClick}>
      <Trash size={14} />
    </Button>
  )
}
