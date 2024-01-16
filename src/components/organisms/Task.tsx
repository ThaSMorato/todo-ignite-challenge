import { useState } from 'react'

import { Checkbox } from '../atoms/Checkbox'
import { Container } from '../atoms/Container'
import { Typography } from '../atoms/Typography'
import { DeleteTaskButton } from '../molecules/DeleteTaskButton'

interface TaskProps {
  active: boolean
  content: string
  onDeleteClick: () => void
}

export const Task = ({ active, content, onDeleteClick }: TaskProps) => {
  const [isChecked, setIsChecked] = useState<boolean>(active)

  const handleCheckBoxOnClick = () => {
    setIsChecked((value) => !value)
  }

  return (
    <Container>
      <Checkbox onClick={handleCheckBoxOnClick} active={isChecked} />
      <Typography isDashed={isChecked}>{content}</Typography>
      <DeleteTaskButton onClick={onDeleteClick} />
    </Container>
  )
}
