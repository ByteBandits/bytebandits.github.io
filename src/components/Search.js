import React, { Component } from "react"
import { Link } from "gatsby"
import { Index } from "elasticlunr"
import styles from '../styles/search.module.css'
import Writeup from '../models/Writeup'

// Search component
export default class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: ``,
      results: [],
    }
  }

  render() {
    return (
      <div className={styles.searchBar}>
        <input type="text" value={this.state.query} onChange={this.search} placeholder="Search writeups.." />
        <ul>
          {this.state.results.map(page => {
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
  getOrCreateIndex = () =>
    this.index
      ? this.index
      : // Create an elastic lunr index and hydrate with graphql query results
        Index.load(this.props.searchIndex)

  search = evt => {
    const query = evt.target.value
    this.index = this.getOrCreateIndex()
    this.setState({
      query,
      // Query the index with search string to get an [] of IDs
      results: this.index
        .search(query, {})
        // Map over each ID and return the full document
        .map(({ ref }) => this.index.documentStore.getDoc(ref)),
    })
  }
}
