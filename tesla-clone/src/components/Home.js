import React from 'react'
import styled from "styled-components"
import Section from './Section'

function Home() {
  return (
    <Container>
    <Section
      tittle = "Model S"
      description = "Order Online for Touchless Delivery"
      backgroundImg = "model-s.jpg"
      leftBtnText = "Custom Order"
      rightBtnText = " Existing Inventory"
    />
    <Section
      tittle = "Model Y"
      description = "Order Online for Touchless Delivery"
      backgroundImg = "model-y.jpg"
      leftBtnText = "Custom Order"
      rightBtnText = " Existing Inventory"
    />
    <Section 
      tittle = "Model 3"
      description = "Order Online for Touchless Delivery"
      backgroundImg = "model-3.jpg"
      leftBtnText = "Custom Order"
      rightBtnText = " Existing Inventory"
    />
    <Section 
      tittle = "Model X"
      description = "Order Online for Touchless Delivery"
      backgroundImg = "model-x.jpg"
      leftBtnText = "Custom Order"
      rightBtnText = " Existing Inventory"
    />
    <Section
      tittle="Solar Panels"
      description="Lowest Cost Solar Panels in America "
      backgroundImg = "solar-panel.jpg"
      leftBtnText ="Order now"
      rightBtnText = "Learn more"
    />
    <Section
      tittle="Solar Roof"
      description="Produce Clean Energy from Roof"
      backgroundImg="solar-roof.jpg"
      leftBtnText="Order now"
      rightBtnText = "Learn more"
    />
    <Section
      tittle="Accessories"
      description=""
      backgroundImg="accessories.jpg"
      leftBtnText="Shop now"
    />
    </Container>
  )
}

export default Home

const Container = styled.div`
    height: 100vh;
`
    