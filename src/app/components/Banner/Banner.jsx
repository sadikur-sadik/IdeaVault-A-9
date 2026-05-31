'use client'

import Banner_1 from './Banners/Banner_1'
import Banner_2 from './Banners/Banner_3'
import Banner_3 from './Banners/Banner_2'
import useEmblaCarousel from 'embla-carousel-react'
import { RiArrowLeftWideLine, RiArrowRightWideLine } from "react-icons/ri";
import Autoplay from 'embla-carousel-autoplay'

export function Banner() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 50, },[Autoplay({ delay: 6000, stopOnInteraction: false })])

  const goToPrev = () => emblaApi?.scrollPrev()
  const goToNext = () => emblaApi?.scrollNext()

  return (
    <div className='relative w-full'>
      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            <div className="embla__slide "><Banner_1 /></div>
            <div className="embla__slide "><Banner_2 /></div>
            <div className="embla__slide "><Banner_3 /></div>
          </div>
        </div>

        <button
          className="absolute left-6 top-1/2 -translate-y-1/2 text-2xl sm:text-3xl text-white bg-black/40 opacity-50 hover:opacity-100 transition-opacity duration-200 hidden sm:block z-10 p-2 rounded-full"
          onClick={goToPrev}
          aria-label="Previous slide"
        >
          <RiArrowLeftWideLine />
        </button>


        <button
          className=" absolute right-6 top-1/2 -translate-y-1/2 text-2xl sm:text-3xl text-white bg-black/40 opacity-50 hover:opacity-100 transition-opacity duration-200 hidden sm:block z-10 p-2 rounded-full"
          onClick={goToNext}
          aria-label="Next slide"
        >
          <RiArrowRightWideLine />
        </button>
      </div>
    </div>
  )
}