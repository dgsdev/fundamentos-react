/* eslint-disable import/no-anonymous-default-export */
import './App.css'
import React from 'react'


import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import ComFilhos from './components/basicos/ComFilhos'
import Card from './components/layout/Card'
import Repeticao from './components/basicos/Repeticao'
import Condicional from './components/basicos/Condicional'
import CondicionalComIf from './components/basicos/CondicionalComIf'

export default props => (
<div className="App">
<Card titulo="#07 - Condicional v2" color="#FA6900">
    <CondicionalComIf numero={100}></CondicionalComIf>
</Card>
<Card titulo="#06 - Condicional v1" color="#E94C6F">
    <Condicional numero={155}></Condicional>
</Card>
<Card titulo="#05 - Repetição" color="purple">
    <Repeticao></Repeticao>
</Card>
<Card titulo="#04 - Exercício X" color="#D96459">
    Contéudo
</Card>
<Card titulo="#03 - Componentes com Filhos" color="#FF85CB">
<ComFilhos>
   <ul>
       <li>Jeová</li>
       <li>Juliana</li>
       <li>Rebecca</li>
       <li>Douglas</li>
   </ul>
</ComFilhos>
</Card>
<Card titulo="#02 - Componente com Parâmetro" color="#92B06A">
<ComParametro titulo="Esse é um título"
              subtitulo="Esse é o subtítulo" />
<ComParametro titulo="DGSDEV"
              subtitulo="FullStack" />
</Card>
<Card titulo="#01 - Primeiro Componente" color="#0099cc">
    <Primeiro />
</Card>
</div>

);