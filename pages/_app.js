import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
import { Provider } from "react-redux";
import store from "../store.js";
import "../styles/globals.css";
import Layout from "../components/Layout";

config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store()}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
