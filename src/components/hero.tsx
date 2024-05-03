'use client'

import dynamic from 'next/dynamic'
import Link from 'next/link'
import { FADE_DOWN_ANIMATION_VARIANTS } from '@/constans'
import { domAnimation, LazyMotion, m } from 'framer-motion'


import { cn } from '@/lib/utils'
import { GitHub, LinkedIn } from '@/components/icons'

import { buttonVariants } from './ui/button'

const HomeScene = dynamic(() => import('@/scenes/home-scene'), {
  ssr: false,
})

const Hero = () => {
  return (
    <LazyMotion features={domAnimation}>
      <m.div
        initial='hidden'
        animate='show'
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
        className='my-25 flex items-center justify-between '
      >
         <div className="ml-5 text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-5xl font-bold">
        <m.h1
            variants={FADE_DOWN_ANIMATION_VARIANTS}
            className='text-4xl font-bold md:text-6xl'
          >
          <h1 className="inline">
          Preserving {" "}<br/>
            <span className="inline bg-gradient-to-r from-[#F596D3]  to-[#D247BF] text-transparent bg-clip-text">
            {" "}Authenticity <br/>
            </span>{" "}
            in the Age of
          </h1>{" "}
          {" "}
          
          <h2 className="inline">
            <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
            AI.
            </span>{" "}
            
          </h2>
          </m.h1>
        </main>
        <m.h2
            variants={FADE_DOWN_ANIMATION_VARIANTS}
            className=' my-1 text-2xl font-semibold text-primary md:text-4xl'
          >
        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
        Join us in our mission to combat these threats and uphold the integrity of our digital world.
        </p>
        </m.h2>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          {/* <Button className="w-full md:w-1/3">Get Started</Button> */}

          <a
            href="https://github.com/leoMirandaa/shadcn-landing-page.git"
            target="_blank"
            className={`w-full md:w-1/3 ${buttonVariants({
              variant: "outline",
            })}`}
          >
            Get Sarted
            {/* <GitHubLogoIcon className="ml-2 w-5 h-5" /> */}
          </a>
        </div>
      </div>

       
        <m.div
          variants={FADE_DOWN_ANIMATION_VARIANTS}
          className='hidden size-[600px] items-center justify-center xl:flex'
        >
          <HomeScene />
        </m.div>
      </m.div>
    </LazyMotion>
  )
}

export default Hero
