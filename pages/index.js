import Head from 'next/head'
import NavMenu from '../components/NavMenu';

export default function Home({ Component }) {

  return <div>
    <Head>
      <title>Create Next App</title>

    </Head>
    <NavMenu />
    <style jsx global>{`
        body {
          margin: 0;
          font-family: Ubuntu-Medium;
        }
      `}</style>
  </div>

}
