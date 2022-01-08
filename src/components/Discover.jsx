import React, { Component } from "react"
import { Button, Image, Ratio } from "react-bootstrap"

import "./discover.css"

export default class Discover extends Component {
  render() {
    return (
      <div className={`discover ${this.props.style}`}>
        <Image
          className="discover-image"
          src={this.props.image}
          fluid={true}
        ></Image>
        <div className="discover-content">
          <div className="discover-title">{this.props.title}</div>
          <Button className="discover-button" variant="light">
            {this.props.action}
          </Button>
        </div>
      </div>
    )
  }
}
