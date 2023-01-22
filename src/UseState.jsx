import React, { useState, useEffect } from 'react';

export const UseState = ({ name }) => {
    const [error, setError] = useState(true);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log('comienza efecto');
        if (!!loading) {
            setTimeout(() => setLoading(!loading), 3000);
        }
        console.log('termina efecto');
    }, [loading]);

    return (
        <div>
            <h2>Eliminar {name}</h2>
            <p>Por favor, escribe el código de seguridad.</p>

            {error && <p>El código es incorrecto</p>}
            {loading && <p>Cargando...</p>}
            <input placeholder="código de seguridad" type="text" />
            <button onClick={() => setLoading(!loading)}>Comprobar</button>
        </div>
    );
};
