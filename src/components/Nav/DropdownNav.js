import React from 'react';

export default class DropdownNav extends React.Component {
    getMenuItemTitle = (menuItem, index, depthLevel) => {
        return menuItem.title;
    }
    
    getMenuItem = (menuItem, depthLevel, index) => {
        let title = this.getMenuItemTitle(menuItem, index, depthLevel);
        console.log(menuItem)

        return (menuItem.child_items && menuItem.child_items !== null ? (
                <li>
                    {title}
                    <DropdownNav config={menuItem.child_items} />
                </li>
        ) : (
             <li>{title}</li>
        )
        )
    }
    
    render() {
        let { config } = this.props;

        console.log(config)

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