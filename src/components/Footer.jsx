import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'

const Container = styled.div`
    display: flex;
    background-color: #fcf5f5;
    ${mobile({flexDirection:"column"})}
`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`
const Logo = styled.h1`
    
`
const Desc = styled.p`
    margin: 20px 0;
    text-align: justify;
`
const SocialContainer = styled.div`
    display: flex;
`
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    cursor: pointer;
`

const Center = styled.div`
    flex: 1;
    ${mobile({display:"none"})}
`
const Title = styled.h3`
    margin-bottom: 30px;
`
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`

const Right = styled.div`
    flex: 1;
    ${mobile({backgroundColor:"cyan", padding:"20px"})}
`

const ConatctItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`
const Payment = styled.img`
    width: 50%;
`

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>KRISHNA.</Logo>
        <Desc>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, consequuntur fugit. Ratione facere exercitationem ipsum natus maxime nulla officiis placeat. Voluptas delectus, laborum adipisci officiis nisi velit saepe deserunt aliquid.
        </Desc>
        <SocialContainer>
            <SocialIcon color='3B5999'>
                <Facebook />
            </SocialIcon>
            <SocialIcon color='E4405F'>
                <Instagram />
            </SocialIcon>
            <SocialIcon color='55ACEE'>
                <Twitter />
            </SocialIcon>
            <SocialIcon color='E60023'>
                <Pinterest />
            </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
            <ListItem>Home</ListItem>
            <ListItem>Cart</ListItem>
            <ListItem>Man Fashion</ListItem>
            <ListItem>Woman Fashion</ListItem>
            <ListItem>Accessories</ListItem>
            <ListItem>My Account</ListItem>
            <ListItem>Order Tracking</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Home</ListItem>
            <ListItem>Terms & Conditions</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ConatctItem>
            <Room style={{marginRight:"10px", cursor:"pointer"}} />667 PMGR Path , West India 99999
        </ConatctItem>
        <ConatctItem>
            <Phone style={{marginRight:"10px", cursor:"pointer"}} />+1 234 56 78
        </ConatctItem>
        <ConatctItem>
            <MailOutline style={{marginRight:"10px", cursor:"pointer"}} />Contact@krishna.com
        </ConatctItem>
        <Payment style={{cursor:"pointer"}} src="http://i.ibb.co/Qfvn4z6/payment.png"/>
      </Right>
    </Container>
  )
}

export default Footer
