import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/header'
import Footer from '../components/footer'
import Pricing from '../public/images/pricing.jpg'
import Online from '../public/images/online.jpg'
 


export default function Services() {
  return (
    <div>
      <Header />
      <main>
        <section className={styles.sections}>
        <div className={styles.sections_header}>
              <h2>Our Services</h2>
            </div>
        <div>
          <div className={styles.services_container}>
          <div className={styles.image_container}>
                <Image src={Pricing} className={styles.services_image} 
                  alt="Pricing chart for Jack Cannon Fitness. Yearly premium plan at £1,349.92, Advanced Package at £300, Start Package at £165, and an Individual Personal Training Session at £35 per session"/>
              </div>

              <div className={styles.services_text_container}>
                <div className={styles.services_header}>
                  <h3>One to One Training</h3>
                </div>
                <div>
                  <p>Our 1-2-1 Personal Training is perfect regardless of what stage you’re at in your fitness journey. We sit down with an initial consultation and discuss your goals or any reservations which might be holding you back.</p>
                  <p>Our training is completely private so you get the attention you need in all of your sessions, our aim is and always will be to make training enjoyable for you, we want you to have the best possible experience you can possibly get every time you come through our doors.</p>
                  <p>What you get</p>
                  <ul>
                      <li>Completely private training</li>
                      <li>Access to our online platform</li>
                      <li>Bespoke training program</li>
                      <li>Check ins</li>
                      <li>24/7 Support</li>
                  </ul>                  
              </div>          
              <h3 class="header">Pricing</h3>
                  <p>We offer two packages with our 1-2-1 training:</p>
              </div>          
                      
            </div>
          </div>
        </section>

        <section className={styles.subsections}>
          <div className={styles.services_container}>
            <figcaption className={styles.services_text_container}>
              <h3>Online Coaching</h3>
              <p>Our online coaching is great for anybody who cannot commit to certain training times & feels comfortable training on their own. With our guidance & support along the way via email, FaceTime & our online platform.</p>
              <h4>What is included:</h4>
              <ul >
                <li>A program specifically designed for you & what works around your lifestyle.</li>
                <li>Weekly check ins</li>
                <li>Online app where you have access to a variety of tools to help you such as our cookbooks.</li>
                <li>Fully trackable workouts so you know what you&apos;re doing when you head into the gym.</li>
                <li>Exercise demonstration videos</li>
            </ul>
            </figcaption>
              <div className={styles.image_container}>
                  <Image src={Online} className={styles.services_image} alt="Lady in press up position whilst on a video session"/>
              </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}