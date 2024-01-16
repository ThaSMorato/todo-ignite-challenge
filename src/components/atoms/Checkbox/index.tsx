import { Check } from 'phosphor-react'
import { MouseEvent } from 'react'

import styles from './styles.module.css'

interface CheckBoxProps {
  active: boolean
  onClick: (event: MouseEvent<Element>) => void
}

export const Checkbox = ({ active, onClick }: CheckBoxProps) => {
  return (
    <div
      className={`${styles.checkbox} ${active ? styles['checkbox-checked'] : styles['checkbox-unchecked']}`}
      onClick={(e) => onClick(e)}
    >
      {active && <Check weight="bold" />}
    </div>
  )
}
