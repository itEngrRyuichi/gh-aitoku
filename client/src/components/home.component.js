import React, { Component, Fragment } from 'react';
import Ready from './ready.component';

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
        }
    }

    render() {
        return (
            <Fragment>
                <Ready />
            </Fragment>
        );
    }
}