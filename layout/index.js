import Head from 'next/head'

export default ({ children }) =>
  <main>
    <Head>
      <meta name='format-detection' content='telephone=no,email=no' />
    </Head>
    {children}
  </main>
