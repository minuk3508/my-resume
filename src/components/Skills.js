import meter1 from "../assets/img/reactimage.png";
import meter2 from "../assets/img/typescript.png";
import meter3 from "../assets/img/jest.png";
import meter4 from "../assets/img/recoil.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                <span
                  style={{
                    color: "white",
                    fontWeight: "700",
                    fontSize: "25px",
                  }}
                >
                  React
                </span>
                로 기반하는 웹페이지 작성 및 배포에 경험이 있으며<br></br>
                <span
                  style={{
                    color: "white",
                    fontWeight: "700",
                    fontSize: "25px",
                  }}
                >
                  Typescript
                </span>
                와{" "}
                <span
                  style={{
                    color: "white",
                    fontWeight: "700",
                    fontSize: "20px",
                  }}
                >
                  테스트코드
                </span>{" "}
                작성 경험이 있습니다.<br></br>2가지 이상의 CSS관련 라이브러리를
                사용할 줄 알고{" "}
                <span
                  style={{
                    color: "white",
                    fontWeight: "700",
                    fontSize: "25px",
                  }}
                >
                  Recoil
                </span>
                을 통한 상태관리를 선호합니다.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={meter1} alt="React" />
                  <h5>React JS</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="typescript" />
                  <h5>Typescript</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="jest" />
                  <h5>Jest</h5>
                </div>
                <div className="item">
                  <img src={meter4} alt="Image" />
                  <h5>Recoil</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
