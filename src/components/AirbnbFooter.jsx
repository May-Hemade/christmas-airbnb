import React, { Component } from "react"
import { Col, Container, Row } from "react-bootstrap"
import FooterCol from "./FooterCol"
import FooterInfo from "./FooterInfo"

export default class AirbnbFooter extends Component {
  cols = [
    {
      title: "Support",
      links: [
        { url: "#", text: "Help Center" },
        { url: "#", text: "Safety information" },
        { url: "#", text: "Cancellation options" },
        { url: "#", text: "Our COVID-19 Response" },
        { url: "#", text: "Supporting people with disabilities" },
        { url: "#", text: "Report a neighborhood concern" },
      ],
    },
    {
      title: "Community",
      links: [
        { url: "#", text: "Airbnb.org: disaster relief housing" },
        { url: "#", text: "Support Afghan refugees" },
        { url: "#", text: "Celebrating diversity & belonging" },
        { url: "#", text: "Combating discrimination" },
      ],
    },
    {
      title: "Hosting",
      links: [
        { url: "#", text: "Try hosting" },
        { url: "#", text: "AirCover: protection for Hosts" },
        { url: "#", text: "Explore hosting resources" },
        { url: "#", text: "Visit our community forum" },
        { url: "#", text: "How to host responsibly" },
      ],
    },
    {
      title: "About",
      links: [
        { url: "#", text: "Newsroom" },
        { url: "#", text: "Learn about new features" },
        { url: "#", text: "Letter from our founders" },
        { url: "#", text: "Careers" },
        { url: "#", text: "Investors" },
        { url: "#", text: "Airbnb Luxe" },
      ],
    },
  ]
  render() {
    return (
      <div className="bg-light pt-3">
        <Container className="border-bottom pb-5">
          <Row>
            {this.cols.map((col) => (
              <Col lg={3} md={4} sm={6} xs={12}>
                <FooterCol title={col.title} links={col.links}></FooterCol>
              </Col>
            ))}
          </Row>
        </Container>
        <Container>
          <FooterInfo></FooterInfo>
        </Container>
      </div>
    )
  }
}
