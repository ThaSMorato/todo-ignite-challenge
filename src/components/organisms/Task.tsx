import { Checkbox } from '../atoms/Checkbox'
import { Container } from '../atoms/Container'
import { Typography } from '../atoms/Typography'
import { DeleteTaskButton } from '../molecules/DeleteTaskButton'

interface TaskProps {
  active: boolean
  content: string
  onDeleteClick: () => void
  onFinishedClick: () => void
}

export const Task = ({
  active,
  content,
  onDeleteClick,
  onFinishedClick,
}: TaskProps) => {
  const handleCheckBoxOnClick = () => {
    onFinishedClick()
  }

  return (
    <Container>
      <Checkbox onClick={handleCheckBoxOnClick} active={active} />
      <Typography isDashed={active}>{content}</Typography>
      <DeleteTaskButton onClick={onDeleteClick} />
    </Container>
  )
}
