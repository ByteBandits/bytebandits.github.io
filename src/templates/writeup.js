import React from "react"

import Layout from "../components/Layout"

export default function Template({
  pageContext: {
    html,
    relativePath,
  },
  location,
}) {
  return <Layout location={location}>
    <div
      style={{
        color: 'grey',
        marginTop: 24,
        textAlign: 'right',
      }}
    >
      <a href={'https://github.com/ByteBandits/writeups/tree/master/' + relativePath.substr(9)}>
        View this writeup on GitHub
      </a>
    </div>
    <div
      dangerouslySetInnerHTML={{ __html: html }}
      style={{
        marginBottom: 64,
      }}
    />
  </Layout>
}
