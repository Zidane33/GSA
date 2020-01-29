import React from 'react';
import './Nav.css';

class SubMenu extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
           this.props.children.map(x => (
                <li style={{background: 'blue'}}>
                    <a className='nav-item' href={x.url}>
                        {x.title}
                    </a>
                </li>
                )
            )
        )
    }
}

export default class Menu extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            menu: false,
            secondMenu: false,
            toRender: '',
        }
    }

    render() {
        return (
            <li onMouseEnter={() => this.setState({menu: true})} onMouseLeave={()=> this.setState({menu: false})}>
                <a className="nav-item" href={this.props.url}>
                    {this.props.title}
                </a>
                <ul>
                {this.state.menu && this.props.children !== null && this.props.children.map(x => {
                   return x.child_items !== null ? 
                     (
                        <li style={{background: 'green'}} onMouseEnter={() => this.setState({secondMenu: true, toRender: x.title})} onMouseLeave={()=> this.setState({secondMenu: false})}>
                            <a className="nav-item" href={x.url} id={x.title}>
                                {x.title}
                            </a>
                            {x.child_items !== null && this.state.secondMenu && this.state.toRender == document.getElementById(`${x.title}`).id && (
                                <ul>
                                    <SubMenu children={x.child_items} />
                                </ul>
                            )}
                        </li>
                    ) : (
                        <li>
                            <a className="nav-item" href={x.url}>
                                {x.title}
                            </a>
                        </li>
                    )})}
                </ul>
            </li>
        )
    }
};