import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'

export default function CV() {
  return (
    <Layout>
      <Head>
        <title>CV</title>
      </Head>
      <h1>CV</h1>
      <h5>
        <p>15 years of network security experience</p>
        <p>Education: University of Louisiana at Lafayette</p>
      </h5>
        <blockquote>I specialize in networking, load balancing and security using products from Cisco, F5, A10,
          Palo Alto, Juniper, and Fortigate. I am comfortable working in all areas of networking and I am a
          programmer interested in DevOps automation.</blockquote>
      
      <h3>Skills</h3>
      <div className="progress">
          <div className="progress-bar w-100 bg-success" role="progressbar">Firewalls</div>
        </div>
        <div className="progress">
          <div className="progress-bar w-100 bg-success" role="progressbar">Routing/Switching</div>
        </div>
        <div className="progress">
          <div className="progress-bar w-100 bg-success" role="progressbar">Load Balancers</div>
        </div>

        <div className="progress">
          <div className="progress-bar w-50 bg-danger" role="progressbar">Java</div>
        </div>
        <div className="progress">
          <div className="progress-bar w-75" role="progressbar">Javascript</div>
        </div>
        <div className="progress">
          <div className="progress-bar w-50 bg-danger" role="progressbar">Kotlin</div>
        </div>
        <div className="progress">
          <div className="progress-bar w-75" role="progressbar">C/C++/C#/Objective C</div>
        </div>
        <div className="progress">
          <div className="progress-bar w-100 bg-success" role="progressbar">Python</div>
        </div>
        <div className="progress">
          <div className="progress-bar w-50 bg-danger" role="progressbar">Haskell</div>
        </div>
        <div className="progress">
          <div className="progress-bar w-75" role="progressbar">Devops</div>
        </div>
        <div className="progress">
          <div className="progress-bar w-100 bg-success" role="progressbar">Linux</div>
        </div>

    </Layout>
  )
}