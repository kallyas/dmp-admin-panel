import React, { useState, useEffect } from 'react';
import {
  useDispatch,
  connect,
} from 'react-redux';
import styled from 'styled-components';
import { Colors } from '../../theme/Colors';
import ProfileIcon from '../../assets/profileIcon.svg';
import FundsIcon from '../../assets/fundsIcon.svg';
import RoutesIcon from '../../assets/routesIcon.svg';
import busOperatorIcon from '../../assets/busOperatorIcon.svg';
import TripsIcon from '../../assets/tripsIcon.svg';
import TelecomIcon from '../../assets/telecomIcon.svg';

import TransactionsR from '../../assets/transactionsR.svg';
import RoutesR from '../../assets/routesR.svg';
import BusR from '../../assets/busR.svg';
import TripsR from '../../assets/tripsR.svg';

import {ReportCard} from './ReportCard'


const sideNavIcons = [FundsIcon, busOperatorIcon, RoutesIcon, TripsIcon, TelecomIcon];

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  min-height: 100vh;
  align-items: center;
  background-color: ${Colors.secondary};
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    width: 100vw;
  }
  `;

  const TopNavContainer = styled.nav`
    display: flex;
    width: 100%;
    margin: 0px;
    border: none;
    flex-direction: row-reverse;
    align-items: center;
    height: 50px;
    background: ${Colors.tertiary};
    color: ${Colors.primary};
    font-size: 20px;
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
    font-weight: 400;
    font-style: normal;
  `;

  const SideNavContainer = styled.nav`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    width: 56px;
    left: 1vw;
    top: 10vh;
    opacity: 20%;
    height: 70vh;
    border-radius: 5px;
    background: ${Colors.tertiary};
    transition: opacity 0.5s;
    &:hover{
      opacity: 60%;
      transition: opacity 0.5s;
    }
  `;

  const SideNavElement = styled.img`
    width: 28px;
    margin: 25px 0px 10px 0px;
    cursor: pointer;
    &:hover{
      width: 30px;
      margin: 24.88px 0px 7.92px 0px;
    }
  `;

  const navStyles = {
    margin: '0px 5px 0px 20px',
    cursor: 'pointer'
  }

  const CardsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 50px 0px 0px 0px;
    padding: 0px;
    outline: none;
    width: 90%;
    justify-content: space-between;
  `;
  
export const Dashboard = () => {
  const [cards, setCards] = useState([
    {caption: 'Bus Operators', count: 55, icon: BusR},
    {caption: 'Routes', count: 25, icon: RoutesR},
    {caption: 'Trips', count: 2455, icon: TripsR},
    {caption: 'Transactions', count: 5567, icon: TransactionsR},
  ]);
  return(<DashboardContainer>
      <TopNavContainer>
        <img style={{width: 45, ...navStyles}} src={ProfileIcon} alt="profile" />
        <h2 style={navStyles}>Report</h2>
        <h2 style={navStyles}>Dashboard</h2>
      </TopNavContainer>
      <SideNavContainer>
        {
          sideNavIcons.map((sideNavIcon, index) => <SideNavElement key={index} src={sideNavIcon}/>)
        }
      </SideNavContainer>
      <CardsContainer>
        {
          cards && cards.map(card => <ReportCard key={card.caption} count={card.count} icon={card.icon} caption={card.caption}/>)
        }
      </CardsContainer>
  </DashboardContainer>)
}

export default Dashboard;