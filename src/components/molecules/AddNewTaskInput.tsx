import { ChangeEvent } from 'react'

import { Container } from '../atoms/Container'
import { Input } from '../atoms/Input'

interface AddNewTaskInputProps {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  value: string
}

export const AddNewTaskInput = ({ onChange, value }: AddNewTaskInputProps) => {
  return (
    <Container>
      <Input
        value={value}
        placeholder="Adicione uma nova tarefa"
        onChange={onChange}
      />
    </Container>
  )
}
