import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Contact() {
  return (
      <section className={styles.subsections}>
        <div className={styles.sections_header}>
            <h2 >Contact Us</h2>
        </div>
        <form className={styles.form_container} data-netlify="true" method='POST' name="contact" data-netlify-recaptcha="true" data-netlify-honeypot="bot-field" action="home">
        <p>Book your free consultation here, e-mail us at <Link href="mailto: jack@jackcannonfitness.co.uk" className={styles.link}>jack@jackcannonfitness.co.uk</Link>!</p>
            <div className={styles.input_container}>
                <label for="name" className={styles.hidden}>Contact Name: </label>
                <input type="text" placeholder="Contact Name" name="name" id="name" required></input>
            </div>
            <div className={styles.input_container}>
                <label for="email" className={styles.hidden}>E-Mail Address: </label>
                <input type="email" placeholder="E-Mail Address" name="email" id="email" required></input>
            </div>
            <div className={styles.input_container}>
                <label for="phone" className={styles.hidden}>Phone Number: </label>
                <input type="tel" placeholder="Phone Number" name="phone" id="phone" pattern="[0-9]{11}"></input>
            </div>
            <div className={styles.input_container}>
                <label for="message" className={styles.textarea_label}>Message: </label>
                <textarea name="message" placeholder="Message" required></textarea>
            </div>
            <div data-netlify-recaptcha="true"></div>
            <input type='submit' className={styles.submit}></input>

        </form>
      </section>
  );
}
