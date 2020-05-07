import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export default class Footer extends React.Component {

    render() {
        return (
            <StaticQuery
            query={graphql`
            query {
                allWordpressMenusMenusItems(filter: {name: {eq: "bottom-nav"}}) {
                    edges {
                        node {
                            items {
                                title
                                url
                            }
                        }
                    }
                }
            }`
        }
        render={data => {
            const menu = data.allWordpressMenusMenusItems.edges[0].node.items;
            return (
                <Navbar className='mt-5' style={{background: 'black', display:'flex', justifyContent: 'center'}} variant="dark" expand="lg">
                    {menu.map(item => (
                        <Nav.Link href={item.url}>
                            {item.title}
                        </Nav.Link>
                    ))}
                </Navbar>
                )
            }
        }
        />
        )
        }
}
