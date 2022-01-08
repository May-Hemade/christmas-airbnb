import React, { Component } from "react"
import { Card } from "react-bootstrap"

import "./inspiration.css"

export default class Inspiration extends Component {
  render() {
    return (
      <div>
        <Card className={`card-inspiration ${this.props.style}`}>
          <Card.Img
            className="card-image"
            variant="top"
            src={this.props.image}
          />
          <Card.Body>
            <Card.Title className="card-title">{this.props.title}</Card.Title>
            <Card.Text className="card-text">
              {this.props.distance} kilometers away
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    )
  }
}
