import { ReactNode } from 'react'

import styles from './styles.module.css'

interface TypographyProps {
  children: ReactNode
  isDashed?: boolean
}

export const Typography = ({ children, isDashed = false }: TypographyProps) => {
  return (
    <p className={`${styles.typography} ${isDashed && styles.dashed}`}>
      {children}
    </p>
  )
}
