import React, { Component } from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import Nav from "../components/Nav/Nav"
import './post.css'

const style = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, 10%)', 
}

class Post extends Component {
  render() {
    const post = this.props.data.wordpressPost

    return (
      <>
        <Nav />
        <div style={style}>
            <h2 style={{gridColumn: '4/9', marginTop: '2em'}} dangerouslySetInnerHTML={{ __html: post.title}}></h2>
            <div style={{alignSelf: 'center', gridColumn: '4/8', marginTop: '1em'}} dangerouslySetInnerHTML={{ __html: post.content}}></div>
        </div>
      </>
    )
  }
}

Post.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export default Post

export const postQuery = graphql`
  query($id: String!) {
    wordpressPost(id: { eq: $id }) {
      title
      content
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`
