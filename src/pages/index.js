import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

const IndexPage = ({location}) => (
  <Layout location={location}>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1 style={{marginTop: 26}}>ByteBandits</h1>
    <p>Hide yo' bytes, hide yo' bits, or be pwn'd by ByteBandits!</p>
    <p>We are <Link to="/team">team</Link> of hackers and geeks with our roots from IIT Indore.</p>
    <p>Check out some of our <Link to="/writeups">writeups</Link> for some CTF problems.</p>
  </Layout>
)

export default IndexPage
