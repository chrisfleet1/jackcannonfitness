import Image from 'next/image'
import styles from '../styles/Home.module.css'
import about_image from '../public/images/jack-cannon.jpg'
import Header from '../components/header'
import Footer from '../components/footer'
import { FaDumbbell, FaUtensils, FaWalking, FaBaby, FaHeart } from "react-icons/fa"



export default function About() {
  return (
    <div>
        <main>
            <section className={styles.sections} id='#about'>
            <div className={styles.about_section}>
            <div className={styles.sections_header}>
                <h2>Our Story</h2>
            </div>
            <div className={styles.about_section_container}>
            <div className={styles.about_image_container}>
                <Image src={about_image} className={styles.about_image} />
            </div>
            <div className={styles.text_container}>
            <article className={styles.sections_text}>
                <p>Having being involved in the fitness industry for over five years we soon realised that the standard of Personal Training needed to improve vastly.</p>
                <p>Jack Cannon Fitness set out to do just that by creating an environment bespoke to our clients, our personal training studio is completely exclusive so you can get the attention you need with your training.</p>
                <p>We wanted to create a unique training space & we done just that transforming a 40ft shipping container into a fully functioning studio.</p>
                <p>Our passion is helping you achieve your goals, we want you to create long lasting habits that set you up to succeed for the rest of your life & not just a quick fix, it’s time to say goodbye to being a yo-yo dieter for good.</p>
                </article>
            </div>
            </div>
            </div>
            </section>

            <section className={styles.subsections}>
                <div className={styles.sections_header}>
                    <h2>Qualifications</h2>
                </div>

                <div className={styles.qualifications}>
                    <div className={styles.qualifications_container}>
                        <FaDumbbell className={styles.icons}/>
                        <figcaption className={styles.caption}>Level 2 Gym Instructor</figcaption>
                    </div>
                    <div className={styles.qualifications_container}>
                        <FaUtensils className={styles.icons}/>
                        <figcaption className={styles.caption}>Nutrition Coach</figcaption>
                    </div>
                    <div className={styles.qualifications_container}>
                        <FaWalking className={styles.icons}/>
                        <figcaption className={styles.caption}>Level 3 Personal Trainer</figcaption>
                    </div>
                    <div className={styles.qualifications_container}>
                        <FaBaby className={styles.icons}/>
                        <figcaption className={styles.caption}>Pre/Post Natal</figcaption>
                    </div>
                    <div className={styles.qualifications_container}>
                        <FaHeart className={styles.icons}/>
                        <figcaption className={styles.caption}>Exercise Referral Instructor</figcaption>
                    </div>
                </div>
            </section>
        </main>
        </div>
  )
}
