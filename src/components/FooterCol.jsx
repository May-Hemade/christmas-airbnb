import React, { Component } from "react"
import "./footerCol.css"

export default class FooterCol extends Component {
  render() {
    return (
      <div className="footer-col px-2">
        <div className="footer-title">{this.props.title}</div>
        <div>
          {this.props.links.map((link) => (
            <a className="d-block footer-link" href={link.url}>
              {link.text}
            </a>
          ))}
        </div>
      </div>
    )
  }
}
