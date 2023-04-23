import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import InputCard from "./InputCard";
import chapati from './images/chapati.jpg'
import vegetable from './images/vegetable.jpg'
import rice from './images/rice.jpg'
import egg from './images/egg.png'
import milk from './images/milk.jpg'
import chiken from './images/chiken.jpg'
import mutton from './images/mutton-1.jpg'
import fish from './images/fish.jpg'

class Food extends Component {
  constructor(props) {
    super(props);
    this.state = {
      e: [0, 0],
    };
    this.unit = ["litre/month", "km/month"];

    this.handler = props.handler;
  }

  render() {
    return (
      <Container>
        <Row className="justify-content-md-center my-5">
          <Col className="my-1" xs={{ span: 12 }} md={{ span: 10 }}>
            <InputCard
            icon={<img src={milk} alt="hellow" style={{ width: "50px", height: "50px", marginRight: "10px" }} />}
            title="Dairy"
            units={["gm/day"]}
            handler={this.handler}
            />
          </Col>
          <Col className="my-1" xs={{ span: 12 }} md={{ span: 10 }}>
            <InputCard
            icon={<img src={chapati} alt="hellow" style={{ width: "50px", height: "50px", marginRight: "10px" }} />}
            title="Chapati"
            units={["chapati/day"]}
            handler={this.handler}
            />
          </Col>
          <Col className="my-1" xs={{ span: 12 }} md={{ span: 10 }}>
            <InputCard
            icon={<img src={rice} alt="hellow" style={{ width: "50px", height: "50px", marginRight: "10px" }} />}
            
            title="Rice"
            units={["bowl-Rice/day"]}
            value={100}
              handler={this.handler}
              />
          </Col>
          <Col className="my-1" xs={{ span: 12 }} md={{ span: 10 }}>
            <InputCard
              icon={<img src={vegetable} alt="hellow" style={{ width: "50px", height: "50px", marginRight: "10px" }} />}
              
              title="Vegetables"
              units={["bowl-vegies/day"]}
              handler={this.handler}
              />
          </Col>
          <Col className="my-1" xs={{ span: 12 }} md={{ span: 10 }}>
            <InputCard
              icon={<img src={egg} alt="hellow" style={{ width: "50px", height: "50px", marginRight: "10px" }} />}
              title="Egg"
              units={["Eggs/day"]}
              handler={this.handler}
              />
          </Col>
          <Col className="my-1" xs={{ span: 12 }} md={{ span: 10 }}>
            <InputCard
              icon={<img src={chiken} alt="hellow" style={{ width: "50px", height: "50px", marginRight: "10px" }} />}
              title="Chicken"
              units={["kg/week"]}
              handler={this.handler}
            />
          </Col>
          <Col className="my-1" xs={{ span: 12 }} md={{ span: 10 }}>
            <InputCard
              icon={<img src={mutton} alt="hellow" style={{ width: "50px", height: "50px", marginRight: "10px" }} />}
              title="Mutton"
              units={["kg/week"]}
              handler={this.handler}
            />
          </Col>
          <Col className="my-1" xs={{ span: 12 }} md={{ span: 10 }}>
            <InputCard
              icon={<img src={fish} alt="hellow" style={{ width: "50px", height: "50px", marginRight: "10px" }} />}
              title="Fish"
              units={["kg/week"]}
              handler={this.handler}
            />
          </Col>
        
        </Row>
      </Container>
    );
  }
}

export default Food;
