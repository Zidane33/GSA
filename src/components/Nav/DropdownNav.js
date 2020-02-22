import React from 'react';

export default class DropdownNav extends React.Component {
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
                <a href={url}>
		    <li>
                    {title}
                    <DropdownNav config={menuItem.child_items} />
		    </li>
                </a>
        ) : (
	        <a href={url}>
	        {title}
	        </a>
        )
        )
    }
    
    render() {
        let { config } = this.props;


        let options = []

        config.map((item, index) => {
            return options.push(this.getMenuItem(item, 0, index));
        });

        if (this.props.submenu && this.props.child_items !== null){
            return <ul>{options}</ul>
        }

        return <ul className="dropdown-menu">{options}</ul>
    }
}
