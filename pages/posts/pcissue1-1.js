import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import Layout from '../../components/layout'

export default function Jan2022() {
  return (
    <Layout>
      <Head>
        <title>PC Issue</title>
      </Head>
      <h1>The PC Problem that Seemed Like it Would Never End</h1>
      <hr/>
      <h3>
      Tuesday 25th
      </h3>
      <p>
        Rewind to a couple weeks ago.  I am going about my usual morning business, and usual, I switch on my PC and it flicks on for a moment and then immediately flicks back off.  I built this PC from parts.  I thought, ok this is a power supply that is going bad.
      </p>
      <p>
      So I grab a different 650 watt power supply and plug everything up.  Same issue.
      </p>
      <p>
      So I get a new motherboard and CPU.  Get everything plugged up, apply thermal paste, CPU fan, drives, RAM, etc... You know, everything back together and it powers up to the BIOS.  I mess around with BIOS settings.  I had to change the drive modes around, and I get the OS to boot up.  But same issue happens.  Power on for just a split second and clicks off and nothing I do seems to work.  I unplug the power cable and plug back in and click click.  Leave it for a while, come back, flick the power rocker on the power supply back on, plug power cable in, hit power button and click click.
      </p>
      <p>
      So I get a new case.  What else can it be????
      </p>

      <h3>
      Friday 28th
      </h3>
      <p>
        My PC was going fine for awhile.  I received the new case since I suspected the old case had a short in it, causing the thing to randomly shut off or fail to turn on.  Today around 2pm, the PC powers completely off with no warning.  So, I decided it's time to go ahead and switch everything to the new case.
      </p>
      <p>
        I had no issues and got everything plugged in and squared away.  So far there has been no issues.  If I still have the power problem, then I guess the next thing to replace is the RAM.
      </p>
      <p>
      To be continued...  but hoping not, and it is a case short that was the problem.
      </p>
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
      <h3>
      Sunday, the 30th
      </h3>
      <p>I installed a EVGA Supernova 750 Watt power supply and so far so good.  I did a <Link href="https://www.geeks3d.com/gputest/"><a>GpuTest</a></Link> and the AMD Radeon was using over 100 Watts and went from 31 degrees Celsuis to 68 or so and no thunk, so maybe the PSU was the culprit.  I'll wait and see.  If the PC behaves for at least a week, then that's the problem.
      </p>
      <h3>
      Wednesday, the 2nd
      </h3>
      <p>Bad power supply, or 650 Watts isn't enough all of a sudden.  750 Watt Power Supply seems to work fine now.  Not sure what changed.  The amdgpu linux drivers maybe?
      </p>
     </Layout>
  )
}
