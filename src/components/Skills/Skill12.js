import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Skill12 = () => {
    const data = useStaticQuery(graphql`
      query {
        placeholderImage: file(relativePath: { eq: "python.png" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `)
  
    if (!data?.placeholderImage?.childImageSharp?.fluid) {
      return <div>Picture not found</div>
    }
  
    return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
  }
  
  export default Skill12
