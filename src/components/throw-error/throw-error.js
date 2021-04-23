import { render } from '@testing-library/react';
import React, { useState } from 'react';

export default class ThrowError extends React.Component {

    state = {
        error: false
    }

    render() {

        if (this.state.error) {
            this.foo.bar = 0;
        }

        return (
            <button className="btn btn-danger" onClick={() => this.setState({ error: true })}>Throw error</button>
        )
    }
}

