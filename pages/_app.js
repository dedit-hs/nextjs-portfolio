import '../styles/globals.css'
import Navbar from '../components/Navbar'
import { Poppins } from '@next/font/google'

const poppins = Poppins({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
})


function MyApp({ Component, pageProps }) {
  return (
    <>
        <style jsx global>{`
          html {
            font-family: ${poppins.style.fontFamily};
          }
        `}</style>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp
