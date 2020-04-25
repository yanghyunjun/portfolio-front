import { AppProps } from "next/app";
import GlobalStyles from "../style/GlobalStyle";
import Header from "../component/Header";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
