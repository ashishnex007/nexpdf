import React, { useState } from 'react'
import Links from './Links'
import { ReactPropTypes } from 'react'

export default function Navbar(props) {

  return (
    <div>
    <Links/>
    <nav className={`navbar bg-${props.mode}`} >
  <div className="container-fluid">
    <div className="navbar-brand my-2" >
      <img src="https://media.istockphoto.com/id/1299871741/vector/key.jpg?s=612x612&w=0&k=20&c=cOg7hwe0lw54170oBVXOs3jhE450OsZ-a0NE4eqp1kU=" alt="Logo" width="35" height="35" className="d-inline-block align-text-top mx-2 "/>
      <p1 className={`text-${props.mode=='dark'?'light':'dark'}`}>NexPDF</p1>
      </div>
      <button type="button" onClick={props.toggleMode} className={`btn btn-${props.mode=='dark'?'light':'dark'}`} >{props.mode=='dark'?'Light':'Dark'} Mode</button>
  </div>
</nav>
    </div>
  )
}
