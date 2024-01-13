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
import Image5 from "../components/image5"
import Image6 from "../components/image6"
import Image7 from "../components/image7"
import Image8 from "../components/image8"
import Image9 from "../components/image9"
import Image10 from "../components/image10"
import Image11 from "../components/image11"
import Image12 from "../components/image12"
import Image13 from "../components/image13"
import Image14 from "../components/image14"
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
      <div className="container" id="home">
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
          <h1 className="hero-title">
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
      <div className="container" id="about">
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
        <div className="lines resp-remove">
  <div className="line resp-remove"></div>
  <div className="line resp-remove"></div>
  <div className="line resp-remove"></div>
  <div className="line resp-remove"></div>
  <div className="line resp-remove"></div>
  <div className="line resp-remove"></div>
  <div className="line resp-remove"></div>
</div>
        <h1 className="page-title">
          About Me
        </h1>
        <div className="info">
        <p style={{marginRight: "2em", marginBottom: "1em"}}>
          I am a <mark>self-taught web developer</mark>, <mark>an aspiring author</mark>, <mark>an amateur web designer</mark>, <mark>an imaginative poet</mark> and a <mark>coding enthusiast</mark>. I am currently a senior at <mark class="uni-blue"><mark class="uni-white"><mark class="uni-red">University of Arizona</mark></mark></mark> and am pursuing my bachelor's degree.  
        <br></br><br></br>
        
        </p>
        <div className="portrait">
        <Image5 />
        </div>
        </div>
      </div>
      <div className="container" id="work-ex">
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
        <h1 className="page-title">
          Work Experience
        </h1>
        <div className="carousel-cont">
          <HorizontalScroll
            // pageLock={true}
            reverseScroll={true}
            style={{ height: `80%` }}
            config={{ stiffness: 1.8, damping: 1.8 }}
            // className={`carousel-box`}
            // animValues    = { int }
          >
            <div className="carousel-box">
              <div className="carousel-img">
                <Link to="https://www.notion.so/Dhruv-s-UX-Portfolio-5b36dcbe642546a4b25ab1aca9825732" target="_blank">
                <Image14 />
                </Link>
              </div>
              <span><Link to="https://www.notion.so/Dhruv-s-UX-Portfolio-5b36dcbe642546a4b25ab1aca9825732" target="_blank">Research Portfolio</Link></span>
            </div>
            <div className="carousel-box">
              <div className="carousel-img">
                <Link to="https://youtu.be/YAl3AzbHPwA" target="_blank">
                <Image6 />
                </Link>
              </div>
              <span><Link to="https://youtu.be/YAl3AzbHPwA" target="_blank">UI-React Workshop</Link></span>
            </div>
            <div className="carousel-box">
              <div className="carousel-img">
              <Link to="https://jennerus.netlify.app/" target="_blank">
                <Image8 />
                </Link>
              </div>
              <span><Link to="https://jennerus.netlify.app/" target="_blank">Jennerus Template</Link></span>
            </div>
            <div className="carousel-box">
              <div className="carousel-img">
              <Link to="https://www.figma.com/proto/KritlVd8yBhkYUBrdNWnoH/Food-Delivery-App-WireFrame?scaling=scale-down&page-id=0%3A1&starting-point-node-id=3%3A3&node-id=3%3A3" target="_blank">
                <Image12 />
                </Link>
              </div>
              <span><Link to="https://www.figma.com/proto/KritlVd8yBhkYUBrdNWnoH/Food-Delivery-App-WireFrame?scaling=scale-down&page-id=0%3A1&starting-point-node-id=3%3A3&node-id=3%3A3" target="_blank">Delivery App (WF)</Link></span>
            </div>
            <div className="carousel-box">
              <div className="carousel-img">
              <Link to="https://www.figma.com/proto/1v4WIYLaZVomI96YtsiYH9/Untitled?node-id=1%3A2&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=1%3A2" target="_blank">
                <Image13 />
                </Link>
              </div>
              <span><Link to="https://www.figma.com/proto/1v4WIYLaZVomI96YtsiYH9/Untitled?node-id=1%3A2&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=1%3A2" target="_blank">NodeVis (WF)</Link></span>
            </div>
            <div className="carousel-box">
              <div className="carousel-img">
              <Link to="https://github.com/QuodIntrepidus/NodeVis" target="_blank">
                <Image3 />
                </Link>
              </div>
              <span><Link to="https://github.com/QuodIntrepidus/NodeVis" target="_blank">NodeVis (Git)</Link></span>
            </div>
            <div className="carousel-box">
              <div className="carousel-img">
              <Link to="https://confluencenter.arizona.edu/" target="_blank">
                <Image10 />
                </Link>
              </div>
              <span><Link to="https://confluencenter.arizona.edu/" target="_blank">Confluencenter</Link></span>
            </div>
            <div className="carousel-box">
              <div className="carousel-img">
              <Link to="https://underthestars.netlify.app/" target="_blank">
                <Image11 />
                </Link>
              </div>
              <span><Link to="https://underthestars.netlify.app/" target="_blank">Under The Stars</Link></span>
            </div>
            <div className="carousel-box">
              <div className="carousel-img">
              <Link to="https://www.figma.com/file/LY1iai4Rv32WN8708IIdr1/Fei's-Website-(Copy)?node-id=0%3A1" target="_blank">
                <Image9 />
                </Link>
              </div>
              <span><Link to="https://www.figma.com/file/LY1iai4Rv32WN8708IIdr1/Fei's-Website-(Copy)?node-id=0%3A1" target="_blank">Caladria (Design)</Link></span>
            </div>
            <div className="carousel-box">
              <div className="carousel-img">
              <Link to="https://halocrypt.com/" target="_blank">
                <Image4 />
                </Link>
              </div>
              <span><Link to="https://halocrypt.com/" target="_blank">Halocrypt</Link></span>
            </div>
          </HorizontalScroll>
        </div>
        <div className="mob-carousel">
        <div className="carousel-box">
              <div className="carousel-img">
                <Link to="https://www.notion.so/Dhruv-s-UX-Portfolio-5b36dcbe642546a4b25ab1aca9825732" target="_blank">
                <Image14 />
                </Link>
              </div>
              <span><Link to="https://www.notion.so/Dhruv-s-UX-Portfolio-5b36dcbe642546a4b25ab1aca9825732" target="_blank">Research Portfolio</Link></span>
            </div>
        <div className="carousel-box">
              <div className="carousel-img">
              <Link to="https://youtu.be/YAl3AzbHPwA" target="_blank">
                <Image6 />
                </Link>
              </div>
              <span><Link to="https://youtu.be/YAl3AzbHPwA" target="_blank">UI-React Workshop</Link></span>
            </div>
            <div className="carousel-box">
              <div className="carousel-img">
              <Link to="https://jennerus.netlify.app/" target="_blank">
                <Image8 />
                </Link>
              </div>
              <span><Link to="https://jennerus.netlify.app/" target="_blank">Jennerus Template</Link></span>
            </div>
            <div className="carousel-box">
              <div className="carousel-img">
              <Link to="https://www.figma.com/proto/KritlVd8yBhkYUBrdNWnoH/Food-Delivery-App-WireFrame?scaling=scale-down&page-id=0%3A1&starting-point-node-id=3%3A3&node-id=3%3A3" target="_blank">
                <Image12 />
                </Link>
              </div>
              <span><Link to="https://www.figma.com/proto/KritlVd8yBhkYUBrdNWnoH/Food-Delivery-App-WireFrame?scaling=scale-down&page-id=0%3A1&starting-point-node-id=3%3A3&node-id=3%3A3" target="_blank">Delivery App (WF)</Link></span>
            </div>
            <div className="carousel-box">
              <div className="carousel-img">
              <Link to="https://www.figma.com/proto/1v4WIYLaZVomI96YtsiYH9/Untitled?node-id=1%3A2&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=1%3A2" target="_blank">
                <Image13 />
                </Link>
              </div>
              <span><Link to="https://www.figma.com/proto/1v4WIYLaZVomI96YtsiYH9/Untitled?node-id=1%3A2&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=1%3A2" target="_blank">NodeVis (WF)</Link></span>
            </div>
            <div className="carousel-box">
              <div className="carousel-img">
              <Link to="https://github.com/QuodIntrepidus/NodeVis" target="_blank">
                <Image3 />
                </Link>
              </div>
              <span><Link to="https://github.com/QuodIntrepidus/NodeVis" target="_blank">NodeVis (Git)</Link></span>
            </div>
            <div className="carousel-box">
              <div className="carousel-img">
              <Link to="https://confluencenter.arizona.edu/" target="_blank">
                <Image10 />
                </Link>
              </div>
              <span><Link to="https://confluencenter.arizona.edu/" target="_blank">Confluencenter</Link></span>
            </div>
            <div className="carousel-box">
              <div className="carousel-img">
              <Link to="https://underthestars.netlify.app/" target="_blank">
                <Image11 />
                </Link>
              </div>
              <span><Link to="https://underthestars.netlify.app/" target="_blank">Under The Stars</Link></span>
            </div>
            <div className="carousel-box">
              <div className="carousel-img">
              <Link to="https://www.figma.com/file/LY1iai4Rv32WN8708IIdr1/Fei's-Website-(Copy)?node-id=0%3A1" target="_blank">
                <Image9 />
                </Link>
              </div>
              <span><Link to="https://www.figma.com/file/LY1iai4Rv32WN8708IIdr1/Fei's-Website-(Copy)?node-id=0%3A1" target="_blank">Caladria (Design)</Link></span>
            </div>
            <div className="carousel-box">
              <div className="carousel-img">
                <Image4 />
              </div>
              <span><Link to="https://halocrypt.com/" target="_blank">Halocrypt</Link></span>
            </div>
          </div>
      </div>
      <div className="container" id="skills">
        <div className="scroll-cont-2">
          <div className="outer-cir">
            <Link to="#work-ex">
              <div className="arrow-3"></div>
              <div className="arrow-4"></div>
            </Link>
          </div>
        </div>
        <h1 className="page-title">
          Skills
        </h1>
        <div className="grid-container">
          <div className="grid-box" id="s1">
          <div className="grid-img">
                <Skill1 />
              </div>
          </div>
          <div className="grid-box" id="s2">
          <div className="grid-img">
          <Skill2 />
              </div>
          </div>
          <div className="grid-box" id="s3">
          <div className="grid-img">
                <Skill3 />
              </div>
          </div>
          <div className="grid-box" id="s4">
          <div className="grid-img">
                <Skill4 />
              </div>
          </div>
          <div className="grid-box" id="s5">
          <div className="grid-img">
                <Skill5 />
              </div>
          </div>
          <div className="grid-box" id="s6">
          <div className="grid-img">
                <Skill6 />
              </div>
          </div>
          <div className="grid-box" id="s7">
          <div className="grid-img">
                <Skill7 />
              </div>
          </div>
          <div className="grid-box" id="s8">
          <div className="grid-img">
                <Skill8 />
              </div>
          </div>
          <div className="grid-box" id="s9">
          <div className="grid-img">
                <Skill9 />
              </div>
          </div>
          <div className="grid-box" id="s10">
          <div className="grid-img">
                <Skill10 />
              </div>
          </div>
          <div className="grid-box" id="s11">
          <div className="grid-img">
                <Skill11 />
              </div>
          </div>
          <div className="grid-box" id="s12">
          <div className="grid-img">
                <Skill12 />
              </div>
          </div>
          <div className="grid-box" id="s13">
          <div className="grid-img">
                <Skill13 />
              </div>
          </div>
          <div className="grid-box" id="s14">
          <div className="grid-img">
                <Skill14 />
              </div>
          </div>
        </div>
      </div>
      {/* New div here */}
    </div>
  </Layout>
)
export default IndexPage
// TODO List
// Add Cool Projects and showcase them
// Add writing and poetry
// Add Contact Page
