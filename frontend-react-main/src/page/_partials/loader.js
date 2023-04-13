import React from 'react'
import { Spinner } from 'react-bootstrap'

const Loader = props => {
    return (
        <div><Spinner animation="border" size={props.size == "sm"} /></div>
    )
}

const LoaderCenter = props => {
    return (
        <div><Spinner animation="border" size={props.size == "sm"} className="align-middle" />&nbsp; {props.text}</div>
    )
}

export default Loader
export { LoaderCenter }