import React, { useState } from "react"
import { Link } from "gatsby"
import { Index } from "elasticlunr"
import styles from '../styles/search.module.css'
import Writeup from '../models/Writeup'

// Search component
export default ({searchIndex}) => {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  let index

  const getOrCreateIndex = () =>
    index
      ? index
      : // Create an elastic lunr index and hydrate with graphql query results
        Index.load(searchIndex)

  const search = evt => {
    const query = evt.target.value
    index = getOrCreateIndex()
    setQuery(query)
    setResults(
      // Query the index with search string to get an [] of IDs
      index.search(query, {})
        // Map over each ID and return the full document
        .map(({ ref }) => index.documentStore.getDoc(ref))
    )
  }

  return (
    <div className={styles.searchBar}>
      <input type="text" value={query} onChange={search} placeholder="Search writeups.." />
      <ul>
        {results.map(page => {
          try {
            const writeup = new Writeup('/' + page.path)
            return <Link to={"/" + page.path}>
              <li key={page.id}>
                <div><b>{writeup.problemName}</b></div>
                <div><small>{writeup.problemType}</small></div>
                <div><small>{writeup.ctfName}</small></div>
                <div><small>{writeup.author}</small></div>
                <div><small>{"tags: " + page.tags.join(`,`)}</small></div>
              </li>
            </Link>
          } catch(e) {
            console.error(e)
            return undefined
          }
        })}
      </ul>
    </div>
  )
}
