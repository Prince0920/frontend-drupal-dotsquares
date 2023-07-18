import React, { Component } from "react";
import WebApi from "../config/WebApi";

export default class Footer extends Component {
  constructor() {
    super();
    this.state = {
      footerData: [],
    };
  }

  componentDidMount() {
    if (this.state.footerData.length === 0) {
      WebApi.getRequest(
        "https://drupal2.24livehost.com/api/menu_items/footer"
      ).then((response) => {
        // console.log("API Response", response.data);
        this.setState({
          footerData:
            response.data !== undefined && response.data !== null
              ? response.data
              : [],
        });
      });
    }
  }

  render() {
    var { footerData } = this.state;
    var SiteLinks = footerData.length !== 0 ? footerData[0].below : footerData;
    var SocialLinks =
      footerData.length !== 0 ? footerData[1].below : footerData;
    return (
      <footer className="footer-main">
        <div className="footer-top">
          <div className="wrapper">
            <div className="drupal-row">
              <div className="drupal-col-large-box">
                <h6>Site Links</h6>
                <div className="sitelinks">
                  <ul>
                    {SiteLinks.map((item) => {
                      return (
                        <li>
                          <a href={item.relative}>{item.title}</a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
              <div className="drupal-col-middle-box">
                <h6>Social links</h6>
                <div className="social-links">
                  <ul>
                    {SocialLinks.map((item) => {
                      return (
                        <li>
                          <a href={item.relative} target="_blank">
                            <span className="icon">
                              <i
                                className={`fa fa-${item.title.toLowerCase()}`}
                                aria-hidden="true"
                              ></i>
                            </span>
                            {item.title}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
              <div className="drupal-col-small-box">
                <h6>Contacts</h6>
                <div className="address-sec">
                  <ul>
                    <li>
                      <span>BRIGHTON, UK :</span>{" "}
                      <a href="tel:+441273575190">+44 1273 575190</a>
                    </li>
                    <li>
                      <span>LONDON, UK :</span>{" "}
                      <a href="tel:+442080901819">+44 208 0901819</a>
                    </li>
                    <li>
                      <span>USA :</span>{" "}
                      <a href="tel:+13015639488">+1 301 563 9488</a>
                    </li>
                    <li>
                      <span>AUSTRALIA :</span>{" "}
                      <a href="tel:+61386768288">(+61) 3 8676 8288</a>
                    </li>
                    <li>
                      <span>AUSTRALIA :</span>{" "}
                      <a href="tel:+61386888288">(+61) 3 8688 8288</a>
                    </li>
                    <li>
                      <span>Email Us :</span>{" "}
                      <a href="mailto:office@dotsquares.com">
                        office@dotsquares.com
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="foter-bottom">
          <div className="wrapper">
            <div className="copyright">
              <p>© Dotsquares.All Rights Reserved.</p>
              <ul className="links">
                <li>
                  <a href="/privacy-notice">Privacy Notice</a>
                </li>
                <li>
                  <a href="/terms-conditions">Terms and Conditions</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
