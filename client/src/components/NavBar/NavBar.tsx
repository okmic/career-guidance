import { Link } from "react-router-dom"
import { urlApp } from "../../config"
import styles from './nav.module.css'
import logo from '../../img/logo.png'

const NavBar = () => {

  return <div className={styles.wrapper}>
    <img src={logo} className="logoNav" alt="logo" />
    <Link className={styles.item} to={urlApp}>Главная</Link>
    <Link className={styles.item} to={urlApp + '/statement'}>Заявления</Link>
  </div>
}
export default NavBar

