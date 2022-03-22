import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import Layout from '../../components/layout'

export default function stunnel() {
  return (
    <Layout>
      <Head>
        <title>It is not the network, it is your application</title>
      </Head>
      <h1>Geniuses provide evidence</h1>
      <hr/>
      <p>
        The network is usually stable.  If your network isn't, then get to work!  Some kind of network stability is super important.  If you don't have that, then it will be obvious.  There are a lot of bad things that can be configured, and those things will be painful.  There are a lot of dumb network technologies that over complicate things, and if those aren't setup optimally, then there will be issues.  But most of the time, networks are stable.  Most of the network is dumb.  Routers route and switches switch.  Firewalls drop the packets they are supposed to drop.
      </p>
      <p>
        The dumbest things to break are not the network hardware or network firmware or even network configs.  The dumbest things are the applications that live on servers, which are connected to the network.  Too many people do not understand this fact: if your application is responding with an error message, then the network did its job and transported that error from the server across the network to you.  Do not raise a ticket with the "network team."
      </p>
      <p>
        My favorite is the 5xx Internal Server error that people see and somehow think that this is a network error.  It says *SERVER* in the error!  But this one could be a network issue on the back end.If the web server cannot get to the app server because of the network, then the 5xx error could show up.  So, whoever reports this as a network error is either a slobbering, mouth-breathing, moron or a genius.  The way to tell which is to read the ticket notes to see if someone did any sort of server troubleshooting or pasted any logs.
      </p>
      <p>
        This brings me to the point.  The mouth-breathing moron will point to the network as the issue with no fucking evidence.  The genius will provide at least a tidbit of evidence that the issue might be the network.  So the difference between moron and genius is evidence.
      </p>
      </Layout>
  )
}
