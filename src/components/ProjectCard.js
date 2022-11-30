import { Col } from "react-bootstrap";

export const ProjectCard = ({
  title,
  description,
  imgUrl,
  DEMOURL,
  RepoURL,
}) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="" />

        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <br />
          <a style={{ color: "white" }} href={DEMOURL}>
            DEMO
          </a>
          <br />
          <a style={{ color: "white" }} href={RepoURL}>
            Repo
          </a>
        </div>
      </div>
    </Col>
  );
};
