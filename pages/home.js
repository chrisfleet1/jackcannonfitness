// COMPONENT IMPORTS
import Header from '../components/header'
import Footer from '../components/footer'
import About from '../components/about'
import Contact from '../components/contact'
import Reviews from '../components/reviews'
import Ticker from '../components/ticker'

// REACT / NEXTJS / STYLE IMPORTS
import styles from '../styles/Home.module.css' 
import Image from 'next/image'

// IMPORT IMAGES
import gymOne from '../public/images/1.png'
import gymTwo from '../public/images/2.png'
import gymThree from '../public/images/3.png'
import gymFour from '../public/images/4.png'

export default function Home() {
  
  return (
    <div>
      <Header />
      <Ticker />

      <div className={styles.cover_image_container}>
        <div className={styles.cover_overlay}>
          <div className={styles.cover_strapline}>
            <h1>Want to make 2023 a year to remember?</h1>
            <h2>Join us at Jack Cannon Fitness!</h2>
          </div>
        </div>
      </div>

      <About />
        <section className={styles.sections}>
          <div className={styles.sections_header}>
            <h2>Our Mission</h2>
          </div>
          <div className={styles.mission_container}>
            <div className={styles.mission} id="image_1">
              <div className={styles.mission_overlay}>
                <h3 className={styles.mission_header}>Hear It!</h3>
                <figcaption className={styles.mission_text}>When you walk through our doors we want you to hear good sounds from words of encouragement when training to giving you the help & advice you need.</figcaption>
              </div>
            </div>
            <div className={styles.mission} id="image_2">
              <div className={styles.mission_overlay}>
                <h3 className={styles.mission_header}>Feel It!</h3>
                <figcaption className={styles.mission_text}>We want you to see good things, this is everything from seeing a clean tidy gym all the way to demonstrating a new exercise.</figcaption>
              </div>
            </div>
            <div className={styles.mission} id="image_3">
              <div className={styles.mission_overlay}>
                <h3 className={styles.mission_header}>See It!</h3>
                <figcaption className={styles.mission_text}>Feel good emotions, no matter what we want you to feel comfortable in our environment.</figcaption>
              </div>
            </div>
          </div>
        </section>
        <Reviews />      
        
        {/* GYM */}
        <section className={styles.sections}>
          <div className={styles.sections_header}>
              <h2>The Gym</h2>
          </div>
          <div className={styles.gallery_containers}>
              <Image src={gymOne} className={styles.gym_image} alt="Outside of green gym container, side on"></Image>
              <Image src={gymTwo} className={styles.gym_image} alt="Outside of green gym container, facing gym"></Image>
              <Image src={gymThree} className={styles.gym_image} alt="Inside of gym"></Image>
              <Image src={gymFour} className={styles.gym_image} alt="Weights inside of the gym"></Image>
          </div>
        </section>
        <Contact />
        <Footer />
    </div>
  )
}