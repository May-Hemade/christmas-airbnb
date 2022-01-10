import React, { Component } from "react"
import { Facebook, Globe2, Instagram, Twitter } from "react-bootstrap-icons"
import "./footerInfo.css"

export default class FooterInfo extends Component {
  render() {
    return (
      <div className="d-flex justify-content-between py-3">
        <div>
          <span className="copyright">© 2022 Airbnb,Inc.</span>
          <span> ·</span>
          <a className="mx-1 footer-info-link" href="#">
            Privacy
          </a>
          <span className="mx-1"> ·</span>
          <a className="mx-1 footer-info-link" href="#">
            Terms
          </a>
          <span className="mx-1"> ·</span>
          <a className="mx-1 footer-info-link" href="#">
            Sitemap
          </a>
        </div>
        <div>
          <span className="mx-1"></span>
        </div>
        <div>
          <a href="#" className="footer-money">
            <Globe2></Globe2>
          </a>
          <a href="#" className="mr-2 footer-money">
            English (US)
          </a>
          <span className="ml-2">лв</span>
          <a href="#" className="mr-4 footer-money">
            BGN
          </a>
          <Facebook className="mx-2"></Facebook>
          <Twitter className="mx-2"></Twitter>
          <Instagram className="mx-2"></Instagram>
        </div>
      </div>
    )
  }
}
