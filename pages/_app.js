import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return(
    <>
        <title>Instagram</title>
        <link rel="icon" href="/favicon.ico" />
        <Component {...pageProps} />
    </>
  )
}

export default MyApp
