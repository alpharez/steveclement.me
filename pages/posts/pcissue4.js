import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import Layout from '../../components/layout'

export default function PC4() {
  return (
    <Layout>
      <Head>
        <title>PC Issue 4</title>
      </Head>
      <h1>The PC That Still Go Thunk!, Part 4</h1>
      <hr/>
      <h3>
      Sunday, the 30th
      </h3>
      <p>I installed a EVGA Supernova 750 Watt power supply and so far so good.  I did a <Link href="https://www.geeks3d.com/gputest/"><a>GpuTest</a></Link> and the AMD Radeon was using over 100 Watts and went from 31 degrees Celsuis to 68 or so and no thunk, so maybe the PSU was the culprit.  I'll wait and see.  If the PC behaves for at least a week, then that's the problem.
      </p>
      <p>
      To be continued...  plesae let this be the end?
      </p>

      </Layout>
  )
}