//main.js
import React from 'react';
import NavInstance from './components/NavInstance.jsx'
import ListInstance from './components/ListInstance.jsx'
import ButtonInstance from './components/ButtonInstance.jsx'
import OverlaysInstance from './components/OverlaysInstance.jsx'
import PageLayout from './components/PageLayout.jsx'
import FormInstance from './components/FormInstance.jsx'
import MediaInstance from './components/MediaContentInstance.jsx'
import MiscellaneousInstance from './components/Miscellaneous.jsx'
import ReactDOM from 'react-dom'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom'


import {Nav,NavItem,NavDropdown,MenuItem} from 'react-bootstrap'

class NavItem1 extends React.Component {
    constructor(props) {
        super(props);
        this.handleSelect = this.handleSelect.bind(this);
        this.state = { key:'1' };
    }

    handleSelect(eventKey) {
        event.preventDefault();
        this.setState({key:`${eventKey}`});
    }

    render() {
        return (
            <Nav bsStyle="tabs" activeKey={this.state.key} onSelect={this.handleSelect}>
                <NavItem eventKey="1" ><Link to="/">Button</Link></NavItem>
                <NavItem eventKey="2"><Link to="/list">List</Link></NavItem>
                <NavItem eventKey="3" ><Link to="/nav">Nav</Link></NavItem>
                <NavItem eventKey="4" ><Link to="/overlays">Overlays</Link></NavItem>
                <NavItem eventKey="5" ><Link to="/page_layout">PageLayout</Link></NavItem>
                <NavItem eventKey="6" ><Link to="/form">Form</Link></NavItem>
                <NavItem eventKey="7" ><Link to="/media_content">MediaInstance</Link></NavItem>
                <NavItem eventKey="8" ><Link to="/miscellaneous">MiscellaneousInstance</Link></NavItem>
            </Nav>
        );
    }
}

ReactDOM.render(
    <Router>
        <div>
            <NavItem1/>
            <hr/>
            <Route exact path="/" component={ButtonInstance}/>
            <Route path="/list" component={ListInstance} />
            <Route path="/nav" component={NavInstance} />
            <Route path="/overlays" component={OverlaysInstance} />
            <Route path="/page_layout" component={PageLayout}/>
            <Route path="/form" component={FormInstance}/>
            <Route path="/media_content" component={MediaInstance}/>
            <Route path="/miscellaneous" component={MiscellaneousInstance}/>
        </div>
    </Router>,
     document.getElementById('content')
 );
