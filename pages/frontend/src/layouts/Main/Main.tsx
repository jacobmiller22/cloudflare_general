/** Interfaces/Types */
import { ReactChild } from "react";

/** Components */
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

interface IMainProps {
  children: ReactChild;
  className?: string;
}

const Main = ({ children, className }: IMainProps) => {
  return (
    <div className={className}>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand>Cloudflare General</Navbar.Brand>
        </Container>
      </Navbar>
      <div>{children}</div>
    </div>
  );
};

export default Main;
