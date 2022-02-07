import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import Layout from '../../components/layout'

export default function PC3() {
  return (
    <Layout>
      <Head>
        <title>PC Issue 3</title>
      </Head>
      <h1>The PC That Still Go Thunk!, Part 3</h1>
      <hr/>
      <h3>
      Saturday, the 29th
      </h3>
      <p>
        <Image
            src="/images/neofetch.png"
            alt="neofetch"
            width={550}
            height={325}
        />
      </p>
      <p>
      PC still shut itself off with a *thunk*!  No power at all and does not want to start back up.  I can get it to turn on and immediately it shuts off.  Parts that I replaced so far: Motherboard, CPU, Case.  Parts that I re-used: 650W Power Supply, RAM, SDD Drives, AMD Radeon 5700 Video Card.
      </p>
      <p>
      My theory is it is the video card, or the video card needs more power.  I do not believe it is the RAM because I have swapped those already with no luck.  So it has to be the video card.  I didn't want it to be the video card because supply chain issues have made these very expensive.
      </p>
      <p>
      To be continued...  case is good... video card?  video card needs more power?
      </p>

      </Layout>
  )
}