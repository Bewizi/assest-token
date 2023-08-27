
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from 'embla-carousel-autoplay'

export const Imageslider = () => {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()])

  return (
    // imageSlider container 
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide"><img src="images/beautiful-white-house-being-ready.png" alt="Beautiful White House Being Ready" /></div>
        <div className="embla__slide"><img src="images/modern-luxury-house-drawing-living-room.png" alt="Modern Luxury House Drawing Living Room" /></div>
        <div className="embla__slide"><img src="images/luxury-bedroom.png" alt="Luxury Bedroom" /></div>
      </div>
    </div>
  );
};
