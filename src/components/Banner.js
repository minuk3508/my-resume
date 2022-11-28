import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/devil.gif";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              <div>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>
                  {`Hi! I'm Minuk`}{" "}
                  <span>
                    <br />
                    <span className="wrap">{"Front-End Developer"}</span>
                  </span>
                </h1>
                <p>
                  <span>
                    소통, 협업능력은 같이 업무를 해야하는 입장에서는 기본 중에
                    기본이죠
                  </span>
                  <br />
                  <span>
                    여기 웹사이트는 저의 개인 역량을 증명하기 위해
                    만들어졌습니다!
                  </span>
                  <br />
                  <span>천천히 둘러봐주세요 ㅎㅎ</span>
                </p>
                <button onClick={() => console.log("connect")}>
                  Let’s Connect <ArrowRightCircle size={25} />
                </button>
              </div>
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              <div
                style={{
                  position: "relative",
                  top: "-100px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <img src={headerImg} alt="Header Img" />
              </div>
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
