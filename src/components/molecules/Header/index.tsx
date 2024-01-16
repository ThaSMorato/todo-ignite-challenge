import logo from '../../../assets/Logo.svg'
import styles from './styles.module.css'

export const Header = () => {
  return (
    <header className={styles.header}>
      <img src={logo} alt="Todo" />
    </header>
  )
}
