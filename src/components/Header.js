import React, { useState } from "react"
import PropTypes from "prop-types"
import { StaticQuery, Link, graphql } from "gatsby"
import styled from 'styled-components'
import { Flex, Box } from 'rebass'
import { MdDehaze, MdClose } from 'react-icons/md'
import Headroom from 'react-headroom'
import LinkAnimated from './LinkAnimated'
import Search from "./Search"


const linkStyle = {
  color: `white`,
  maxWidth: 960,
  cursor: 'pointer',
}

const ResponsiveSmall = styled.div`
  display: none;
  text-align: center;
  width: 100%;
  @media (max-width: ${props => props.size}px) {
    display: block;
  }
`

const ResponsiveLarge = styled.div`
  display: block;
  text-align: center;
  @media (max-width: ${props => props.size}px) {
    display: none;
  }
`

const menu = [
  {
    "text": "Home",
    "path": "/",
  },
  {
    "text": "Team",
    "path": "/team",
  },
  {
    "text": "Writeups",
    "path": "/writeups",
  },
]

const logo = <Link
    to="/"
  >
    <img height="96" alt="ByteBandits Logo" src="https://avatars3.githubusercontent.com/u/14941705?s=200&v=4" style={{ display: 'inline' }}/>
  </Link>

const searchBar = <StaticQuery
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

const Header = ({ siteTitle, location }) => {
  const [open, setOpen] = useState(false)

  return <Headroom
    style={{
      background: `#000000`,
      marginBottom: '1.45rem',
      height: 107,
      zIndex: 100,
      borderBottom: '2px solid green',
    }}
  >

    <ResponsiveLarge size={500}>
      <Flex
        alignItems='center'
        style={{
          margin: `0 auto`,
          maxWidth: 960,
        }}
      >
        { logo }
        <Box mx='auto' />
        {menu.map((e) =>
          <Box ml={[4, 3]} color="backgroundLight" bg="background" fontSize={[2, 3]}>
            <LinkAnimated
              to={e.path}
              style={linkStyle}
              selected={location.pathname === e.path}
            >
              {e.text}
            </LinkAnimated>
          </Box>
        )}
        <Box ml={[4, 3]} color="backgroundLight" bg="background" fontSize={[2, 3]}>
          <ResponsiveLarge size={640}>
            { searchBar }
          </ResponsiveLarge>
        </Box>
      </Flex>
    </ResponsiveLarge>

    <ResponsiveSmall size={500}>
      <Flex
        alignItems='center'
        flexWrap='wrap'
      >
        <Flex
          alignItems='center'
          width={1}
          px={3}
        >
          { logo }
          <Box mx='auto'/>
          { open ?
            <MdClose size={30} onClick={() => setOpen(false)} color="white"/> :
            <MdDehaze size={30} onClick={() => setOpen(true)} color="white"/>
          }
        </Flex>
        { open && menu.map((e) =>
          <Box width={1} p={4} color="backgroundLight" bg="background" fontSize={[2, 3]}>
            <LinkAnimated
              to={e.path}
              style={linkStyle}
              selected={location.pathname === e.path}
            >
              {e.text}
            </LinkAnimated>
          </Box>
        )}
        { open && <Box width={1} p={4} color="backgroundLight" bg="background" fontSize={[2, 3]} style={{borderBottom: '2px solid green'}}>
          { searchBar }
        </Box> }
      </Flex>
    </ResponsiveSmall>
  </Headroom>
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
