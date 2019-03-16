import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import { Flex, Box, Card } from 'rebass'
import styles from '../styles/writeups.module.css'
import Writeup from '../models/Writeup'


export default class Writeups extends React.Component {
  state = {
    selectedCTF: undefined,
    selectedProblemType: undefined,
    selectedAuthor: undefined,
  }

  render() {
    const { data, location } = this.props

    let writeups = data.allSitePage.edges
      .filter(({node}) => (node.path.match(/\//g) || []).length === 5)
      .map(({node}) => new Writeup(node.path))

    const authors = writeups.map((w) => w.author).filter((elem, pos, arr) => arr.indexOf(elem) === pos)
    const problemTypes = writeups.map((w) => w.problemType).filter((elem, pos, arr) => arr.indexOf(elem) === pos)
    const ctfNames = writeups.map((w) => w.ctfName).filter((elem, pos, arr) => arr.indexOf(elem) === pos)

    const non_writeups = data.allSitePage.edges.filter(({node}) => (node.path.match(/\//g) || []).length !== 5)
    if (non_writeups.length > 0) {
      console.log("Some non writeup pages were skipped")
      console.log(non_writeups)
    }

    if (this.state.selectedProblemType && this.state.selectedProblemType !== 'All') {
      console.log(this.state.selectedProblemType)
      writeups = writeups.filter((w) => w.problemType === this.state.selectedProblemType)
    }

    if (this.state.selectedCTF && this.state.selectedCTF !== 'All') {
      console.log(this.state.selectedCTF)
      writeups = writeups.filter((w) => w.ctfName === this.state.selectedCTF)
    }

    if (this.state.selectedAuthor && this.state.selectedAuthor !== 'All') {
      console.log(this.state.selectedAuthor)
      writeups = writeups.filter((w) => w.author === this.state.selectedAuthor)
    }

    return (
      <Layout location={location}>
        <SEO title="Writeups" />
        <div style={{margin: '24px auto 64px'}}>
          <h1>Writeups</h1>
          <Flex flexWrap='wrap' mx={-2}>
            <Box m={2}>
            <div style={{fontSize: '0.66em', color: 'grey'}}>Type</div>
              <select onChange={(e) => this.setState({selectedProblemType: e.target.value})}>
                <option value={undefined}>All</option>
                {
                  problemTypes.map((a) =>
                    <option value={a} key={a}>
                      {a}
                    </option>
                  )
                }
              </select>
            </Box>
            <Box m={2}>
              <div style={{fontSize: '0.66em', color: 'grey'}}>CTF</div>
              <select onChange={(e) => this.setState({selectedCTF: e.target.value})}>
                <option value={undefined}>All</option>
                {
                  ctfNames.map((a) =>
                    <option value={a} key={a}>
                      {a}
                    </option>
                  )
                }
              </select>
            </Box>
            <Box m={2}>
              <div style={{fontSize: '0.66em', color: 'grey'}}>Author</div>
              <select onChange={(e) => this.setState({selectedAuthor: e.target.value})}>
                <option value={undefined}>All</option>
                {
                  authors.map((a) =>
                    <option value={a} key={a}>
                      {a}
                    </option>
                  )
                }
              </select>
            </Box>
          </Flex>
          <Flex flexWrap='wrap' mx={-2} justifyContent='center' alignItems='center'>
            {writeups.map((writeup, idx) =>
              <a href={writeup.path} style={{
                color: 'inherit',
                textDecoration: 'none',
              }}>
                <Card
                  className={styles.card}
                  style={{
                    background: writeup.getBG(),
                  }}
                  p={3}
                  m={3}
                  bg='#ffffff'
                  borderRadius={4}
                  boxShadow='0 0 4px rgba(0, 0, 0, 0.16)'
                >
                  <p>{writeup.problemName}</p>
                  <p>{writeup.problemType}</p>
                  <p>{writeup.ctfName}</p>
                  <p>{writeup.author}</p>
                </Card>
              </a>
            )}
          </Flex>
        </div>
      </Layout>
    )
  }
}

export const query = graphql`
  query {
    allSitePage(
      filter: {
        path: {
          regex: "/.*\/writeups\/.+$/i"
        }
      },
    ) {
      edges {
        node {
          id
          path
        }
      }
    }
  }
`
