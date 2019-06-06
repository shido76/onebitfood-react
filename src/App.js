import React from 'react'
import "./App.scss"
import { Container, Section } from 'rbx'
import Header from "./components/header"
import Routes from './routes'
import ModalRoot from './components/modals'

const App = () => (
  <div>
    <Header />
    <Section>
      <Container>
        <Routes />
      </Container>
    </Section>
    <ModalRoot />
  </div>
)
 
export default App