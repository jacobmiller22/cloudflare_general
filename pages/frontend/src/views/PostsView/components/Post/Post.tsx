import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

interface IPostProps {
  title: string;
  username: string;
  content: string;
}

const Post = ({ title, username, content }: IPostProps) => {
  return (
    <Container
      style={{ border: "1px solid black", padding: "5px", margin: "10px" }}
      fluid
    >
      <Row>
        <Col xs={6}>
          <h6>{title}</h6>
        </Col>
        <Col xs={6}>
          <p style={{ textAlign: "end" }}>{username}</p>
        </Col>
      </Row>
      <Row></Row>

      <div>{content}</div>
      <div>Comment Buttons / Reactions Go here</div>
    </Container>
  );
};

export default Post;
