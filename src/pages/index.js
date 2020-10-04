import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Fade from "react-reveal/Fade"
import HorizontalScroll from "react-scroll-horizontal"

const IndexPage = () => (
  <Layout>
    <div className="parent-con">
      <div className="container">
        <SEO title="Home" />
        <div className="back-g resp-remove"></div>
        <Link to="#about">
          <div className="scroll-cont" style={{ borderColor: "black" }}>
            <div className="outer-cir" style={{ borderColor: "black" }}>
              <div className="arrow-1" style={{ borderColor: "black" }}></div>
              <div className="arrow-2" style={{ borderColor: "black" }}></div>
            </div>
          </div>
        </Link>
        <Fade bottom cascade>
          <h1 className="hero-title" id="home">
            <span className="under">Dhruv</span> <br />{" "}
            <span className="under">Bhatia</span>
          </h1>
          <p
            className="resp-remove"
            style={{ marginLeft: "3%", fontSize: "1.2rem", color: "black" }}
          >
            Coder ▪︎ Web designer ▪ Author︎<br></br>
            <span className="resp-remove" style={{ fontSize: "1rem" }}>
              (Use arrow keys to navigate)
            </span>
          </p>
        </Fade>
        {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
</div>*/}
      </div>
      <div className="container">
        <Link to="#work-ex">
          <div className="scroll-cont">
            <div className="outer-cir">
              <div className="arrow-1"></div>
              <div className="arrow-2"></div>
            </div>
          </div>
        </Link>
        <div className="scroll-cont-2">
          <div className="outer-cir">
            <Link to="#home">
              <div className="arrow-3"></div>
              <div className="arrow-4"></div>
            </Link>
          </div>
        </div>
        <h1 className="page-title" id="about">
          About Me
        </h1>
        <p>
          My name is Dhruv Bhatia. I am a 17 year old web developer and a data
          scientist aspirant. Currently, I am the COO of Shimasu which powers
          Dusk Studios, a web design and development agency. I love to code in
          different programming languages and learn new and upcoming languages
          to enhance myself and my skills. I am also interested in Machine
          Learning, especially fields like NLP and Computer Vision.
        </p>
      </div>
      <div className="container">
        <Link to="#anchor-3">
          <div className="scroll-cont">
            <div className="outer-cir">
              <div className="arrow-1"></div>
              <div className="arrow-2"></div>
            </div>
          </div>
        </Link>
        <div className="scroll-cont-2">
          <div className="outer-cir">
            <Link to="#about">
              <div className="arrow-3"></div>
              <div className="arrow-4"></div>
            </Link>
          </div>
        </div>
        <h1 id="work-ex" className="page-title">
          Work Experience
        </h1>
        <div className="carousel-cont">
          <HorizontalScroll
            // pageLock={true}
            reverseScroll={true}
            style={{ height: `80%` }}
            config={{ stiffness: 3, damping: 4 }}
            // className={`carousel-box`}
            // animValues    = { int }
          >
            <div className="carousel-box">
              <div className="carousel-img">
                <Image />
              </div>
              <span>Project 1</span>
            </div>
            <div className="carousel-box">
              <div className="carousel-img">
                <Image />
              </div>
              <span>Project 2</span>
            </div>
            <div className="carousel-box">
              <div className="carousel-img">
                <Image />
              </div>
              <span>Project 3</span>
            </div>
            <div className="carousel-box">
              <div className="carousel-img">
                <Image />
              </div>
              <span>Project 4</span>
            </div>
            <div className="carousel-box">
              <div className="carousel-img">
                <Image />
              </div>
              <span>Project 5</span>
            </div>
            <div className="carousel-box">
              <div className="carousel-img">
                <Image />
              </div>
              <span>Project 6</span>
            </div>
          </HorizontalScroll>
        </div>
      </div>
      <div className="container">
        <Link to="#anchor-3">
          <div className="scroll-cont">
            <div className="outer-cir">
              <div className="arrow-1"></div>
              <div className="arrow-2"></div>
            </div>
          </div>
        </Link>
        <h1 id="anchor-3" className="page-title">
          About Me
        </h1>
        <p>
          My name is Dhruv Bhatia. I am a 17 year old web developer and a data
          scientist aspirant. Currently, I am the COO of Shimasu which powers
          Dusk Studios, a web design and development agency. I love to code in
          different programming languages and learn new and upcoming languages
          to enhance myself and my skills. I am also interested in Machine
          Learning, especially fields like NLP and Computer Vision.
        </p>
      </div>
    </div>
  </Layout>
)

export default IndexPage
