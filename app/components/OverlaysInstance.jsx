import React from 'react';
import {Modal,Button,Popover,Tooltip,OverlayTrigger,Overlay} from 'react-bootstrap'
import ReactDOM from 'react-dom'


class StaticMarkup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {dpName:false};
        this.onDisplayOverlays = this.onDisplayOverlays.bind(this);
        this.onCloseOverlays = this.onCloseOverlays.bind(this);
    }


    onDisplayOverlays() {
        this.setState({
            dpName:true
        });
    }

    onCloseOverlays() {
        this.setState({
            dpName:false
        });
    }

    render() {
        if(this.state.dpName)
            return (
                <div>
                    <Button
                        bsStyle="primary"
                        onClick={this.onDisplayOverlays}>
                        弹出框
                    </Button>
                    <div className="static-modal" id="static_modal">
                        <Modal.Dialog>
                            <Modal.Header>
                                <Modal.Title>Modal title</Modal.Title>
                            </Modal.Header>

                            <Modal.Body>
                                One fine body...
                            </Modal.Body>

                            <Modal.Footer>
                                <Button onClick={this.onCloseOverlays}>Close</Button>
                                <Button bsStyle="primary">Save changes</Button>
                            </Modal.Footer>

                        </Modal.Dialog>
                    </div>
                </div>
            );
        else
            return (
                <div>
                    <Button
                        bsStyle="primary"
                        onClick={this.onDisplayOverlays}>
                        弹出框
                    </Button>
                </div>
            );
    }
}

class BasicModal extends React.Component{
    constructor(props) {
        super(props);
        this.state = {showModal:false};
        this.close = this.close.bind(this);
        this.open = this.open.bind(this);
    }
    close() {
        this.setState({ showModal: false });
    }

    open() {
        this.setState({ showModal: true });
    }

    render() {
        const popover = (
            <Popover id="modal-popover" title="popover">
                very popover. such engagement
            </Popover>
        );
        const tooltip = (
            <Tooltip id="modal-tooltip">
                wow.
            </Tooltip>
        );

        return (
            <div>
                <p>Click to get the full Modal experience!</p>

                <Button
                    bsStyle="primary"
                    bsSize="large"
                    onClick={this.open}
                >
                    Launch demo modal
                </Button>

                <Modal show={this.state.showModal} onHide={this.close}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h4>Text in a modal</h4>
                        <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>

                        <h4>Popover in a modal</h4>
                        <p>there is a <OverlayTrigger overlay={popover}><a href="#">popover</a></OverlayTrigger> here</p>

                        <h4>Tooltips in a modal</h4>
                        <p>there is a <OverlayTrigger overlay={tooltip}><a href="#">tooltip</a></OverlayTrigger> here</p>

                        <hr />

                        <h4>Overflowing text to show scroll behavior</h4>
                        <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                        <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.close}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

class CustomOverlays extends React.Component{
    constructor(props) {
        super(props);
        this.state = {show: true};
        this.toggle = this.toggle.bind(this);
    }
    toggle() {
        this.setState({ show: !this.state.show });
    }

    render() {
        const sharedProps = {
            show: this.state.show,
            container: this,
            target: () => ReactDOM.findDOMNode(this.refs.target)
        };

        return (
            <div style={{ height: 100, paddingLeft: 150, position: 'relative' }}>
                <Button ref="target" onClick={this.toggle}>
                    Click me!
                </Button>

                <Overlay {...sharedProps} placement="left">
                    <Tooltip id="overload-left">Tooltip overload!</Tooltip>
                </Overlay>
                <Overlay {...sharedProps} placement="top">
                    <Tooltip id="overload-top">Tooltip overload!</Tooltip>
                </Overlay>
                <Overlay {...sharedProps} placement="right">
                    <Tooltip id="overload-right">Tooltip overload!</Tooltip>
                </Overlay>
                <Overlay {...sharedProps} placement="bottom">
                    <Tooltip id="overload-bottom">Tooltip overload!</Tooltip>
                </Overlay>
            </div>
        );
    }
}


class OverlaysInstance extends React.Component {
    render() {
        return (
            <div>
                <StaticMarkup />
                <hr/>
                <BasicModal/>
                <hr/>
                <CustomOverlays/>
            </div>
        )
    }
}


export default OverlaysInstance;