import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <html>
        <Head>
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,700"
            rel="stylesheet"
          />
          <link rel="stylesheet" href="/_next/static/style.css" />
          <style
          >{`body { margin: 0 ; font-family: 'Roboto', sans-serif; padding : 0}`}</style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
