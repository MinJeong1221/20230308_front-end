import React from 'react'
import { useNavigate, Link } from 'react-router-dom';
import styled from 'styled-components'

function Header() {
  const navigate = useNavigate();
  return (
    <Headers>
      <h1><Link to="/">Neppstagram</Link></h1>
      <input type="text" />
      <HeaderButtons>
        <button type='button' onClick={(e)=> navigate("/")}>Home</button>
        <button type='button' onClick={(e)=> navigate("/post")}>Post</button>
        <button type='button' onClick={(e)=> navigate("/profil")}>Profil</button>
      </HeaderButtons>
    </Headers>
  )
}
const Headers = styled.div`
  display: flex;
  height: 80px;
  background-color: beige;
  justify-content: center;
  align-items: center;
  h1{
    position: absolute;
    left: 20px;
    top: 15px;
  }

`
const HeaderButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 20px;
  gap: 20px;

  button{
    height: 50px;
    width: 50px;
    font-weight: 700;
    color: white;
    background-color: black;
    border-radius: 50%;
  }
`

export default Header