import React from 'react';
import {ButtonToolbar,Button,Label,ButtonGroup,Glyphicon} from 'react-bootstrap'

class MiscellaneousInstance extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div>
                    <ButtonToolbar>
                        <ButtonGroup>
                            <Button><Glyphicon glyph="align-left" /></Button>
                            <Button><Glyphicon glyph="align-center" /></Button>
                            <Button><Glyphicon glyph="align-right" /></Button>
                            <Button><Glyphicon glyph="align-justify" /></Button>
                        </ButtonGroup>
                    </ButtonToolbar>
                    <ButtonToolbar>
                        <ButtonGroup>
                            <Button bsSize="large"><Glyphicon glyph="star" /> Star</Button>
                            <Button><Glyphicon glyph="star" /> Star</Button>
                            <Button bsSize="small"><Glyphicon glyph="star" /> Star</Button>
                            <Button bsSize="xsmall"><Glyphicon glyph="star" /> Star</Button>
                        </ButtonGroup>
                    </ButtonToolbar>
                </div>
                <div>
                    <h1>Label <Label>New</Label></h1>
                    <h2>Label <Label>New</Label></h2>
                    <h3>Label <Label>New</Label></h3>
                    <h4>Label <Label>New</Label></h4>
                    <h5>Label <Label>New</Label></h5>
                    <p>Label <Label>New</Label></p>
                </div>
            </div>
        );
    }
}

export default MiscellaneousInstance;