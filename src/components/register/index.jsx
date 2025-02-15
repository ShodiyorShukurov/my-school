import { Col, Row } from "antd";
import logo from "/src/assets/images/logo.svg";
import uzb from "../../assets/images/uzb-flag.png";
import rus from "../../assets/images/rus-flag.png";
import eng from "../../assets/images/eng-flag.png";
import CarouselPage from "../corusel";
import { data } from "../../Mock";
import Form from "../Form";
import useRegister from "../../hooks/useRegister";

const Register = () => {
  const {
    changeValue,
    setChangeValue,
    setName,
    phone,
    setPhone,
    errors,
    handleSubmit,
  } = useRegister();

  return (
    <div className="container">
      <Row className="register-row">
        <Col
          sm={{ span: 24, order: 2 }}
          md={{ span: 12, order: 1 }}
          lg={{ span: 12, order: 1 }}
          className="full-width-col"
        >
          <a href="/" className="site-logo">
            <img src={logo} alt="MY SCHOOL" width={184} height={44} />
          </a>

          {changeValue === "uzb" && (
            <h1 className="site-title">
              <span>{data.uzb.title_1}</span> {data.uzb.title_2}
            </h1>
          )}
          {changeValue === "rus" && (
            <h1 className="site-title">
              {data.rus.title_1}
              <span>{data.rus.title_2}</span>
            </h1>
          )}
          {changeValue === "eng" && (
            <h1 className="site-title">
              {data.eng.title_2.slice(0, 16)}
              <span>{data.eng.title_1}</span>{" "}
              {data.eng.title_2.slice(15)}
            </h1>
          )}

          <p className="site-subtitle">{data[changeValue].sub_title}</p>

          <Form
            changeValue={changeValue}
            setName={setName}
            phone={phone}
            setPhone={setPhone}
            errors={errors}
            handleSubmit={handleSubmit}
          />

          <div className="language-btns">
            <button
              className={changeValue === "uzb" ? "lang" : ""}
              onClick={() => setChangeValue("uzb")}
            >
              <img src={uzb} alt="uzb" width={20} />
              O&apos;zbekcha
            </button>
            <button
              className={changeValue === "rus" ? "lang" : ""}
              style={{ margin: "0 10px" }}
              onClick={() => setChangeValue("rus")}
            >
              <img src={rus} alt="rus" width={20} />
              Русский
            </button>
            <button
              className={changeValue === "eng" ? "lang" : ""}
              onClick={() => setChangeValue("eng")}
            >
              <img src={eng} alt="eng" width={20} />
              English
            </button>
          </div>
        </Col>

        <Col
          sm={{ span: 24, order: 1 }}
          md={{ span: 12, order: 2 }}
          lg={{ span: 12, order: 2 }}
          className="full-width-col"
        >
          <div className="site-header">
            <div className="site-header__start">
              <a href="/">
                <img src={logo} alt="MY SCHOOL" width={120} height={100} />
              </a>
            </div>

            <div className="site-header__end">
              <button
                className={changeValue === "uzb" ? "lang" : ""}
                onClick={() => setChangeValue("uzb")}
              >
                <img src={uzb} alt="uzb" width={20} />
              </button>
              <button
                className={changeValue === "rus" ? "lang" : ""}
                style={{ margin: "0 10px" }}
                onClick={() => setChangeValue("rus")}
              >
                <img src={rus} alt="rus" width={20} />
              </button>
              <button
                className={changeValue === "eng" ? "lang" : ""}
                onClick={() => setChangeValue("eng")}
              >
                <img src={eng} alt="eng" width={20} />
              </button>
            </div>
          </div>
          <CarouselPage />
        </Col>
      </Row>
    </div>
  );
};

export default Register;
