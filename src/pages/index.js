import React, { Component } from "react"
import { graphql } from "gatsby"
import Nav from "../components/Nav/Nav"
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../components/Footer/Footer';

const style = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, 10%)', 

}


class Page extends Component {
  render() {
    const StaticPage = this.props.data.wordpressPage

    return (
      <>
        <Nav />
        <div style={style}>
            <div style={{alignSelf: 'center', gridColumn: '4/8', marginTop: '4em'}} dangerouslySetInnerHTML={{ __html: StaticPage.content}}></div>
        </div>
        <Footer />
      </>
    )
  }
}

export default Page

export const pageQuery = graphql`
query{
  wordpressPage(path: {eq: "/"}) {
      content
    }
  }
`
