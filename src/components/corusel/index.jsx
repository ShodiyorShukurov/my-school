import { Carousel } from "antd";
import img1 from "../../assets/images/practicezone.png";
import img2 from "../../assets/images/harkunlik.png";
import img3 from "../../assets/images/ielts.png";
import img4 from "../../assets/images/2 ta ustoz.png";
import mobile1 from "../../assets/images/practice zone phone.png";
import mobile2 from "../../assets/images/har kunlik phone.png";
import mobile3 from "../../assets/images/ielts 7 phone.png";
import mobile4 from "../../assets/images/2 ta ustoz phone.png";

const CarouselPage = () => (
  <>
    <div className="desktop-version">
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
        <div>
          <img className="corusel-item" src={img4} alt="img" />
        </div>
      </Carousel>
    </div>

    <div className="mobile-version">
      <Carousel>
        <div>
          <img className="mobile-corusel-item" src={mobile1} alt="img" />
        </div>
        <div>
          <img className="mobile-corusel-item" src={mobile2} alt="img" />
        </div>
        <div>
          <img className="mobile-corusel-item" src={mobile3} alt="img" />
        </div>
        <div>
          <img className="mobile-corusel-item" src={mobile4} alt="img" />
        </div>
      </Carousel>
    </div>
  </>
);
export default CarouselPage;
