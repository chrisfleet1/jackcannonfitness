
import styles from '../styles/Home.module.css' 
import { FaChevronRight, FaChevronLeft, FaQuoteLeft, FaQuoteRight, FaInfo } from "react-icons/fa"
import { useEffect, useState } from 'react';

// Reviews Array
import {reviews} from '../pages/api/reviews'

let currentItem = 0;


export default function Reviews() {

  let [author, setAuthor] = useState({author: reviews[currentItem].name});
  let [review, setReview] = useState({review: reviews[currentItem].text});
  

  function nextReview() {
    currentItem++;
    if(currentItem > reviews.length - 1) {
      currentItem = 0;
    }
    setAuthor(reviews[currentItem].name);
    setReview(reviews[currentItem].text);
  };

  function prevReview() {
    currentItem--;
    if(currentItem < 0) {
      currentItem = reviews.length - 1;
    }
    setAuthor(reviews[currentItem].name);
    setReview(reviews[currentItem].text);
  };

  return (
    <div>
        <section className={styles.subsections}>
          <div className={styles.sections_header}>
              <h2>Reviews</h2>
          </div>
          <div className={styles.reviews_articles}>
              <span className={styles.indent}></span><p id="text">{reviews[currentItem].text}<span className={styles.indent}></span></p>
            <div className={styles.author_container}>
              <p>-- <span id="author">{reviews[currentItem].name}</span></p>
            </div>
          </div>
          <div className={styles.button_container}>
              <FaChevronLeft className={styles.prevBtn} id="review-next" onClick={prevReview}/>
              <FaChevronRight className={styles.nextBtn} id="review-next" onClick={nextReview}/>
          </div>
        </section>
    </div>
  )
}


// TODO - WORK OUT HOW TO RENDER THE REVIEW AND AUTHOR EACH TIME IT CHANGES