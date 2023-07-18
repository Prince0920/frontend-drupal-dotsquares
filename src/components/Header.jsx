import React, { Component } from "react";
import WebApi from "../config/WebApi";

export default class Header extends Component {
  constructor() {
    super();
    this.state = {
      scroll: false,
      headerData: [],
      headerContact: [],
      toggleMenu: false,
      toggleSubMenu: false,
      loading: true,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", (e) => {
      this.setState({ scroll: true });
    });
    this.props.parentCallback(true);
    console.log(this.state.headerData);
    if (this.state.headerData.length === 0) {
      WebApi.getRequest(
        "https://drupal2.24livehost.com/api/menu_items/main"
      ).then((response) => {
        this.setState({
          headerData:
            response.data !== undefined && response.data !== null
              ? response.data
              : [],
        });
      });
      this.getHeaderContact();
    }
  }

  getHeaderContact = () => {
    WebApi.getRequest("https://drupal2.24livehost.com/contact").then(
      (response) => {
        // console.log("header api Response", response.data);
        this.setState({
          headerContact:
            response.data !== undefined && response.data !== null
              ? response.data
              : [],
          // loading:false
        });
        this.props.parentCallback(false);
      }
    );
  };

  render() {
    var { headerData, headerContact } = this.state;
    return (
      <header
        id="masthead"
        className={this.state.scroll ? "header header-shrink" : "header"}
        // header-shrink
      >
        <div className="top-bar">
          <div className="wrapper">
            <div className="phoneno">
              <ul>
                {headerContact.map((item) => {
                  return (
                    <li>
                      <span>{item.field_country}</span>{" "}
                      {item.field_contact_number.split(",")[0] !==
                        undefined && (
                        <a
                          href={`tel:${item.field_contact_number
                            .split(",")[0]
                            .replace(/[- )(]/g, "")}`}
                        >
                          {item.field_contact_number.split(",")[0]}
                        </a>
                      )}{" "}
                      {item.field_contact_number.split(",")[1] !==
                        undefined && (
                        <a
                          href={`tel:${item.field_contact_number
                            .split(",")[1]
                            .replace(/[- )(]/g, "")}`}
                        >
                          {`, ${item.field_contact_number.split(",")[1]}`}
                        </a>
                      )}{" "}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        <div className="head-mid">
          <div className="wrapper">
            <div className="header-wrpper">
              <div className="site-branding">
                <div className="site-logo">
                  <span className="custom-logo-link">
                    <a href="/" className="custom-logo-link">
                      <img
                        loading="lazy"
                        src="/assets/images/ds-drupal.png"
                        alt="site-logo"
                        className="custom-logo lazyload"
                      />
                    </a>
                  </span>
                </div>
              </div>
              <nav className="primary-navigation">
                <div className="mega-menu-wrap">
                  <button
                    type="button"
                    onClick={() =>
                      this.setState({
                        toggleMenu: !this.state.toggleMenu,
                      })
                    }
                    className={
                      this.state.toggleMenu
                        ? "menu-toggle toggle-open"
                        : "menu-toggle"
                    }
                  >
                    <i className="fa fa-bars" aria-hidden="true"></i>
                    <i className="fa fa-times" aria-hidden="true"></i>
                  </button>

                  <ul
                    id="mega-menu-primary"
                    className={
                      this.state.toggleMenu
                        ? "mega-menu mobile-menu"
                        : "mega-menu"
                    }
                  >
                    {headerData !== [] &&
                      headerData.map((item) => {
                        return item.expanded ? (
                          <li className="mega-menu-toggle mega-menu-item ">
                            <a className="mega-menu-link" href="/case-studies">
                              {item.title}
                              <span
                                className={
                                  this.state.toggleMenu
                                    ? "mega-indicator-mobile"
                                    : "mega-indicator"
                                }
                                onClick={(e) => {
                                  e.preventDefault();
                                  this.setState({
                                    toggleSubMenu: !this.state.toggleSubMenu,
                                  });
                                }}
                              >
                                <i
                                  className="fa fa-caret-down"
                                  aria-hidden="true"
                                ></i>
                              </span>
                            </a>
                            <ul
                              className={
                                this.state.toggleSubMenu
                                  ? "mega-sub-menu show"
                                  : "mega-sub-menu"
                              }
                            >
                              {item.below.map((item) => {
                                return (
                                  <li className="mega-menu-item ">
                                    <a
                                      className="mega-menu-link"
                                      href={item.relative}
                                    >
                                      {item.title}
                                    </a>
                                  </li>
                                );
                              })}
                            </ul>
                          </li>
                        ) : (
                          <li
                            className="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-align-bottom-left mega-menu-flyout mega-menu-item-501"
                            id="mega-menu-item-501"
                          >
                            <a
                              className={
                                item.title === "Enquire Now"
                                  ? "mega-menu-link mega-menu-btn"
                                  : "mega-menu-link"
                              }
                              href={item.relative}
                              tabindex="0"
                            >
                              {item.title}
                            </a>
                          </li>
                        );
                      })}
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
