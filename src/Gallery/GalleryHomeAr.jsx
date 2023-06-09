import React, { useEffect } from "react";
import Fade from "react-reveal/Fade";
import { Element } from "react-scroll";
import Factory from "../images/blackFabric (8).jpg";
import Branch1 from "../images/Shubra Branch/Agaypy1.jpg";
import Branch2 from "../images/Gesr El Suez Branch/Agaypy29.jpg";
import { Link } from "react-router-dom";

export default function GalleryHomeAr() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div class="page-title">
        <div class="container">
          <Fade top duration={1000} delay={500}>
            {" "}
            <h1
              style={{
                color: "#C0AB89",
                fontFamily: "Millania",
                fontSize: "60px",
              }}
            >
              معرض الصور
            </h1>
          </Fade>
        </div>
      </div>
      <section
        class="blog-content-section section-padding"
        style={{ paddingTop: "60px" }}
      >
        <div class="container">
          <Element name="blog">
            <div
              class="row blog-s2-grids"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <div class="col-md-4 p-3">
                <Fade right>
                  <div class="grid">
                    <div class="entry-media">
                    <Link
                          to="/branch1">  <img
                        src={Branch1}
                        style={{
                          width: "100%",
                          height: "500px",
                          objectFit: "cover",
                        }}
                        alt
                        class="img img-responsive"
                      /></Link> 
                    </div>
                    <div class="entry-details">
                      <h3  dir="rtl" lang="ar">
                        <a
                          style={{ textDecoration: "none", fontFamily: "Maya" }}
                        >
                         فرع شبرا
                        </a>
                      </h3>
                      {/* <span class="entry-date">30 November, 2018</span> */}
                      <div class="entry-footer"  dir="rtl" lang="ar">
                        <Link
                          to="/branch1"
                          style={{ textDecoration: "none",float:'right' }}
                          class="read-more"
                        >
                         عرض المعرض
                        </Link>
                        {/* <a style={{textDecoration:'none'}} class="comments"><i class="fa fa-comments" aria-hidden="true"></i> 5</a> */}
                      </div>
                    </div>
                  </div>
                </Fade>
              </div>
              <div class="col-md-4 p-3">
                <Fade right>
                  <div class="grid">
                    <div class="entry-media">
                    <Link
                          to="/branch2"> <img
                        src={Branch2}
                        style={{
                          width: "100%",
                          height: "500px",
                          objectFit: "cover",
                        }}
                        alt
                        class="img img-responsive"
                      /></Link> 
                    </div>
                    <div class="entry-details">
                      <h3  dir="rtl" lang="ar">
                        <a
                          style={{ textDecoration: "none", fontFamily: "Maya" }}
                        >
                         فرع جسر السويس
                        </a>
                      </h3>
                      {/* <span class="entry-date">30 November, 2018</span> */}
                      <div class="entry-footer">
                        <Link
                          to="/branch2"
                          style={{ textDecoration: "none" ,float:'right'}}
                          class="read-more"
                        >
                        عرض المعرض
                        </Link>
                        {/* <a style={{textDecoration:'none'}} class="comments"><i class="fa fa-comments" aria-hidden="true"></i> 5</a> */}
                      </div>
                    </div>
                  </div>
                </Fade>
              </div>
            </div>
          </Element>
        </div>
      </section>
    </>
  );
}
