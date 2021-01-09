/* eslint-disable import/no-anonymous-default-export */
import React, { Fragment } from 'react'

export default props => 
    <>
    <h3>{props.titulo}</h3>
    <p>{props.subtitulo}</p>
    </>





/*
export default (props) => {
    return (
     
// Props é somente leitura!
//props.titulo = "Outro Título"
    <React.Fragment>
    <h3>{props.titulo}</h3>
    <p>{props.subtitulo}</p>   
    </React.Fragment>

    )

}
*/
