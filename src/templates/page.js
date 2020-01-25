import React, { Component } from "react"
import { graphql } from "gatsby"

const style = {
    margin: '25px',
    padding: '25px',
    background: 'red'
}

class Page extends Component {
  render() {
    const StaticPage = this.props.data.wordpressPage

    return (
      <>
        <h1>{StaticPage.title}</h1>
        <div style={style}>
            <div dangerouslySetInnerHTML={{ __html: StaticPage.content}}></div>
        </div>
      </>
    )
  }
}

export default Page

export const pageQuery = graphql`
  query($id: String!) {
    wordpressPage(id: { eq: $id }) {
      title
      content
    }
    site {
      id
      siteMetadata {
        title
      }
    }
  }
`
