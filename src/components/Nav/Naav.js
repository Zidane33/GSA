import React from 'react';
import { StaticQuery, graphql } from "gatsby"
import Menu from './Menu';
import './Nav.css';

export default class Naav extends React.Component {

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
                <nav>
                  <ul className="nav-list">
                    {menu.map(x => (
                        <Menu url={x.url} title={x.title} children={x.child_items} />
                    ))}
                  </ul>
                </nav>
              )
            }}
          />
        )
    }
}