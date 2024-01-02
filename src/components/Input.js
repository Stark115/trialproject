import React from 'react'

function Input({type,ph}) {
  return (
    <div>
        <div>
        <input type={type} placeholder={ph} />
        </div>
    </div>
  )
}

export default Input