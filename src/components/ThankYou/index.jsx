import useRegister from "../../hooks/useRegister";
import logo from "/src/assets/images/logo original.png";
import { data } from "../../Mock";

const ThankYou = () => {
  const { changeValue, setChangeValue } = useRegister();
  return (
    <>
      <div className="container">
        <header className="thank-you">
          <div className="site-header__start">
            <a href="/">
              <img
                className="thank-you_logo"
                src={logo}
                alt="MY SCHOOL"
                width={170}
                height={100}
              />
            </a>
          </div>
          <div className="thank-you__site-header__end language-btns">
            <button
              className={changeValue === "uzb" ? "lang" : ""}
              onClick={() => setChangeValue("uzb")}
            >
              <img src="/src/assets/images/uzb-flag.png" alt="uzb" width={20} />
              O&apos;zbekcha
            </button>
            <button
              className={changeValue === "rus" ? "lang" : ""}
              style={{ margin: "0 10px" }}
              onClick={() => setChangeValue("rus")}
            >
              <img src="/src/assets/images/rus-flag.png" alt="uzb" width={20} />
              Русский
            </button>
            <button
              className={changeValue === "eng" ? "lang" : ""}
              onClick={() => setChangeValue("eng")}
            >
              <img src="/src/assets/images/eng-flag.png" alt="uzb" width={20} />
              English
            </button>
          </div>

          <div className="site-header__end">
            <button
              className={changeValue === "uzb" ? "lang" : ""}
              onClick={() => setChangeValue("uzb")}
            >
              <img src="/src/assets/images/uzb-flag.png" alt="uzb" width={20} />
            </button>
            <button
              className={changeValue === "rus" ? "lang" : ""}
              style={{ margin: "0 10px" }}
              onClick={() => setChangeValue("rus")}
            >
              <img src="/src/assets/images/rus-flag.png" alt="uzb" width={20} />
            </button>
            <button
              className={changeValue === "eng" ? "lang" : ""}
              onClick={() => setChangeValue("eng")}
            >
              <img src="/src/assets/images/eng-flag.png" alt="uzb" width={20} />
            </button>
          </div>
        </header>

        <section className="thank-you__section">
          <div style={{ width: "150px", height: "150px" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 180 180"
              width="180"
              height="180"
              preserveAspectRatio="xMidYMid meet"
              style={{
                width: "100%",
                height: "100%",
                transform: "translate3d(0px, 0px, 0px)",
                contentVisibility: "visible",
              }}
            >
              <defs>
                <clipPath id="__lottie_element_2">
                  <rect width="180" height="180" x="0" y="0"></rect>
                </clipPath>
                <clipPath id="__lottie_element_4">
                  <path d="M0,0 L480,0 L480,480 L0,480z"></path>
                </clipPath>
                <linearGradient
                  id="__lottie_element_14"
                  spreadMethod="pad"
                  gradientUnits="userSpaceOnUse"
                  x1="-163.9250030517578"
                  y1="114.29900360107422"
                  x2="205.8979949951172"
                  y2="-131.20399475097656"
                >
                  <stop offset="0%" stopColor="rgb(17,153,142)"></stop>
                  <stop offset="31%" stopColor="rgb(36,196,134)"></stop>
                  <stop offset="100%" stopColor="rgb(56,239,125)"></stop>
                </linearGradient>
              </defs>
              <g clipPath="url(#__lottie_element_2)">
                <g
                  clipPath="url(#__lottie_element_4)"
                  transform="matrix(0.375,0,0,0.375,0,0)"
                  opacity="1"
                  style={{ display: "block" }}
                >
                  <g
                    transform="matrix(0.9999995231628418,0,0,0.9999995231628418,240,240)"
                    opacity="1"
                    style={{ display: "block" }}
                  >
                    <g opacity="1" transform="matrix(1,0,0,1,0,-2)">
                      <path
                        fill="url(#__lottie_element_14)"
                        fillOpacity="1"
                        d=" M163,0 C163,90.02200317382812 90.02200317382812,163 0,163 C-90.02200317382812,163 -163,90.02200317382812 -163,0 C-163,-90.02200317382812 -90.02200317382812,-163 0,-163 C90.02200317382812,-163 163,-90.02200317382812 163,0z"
                      ></path>
                    </g>
                  </g>
                  <g
                    transform="matrix(1,0,0,1,240,240)"
                    opacity="1"
                    style={{ display: "block" }}
                  >
                    <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fillOpacity="0"
                        stroke="rgb(255,255,255)"
                        strokeOpacity="1"
                        strokeWidth="35"
                        d=" M81,-46.64400100708008 C81,-46.64400100708008 -24.66699981689453,58.51900100708008 -24.66699981689453,58.51900100708008 C-24.66699981689453,58.51900100708008 -73,9.835000038146973 -73,9.835000038146973"
                      ></path>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </div>
          <h2 className="thank-you__section-title">
            {data[changeValue].thank_you_title}
          </h2>
          <p className="thank-you__section-subtitle">
            {data[changeValue].thank_you_subtitle}
          </p>
          <h5 className="thank-you__section-social">
            {data[changeValue].network}
          </h5>
          <div style={{ display: "flex" }}>
            <a href="https://www.instagram.com/myschooluz.official/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M2.568 0.000488281H17.4332C18.8455 0.000488281 20 1.15542 20 2.56769V17.4329C20 18.8448 18.8455 19.9989 17.4332 19.9989H2.568C1.15573 19.9989 0 18.8447 0 17.4329V2.56769C0 1.15542 1.15573 0.000488281 2.568 0.000488281ZM14.5697 2.22162C14.0739 2.22162 13.6694 2.62769 13.6694 3.12329V5.27756C13.6694 5.77336 14.0739 6.17849 14.5697 6.17849H16.8299C17.325 6.17849 17.7303 5.77336 17.7303 5.27756V3.12329C17.7303 2.62769 17.325 2.22162 16.8299 2.22162H14.5697ZM17.7389 8.45757H15.9792C16.1461 9.00257 16.2365 9.5773 16.2365 10.1748C16.2365 13.5003 13.4521 16.1975 10.0188 16.1975C6.58633 16.1975 3.80187 13.5003 3.80187 10.1748C3.80187 9.5773 3.8932 9.00257 4.05927 8.45757H2.22333V16.9064C2.22333 17.3439 2.5806 17.6998 3.01773 17.6998H16.9449C17.3824 17.6998 17.7389 17.3439 17.7389 16.9064V8.45757ZM10.0189 6.06489C7.80153 6.06489 6.00287 7.80677 6.00287 9.95744C6.00287 12.1059 7.80153 13.8491 10.0189 13.8491C12.2374 13.8491 14.0361 12.1059 14.0361 9.95744C14.0361 7.8067 12.2374 6.06489 10.0189 6.06489Z"
                  fill="#fff"
                />
              </svg>
            </a>

            <a style={{ margin: "0 10px" }} href="https://t.me/myschooluz">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 20 20"
                fill="none"
              >
                <g clipPath="url(#clip0_85_146)">
                  <path
                    d="M7.84783 13.1813L7.51703 18.7653C7.99036 18.7653 8.19536 18.5213 8.44116 18.2283L10.6604 15.6833L15.2588 19.7243C16.1022 20.2883 16.6964 19.9913 16.9239 18.7933L19.9423 1.8214L19.9431 1.8204C20.2106 0.324404 19.4923 -0.260593 18.6706 0.106405L0.928503 8.25738C-0.282358 8.82138 -0.264024 9.63138 0.722663 9.99838L5.25861 11.6913L15.7947 3.78038C16.2906 3.38639 16.7414 3.60438 16.3706 3.99838L7.84783 13.1813Z"
                    fill="#fff"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_85_146">
                    <rect width="20" height="20" fill="#fff" />
                  </clipPath>
                </defs>
              </svg>
            </a>

            <a href="http://facebook.com/myschooluzb">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M18.8955 0H1.10386C0.494632 0 0 0.493652 0 1.10388V18.8958C0 19.506 0.494632 20.0003 1.10386 20.0003H10.6824V12.255H8.07614V9.23612H10.6824V7.00991C10.6824 4.42706 12.2594 3.01988 14.564 3.01988C15.6689 3.01988 16.6163 3.10254 16.8926 3.13843V5.83821L15.2941 5.83886C14.0411 5.83886 13.7993 6.43461 13.7993 7.30832V9.23518H16.7888L16.3979 12.2537H13.799V19.9993H18.8952C19.505 19.9993 20 19.5044 20 18.8958V1.10322C19.9997 0.493652 19.5054 0 18.8955 0Z"
                  fill="#fff"
                />
              </svg>
            </a>
          </div>
        </section>
      </div>
    </>
  );
};

export default ThankYou;
