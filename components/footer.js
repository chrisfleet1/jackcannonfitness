import styles from '../styles/Home.module.css'
import logo from '../public/images/logo.png'
import { FaFacebook, FaInstagram, FaPhoneAlt } from "react-icons/fa"
import { AiOutlineMail } from 'react-icons/ai'
import Image from 'next/image'
import Link from 'next/link'


export default function Footer() {
  return (
      <footer className={styles.footer}>

          <div className={styles.footer_text}>
            <p>&copy; Jack Cannon Fitness</p>

            <div className={styles.sm_container}>
          <Link href="https://www.facebook.com/JackCannonFitness/" target="_blank" rel="noopener"><FaFacebook className={styles.facebookIcon}/></Link>
              <Link href="https://www.instagram.com/jackcannonfitness/" target="_blank" rel="noopener"><FaInstagram className={styles.instaIcon}/></Link>
          </div>

          <div className={styles.contact_container}>
            <div className={styles.contact}>
              <FaPhoneAlt className={styles.contactIcon}/>07807 348294
            </div>
            <div className={styles.contact}>
              <AiOutlineMail className={styles.contactIcon}/>jack@jackcannonfitness.co.uk
            </div>
          </div>

          </div>

      </footer>
  )
}
