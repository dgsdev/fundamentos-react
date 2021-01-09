/* eslint-disable import/no-anonymous-default-export */
import React from 'react'

export default props =>
   
     <div>
        <h5>Componente Filho</h5>
        <p>{props.children} {props.sobrenome}</p>
     </div>