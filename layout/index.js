import Head from 'next/head'

export default ({ children, title = 'Love NEXT' }) =>
  <main>
    <Head>
      <meta name='format-detection' content='telephone=no,email=no' />
      <title>{title}</title>
    </Head>
    {children}
  </main>
