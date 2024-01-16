import { useState } from 'react'

import { Header } from './components/molecules/Header'
import { ZeroTask } from './components/molecules/ZeroTask'
import { NewTaskForm } from './components/organisms/NewTaskForm'
import { Task } from './components/organisms/Task'
import styles from './styles.module.css'

interface Task {
  id: string
  content: string
  isFinished: boolean
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([])

  const createTask = (content: string) => {
    const task: Task = {
      content,
      id: `${new Date().getTime()}`,
      isFinished: false,
    }

    setTasks((oldTasks) => [...oldTasks, task])
  }

  const deleteTask = (id: string) => {
    setTasks((oldTasks) => oldTasks.filter((task) => task.id !== id))
  }

  const concludeTask = (id: string) => {
    setTasks((oldTasks) =>
      oldTasks.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            isFinished: !task.isFinished,
          }
        }
        return task
      }),
    )
  }

  const concludedTasks = tasks.filter((task) => task.isFinished).length

  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.mainContainer}>
          <NewTaskForm addNewTask={createTask} />
          <div className={styles.tasksList}>
            <div className={styles.tasksCount}>
              <p className={styles.created}>
                Tarefas criadas<span>{tasks.length}</span>
              </p>

              <p className={styles.concluded}>
                Concluídas{' '}
                <span>
                  {concludedTasks > 0
                    ? `${concludedTasks} de ${tasks.length}`
                    : concludedTasks}
                </span>
              </p>
            </div>
            {tasks.length > 0 ? (
              <div className={styles.list}>
                {tasks.map((task) => (
                  <Task
                    key={task.id}
                    content={task.content}
                    active={task.isFinished}
                    onDeleteClick={() => deleteTask(task.id)}
                    onFinishedClick={() => concludeTask(task.id)}
                  />
                ))}
              </div>
            ) : (
              <ZeroTask />
            )}
          </div>
        </div>
      </main>
    </>
  )
}

export default App
