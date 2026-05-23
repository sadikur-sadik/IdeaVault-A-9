'use client'

import Banner_1 from './Banners/Banner_1'
import Banner_2 from './Banners/Banner_2'
import Banner_3 from './Banners/Banner_3'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { RiArrowLeftWideLine, RiArrowRightWideLine } from "react-icons/ri";



export function Banner() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 4000, stopOnInteraction: true})
  ])
const goToPrev = () => emblaApi?.scrollPrev()
const goToNext = () => emblaApi?.scrollNext()

  return (
    <div className='relative'>
      <div className="relative w-full max-w-[1400px] mx-auto h-[400px] sm:h-[600px] overflow-hidden group">
        <div className="overflow-hidden w-full h-full" ref={emblaRef}>

          <div className="flex h-full touch-pan-y backface-hidden">

            <div className="flex-[0_0_100%] min-w-0 h-full px-2 sm:px-4"><Banner_1 /></div>
            <div className="flex-[0_0_100%] min-w-0 h-full px-2 sm:px-4"><Banner_2 /></div>
            <div className="flex-[0_0_100%] min-w-0 h-full px-2 sm:px-4"><Banner_3 /></div>
          </div>

        </div>
      </div>
      <button className="embla__prev text-5xl text-white top-[50%] left-[3%]   absolute" onClick={goToPrev}><RiArrowLeftWideLine /></button>
      <button className="embla__next text-5xl text-white top-[50%] right-[3%]  absolute" onClick={goToNext}><RiArrowRightWideLine /></button>
    </div>
  )
}