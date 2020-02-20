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
    
    getMenuItem = (menuItem, depthLevel, index) => {
        let title = this.getMenuItemTitle(menuItem, index, depthLevel);
        let url = this.getMenuItemUrl(menuItem, index, depthLevel);

        return (menuItem.child_items && menuItem.child_items !== null ? (
                <Nav.Link href={url}>
		    {title}
		    <NavDropdown>	
			    {menuItem.child_items.map(menuItem => 
				    (<NavDropdown.Item>
					    <Nav.Link href={menuItem.url}></Nav.Link>
					    {menuItem.child_items ? (
						    <NavDropdown title={menuItem.title}> 
							    {menuItem.child_items.map(secondMenuItem => 
								    <NavDropdown.Item>
									    <Nav.Link href={secondMenuItem.url}></Nav.Link>
									    {secondMenuItem.title}
								    </NavDropdown.Item>
							    )}</NavDropdown>): menuItem.title}
				    </NavDropdown.Item>)
			    )}
		    </NavDropdown>	
                </Nav.Link>
        ) : (
	        <Nav.Link href={url}>
	        {title}
	        </Nav.Link>
        )
        )
    }
    
    render() {
        let { config } = this.props;


        let options = []

        config.map((item, index) => {
            return options.push(this.getMenuItem(item, 0, index));
        });

	    return <Navbar style={{background: 'black'}} variant="dark" expand="lg">
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="ml-auto">
					{options}
				</Nav>
		</Navbar.Collapse>
       </Navbar>
    }
}
