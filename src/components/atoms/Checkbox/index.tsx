import { Check } from 'phosphor-react'
import { useState } from 'react'

import styles from './styles.module.css'

export const Checkbox = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false)

  return (
    <div
      className={`${styles.checkbox} ${isChecked ? styles['checkbox-checked'] : styles['checkbox-unchecked']}`}
      onClick={() => setIsChecked((val) => !val)}
    >
      {isChecked && <Check weight="bold" />}
    </div>
  )
}
