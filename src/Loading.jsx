import React, { Component } from 'react';

export class Loading extends Component {
    componentWillUnmount() {
        console.log('component a desmontar');
    }
    render() {
        return <div>Cargando...</div>;
    }
}
