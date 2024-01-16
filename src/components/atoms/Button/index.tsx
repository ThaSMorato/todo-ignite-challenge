import { ButtonHTMLAttributes, ReactNode } from 'react'

import styles from './styles.module.css'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variants?: 'primary' | 'delete'
}

export const Button = ({
  children,
  variants = 'primary',
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      className={variants === 'primary' ? styles.button : styles.delete}
    >
      {children}
    </button>
  )
}
