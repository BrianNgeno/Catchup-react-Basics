import React from 'react'

export default function Button({label,onClick}) {
  // console.log(props)
  return (
    <button className='btn btn-outline-info' onClick={onClick} >{label}</button>
  )
}
