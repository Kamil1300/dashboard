import React from 'react'

export default function Button({name,type,className}) {
    
  return (
    <button className={`font-semibold text-sm/6 bg-bg-color hover:bg-hoverbg-color w-28 h-10 rounded text-text-color ${className}`} type={type}>{name}</button>
  )
}
