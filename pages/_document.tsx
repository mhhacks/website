import Document, { Html, Head, Main, NextScript } from 'next/document'

const googleFontFamilies: string[] = [
  'Barlow:wght@300;400;500;600;700',
  'Changa:wght@400;600;700',
  // 'Bungee+Shade',
  // 'Bungee+Inline',
  'Bungee+Outline',
]

class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin=""
          />
          <link
            href={`https://fonts.googleapis.com/css2?${googleFontFamilies
              .map((f) => `family=${f}&`)
              .join('')}display=swap`}
            rel="stylesheet"
          />
          <link href="https://api.fontshare.com/v2/css?f[]=satoshi@1&f[]=clash-display@1&f[]=excon@1&display=swap" rel="stylesheet"></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
