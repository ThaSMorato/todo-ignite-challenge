import { ClipboardText } from 'phosphor-react'

import styles from './styles.module.css'

export const ZeroTask = () => {
  return (
    <div className={styles.container}>
      <ClipboardText size={56} weight="bold" />
      <strong>Você ainda não tem tarefas cadastradas</strong>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  )
}
