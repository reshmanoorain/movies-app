import '../styles/globals.css';
import "../pages/Components/Header/Header.css";
import "../pages/Components/Banner/Banner.css";
// import "./Components/data/Data.css";
import "../pages/Components/Cards/Cards.css";
import "../pages/Components/Movies/Movies.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
