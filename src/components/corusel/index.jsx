import { Carousel } from "antd";
import img from '../../assets/images/sizning natijangiz web.jpg'
import img1 from "../../assets/images/1000+ natijalar web.jpg";
import img2 from "../../assets/images/practice zone web.jpg";
import img3 from "../../assets/images/dastur web cover.jpg";
import img4 from "../../assets/images/hard work web cover (2).jpg";
import img5 from "../../assets/images/har kunlik.png.jpg";
import img6 from "../../assets/images/2 ta ustoz web cover.jpg";
import mobile from "../../assets/images/sizning natijangiz.jpg"
import mobile1 from "../../assets/images/1000+ natijalar.jpg";
import mobile2 from "../../assets/images/practice zone phone.png.jpg";
import mobile3 from "../../assets/images/sifat phone.jpg";
import mobile4 from "../../assets/images/hard work web cover phone (2).jpg";
import mobile5 from "../../assets/images/web cover phone.jpg";
import mobile6 from "../../assets/images/2 ta ustoz web cover phone.jpg";


const CarouselPage = () => (
  <>
    <div className="desktop-version">
      <Carousel autoplay>
        <div>
          <img className="corusel-item" src={img} alt="img" />
        </div>

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

        <div>
          <img className="corusel-item" src={img5} alt="img" />
        </div>

        <div>
          <img className="corusel-item" src={img6} alt="img" />
        </div>
      </Carousel>
    </div>

    <div className="mobile-version">
      <Carousel autoplay>
        <div>
          <img className="mobile-corusel-item" src={mobile} alt="img" />
        </div>
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
        <div>
          <img className="mobile-corusel-item" src={mobile5} alt="img" />
        </div>
        <div>
          <img className="mobile-corusel-item" src={mobile6} alt="img" />
        </div>
      </Carousel>
    </div>
  </>
);
export default CarouselPage;
