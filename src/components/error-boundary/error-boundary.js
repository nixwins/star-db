import React from 'react'
import ErrorMessage from '../error-message';

import './error-boundary.css';


export default class ErrorBoundary extends React.Component {
    state = {
        hasError: false
    }

    componentDidCatch() {
        this.setState({ hasError: true });
    }

    render() {

        if (this.state.hasError) return <ErrorMessage />;
        return (this.props.children)
    }
}