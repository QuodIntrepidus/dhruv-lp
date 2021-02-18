import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Fade from "react-reveal/Fade"
import HorizontalScroll from "react-scroll-horizontal"
import Image2 from "../components/image2"
import Image3 from "../components/image3"
import Image4 from "../components/image4"
import Skill1 from "../components/Skills/Skill1"
import Skill2 from "../components/Skills/Skill2"
import Skill3 from "../components/Skills/Skill3"
import Skill4 from "../components/Skills/Skill4"
import Skill5 from "../components/Skills/Skill5"
import Skill6 from "../components/Skills/Skill6"
import Skill7 from "../components/Skills/Skill7"
import Skill8 from "../components/Skills/Skill8"
import Skill9 from "../components/Skills/Skill9"
import Skill10 from "../components/Skills/Skill10"
import Skill11 from "../components/Skills/Skill11"
import Skill12 from "../components/Skills/Skill12"
import Skill13 from "../components/Skills/Skill13"
import Skill14 from "../components/Skills/Skill14"





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
            style={{ marginLeft: "3%", fontSize: "1.2rem", color: "black", fontWeight: "bold" }}
          >
            Coder ▪︎ Web designer ▪ Author︎<br></br>
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
          I am a self-taught web developer, an aspiring ML engineer, an amateur web designer and a coding enthusiast. My passion for coding stems from my early childhood obsession to solve problems till one arrives at an answer and I believe coding is nothing else but identifying problems that exist around us and using the power of tech to solve them. I try to learn multiple languages but I try to improve myself in one language before I jump onto another because a jack of all trades is a master of none. In my free time, I love to write fiction and poetry and cook food. 
        </p>
      </div>
      <div className="container">
        <Link to="#skills">
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
              <span><Link to="http://club-cypher.herokuapp.com" target="_blank">(c)lub (c)ypher</Link></span>
            </div>
            <div className="carousel-box">
              <div className="carousel-img">
                <Image2 />
              </div>
              <span><Link to="http://shimasu-landing.herokuapp.com" target="_blank">Shimasu</Link></span>
            </div>
            <div className="carousel-box">
              <div className="carousel-img">
                <Image3 />
              </div>
              <span><Link to="https://getauxin.com" target="_blank">Auxin</Link></span>
            </div>
            <div className="carousel-box">
              <div className="carousel-img">
                <Image4 />
              </div>
              <span><Link to="https://www.halocrypt.com" target="_blank">Halocrypt</Link></span>
            </div>
            <div className="carousel-box">
              <div className="carousel-img">
                <Image />
              </div>
              <span><Link to="https://www.halocrypt.com" target="_blank">Scyara MegaCorp</Link></span>
            </div>
            <div className="carousel-box">
              <div className="carousel-img">
                <Image />
              </div>
              <span><Link to="https://www.halocrypt.com" target="_blank">Agriyaan</Link></span>
            </div>
            <div className="carousel-box">
              <div className="carousel-img">
                <Image />
              </div>
              <span><Link to="https://www.halocrypt.com" target="_blank">Jennerus BioCorp</Link></span>
            </div>
          </HorizontalScroll>
        </div>
        <div className="mob-carousel">
        <div className="carousel-box">
              <div className="carousel-img">
                <Image />
              </div>
              <span>(c)lub (c)ypher</span>
            </div>
            <div className="carousel-box">
              <div className="carousel-img">
                <Image2 />
              </div>
              <span>Shimasu</span>
            </div>
            <div className="carousel-box">
              <div className="carousel-img">
                <Image3 />
              </div>
              <span>Auxin</span>
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
          </div>
      </div>
      <div className="container">
        <Link to="#anchor-3">
        <div className="scroll-cont-2">
          <div className="outer-cir">
            <Link to="#work-ex">
              <div className="arrow-3"></div>
              <div className="arrow-4"></div>
            </Link>
          </div>
        </div>
        </Link>
        <h1 id="skills" className="page-title">
          Skills
        </h1>
        <div className="grid-container">
          <div className="grid-box" id="s1">
          <div className="grid-img">
                <Skill1 />
              </div>
              <span>(c)lub (c)ypher</span>
          </div>
          <div className="grid-box" id="s2">
          <div className="grid-img">
          <Skill2 />
              </div>
              <span>(c)lub (c)ypher</span>
          </div>
          <div className="grid-box" id="s3">
          <div className="grid-img">
                <Skill3 />
              </div>
              <span>(c)lub (c)ypher</span>
          </div>
          <div className="grid-box" id="s4">
          <div className="grid-img">
                <Skill4 />
              </div>
              <span>(c)lub (c)ypher</span>
          </div>
          <div className="grid-box" id="s5">
          <div className="grid-img">
                <Skill5 />
              </div>
              <span>(c)lub (c)ypher</span>
          </div>
          <div className="grid-box" id="s6">
          <div className="grid-img">
                <Skill6 />
              </div>
              <span>(c)lub (c)ypher</span>
          </div>
          <div className="grid-box" id="s7">
          <div className="grid-img">
                <Skill7 />
              </div>
              <span>(c)lub (c)ypher</span>
          </div>
          <div className="grid-box" id="s8">
          <div className="grid-img">
                <Skill8 />
              </div>
              <span>(c)lub (c)ypher</span>
          </div>
          <div className="grid-box" id="s9">
          <div className="grid-img">
                <Skill9 />
              </div>
              <span>(c)lub (c)ypher</span>
          </div>
          <div className="grid-box" id="s10">
          <div className="grid-img">
                <Skill10 />
              </div>
              <span>(c)lub (c)ypher</span>
          </div>
          <div className="grid-box" id="s11">
          <div className="grid-img">
                <Skill11 />
              </div>
              <span>(c)lub (c)ypher</span>
          </div>
          <div className="grid-box" id="s12">
          <div className="grid-img">
                <Skill12 />
              </div>
              <span>(c)lub (c)ypher</span>
          </div>
          <div className="grid-box" id="s13">
          <div className="grid-img">
                <Skill13 />
              </div>
              <span>(c)lub (c)ypher</span>
          </div>
          <div className="grid-box" id="s14">
          <div className="grid-img">
                <Skill14 />
              </div>
              <span>(c)lub (c)ypher</span>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)
export default IndexPage
