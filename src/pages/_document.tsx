import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';

class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <link
            rel='prefetch'
            href='/fonts/Roboto-Bold.ttf'
            crossOrigin='anonymous'
          />
          <link
            rel='prefetch'
            href='/fonts/Roboto-Regular.ttf'
            crossOrigin='anonymous'
          />
          <link
            rel='prefetch'
            href='/fonts/Roboto-Light.ttf'
            crossOrigin='anonymous'
          />
          <link
            rel='prefetch'
            href='/fonts/Roboto-Medium.ttf'
            crossOrigin='anonymous'
          />
        </Head>
        <body className='font-roboto'>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
