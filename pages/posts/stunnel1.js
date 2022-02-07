import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import Layout from '../../components/layout'

export default function stunnel() {
  return (
    <Layout>
      <Head>
        <title>Adventures with stunnel</title>
      </Head>
      <h1>Adventures with stunnel</h1>
      <hr/>
      <h3>
      Sunday, the 6th
      </h3>
      <p>
      I was tasked with figuring out a strange issue.  A web service kept going unavailable for 5-15 minutes at a time, and they would self-correct.  These outages would occur once a day for 1-3 days and then a month or two later it would happen again.  So, it was impossible to reproduce.  I had to figure this out.
      </p>
      <p>
      Was it the Cisco ASA firewall with the firepower IPS?  Was it the F5 Local Traffic Manager (LTM), a load balance appliance?  Was it a routing/switching issue, like packet loss or network congestion?
      </p>
      <p>
      We looked at the network and there was no errors on any ports.  Firewalls show no dropped packets for the web flow.  We setup packet captures on the web servers and the Cisco firewall hoping to catch the outage.  Eventually the outage re-ocurred, and we were able to view a packet capture.
      </p>
      <p>
      The packet captures showed the outage as a period of lower than normal throughput between clients and the server, with a large spike at the end of the outage as clients reconnected.  We also noticed increased TCP resets during the outage and right after.
      </p>
      <p>
      After not finding any network issues, I started looking at the application itself.  The application didn't do any encryption, so stunnel was put in front of it as a SSL/TLS/VPN proxy.  Encrypted traffic would come from the clients and terminate on stunnel, which would send the unencrypted packets to the application.
      </p>
      <p>
      I wanted to look at the log files that stunnel created, and in the server messages log, there was a lot of stunnel logs.  stunnel logs everything it does, at least the way it was setup here.  So there were gigabytes worth of logs.  I was able to track down the time of the outages in these logs, and I could see
      a gap.  The logging stopped at the beginning of the outage and it picked back up again at the end.  stunnel was frozen during these outages.
      </p>
      <p>
      I believe the way stunnel was setup was not optimal for this application.  Some input queue was filling up and it took a few minutes to straighten everything out, flush queues and start up connections again.  We had some good ideas from the stunnel-users mailing list on how to configure stunnel better, but the plan
      is to use the load balancer to do the encryption.
      </p>
      </Layout>
  )
}
