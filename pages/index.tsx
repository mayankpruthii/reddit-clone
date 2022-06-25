import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/header'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Reddit clone</title>
      </Head>
      <Header />
    </div>
  )
}

export default Home
