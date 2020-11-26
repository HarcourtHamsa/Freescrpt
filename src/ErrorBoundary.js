import React, { Component } from 'react'

class ErrorBoundary extends Component {
    state = {
        error: null,
        errorInfo: null
    }

    componentDidCatch(error, errorInfo) {
        this.setState({ error, errorInfo })
    }

    render() {
        if (this.state.error) {
            return <p>Something went wrong</p>
        }

        return this.props.children
    }
}

export default ErrorBoundary