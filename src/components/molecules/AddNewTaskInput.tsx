import { ChangeEvent } from 'react'

import { Container } from '../atoms/Container'
import { Input } from '../atoms/Input'

interface AddNewTaskInputProps {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

export const AddNewTaskInput = ({ onChange }: AddNewTaskInputProps) => {
  return (
    <Container>
      <Input placeholder="Adicione uma nova tarefa" onChange={onChange} />
    </Container>
  )
}
