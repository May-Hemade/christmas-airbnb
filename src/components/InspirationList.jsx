import React, { Component } from "react"
import Inspiration from "./Inspiration"
import { Container } from "react-bootstrap"
import { Row } from "react-bootstrap"
import { Col } from "react-bootstrap"
import { PlusCircle } from "react-bootstrap-icons"
export default class InspirationList extends Component {
  places = [
    {
      image: "images/1.webp",
      title: "Varna",
      distance: "379",
      style: "bg-orange",
    },
    {
      image: "images/2.jpeg",
      title: "Burgas",
      distance: "340",
      style: "bg-purple",
    },
    {
      image: "images/3.jpeg",
      title: "Velingrad",
      distance: "91",
      style: "bg-pomegranate",
    },
    {
      image: "images/4.jpeg",
      title: "Tsarevo",
      distance: "376",
      style: "bg-red",
    },
  ]
  render() {
    return (
      <Container>
        <Row>
          {this.places.map((place) => (
            <Col md={4} lg={3}>
              <Inspiration
                image={place.image}
                title={place.title}
                distance={place.distance}
                style={place.style}
              ></Inspiration>
            </Col>
          ))}
        </Row>
      </Container>
    )
  }
}
