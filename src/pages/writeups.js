import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import { Flex, Box, Card } from 'rebass'
import styles from '../styles/writeups.module.css'
import Writeup from '../models/Writeup'


const useSelectedCTF = () => {
  const [selectedCTF, setSelectedCTF] = useState()
  useEffect(() => console.log('a different CTF was selected'), [selectedCTF])
  return [selectedCTF, setSelectedCTF]
}


export default ({ data, location }) => {
  const [selectedProblemType, setSelectedProblemType] = useState()
  const [selectedCTF, setSelectedCTF] = useSelectedCTF()
  const [selectedAuthor, setSelectedAuthor] = useState()

  let writeups = data.allSitePage.edges
    .filter(({node}) => (node.path.match(/\//g) || []).length === 5)
    .map(({node}) => new Writeup(node.path))

  const authors = writeups.map((w) => w.author).filter((elem, pos, arr) => arr.indexOf(elem) === pos)
  const problemTypes = writeups.map((w) => w.problemType).filter((elem, pos, arr) => arr.indexOf(elem) === pos)
  const ctfNames = writeups.map((w) => w.ctfName).filter((elem, pos, arr) => arr.indexOf(elem) === pos)

  const non_writeups = data.allSitePage.edges.filter(({node}) => (node.path.match(/\//g) || []).length !== 5)
  if (non_writeups.length > 0) {
    console.warn("Some non writeup pages were skipped")
    console.warn(non_writeups)
  }

  if (selectedProblemType && selectedProblemType !== 'All') {
    writeups = writeups.filter((w) => w.problemType === selectedProblemType)
  }

  if (selectedCTF && selectedCTF !== 'All') {
    writeups = writeups.filter((w) => w.ctfName === selectedCTF)
  }

  if (selectedAuthor && selectedAuthor !== 'All') {
    writeups = writeups.filter((w) => w.author === selectedAuthor)
  }

  return (
    <Layout location={location}>
      <SEO title="Writeups" />
      <div style={{margin: '24px auto 64px', minHeight: 640}}>
        <h1>Writeups</h1>
        <Flex flexWrap='wrap' mx={-2}>
          <Box m={2}>
          <div style={{fontSize: '0.66em', color: 'grey'}}>Type</div>
            <select onChange={(e) => setSelectedProblemType(e.target.value)}>
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
            <select onChange={(e) => setSelectedCTF(e.target.value)}>
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
            <select onChange={(e) => setSelectedAuthor(e.target.value)}>
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
            <a
              href={writeup.path}
              style={{
                color: 'inherit',
                textDecoration: 'none',
              }}
              key={idx}
            >
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
