import React, { useState } from 'react';

export const UseState = ({ name }) => {
    const [error, setError] = useState(true);
    return (
        <div>
            <h2>Eliminar {name}</h2>
            <p>Por favor, escribe el código de seguridad.</p>

            {error && <p>El código es incorrecto</p>}
            <input placeholder="código de seguridad" type="text" />
            <button onClick={() => setError(!error)}>Comprobar</button>
        </div>
    );
};
