import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { useInputs } from '../../hooks/useInputs';
import { login } from '../../api/auth';

function Loginform() {
  const [inputs, handleInputs] = useInputs({
    email:"",
    password:"",
  });

  const navigate = useNavigate();

  const handleSubmit = async(e) =>{
    e.preventDefault();  

    try {
      const res = await login(inputs);
      console.log(res);
    } catch (e) {
      alert(e);
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Title>Login</Title>
        
        <InputWrapper>        
          <input type="text" placeholder='이메일'  name='email' onChange={handleInputs}/>
          <input type="password" placeholder='비밀번호'  name='password' onChange={handleInputs}/>
        </InputWrapper>
        
        <ButtonWrapper>
          <button>로그인</button>
          <button type='button' onClick={(e)=> navigate("/auth/signup")}>회원가입</button>
        </ButtonWrapper>
      </form>
    </div>
  )
}

const Title = styled.h2`
  text-align: center;
`
const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;

  margin-top: 40px;
`
const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;

  margin-top: 20px;
`
export default Loginform