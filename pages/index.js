import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I'm <strong>Steve</strong>.  I'm a network engineer and software developer.</p>
        <p>I am interested in Crypto/web3 projects as a dev or network/security engineer.  Contact methods <Link href="https://twitter.com/steve3279"><a>Twitter</a></Link> and
        &nbsp;<Link href="https://github.com/alpharez"><a>Github</a></Link>. If you're interested: <Link href="/posts/cv"><a>CV</a></Link></p>

        <h3>Blog Posts</h3>

        <Link href="/posts/asalogdown">
          <a>Cisco ASA tcp syslog outage</a>
        </Link>
        <br />

        <Link href="/posts/lessons1">
          <a>Geniuses provide evidence</a>
        </Link>
        <br />

        <Link href="/posts/stunnel1">
          <a>Adventures with stunnel </a>
        </Link>
        <br />

      <Link href="/posts/pcissue1-1">
            <a>Never Ending PC Problem</a>
        </Link>

      </section>
    </Layout>
  )
}
