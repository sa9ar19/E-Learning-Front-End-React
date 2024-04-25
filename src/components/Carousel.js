
import { Carousel } from "flowbite-react";
import img1  from "../Assets/Carousel-1.png"
import img2  from "../Assets/Carousel-2.png"
import img3  from "../Assets/Carousel-3.jpg"
import img4  from "../Assets/Carousel-4.jpg"

export function CarouselComponent() {
  return (
    <div className="mt-4 h-96 sm:h-96 xl:h-half 2xl:h-96">
      <Carousel slideInterval={1000} pause>
        <img src={img1} alt="..." />
        <img src={img2} alt="..." />
        <img src={img3} alt="..." />
        <img src={img4} alt="..." />
      </Carousel>
    </div>
  );
}
