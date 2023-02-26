import React from 'react'
import pic from './assets/image-web-3-desktop.jpg'

const Hero = () => {
  return (
    <section className='mx-auto w-8/12 mt-16 flex flex-row gap-8 '>

        <main className='flex flex-col gap-8 w-2/3'>

            <div className='w-full'>
                <img src={pic} className="object-cover" />
            </div>

            <div className='flex flex-row w-full'>
                <div className=' text-6xl font-bold  w-1/2'>The Bright Future of Web 3.0?</div>
                <div className='  w-1/2'>
                    <p className=' text-[.923rem] text-neutral-3'>
                        We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?
                    </p>
                    <button className='mt-[4.2rem] px-7 py-3 bg-primary-2 hover:bg-neutral-4 tracking-[.25em] text-white font-semibold transition duration-200'>Read more</button>
                </div>
            </div>

        </main>

        <aside className='bg-neutral-4 w-1/3'>


                <h1 className='font-bold text-4xl text-primary-1 mx-6 mt-8'>New</h1>

                <div className='grow divide-y divide-neutral-2 text-[14px] text-neutral-2'>

                        <div className='px-6 py-8'>
                            <h1 className='text-xl text-neutral-1 font-bold '>Hydrogen VS Electric Cars</h1>
                            <p className=' mt-2'>Will hydrogen-fueled cars ever catch up to EVs?</p>
                        </div>


                        <div className=' px-6 py-8'>
                            <h1 className='text-xl text-neutral-1 font-bold '>The Down Side of AI Artistry</h1>
                            <p className=' mt-2'>What are the possible adverse effects of on-demand AI image generation?</p>
                        </div>


                        <div className='px-6 py-8'>
                            <h1 className='text-xl text-neutral-1 font-bold '>Is VC Funding Drying Up?</h1>
                            <p className='mt-2'>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
                        </div>
                        
                </div>

                  

        </aside>



      


    </section>
  )
}

export default Hero