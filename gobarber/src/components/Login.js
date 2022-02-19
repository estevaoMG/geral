import React from 'react'
import styled from 'styled-components'
import logo from '../components/assets/Logo.png'
import InputEmail from './InputEmail'
import InputPassword from './InputPassword'

const Logon = () => {
  return (
      <Container>    
        <Logo/>
        <Txt1>Faça seu login</Txt1>
        <InputEmail/>
        <InputPassword/>        
      </Container>    
  )
}

const Container = styled.div`
  background: red;
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
const Txt1 = styled.div`
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

export default Logon
