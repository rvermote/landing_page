import React from 'react'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper} from './HeroElements'
import Video from '@/public/videos/video.mp4'
import {Button} from '@/components/ButtonElement'

const HeroSection = () => {
  return (
    <HeroContainer id="hero">
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4' />  
        </HeroBg>
        <HeroContent>
          <HeroH1>Igniting Connections</HeroH1>
          <HeroP>Sign up today and receive a $20 discount towards your next consultation setup.</HeroP>
          <HeroBtnWrapper>
            <Button href='#contact' primary={1} dark={1} dark2={1} exact="true">Get Started</Button>
          </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection