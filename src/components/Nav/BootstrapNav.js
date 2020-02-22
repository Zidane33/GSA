import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default class BootstrapNav extends React.Component {
    getMenuItemTitle = (menuItem) => {
        return menuItem.title;
    }

    getMenuItemUrl = (menuItem) => {
        return menuItem.url;
    }

    getMenuChildItems = (menuItem) => {
        return menuItem.child_items !== null ? menuItem.child_items : [];
    }
    
    getMenuItem = (menuItem) => {
        let title = this.getMenuItemTitle(menuItem);
        let url = this.getMenuItemUrl(menuItem);
        let childItems = this.getMenuChildItems(menuItem);
        let noMenuLink = <Nav.Link href={url}>{title}</Nav.Link>
        let menuLink = <NavDropdown title={title}>
                            {childItems !== [] && childItems.map(submenu => (
                                <div>
                                {submenu.child_items ? (
                                    <NavDropdown title={submenu.title}> 
                                        <Nav.Item as='a' href={submenu.url}>
                                            {submenu.child_items.map(tertiaryMenu => (
                                                <Nav.Link href={tertiaryMenu.url}>
                                                    {tertiaryMenu.title}
                                                </Nav.Link>
                                            )
                                            )}
                                        </Nav.Item>
                                    </NavDropdown>): (
                                        <Nav.Link href={submenu.url}>
                                            {submenu.title}
                                        </Nav.Link>
                                    )}
                                </div>
                            ))} 
                        </NavDropdown>
        if(menuItem.child_items == null){
            return noMenuLink;
        }
        else {
            return menuLink
        }
    }
    
    render() {
        let { config } = this.props;


        let options = []

        config.map((item) => {
            return options.push(this.getMenuItem(item));
        });

	    return (
		    <Navbar style={{color: 'red'}} className="ml-auto">
                {options}
            </Navbar> )
    }
}
