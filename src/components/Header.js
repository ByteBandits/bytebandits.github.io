import { StaticQuery, Link, graphql } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Headroom from 'react-headroom'
import { Flex, Box } from 'rebass'
import LinkAnimated from './LinkAnimated'
import Search from "./Search"


const linkStyle = {
  color: `white`,
  maxWidth: 960,
  cursor: 'pointer',
}

const Header = ({ siteTitle, location }) => (
  <Headroom
    style={{
      background: `#000000`,
      marginBottom: '1.45rem',
      height: 107,
    }}
  >
    <Flex
      alignItems='center'
      style={{
        margin: `0 auto`,
        maxWidth: 960,
      }}
    >
      <Link
        to="/"
      >
        <img height="96" alt="ByteBandits Logo" src="https://avatars3.githubusercontent.com/u/14941705?s=200&v=4" style={{ display: 'inline' }}/>
      </Link>
      <Box mx='auto' />
      <Box ml={[4, 3]} color="background" fontSize={[2, 3]}>
        <LinkAnimated
          to="/"
          style={linkStyle}
          selected={location.pathname === '/'}
        >
          Home
        </LinkAnimated>
      </Box>
      <Box ml={[4, 3]} color="background" fontSize={[2, 3]}>
        <LinkAnimated
          to="/team"
          style={linkStyle}
          selected={location.pathname === '/team'}
        >
          Team
        </LinkAnimated>
      </Box>
      <Box ml={[4, 3]} color="background" fontSize={[2, 3]}>
        <LinkAnimated
          to="/writeups"
          style={linkStyle}
          selected={location.pathname === '/writeups'}
        >
          Writeups
        </LinkAnimated>
      </Box>
      <Box ml={[4, 3]} color="background" fontSize={[2, 3]}>
        <StaticQuery
          query={graphql`
            query SearchIndexQuery {
              siteSearchIndex {
                index
              }
            }
          `}
          render={data => (
            <Search searchIndex={data.siteSearchIndex.index} />
          )}
        />
      </Box>
    </Flex>
  </Headroom>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
