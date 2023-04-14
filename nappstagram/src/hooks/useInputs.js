import React, { useState } from 'react'

export function useInputs(initialState) {
  const [inputs, setInputs] = useState(initialState);

  const handleInput = (e)=>{
    const {name, value} = e.target;

    setInputs({
      ...inputs,
      [name]: value,
    })
  }
  const reset = ()=>{
    setInputs(initialState);
  }

  return[inputs, handleInput, reset]
}

