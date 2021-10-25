import styled from 'styled-components';
import { Colors } from '../theme/Colors';

export const PrimaryButton = styled.button`
    background: ;
    height: 35px;
    background: #F1F3F5;
    border-radius: 8px;
    width: ${props => props.width};
    margin: ${props => props.margin || 0};
    color: ${Colors.tertiary};
    font-size: 16px;
    outline: none;
    cursor: pointer;
`;