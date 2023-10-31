import React from "react";
import { Row, Col, Card, CardTitle, CardText, Button } from "reactstrap";

const Home = () => {
  return (
    <Row>
      <Col>
        <Card className="mx-2" body>
          <CardTitle tag="h1">Olá Module Federation</CardTitle>
          <hr className="my-2" />
          <CardText>Este componente é de outro App!</CardText>
          <Button color="primary">Botão</Button>
        </Card>
      </Col>
    </Row>
  );
};

export default Home;
