import React from 'react'
import './Typing.css'

const Typing =(props) => {
    console.log(props)
    let typing = null
    if(props.comment){
        typing = <input className="myInput" onChange={props.changed}/>
    }
    return (
        <form onSubmit={props.submit}>
            {typing}
        </form>
    )
}

export default Typing