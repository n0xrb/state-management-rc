import { Component } from 'react';
import { Loading } from './Loading';

const SECURITY_CODE = 'paradigma';

export class ClassState extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
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
            setTimeout(() => {
                if (this.state.value === SECURITY_CODE) {
                    this.setState({ error: false, loading: false });
                } else {
                    this.setState({ error: true, loading: false });
                }
            }, 3000);
        }
        console.log('termina actualizacion');
    }

    render() {
        return (
            <div>
                <h2>Eliminar {this.props.name}</h2>
                <p>Por favor, escribe el código de seguridad.</p>
                {this.state.error ? <p>El código es incorrecto</p> : this.state.loading && <Loading />}
                <input
                    placeholder="código de seguridad"
                    type="text"
                    value={this.state.value}
                    onChange={() => {
                        this.setState({ value: event.target.value });
                    }}
                />
                <button onClick={() => this.setState({ loading: !this.state.loading })}>Comprobar</button>
            </div>
        );
    }
}
