import "slick-carousel/slick/slick.scss";
import "react-modal-video/scss/modal-video.scss";
import "../styles/style.scss";
import { Provider } from "react-redux";
import store from "../store";

// component
import HeaderTop from "../components/HeaderTop";
import HeaderBottom from "../components/HeaderBottom";
import FooterArea from "../components/FooterArea";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <header className="headerArea">
        <HeaderTop className="headerTop" />
        <HeaderBottom className="headerBottomArea" />
      </header>
      <Component {...pageProps} />

      <FooterArea />
    </Provider>
  );
}

export default MyApp;
