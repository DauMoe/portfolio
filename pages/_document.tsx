import { Html, Head, Main, NextScript, DocumentContext } from 'next/document';

export default function Document() {
  return (
    <Html className='scroll-smooth' style={{scrollBehavior:'smooth'}}>
      <Head>
        <meta
          name='description'
          content="Lê Hoàng's portfolio"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}