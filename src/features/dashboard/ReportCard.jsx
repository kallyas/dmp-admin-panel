import React from "react";
import styled from 'styled-components';
import { Colors } from '../../theme/Colors';

const ContainerCard = styled.div`
    background: #F7F8F8;
    box-shadow: 4px 2px 9px 5px #DBE6ED;
    border-radius: 10px;
    height: 225px;
    width: 25%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    min-width: 550px;
    margin-bottom: 50px;
    cursor: pointer;
    &:hover{
        box-shadow: 6px 4px 11px 7px #DBE6ED;
        opacity: 0.9;
      }
`;

const TopComponent = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center
    
`;

const CountDiv = styled.div`
font-family: Secular One;
font-style: normal;
font-weight: normal;
font-size: 64px;
line-height: 93px;
color: #865E5D;
display: flex;
`;

const ImgDiv = styled.img`
    width: 57px;
    display: flex;
`;

const CaptionDiv = styled.div`
font-family: Secular One;
font-style: normal;
font-weight: normal;
font-size: 36px;
line-height: 52px;
color: #865E5D;
`;

export const ReportCard = ({count, icon, caption}) => {
    return (
    <ContainerCard>
        <TopComponent>
            <CountDiv>{count}</CountDiv>
            <ImgDiv src={icon} alt="bus"/>
        </TopComponent>
        <CaptionDiv>{caption}</CaptionDiv>
    </ContainerCard>
        );
}