import React, { useState, PropsWithChildren } from 'react';
import {
  useDispatch,
  connect,
} from 'react-redux';
import styled from 'styled-components';
import { Colors } from '../../theme/Colors';
import Bus from '../../assets/bus.svg';
import Logo from '../../assets/logo.svg';
import { Login as LoginForm } from './LoginForm'

const LoginContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 100vh;
  align-items: center;
  background-color: ${Colors.secondary};
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    width: 100vw;
  }
  `;

const Left = styled.div`
display: flex;
flex-direction: column;
width: 50vw;
height: 100vh;
align-items: center;
background-color: ${Colors.primary};
justify-content: space-between;
@media only screen and (max-width: 600px) {
    width: 100vw;
  }
`

const Right = styled.div`
display: flex;
flex-direction: column;
width: 50vw;
height: 100vh;
align-items: center;
justify-content: center;
background-color: ${Colors.secondary};
@media only screen and (max-width: 600px) {
    width: 100vw;
  }
`

const AdminTitle = styled.div`
padding: 50px;
color: ${Colors.tertiary};
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
font-style: normal;
font-weight: normal;
font-size: 50px;
line-height: 70px;
@media only screen and (max-width: 600px) {
    padding-top: 25px;
    font-size: 25px;
    line-height: 35px;
  }
`;

const Sylogan = styled.div`
color: #000;
font-family: Lucida Handwriting;
font-style: normal;
font-weight: normal;
font-size: 30px;
line-height: 50px;
padding-bottom: 50px;
@media only screen and (max-width: 600px) {
    padding-top: 25px;
    font-size: 25px;
    line-height: 35px;
  }
`;

const SLogo = styled.img`
    width: ${props => props.width || 70}%;
`;

export const Login = (props) => {
    return (
        <LoginContainer>
            <Left>
            <SLogo src={Logo} alt="logo"/>
                <SLogo width="50" src={Bus} alt="bus" />
                <Sylogan>
                    <div>
                    Making Travelling
                    </div>
                    <div>
                    More comfortable
                    </div>
                </Sylogan>
            </Left>
            <Right>
                <LoginForm/>
            </Right>
        </LoginContainer>
    );
}

export default Login;