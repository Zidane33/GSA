import React from 'react';
import { StaticQuery, graphql } from "gatsby"
import Navbar from 'react-bootstrap/Navbar';
import BootstrapNav from './BootstrapNav';
import './Nav.css';

export default class Nav extends React.Component {

    render() {
        return(
            <StaticQuery
            query={graphql`
              query {
                allWordpressMenusMenusItems(filter: {name: {eq: "main-menu"}}) {
                    edges {
                      node {
                        name
                        items {
                          title
                          url
                          child_items {
                            title
                            url
                            child_items {
                              title
                              url
                            }
                          }
                        }
                      }
                    }
                  }      
                }
            `}
            render={data => {
                const menu = data.allWordpressMenusMenusItems.edges[0].node.items
              return (
		<Navbar style={{background: 'black'}} variant="dark" expand="lg">
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
			    <BootstrapNav config={menu} />
			</Navbar.Collapse>
                </Navbar>
              )
            }}
          />
        )
    }
}
