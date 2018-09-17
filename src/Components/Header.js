import React from 'react'

// function stateless component. No access to state or life cycle methods. Only available to class based components
function Header(props) {
  return (
    //access props via props.name. make sure it is passed it via an argument.
    <h1>{props.name}</h1>
  )
}

export default Header