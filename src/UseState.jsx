import React, { useState, useEffect } from 'react';

const SECURITY_CODE = 'paradigma';

export const UseState = ({ name }) => {
    const [state, setState] = useState({
        value: '',
        error: false,
        loading: false,
    });

    useEffect(() => {
        console.log('comienza efecto');
        if (!!state.loading) {
            setTimeout(() => {
                if (state.value === SECURITY_CODE) {
                    setState({ ...state, loading: false });
                } else {
                    setState({ ...state, loading: false, error: true });
                }
            }, 3000);
        }
        console.log('termina efecto');
    }, [state.loading]);

    return (
        <div>
            <h2>Eliminar {name}</h2>
            <p>Por favor, escribe el código de seguridad.</p>

            {!state.loading && state.error && <p>El código es incorrecto</p>}
            {state.loading && <p>Cargando...</p>}
            <input
                placeholder="código de seguridad"
                type="text"
                value={state.value}
                onChange={event => setState({ ...state, value: event.target.value })}
            />
            <button
                onClick={() => {
                    setState({ ...state, loading: true });
                }}
            >
                Comprobar
            </button>
        </div>
    );
};
