import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'

export default function Jan2022() {
  return (
    <Layout>
      <Head>
        <title>Cisco ASA tcp syslog outage</title>
      </Head>
      <h1>Cisco ASA tcp syslog outage</h1>
      <hr/>
      <h3>
      March 25, 2022
      </h3>
      <p>
        Let's say you have a Cisco ASA firewall in your network.  It is configured with a syslog server and it happily sends its logs over using UDP port 514.  UDP is connectionless, so the ASA sends these packets, but it does not know if they are received or if the syslog server is even listening.  This goes on for a couple years.  Your network is happily chugging along, your business is doing what it does, and someone decides to switch syslog to TCP.  Why would you want to do that?  I'm not sure, I supposed you could combine TCP with TLS and encrypt the logs going over the network.  There could be several reasons to go with TCP, but in this situation switching to TCP is going to cause an outage.
      </p>
      <p>
      By default the ASA has this line configured:
      </p>
      <code>
      no logging permit-hostdown
      </code>
      <p>
      Doing a google search, I find this <Link href="https://www.cisco.com/c/en/us/support/docs/security/pix-500-series-security-appliances/63884-config-asa-00.html"><a>support doc</a></Link>.
      </p>
      <blockquote>
      <p>
      "A server that runs a syslog application is required in order to send syslog messages to an external host. ASA sends syslog on UDP port 514 by default, but protocol and port can be chosen. If TCP is chosen as the logging protocol, this causes the ASA to send syslogs via a TCP connection to the syslog server. If the server is inaccessible, or the TCP connection to the server cannot be established, the ASA will, by default, block <em>ALL</em> new connections. This behavior can be disabled if you enable logging permit-hostdown. See the configuration guide for more information about the logging permit-hostdown command."
      </p>
      </blockquote>
      <p>
      I can understand that some environments consider logging failures fatal because of compliance reasons, so any logging failure needs to be seen as catastrophic, but this should not be the default.  Most shops don't want to be hard down because the syslog server is not reachable.  Since the default is also UDP, which is connectionless and the firewall cannot tell if UDP packet are not reaching the detsination server, then the combination of not permitting hostdown default with UDP default does not make sense.  This combination of no permit-hostdown and UDP will ensure packets going across the firewall whether the syslog server is reachable or not.  So shops that rely on logging will be let down with the defaults.  Also, a simple switch of protocol from UDP to TCP will cause that hostdown permission to all of a sudden go into effect since TCP is connection based and the firewall will now know if the logging server is reachable.
    </p><p>
I was not personally bit by this, but a colleague was.  I can say that if I was directed to change from UDP to TCP syslog, this would have bit me as well.  I know those people who would not have been bit by this are <Link href="https://rachelbythebay.com/w/2018/04/28/meta/"><a>The ONE</a></Link>, or people who have experienced it before.  In the future, I will have a very bad feeling about TCP syslog on a firewall if it is ever suggested.
      </p>
      </Layout>
  )
}