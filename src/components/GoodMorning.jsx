import React, {Fragment} from 'react'


export default props => 

// Primeira caso de uso 
<Fragment>
    <h1>Good Morning! {props.name} {props.lastname}!</h1>
    <h2>Até breve ... </h2>
</Fragment>

// Segundo caso de uso 
{/* <div>
    <h1>Good Morning! {props.name} {props.lastname}!</h1>
    <h2>Até breve ... </h2>
</div> */}

// Terceiro caso de uso 
// [
//     <h1 Key="h1">Good Morning! {props.name} {props.lastname}!</h1>,
//     <h2 Key="h2">Até breve ... </h2>
// ]