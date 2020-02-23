import React from 'react';
import { graphql } from 'gatsby';
import Nav from '../components/Nav/Nav';
import Footer from '../components/Footer/Footer';

const style = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, 10%)',
}

class Category extends React.Component {
    render() {
        const category = this.props.data.allWordpressPost.edges;
        console.log(category);

        return (
            <>
                <Nav />
                <div style={style}>
                    <h4 style={{gridColumn: '4/9', marginTop: '2em'}} dangerouslySetInnerHTML={{ __html: category[0].node.title}}></h4>
                    <a href={category[0].node.link}>
                        <p dangerouslySetInnerHTML={{ __html: category[0].node.title}}></p> 
                    </a>
                </div>
                <Footer />
            </>
        )
    }
}

export default Category;

export const categoryQuery = graphql`
    query($name: String!) {
        allWordpressPost(filter: {categories: {elemMatch: {name: {eq: $name}}}}){
            edges {
                node {
                    title
                    link
                }
            }
        }
    }
`
