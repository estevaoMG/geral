import React from 'react'
import styled from 'styled-components'
import iconSenha from './assets/IconSenha.png'

const Input = ({ type, placeholder}) => {
  return (
    <Container>
      <Icon/>
      <StyledInput placeholder = {placeholder} type={"password"}/>      
    </Container>
  )
}

const Container = styled.div`
  width: 340px;
  height: 56px;
  background: #232129;
  border-radius: 10px;
  margin-bottom: 24px;
`
const StyledInput = styled.input`
  position: relative;
  width: 70%;   
  background-color: transparent;
  left: 52px;
  border: none;
  font-family: Roboto Slab;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 21px;
  color: #666360;
`
const Icon = styled.div`
  position: relative;
  background-image: url(${iconSenha});
  width: 20px;
  height: 18px;
  left: 16px;
  top: 18px;  
`

export default Input
