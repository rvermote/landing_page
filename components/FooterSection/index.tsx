import React from 'react'
import {FooterContainer, FooterWrapper, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink} from './FooterElements'
import {FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin} from 'react-icons/fa'

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo href="#hero">Gonexus</SocialLogo>
            <WebsiteRights>Gonexus © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
            <SocialIcons>
              <SocialIconLink href="https://www.instagram.com/" target="_blank" aria-label="Instagram"><FaInstagram/></SocialIconLink>
              <SocialIconLink href="https://www.youtube.com/" target="_blank" aria-label="Youtube"><FaYoutube/></SocialIconLink>
              <SocialIconLink href="https://www.twitter.com/" target="_blank" aria-label="Twitter"><FaTwitter/></SocialIconLink>
              <SocialIconLink href="https://www.facebook.com/" target="_blank" aria-label="Facebook"><FaFacebook/></SocialIconLink>
              <SocialIconLink href="https://www.linkedin.com/" target="_blank" aria-label="LinkedIn"><FaLinkedin/></SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrapper>
    </FooterContainer>
  )
}

export default Footer