import React from 'react';
import {ListGroup,ListGroupItem,Table,Panel,Button,Well} from 'react-bootstrap'

class CollapsiblePanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: true
        };
    }

    render() {
        return (
            <div>
                <Button onClick={ ()=> this.setState({ open: !this.state.open })}>
                    点我隐藏/显示
                </Button>
                <Panel collapsible expanded={this.state.open}>
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                    Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                </Panel>
            </div>
        );
    }
}



class ListgroupInstance extends React.Component {
    render() {
        return(
            <div>
                <ListGroup>
                    <ListGroupItem href="#" active>Link 1</ListGroupItem>
                    <ListGroupItem href="#">Link 2</ListGroupItem>
                    <ListGroupItem href="#" disabled>Link 3</ListGroupItem>
                </ListGroup>
                <hr/>
                <ListGroup>
                    <ListGroupItem bsStyle="success">Success</ListGroupItem>
                    <ListGroupItem bsStyle="info">Info</ListGroupItem>
                    <ListGroupItem bsStyle="warning">Warning</ListGroupItem>
                    <ListGroupItem bsStyle="danger">Danger</ListGroupItem>
                </ListGroup>
                <h2>表格</h2>
                <Table striped bordered condensed hover>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td colSpan="2">Larry the Bird</td>
                        <td>@twitter</td>
                    </tr>
                    </tbody>
                </Table>
                <hr/>
                <h2>Panels</h2>
                <CollapsiblePanel />
                <hr/>
                <h2>Well</h2>
                <Well><p>Look I'm in a well!</p><p>哈哈哈哈哈哈</p></Well>
            </div>

        );
    }
}

export default ListgroupInstance;