import React from 'react'

const isServer = !(
    typeof window !== "undefined" &&
    window.document &&
    window.document.createElement
);

let OwlCarousel = isServer
    ? require("react-owl-carousel2")
    : require("react-owl-carousel");

export default function CaseStudySlider() {
    return (
        <section className="caststudy-slider">
            <div className="wrapper">
                <div className="drupal-row">
                    <div className="drupal-col-12">
                        <div className="screen-slider">
                            <div className="screen-img">
                                <img
                                    src="/assets/images/display-img.png"
                                    alt="display-img"
                                    className="lazyload"
                                />
                            </div>
                            <OwlCarousel
                                items={1}
                                loop={true}
                                autoplay={1000}
                                className="studies-slider owl-carousel owl-theme"
                            >
                                <div className="slide">
                                    <img
                                        src="/assets/images/02.jpg"
                                        alt="04"
                                        className="lazyload"
                                    />
                                </div>
                                <div className="slide">
                                    <img
                                        src="/assets/images/01.jpg"
                                        alt="01"
                                        className="lazyload"
                                    />
                                </div>
                                <div className="slide">
                                    <img
                                        src="/assets/images/04.jpg"
                                        alt="04"
                                        className="lazyload"
                                    />
                                </div>
                                <div className="slide">
                                    <img
                                        src="/assets/images/03.jpg"
                                        alt="03"
                                        className="lazyload"
                                    />
                                </div>
                            </OwlCarousel>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
