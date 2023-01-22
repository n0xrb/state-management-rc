import React, { Component } from 'react';
import { Loading } from './Loading';

export class ClassState extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: false,
            loading: false,
        };
    }

    componentWillUnmount() {
        console.log('component a montar');
    }
    componentDidMount() {
        console.log('component montado');
    }

    componentDidUpdate() {
        console.log('actualizacion');

        if (!!this.state.loading) {
            setTimeout(() => this.setState({ loading: !this.state.loading }), 3000);
        }
        console.log('termina actualizacion');
    }

    render() {
        return (
            <div>
                <h2>Eliminar {this.props.name}</h2>
                <p>Por favor, escribe el código de seguridad.</p>
                {this.state.error && <p>El código es incorrecto</p>}
                {this.state.loading && <Loading />}
                <input placeholder="código de seguridad" type="text" />
                <button onClick={() => this.setState({ loading: !this.state.loading })}>Comprobar</button>
            </div>
        );
    }
}
