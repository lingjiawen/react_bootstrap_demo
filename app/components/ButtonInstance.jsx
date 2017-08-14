import React from 'react';
import {ButtonToolbar,Button,ButtonGroup,DropdownButton,MenuItem,ToggleButtonGroup,ToggleButton,
        SplitButton,Clearfix} from 'react-bootstrap'

class LoadingButton extends React.Component{
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = { isLoading: false }
    }

    handleClick() {
        this.setState({isLoading: true});

        // This probably where you would have an `ajax` call
        setTimeout(() => {
            // Completed of async action, set loading state back
            this.setState({isLoading: false});
        }, 2000);
    }

    render() {
        let isLoading = this.state.isLoading;
        return (
            <Button
                bsStyle="primary"
                disabled={isLoading}
                onClick={!isLoading ? this.handleClick : null}>
                {isLoading ? 'Loading...' : 'Loading state'}
            </Button>
        );
    }
}


class ButtonInstance extends React.Component {
    render() {
        const wellStyles = {maxWidth: 400, margin: '0 auto 10px'};
        return (
            <div>
                <ButtonToolbar>
                    <Button bsStyle="primary" bsSize="large">Large button</Button>
                    <Button bsSize="large">Large button</Button>
                </ButtonToolbar>
                <ButtonToolbar>
                    <Button bsStyle="primary">Default button</Button>
                    <Button>Default button</Button>
                </ButtonToolbar>
                <ButtonToolbar>
                    <Button bsStyle="primary" bsSize="small">Small button</Button>
                    <Button bsSize="small">Small button</Button>
                </ButtonToolbar>
                <ButtonToolbar>
                    <Button bsStyle="primary" bsSize="xsmall">Extra small button</Button>
                    <Button bsSize="xsmall">Extra small button</Button>
                </ButtonToolbar>
                <hr/>
                <div className="well" style={wellStyles}>
                    <Button bsStyle="primary" bsSize="large" block>Block level button</Button>
                    <Button bsSize="large" block>Block level button</Button>
                </div>
                <hr/>
                <ButtonToolbar>
                    {/* Standard button */}
                    <Button>Default</Button>

                    {/* Provides extra visual weight and identifies the primary action in a set of buttons */}
                    <Button bsStyle="primary">Primary</Button>

                    {/* Indicates a successful or positive action */}
                    <Button bsStyle="success">Success</Button>

                    {/* Contextual button for informational alert messages */}
                    <Button bsStyle="info">Info</Button>

                    {/* Indicates caution should be taken with this action */}
                    <Button bsStyle="warning">Warning</Button>

                    {/* Indicates a dangerous or potentially negative action */}
                    <Button bsStyle="danger">Danger</Button>

                    {/* Deemphasize a button by making it look like a link while maintaining button behavior */}
                    <Button bsStyle="link">Link</Button>
                </ButtonToolbar>
                <hr/>
                <ButtonToolbar>
                    <Button bsStyle="primary" bsSize="large" active>Primary button</Button>
                    <Button bsSize="large" active>Button</Button>
                </ButtonToolbar>
                <hr/>
                <ButtonToolbar>
                    <Button bsStyle="primary" bsSize="large" disabled>Primary button</Button>
                    <Button bsSize="large" disabled>Button</Button>
                </ButtonToolbar>
                <hr/>
                <ButtonToolbar>
                    <Button href="#">Link</Button>
                    <Button>Button</Button>
                </ButtonToolbar>
                <hr/>
                <LoadingButton />
                <hr/>
                <h2>按钮组</h2>
                <ButtonGroup>
                    <Button>Left</Button>
                    <Button>Middle</Button>
                    <Button>Right</Button>
                </ButtonGroup>
                <hr/>

                <ButtonToolbar>
                    <ButtonGroup bsSize="large">
                        <Button >1</Button>
                        <Button>2</Button>
                        <Button>3</Button>
                        <Button>4</Button>
                    </ButtonGroup>

                    <ButtonGroup bsSize="small">
                        <Button>5</Button>
                        <Button>6</Button>
                        <Button>7</Button>
                    </ButtonGroup>

                    <ButtonGroup bsSize="xsmall">
                        <Button>8</Button>
                    </ButtonGroup>
                </ButtonToolbar>
                <hr/>
                <h2>下拉和上拉按钮</h2>
                <ButtonGroup>
                    <Button>1</Button>
                    <Button>2</Button>
                    <DropdownButton title="Dropdown" id="bg-nested-dropdown">
                        <MenuItem eventKey="1">Dropdown link</MenuItem>
                        <MenuItem eventKey="2">Dropdown link</MenuItem>
                    </DropdownButton>
                </ButtonGroup>
                <hr />
                <ButtonToolbar>
                    <ToggleButtonGroup type="checkbox" defaultValue={[1, 3]}>
                        <ToggleButton value={1}>Checkbox 1 (pre-checked)</ToggleButton>
                        <ToggleButton value={2}>Checkbox 2</ToggleButton>

                        <ToggleButton value={3}>Checkbox 3 (pre-checked)</ToggleButton>
                    </ToggleButtonGroup>
                </ButtonToolbar>

                <ButtonToolbar>
                    <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
                        <ToggleButton value={1}>
                            Radio 1 (pre-checked)
                        </ToggleButton>
                        <ToggleButton value={2}>Radio 2</ToggleButton>

                        <ToggleButton value={3}>Radio 3</ToggleButton>
                    </ToggleButtonGroup>
                </ButtonToolbar>
                <hr/>
                <ButtonToolbar>
                    <SplitButton title="Dropup" dropup id="split-button-dropup">
                        <MenuItem eventKey="1">Action</MenuItem>
                        <MenuItem eventKey="2">Another action</MenuItem>
                        <MenuItem eventKey="3">Something else here</MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey="4">Separated link</MenuItem>
                    </SplitButton>
                </ButtonToolbar>

                <ButtonToolbar>
                    <SplitButton bsStyle="primary" title="Right dropup" dropup pullRight id="split-button-dropup-pull-right">
                        <MenuItem eventKey="1">Action</MenuItem>
                        <MenuItem eventKey="2">Another action</MenuItem>
                        <MenuItem eventKey="3">Something else here</MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey="4">Separated link</MenuItem>
                    </SplitButton>
                </ButtonToolbar>
                <hr/>
                <hr/>
            </div>
        );
    }
}

export default ButtonInstance;