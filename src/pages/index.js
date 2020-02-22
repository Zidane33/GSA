import React, { Component } from "react"
import { graphql } from "gatsby"
import Nav from "../components/Nav/Nav"
import 'bootstrap/dist/css/bootstrap.min.css';


const style = {
    margin: '25px',
    padding: '25px',
}


class Page extends Component {
  render() {
    const StaticPage = this.props.data.wordpressPage

    return (
      <>
        <Nav />
        <h1>GSA Carleton</h1>
        <div style={style}>
            <div dangerouslySetInnerHTML={{ __html: StaticPage.content}}></div>
        </div>
      </>
    )
  }
}

export default Page

export const pageQuery = graphql`
query{
  wordpressPage(path: {eq: "/"}) {
      content
      title
    }
  }
`
