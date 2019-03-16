import React from "react"
import { Link } from "gatsby"
import { Box, Flex } from "rebass"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import BitExplosions from "../components/BitExplosions"

import styles from '../styles/index.module.css'


const IndexPage = ({location}) => (
  <Layout containerStyle={{maxWidth: null, paddingTop: 0}} location={location}>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div style={{height: 760, background: 'black', position: 'relative'}}>
      <BitExplosions/>
      <Flex justifyContent="center" alignItems="center" style={{height: '100%', color: 'white', textAlign: 'center'}}>
        <Box p={3} style={{zIndex: 2}} className={styles["textBanner"]}>
          <h1>ByteBandits</h1>
          <p>Hide yo' bytes, hide yo' bits, or be pwn'd by ByteBandits!</p>
          <p>We are <Link to="/team">team</Link> of hackers and geeks with our roots from IIT Indore.</p>
          <p>Check out some of our <Link to="/writeups">writeups</Link> for some CTF problems.</p>
        </Box>
      </Flex>
    </div>
  </Layout>
)

export default IndexPage
