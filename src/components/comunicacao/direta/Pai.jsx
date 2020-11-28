import React from 'react'
import Filho from './Filho'

export default props =>
   
     <div>
        <Filho {...props}><b>Douglas</b></Filho>
        <Filho sobrenome="Pinheiro"><b>Daniel</b></Filho>
        <Filho sobrenome={props.sobrenome}><b>David</b></Filho>
     </div>
