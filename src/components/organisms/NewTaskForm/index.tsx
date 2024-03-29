import { ChangeEvent, useState } from 'react'

import { AddNewTaskButton } from '../../molecules/AddNewTaskButton'
import { AddNewTaskInput } from '../../molecules/AddNewTaskInput'
import styles from './styles.module.css'

interface NewTaskForm {
  addNewTask: (taskContent: string) => void
}

export const NewTaskForm = ({ addNewTask }: NewTaskForm) => {
  const [newTask, setNewTask] = useState<string>('')

  const handleOnNewTaskChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTask(e.target.value)
  }

  const handleNewTaskClick = () => {
    addNewTask(newTask)
    setNewTask('')
  }

  return (
    <div className={styles.formContainer}>
      <AddNewTaskInput value={newTask} onChange={handleOnNewTaskChange} />
      <AddNewTaskButton onClick={handleNewTaskClick} />
    </div>
  )
}
