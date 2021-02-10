import React from 'react'
import ReactDOM from 'react-dom'

// import Saudacao from './components/Saudacao'

import Pai from './components/Pai'
import Filho from './components/Filho'


ReactDOM.render(
        <div>
            <Pai nome="Gabriel" sobrenome="Brelaz">

                {/* Como passo os componentes filhos aqui? */}
                <Filho nome="Miguel" />
                <Filho nome="Raquel" />

            </Pai>
        </div>
    , document.getElementById('root'))