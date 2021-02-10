import React from 'react'
import Filho from './Filho'
import {childrenWithProps} from '../utils/utils'


export default props =>

<div>
    <h1>{props.nome} {props.sobrenome}</h1>
    <h2>Filhos</h2>

    <ul>
        {childrenWithProps(props)}
    </ul>

    {/* <Filho nome="João" sobrenome={props.sobrenome}/>
    <Filho {...props}/>
    <Filho {...props} nome="Marianne"/> */}
</div>