import React from 'react'
import styled from 'styled-components'
import logo from '../components/assets/Logo.png'
import InputEmail from './InputEmail'
import InputSenha from './InputSenha'
import criar from './assets/Criar.png'

const Logon = () => {
  return (
    <Container>    
      <Logo/>
      <Txt1>Faça seu login</Txt1>
      <Form>
        <InputEmail type="email" placeholder="E-mail"/>
        <InputSenha type="password" placeholder="Senha"/>
        <button>Entrar</button>
      </Form>
      <Txt2>Esqueci minha senha</Txt2>
      <Criar/>
      <Txt3>Criar conta</Txt3>
    </Container>    
  )
}

const Container = styled.div` 
  position: relative;
  width: 340px;
  height: 616px;
  left: 160px;
  top: 122px;
`
const Logo = styled.div`
  background-image: url(${logo});
  position: relative;
  width: 230.03px;
  height: 134px;
  left: 55px;
  top: 0px;
`
const Txt1 = styled.p`
  position: relative;
  width: 164px;
  height: 32px;
  left: 88px;
  top: 92px;
  font-family: Roboto Slab;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 32px;
  text-align: center;
  color: #F4EDE8;
`
const Form = styled.div`
  position: relative;  
  left: 0px;
  top: 116px;
  width:340px;
  height:200px;
  button {
    width: 340px;
    height: 56px;
    background: #FF9000;
    border-radius: 10px;
    border: none;
    font-family: Roboto Slab;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 21px;
    text-align: center;
    color: #312E38;
    cursor: pointer;
  }
`
const Txt2 = styled.p`
  position: relative;
  width: 164px;
  height: 21px;
  left: 88px;
  top: 137px;
  font-family: Roboto Slab;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 21px;
  text-align: center;
  color: #F4EDE8;
`
const Criar = styled.div`
  background-image: url(${criar});
  position: relative;
  width: 20px;
  height: 20px;
  left: 112.5px;
  top: 210px;
`
const Txt3 = styled.p`
  position: relative;
  width: 85px;
  height: 21px;
  left: 140px;
  top: 190px;
  font-family: Roboto Slab;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 21px;
  text-align: center;
  color: #FF9000;
`

export default Logon
