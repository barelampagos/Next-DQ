// _app.js - top level component. Can import global CSS files here
import '../styles/global.css';

export default function App({ Component, pageProps }) {
	return <Component {...pageProps} />;
}
