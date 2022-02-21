import React from 'react'
import styled from 'styled-components'
import imagem from '../components/assets/Imagem.png'
import Login from '../components/Login'

const App = () => {
  return (
    <Container>     
      <Imagem/>
      <Login/>
    </Container>    
  );
};

const Container = styled.div`
  width: 1440px;
  height: 840px;
  background: #312E38;
`
const Imagem = styled.div`
  background-image: url(${imagem});
  position: absolute;
  width: 780px;
  height: 840px;
  left: 660px;
  top: 0px;
`

export default App
