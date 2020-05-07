import React, { Component } from "react"
import { graphql } from "gatsby"
import Nav from "../components/Nav/Nav"
import './page.css';

class Page extends Component {
  render() {
    const StaticPage = this.props.data.wordpressPage

    return (
      <>
        <Nav />
        <div className='main-content'>
            <h1 style={{gridColumn: '4/9', marginTop: '2em'}} dangerouslySetInnerHTML={{ __html: StaticPage.title}}></h1>
            <div style={{alignSelf: 'center', gridColumn: '4/8', marginTop: '4em'}} dangerouslySetInnerHTML={{ __html: StaticPage.content}}></div>
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
