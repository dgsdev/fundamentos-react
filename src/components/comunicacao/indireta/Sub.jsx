/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
// Outro exemplo com função

export default props => {
    function acao() {
        props.onClicar(Math.random(), 'Números Aleátórios');
    }
    return (
     <div>
        <button onClick={acao}>Alterar</button>        
     </div>
    );
};

/*
// Passando propriedades no elemento button

export default props => {
    return (
     <div>
        <button onClick={() => {
            props.onClicar(Math.random())
        }}>Alterar</button>
        
     </div>

    );
};

*/   