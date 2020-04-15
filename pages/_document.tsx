import Document, { Html, Head, Main, NextScript } from "next/document";
import { Img, User } from "../data";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
  render() {
    return (
      <Html>
        <Head>
          <meta
            name="description"
            content="hyunjun의 portfolio입니다. 천천히 둘러 보세요."
          />
          <meta property="og:image" content={Img[0]?.url} />
          <meta property="og:title" content={User?.title} />
          <meta property="og:description" content={User?.descript} />
          <link rel="manifest" href="/manifest.json" />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="/static/image/thumbnail.png"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
