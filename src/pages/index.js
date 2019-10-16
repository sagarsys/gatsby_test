import React from "react"
import Header from "../components/header"
import Container from "../components/container"

export default () => (
  <Container style={{ color: `purple` }}>
    <Header headerText="Hello Gatsby!" />
    <p>What a world.</p>
    <img src="https://source.unsplash.com/random/400x200" alt="" />
  </Container>
)
