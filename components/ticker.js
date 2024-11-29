import styles from '../styles/Home.module.css'
const date = new Date().getFullYear()

export default function Ticker() {
  return (
      <div classNameName={styles.ticker_container}>

<div className={styles.hwrap}><div className={styles.hmove}>
  <div className={styles.hitem}>Join us at Jack Cannon Fitness and let us help you hit your {date} goals!</div>
  <div className={styles.hitem}>Give us a call or send us a message, we&apos;d love to hear from you!</div>
</div></div>
        

      </div>
  )
}