import React from 'react'
import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP} from './ServicesElements'


const Services = () => {
  return (
    <ServicesContainer id="services">
        <ServicesH1>Our Services</ServicesH1>
        <ServicesWrapper>
            <ServicesCard>
                <ServicesIcon src="/images/svg_1.svg"/>
                <ServicesH2>Fast Service</ServicesH2>
                <ServicesP>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src="/images/svg_1.svg"/>
                <ServicesH2>No Worries</ServicesH2>
                <ServicesP>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src="/images/svg_1.svg"/>
                <ServicesH2>Big Groups</ServicesH2>
                <ServicesP>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</ServicesP>
            </ServicesCard>
        </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services