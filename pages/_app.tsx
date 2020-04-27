import { AppProps, AppInitialProps } from "next/app";
import GlobalStyles from "../style/GlobalStyle";
import Header from "../component/Header";

const MyApp = ({ Component, pageProps }: AppProps & AppInitialProps) => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
