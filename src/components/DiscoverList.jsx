import React, { Component } from "react"
import { Container } from "react-bootstrap"
import { Row } from "react-bootstrap"
import { Col } from "react-bootstrap"
import Discover from "./Discover"
export default class DiscoverList extends Component {
  items = [
    {
      image:
        "https://a0.muscache.com/im/pictures/35612883-8e4c-440a-a768-ca7f268bd294.jpg",
      title: "Things to do on your trip",
      action: "Experiences",
    },
    {
      image:
        "https://a0.muscache.com/im/pictures/35612883-8e4c-440a-a768-ca7f268bd294.jpg",
      title: "Things to do from Home",
      action: "Online Experiences",
    },
  ]
  render() {
    return (
      <Container className="pb-5">
        <Row>
          {this.items.map((discover) => (
            <Col>
              <Discover
                image={discover.image}
                title={discover.title}
                action={discover.action}
              ></Discover>
            </Col>
          ))}
        </Row>
      </Container>
    )
  }
}
