import React from 'react'
import pic1 from './assets/image-retro-pcs.jpg'
import pic2 from './assets/image-top-laptops.jpg'
import pic3 from './assets/image-gaming-growth.jpg'


const Bot = () => {
    return (
    <section className='mx-auto w-8/12 mt-16 h-[120px]'>

      <section className='w-full h-full flex flex-row items-center gap-6'>
            <article className='flex-1 h-full'>

                <div className='w-full h-full flex flex-row items-center'>

                    <div className='w-1/3 h-full'>
                        <img src={pic1} className="object-cover" />
                    </div>
                    <div className='w-2/3 ml-8 flex flex-col h-full gap-2'>
                        <h1 className='font-bold text-3xl text-neutral-2'>01</h1>
                        <h4 className='font-bold text-l'>Reviving Retro PCs</h4>
                        <p className='text-[14px]'>What happens when old PCs are given modern upgrades?</p>    
                    </div>

                </div>

            </article>
            <article className='flex-1 h-full'>

                <div className='w-full h-full flex flex-row items-center'>

                    <div className='w-1/3 h-full'>
                        <img src={pic2} className="object-cover" />
                    </div>
                    <div className='w-2/3 ml-8 flex flex-col h-full gap-2'>
                        <h1 className='font-bold text-3xl text-neutral-2'>02</h1>
                        <h4 className='font-extrabold text-l'>Top 10 Laptops of 2022</h4>
                        <p className='text-[14px]'>Our best picks for various needs and budgets.</p>    
                    </div>

                </div>

            </article> 
            
            <article className='flex-1 h-full'>

                <div className='w-full h-full flex flex-row items-center'>

                    <div className='w-1/3 h-full'>
                        <img src={pic3} className="object-cover" />
                    </div>
                    <div className='w-2/3 ml-8 flex flex-col h-full gap-2'>
                        <h1 className='font-bold text-3xl text-neutral-2'>03</h1>
                        <h4 className='font-bold text-l'>The Growth of Gaming</h4>
                        <p className='text-[14px]'>How the pandemic has sparked fresh opportunities.</p>    
                    </div>

                </div>

            </article>
        </section>
    </section>
  )
}

export default Bot