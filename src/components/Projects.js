import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import responsiveWeb from "../assets/img/reposive.jpg";
import ShadowDog from "../assets/img/shdowdog.gif";
import happyPay from "../assets/img/happypay.png";
import dashboard from "../assets/img/dashboard.gif";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "My First Resposive Web",
      description: "처음 제작해본 반응형 웹",
      imgUrl: responsiveWeb,
      RepoURL: "https://github.com/minuk3508/playkeyboard_webstore_project",
      DEMOURL: "https://extraordinary-basbousa-068052.netlify.app/",
    },
    {
      title: "Shadow Dog Game",
      description: "바닐라 JS를 통한 2D게임 구현 연습 프로젝트",
      imgUrl: ShadowDog,
      DEMOURL: "https://main.dlzjoj11mljgo.amplifyapp.com/",
      RepoURL: "https://github.com/minuk3508/shadowdog",
    },
    {
      title: "Dutch Pay App for TDD Practice",
      description: `테스트코드 작성 연습을 위한 프로젝트, 여행 등에서 지출된 비용을 자동을 정산해줍니다.`,
      imgUrl: happyPay,
      RepoURL: "https://github.com/minuk3508/happy-pay",
      DEMOURL: "https://main.d241p40u8jvfq3.amplifyapp.com/group",
    },
    {
      title: "Admin Dashboard",
      description: `적절한 라이브러리 사용으로 구현한 Admin페이지`,
      imgUrl: dashboard,
      DEMOURL: "https://main--rococo-griffin-b17ada.netlify.app/",
      RepoURL: "https://github.com/minuk3508/admin-dashboard",
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              <div>
                <h2>Projects</h2>
                <p></p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav
                    variant="pills"
                    className="nav-pills mb-5 justify-content-center align-items-center"
                    id="pills-tab"
                  >
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp">
                    <Tab.Pane eventKey="first">
                      <Row>
                        {projects.map((project, index) => {
                          return <ProjectCard key={index} {...project} />;
                        })}
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Cumque quam, quod neque provident velit, rem explicabo
                        excepturi id illo molestiae blanditiis, eligendi dicta
                        officiis asperiores delectus quasi inventore debitis
                        quo.
                      </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Cumque quam, quod neque provident velit, rem explicabo
                        excepturi id illo molestiae blanditiis, eligendi dicta
                        officiis asperiores delectus quasi inventore debitis
                        quo.
                      </p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      {/* <img className="background-image-right" src={colorSharp2}></img> */}
    </section>
  );
};
