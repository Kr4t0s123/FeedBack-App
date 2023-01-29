import React from 'react'
import PropTypes from 'prop-types'

function Button({ children, version, type, isDisabled}) {
  return (
    <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
        {children}
    </button>
  )
}

Button.defaultPropes = {
    version : 'primary',
    type : 'submit',
    isDisabled : false
}

Button.propTypes = {
    version : PropTypes.string,
    type : PropTypes.string,
    isDisabled : PropTypes.bool,
    children : PropTypes.node.isRequired
}


export default Button