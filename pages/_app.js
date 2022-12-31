import '../styles/globals.css';
import { Varela_Round } from '@next/font/google';

const varela_round = Varela_Round({ weight: '400', subsets: ['latin'] })

function MyApp({ Component, pageProps }) {
  return (
    <main className={varela_round.className}>
      <Component {...pageProps} />
    </main>
  )
}

export default MyApp