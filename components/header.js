import Head from 'next/head';
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import logo from '../public/images/logo.png'
import { FaFacebook, FaInstagram } from "react-icons/fa"
import { FiMenu } from "react-icons/fi"
import Link from 'next/link'

export default function Header() {
  return (
    <div>
      <Head>
        <title>Jack Cannon Fitness</title>
        <meta name="description" content="Jack Cannon Fitness" />
        <link rel="icon" href="/logo_favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta charset="utf-8"/>
        <meta httpEquiv='X-UA-Compatible'/>
            
      </Head>

      <header className={styles.header_container}>
        <div className={styles.header_overlay}>

        <div className={styles.banner}>
          <div className={styles.sm_container}>
                <Link href="https://www.facebook.com/JackCannonFitness/" target="_blank" rel="noopener"><FaFacebook className={styles.facebookIcon}/></Link>
                <div className={styles.bg}>
                <Link href="https://www.instagram.com/jackcannonfitness/" target="_blank" rel="noopener"><FaInstagram className={styles.instaIcon}/></Link>
                </div>
            </div>
        </div>
          
          <div className={styles.header_logo_container}>
            <Image className={styles.header_logo} src={logo} alt="Jack Cannon Fitness Logo"/>
          </div>

          
          <nav className={styles.nav_container}>
          <FiMenu className={styles.menu}/>
              <ul>
                <li className={styles.nav_links}><Link className={styles.a} href='/home'>Home</Link></li>
                <li className={styles.nav_links}><Link className={styles.a} href='/about'>About</Link></li>
                <li className={styles.nav_links}><Link className={styles.a} href='/services'>Services</Link></li>
                <li className={styles.nav_links}><Link className={styles.a} href='/home'>Blog</Link></li>
              </ul>
          </nav>
        </div>
        

      </header>
      
    </div>
  )
}
