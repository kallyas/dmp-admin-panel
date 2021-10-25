import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import styled from 'styled-components';
import { Colors } from '../../theme/Colors';
import UserIcon from '../../assets/userIcon.svg';
import { PrimaryButton } from '../../components/Buttons';
import { signin} from '../login/userSlice'
const LoginForm = styled.div`
    width: 50%;
    height: 350px;
    align-items: center;
    background: ${Colors.tertiary};
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    // box-shadow: 5px 10px 100px rgba(0, 0, 0, 0.25);
    border-radius: 7px;
    display: flex;
    flex-direction: column;
    self-align: center;
`;

const InputBox = styled.input`
    margin: 10px 0px;
    height: 35px;
    background: #F1F3F5;
    border-radius: 8px;
    color: #A2302F;
    width: 90%;
    padding: 0px 5px;
    border: none;
    box-shadow: 5px 10px 100px rgba(0, 0, 0, 0.25);
    outline: none;
`;

export const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const dispatch = useDispatch();


    
function login() {
    dispatch(signin({username: email, password}));
    console.log("email: ", email, "password: ", password);
};

    return (
    <LoginForm>
        <img src={UserIcon} alt="login user icon"/>
        <InputBox value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="Email" />
        <InputBox value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="Password" />
        <PrimaryButton onClick={e => login()} width="50%" margin="30px 0px">Login</PrimaryButton>
    </LoginForm>);
}