import styled from "styled-components"
import Link from 'next/link';

export const FooterContainer = styled.footer`
    background-color: #101522;
`

export const FooterWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    max-width: 940px;
    margin: 0 auto;
`

export const SocialMedia = styled.section`
    max-width: 1000px;
    width: 100%;
`

export const SocialMediaWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 940px;
    margin: 20px 20px 10px 20px;
    
    @media screen and (max-width: 820px){
        flex-direction: column;
        gap: 10px;
        }
`

export const SocialLogo = styled(Link)`
    color: #fff;
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    font-weight: bold;
`

export const WebsiteRights = styled.small`
    color: #fff;
`

export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;
`

export const SocialIconLink = styled.a`
    color: #fff;
    font-size: 24px;
`
