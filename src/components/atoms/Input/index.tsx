import { InputHTMLAttributes } from 'react'

import styles from './styles.module.css'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input = (props: InputProps) => {
  return <input {...props} className={styles.input} />
}
