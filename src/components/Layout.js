import React, { Fragment } from "react"
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

const Layout = ({ children, location }) => (
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
      <Fragment>
        <GlobalStyle />
        <ThemeProvider theme={{ colors }}>
          <>  {/* ThemeProvider expects a single child */}
            <Header location={location} siteTitle={data.site.siteMetadata.title} />
            <div
              style={{
                margin: `0 auto`,
                maxWidth: 960,
                minHeight: 760,
                paddingTop: 24,
              }}
            >
              <main>{children}</main>
            </div>
          </>
        </ThemeProvider>
        <Footer/>
      </Fragment>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout