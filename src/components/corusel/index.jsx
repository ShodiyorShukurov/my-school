import { Carousel } from "antd";

const CarouselPage = () => (
  <Carousel autoplay adaptiveHeight={true} dotWidth={32}>
    <div>
      <h3 className="corusel-item">1</h3>
    </div>
    <div>
      <h3 className="corusel-item">2</h3>
    </div>
    <div>
      <h3 className="corusel-item">3</h3>
    </div>
    <div>
      <h3 className="corusel-item">4</h3>
    </div>
  </Carousel>
);
export default CarouselPage;
