import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import { createGlobalStyle, ThemeProvider } from 'styled-components'
import colors from '../../colors'
import Header from "./Header"
import "./layout.css"
import Footer from "./Footer";

const GlobalStyle = createGlobalStyle`
*,
*::after,
*::before { 
  -webkit-box-sizing: inherit;
  box-sizing: inherit;
  }

body {
  -webkit-box-sizing: border-box;
  box-sizing: border-box; 
  margin: 0;
  font-family: Cabin;
  overflow-x: hidden;
}
`;

const Layout = ({ children, location, containerStyle }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <GlobalStyle />
        <ThemeProvider theme={{ colors }}>
          <>  {/* ThemeProvider expects a single child */}
            <Header location={location} siteTitle={data.site.siteMetadata.title} />
            <div
              style={{
                margin: `0 auto`,
                maxWidth: containerStyle ? (containerStyle.maxWidth === undefined ? 960 : containerStyle.maxWidth) : 960,
                paddingTop: containerStyle ? (containerStyle.paddingTop === undefined ? 24 : containerStyle.paddingTop) : 24,
              }}
            >
              <main>{children}</main>
            </div>
          </>
        </ThemeProvider>
        <Footer/>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
