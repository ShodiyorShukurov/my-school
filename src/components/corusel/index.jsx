import { Carousel } from "antd";
import img1 from "../../assets/images/practicezone.png"
import img2 from "../../assets/images/harkunlik.png"
import img3 from "../../assets/images/ielts.png"

const CarouselPage = () => (
  <Carousel autoplay adaptiveHeight={true} dotWidth={32}>
    <div>
      <img className="corusel-item" src={img1} alt="img" />
    </div>
    <div>
      <img className="corusel-item" src={img2} alt="img" />
    </div>
    <div>
      <img className="corusel-item" src={img3} alt="img" />
    </div>
  </Carousel>
);
export default CarouselPage;
