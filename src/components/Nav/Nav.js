import React from "react"
import { StaticQuery, graphql } from "gatsby"
import './Nav.css'

export default () => (
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
        console.log(data)
        const menu = data.allWordpressMenusMenusItems.edges[0].node.items.filter(x => !x.child_items)
        const childMenu = data.allWordpressMenusMenusItems.edges[0].node.items.filter(x => x.child_items)
      return (
        <nav className="menu">
          <ul className="nav-list">
            {menu.map(x => {
                return(
                    <li>
                        <a className="nav-item" href={x.url}>
                            {x.title}
                        </a>
                    </li>
                )
            })} + {childMenu.map(x => (
                <li>
                    <a className="nav-item" href={x.url}>
                        {x.title}
                    </a>
                </li>
            ))}
          </ul>
        </nav>
      )
    }}
  />
)
