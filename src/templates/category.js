import React from 'react';
import { graphql } from 'gatsby';
import Pagination from 'react-bootstrap/Pagination';
import Nav from '../components/Nav/Nav';
import Footer from '../components/Footer/Footer';

class Category extends React.Component {
    constructor(props){
        super(props);
        this.state={
            page: 1,
        }
    }

    renderPosts = param => key => {
       if(param < 1){
           return
       }
       this.setState({
           page: param}) 
    }

    setPosts = (key, arr) => {
        return arr.slice(key, key + 5);
    }

    render() {
        const category = this.props.data.allWordpressPost.edges;
        const postsToRender = this.setPosts(this.state.page, category);
        const lastPage = category.length - 1;

        return (
            <>
                <Nav />
                <div className='main-content'>
                    <div style={{gridColumn: '4/9', marginTop: '2em'}}>
                        {postsToRender.map(post => (
                            <div>
                                <a href={post.node.link}>
                                    <h2 dangerouslySetInnerHTML={{ __html: post.node.title}}></h2>
                                </a>
                                <p dangerouslySetInnerHTML={{ __html: post.node.excerpt}}></p>
                            </div>
                        ))}
                        <Pagination className='d-flex justify-content-center'>
                            <Pagination.First onClick={this.renderPosts(1)}/>
                            <Pagination.Prev onClick={this.renderPosts(this.state.page - 5)}/>
                            <Pagination.Item active onClick={this.renderPosts(this.state.page)}>{this.state.page}</Pagination.Item>
                            <Pagination.Next onClick={this.renderPosts(this.state.page + 5)}/>
                            <Pagination.Last onClick={this.renderPosts(lastPage)}/>
                        </Pagination>
                    </div>
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
                    excerpt
                }
            }
        }
    }
`
