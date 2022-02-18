import React from 'react'
import styled from 'styled-components'
import logo from '../components/assets/Logo.png'

const Logon = () => {
  return (
    <Container>
      <Logo/>
      <Txt1>Faça seu login</Txt1>
    </Container>
  )
}

const Container = styled.div`
  position: absolute;
  width: 340px;
  height: 616px;
  left: 160px;
  top: 122px;
`
const Logo = styled.div`
  background-image: url(${logo});
  height: 133.99998474121094px;
  width: 230.03334045410156px;
  left: 214.9999999999999px;
  top: 122px;
  border-radius: 0px;
`
const Txt1 = styled.div`
  position: absolute;
  width: 164px;
  height: 32px;
  left: 248px;
  top: 336px;
  font-family: Roboto Slab;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 32px;
  text-align: center;
  color: #F4EDE8;
`

export default Logon
