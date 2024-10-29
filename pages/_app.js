import '../styles/globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

function MyApp({ Component, pageProps }) {
  return (
    <main className={`${inter.className} min-h-screen bg-white`}>
      <Component {...pageProps} />
    </main>
  )
}

export default MyApp
