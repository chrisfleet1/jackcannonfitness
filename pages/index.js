import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Home from './home'
import Link from 'next/link'


export default function Landing() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Jack Cannon Fitness</title>
        <meta name="description" content="Jack Cannon Fitness" />
        <link rel="icon" href="/logo_favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta charset="utf-8"/>
        <meta httpEquiv='X-UA-Compatible'/>
        
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Varela+Round&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Cabin+Sketch&display=swap" rel="stylesheet"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css"/>
        <script src="https://kit.fontawesome.com/2f44dd87de.js" crossorigin="anonymous"></script>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous"/>
            
      </Head>

      <main>
        <div className={styles.backgroundContainer}>
          <video className={styles.video} src="/videos/video3.mp4" autoPlay width={"100%"} loop muted playsinline></video>

          <div className={styles.overlay}>
            <div className={styles.entryContainer}>
              <img className={styles.logo} src='/images/logo.png' alt="Jack Cannon Fitness Logo"/>
              <h1 className={styles.h1}>Jack Cannon Fitness</h1>
              <button className={styles.button} onClick={Home}><Link href="/home" className={styles.link}>Enter Site</Link></button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
