import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Fade from "react-reveal/Fade"

const IndexPage = () => (
  <Layout>
    <div className="parent-con">
      <div className="container">
        <SEO title="Home" />
        <div className="back-g"></div>
        <Link to="#anchor-1">
          <div className="scroll-cont">
            <div className="outer-cir">
              <div className="arrow-1"></div>
              <div className="arrow-2"></div>
            </div>
          </div>
        </Link>
        <Fade bottom cascade>
          <h1 className="hero-title">
            <span className="under">Dhruv</span> <br />{" "}
            <span className="under">Bhatia</span>
          </h1>
          <p style={{ marginLeft: "3%", fontSize: "1.2rem", color: "black" }}>
            Coder ▪︎ Web designer ▪ Author︎<br></br>
            <span style={{ fontSize: "1rem" }}>
              (Use arrow keys to navigate)
            </span>
          </p>
        </Fade>
        {/* <div className="scroll-cont-2">
          <div className="outer-cir">
            <div className="arrow-3"></div>
            <div className="arrow-4"></div>
          </div>
        </div> */}
        {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
</div>*/}
      </div>
      <div className="container">
        <Link to="#anchor-2">
          <div style={{ float: "right" }}>
            <div className="outer-cir">
              <div className="arrow-1"></div>
              <div className="arrow-2"></div>
            </div>
          </div>
        </Link>
        <h1 className="page-title" id="anchor-1">
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
          <div style={{ float: "right" }}>
            <div className="outer-cir">
              <div className="arrow-1"></div>
              <div className="arrow-2"></div>
            </div>
          </div>
        </Link>
        <h1 id="anchor-2" className="page-title">
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
          <div style={{ float: "right" }}>
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
